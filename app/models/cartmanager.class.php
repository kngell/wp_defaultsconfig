<?php

class CartManager extends Model
{
    protected $_colID = 'cart_id';
    protected $_table = 'cart';
    protected $_colIndex = 'user_id';
    protected $_colContent = '';
    protected $_modelName;
    // protected $_fmt;
    public static $cart_template;
    public static $sub_total_template;
    public static $wishlist_template;
    public static $empty_cart_template;
    public $cart_id;
    public $user_id;
    public $item_id;

    //=======================================================================
    //construct
    //=======================================================================
    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
        self::$cart_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'shpping_cart_template.php');
        self::$sub_total_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'cart_subtotal_template.php');
        self::$wishlist_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'whishlist_template.php');
        self::$empty_cart_template = file_get_contents(VIEW . 'home' . DS . 'partials' . DS . '_empty_cart_template.php');
    }

    //=======================================================================
    //Getters & setters
    //=======================================================================

    //get products
    public function get_product($id)
    {
        $this->_table = 'product';
        $this->_colID = 'item_id';
        $product = $this->getDetails($id);
        $this->_table = 'cart';
        $this->_colID = 'cart_id';

        return $product;
    }

    //get html data
    public function getHtmlData($item = [])
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $u_cookie = Cookies::get(VISITOR_COOKIE_NAME);
            $user_cart = $this->getAllbyIndex($u_cookie)->get_results();
            $cart_html = '';
            $sub_total = '';
            $wl_html = '';
            $price = 0;
            if ($user_cart) {
                foreach ($user_cart as $product) {
                    $item_html = $this->output_shopping_template($product->item_id);
                    $cart_html .= $item_html[0];
                    $price += $item_html[1];
                }
            }
            $sub_total = self::$sub_total_template;
            $sub_total = str_replace('{{nb_items}}', count($user_cart), $sub_total);
            $sub_total = str_replace('{{total_price}}', $price, $sub_total);
            $wishlist = (new WishlistManager())->getAllbyIndex($u_cookie)->get_results();
            if ($wishlist) {
                foreach ($wishlist as $wish) {
                    $wl_html .= $this->output_shopping_template($wish->item_id, self::$wishlist_template)[0];
                }
            }
            if ($cart_html == '') {
                $cart_html = self::$empty_cart_template;
            }
            return [count($user_cart), $cart_html, $sub_total, $wl_html];
        }
        return false;
    }

    //output template with
    public function output_shopping_template($id, $template = '')
    {
        $temp = $template != '' ? $template : self::$cart_template;
        $product = $this->get_product($id);
        if ($product) {
            $temp = str_replace('{{title}}', $product->item_name, $temp);
            $temp = str_replace('{{brand}}', $product->item_brand, $temp);
            $temp = str_replace('{{image}}', IMG . $product->item_image, $temp);
            $temp = str_replace('{{price}}', $product->item_price . PHP_EOL, $temp);
            $temp = str_replace('{{product_id}}', $product->item_id, $temp);
            $temp = str_replace('{{token}}', hash_hmac('sha256', 'delete-cart-item-frm' . $product->item_id, $_SESSION[TOKEN_NAME]), $temp);

            return [$temp, $product->item_price];
        }

        return ['', 0];
    }

    //Add to cart
    public function add_To_Cart()
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $this->user_id = Cookies::get(VISITOR_COOKIE_NAME);
            $cart_item = current(array_filter((new WishlistManager())->getAllbyIndex($this->user_id)->get_results(), function ($cart) {
                return $cart->item_id == $this->item_id;
            }));
            $itemHtml = [];
            if ($this->save()) {
                $itemHtml = $this->output_shopping_template($this->item_id);
                $cart_item->delete();
            }
        }
        return $itemHtml ? $itemHtml : false;
    }

    //get cart_items
    public function get_cartItems($u_id, $product_instance)
    {
        $user_items = $this->getAllbyIndex($u_id)->get_results();
        $products = $product_instance->get_results();
        $user_products = [];
        foreach ($products as $product) {
            foreach ($user_items as $item) {
                if ($product->item_id == $item->item_id) {
                    $user_products[] = $product;
                }
            }
        }

        return $user_products;
    }

    //=======================================================================
    //Checkers
    //=======================================================================
    public function CheckDuplicateTems($u_id = ''):array
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_cart = $this->getAllbyIndex(Cookies::get(VISITOR_COOKIE_NAME))->get_results();
            if ($user_cart != null) {
                $cart_id = array_map(function ($item) {
                    return $item->item_id;
                }, $user_cart);

                return $cart_id;
            }
        }

        return [];
    }

    public function beforeSave()
    {
        parent::beforeSave();
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_data = UsersManager::$currentLoggedInUser ? UsersManager::$currentLoggedInUser : $this->getDetails(Cookies::get(VISITOR_COOKIE_NAME, (new VisitorsManager())->get_colIndex()));
            $this->user_id = $user_data ? $user_data->visitor_cookie : Cookies::get(VISITOR_COOKIE_NAME);
            $user_cart = $this->getAllbyIndex($this->user_id)->get_results();
            $cart = array_filter($user_cart, function ($item) {
                return $item->item_id == $this->item_id;
            });
            if ($cart != null) {
                return false;
            }

            return true;
        }
        $cookies = (new Token())->user_identifiant(36);
        $this->user_id = $cookies;
        Cookies::set(VISITOR_COOKIE_NAME, $cookies, COOKIE_EXPIRY);

        return true;
    }

    public function afterDelete($params = [])
    {
        $user_cart = $this->getAllbyIndex($this->user_id)->get_results();
        if (!$user_cart) {
            return file_get_contents(VIEW . 'home' . DS . 'partials' . DS . '_empty_cart_template.php');
        }
    }
}
