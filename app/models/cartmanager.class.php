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
    public $item_qty;
    public $c_content;

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

    public function getUserItem($cookie = '', $tbl = '', )
    {
        $table = $tbl != '' ? $tbl : $this->_table;
        $model = str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager';
        $tables = [$table => ['*'], 'products' => ['*'], 'product_categorie' => ['*'], 'categories' => ['categorie']];
        $data = ['join' => 'INNER JOIN', 'rel' => [['item_id', 'pdtID'], ['pdtID', 'pdtID'], ['catID', 'catID']], 'where' => ['user_id' => ['value' => $cookie, 'tbl' => $table]]];
        $uc = (new $model())->getAllItem($data, $tables);
        return $uc->count() > 0 ? $uc->get_results() : [];
    }

    //=======================================================================
    //Update cart qty
    //=======================================================================
    public function update_cart($params)
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $this->item_id = $params['item_id'];
            $this->user_id = Cookies::get(VISITOR_COOKIE_NAME);
            $query_params = ['item_id' => $params['item_id'], 'user_id' => Cookies::get(VISITOR_COOKIE_NAME)];
            return $this->update($query_params, ['item_qty' => $params['qty']]);
        }
    }

    //get html data
    public function getHtmlData($item = [])
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $u_cookie = Cookies::get(VISITOR_COOKIE_NAME);
            $user_cart = $this->getUserItem($u_cookie);
            $cart_html = '';
            $wl_html = '';
            $price = $this->get_currency(0);
            $nb_item = 0;
            if (count($user_cart) > 0) {
                foreach ($user_cart as $product) {
                    if ($product->c_content == 'cart') {
                        $item_html = $this->output_shopping_template($product);
                        $cart_html .= $item_html[0];
                        $price = $price->plus($item_html[1]);
                        $nb_item++;
                    } elseif ($product->c_content == 'wishlist') {
                        $wl_html .= $this->output_shopping_template($product, self::$wishlist_template)[0];
                    }
                }
            }
            $sub_total = self::$sub_total_template;
            $sub_total = str_replace('{{nb_items}}', $nb_item, $sub_total);
            $sub_total = str_replace('{{total_price}}', $price, $sub_total);
            if ($cart_html == '') {
                $cart_html = self::$empty_cart_template;
            }
            $user_cart = null;
            return [$nb_item, $cart_html, $sub_total, $wl_html];
        }
        return false;
    }

    //output template with
    public function output_shopping_template($product, $template = '')
    {
        $temp = $template != '' ? $template : self::$cart_template;
        if ($product) {
            $temp = str_replace('{{title}}', $this->htmlDecode($product->p_title), $temp);
            $temp = str_replace('{{brand}}', $product->categorie, $temp);
            $temp = str_replace('{{image}}', str_starts_with($product->p_media[0], IMG) ? unserialize($product->p_media) : IMG . unserialize($product->p_media)[0], $temp);
            $temp = str_replace('{{price}}', $this->get_currency($product->p_regular_price * $product->item_qty), $temp);
            $temp = str_replace('{{product_id}}', $product->pdtID, $temp);
            $temp = str_replace('{{qty}}', $product->item_qty, $temp);
            $temp = str_replace('{{token}}', hash_hmac('sha256', 'delete-cart-item-frm' . $product->pdtID, $_SESSION[TOKEN_NAME]), $temp);

            return [$temp, $product->p_regular_price * $product->item_qty];
        }

        return [false, 0];
    }

    //Add to cart
    public function manage_user_cart($content = '')
    {
        $itemHtml = [];
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $this->user_id = Cookies::get(VISITOR_COOKIE_NAME);
            $cart_item = current(array_filter($this->getUserItem($this->user_id), function ($cart) {
                return $cart->item_id == $this->item_id;
            }));
            if ($cart_item) {
                $colID = $cart_item->get_colID();
                if ($content == 'save_For_Later') {
                    $cart_item->c_content = 'wishlist';
                } elseif ($content == 'add_To_Cart') {
                    $cart_item->c_content = 'cart';
                }
            }
            $this->assign($cart_item);
            $this->id = $cart_item->$colID;
            if ($this->save()) {
                $itemHtml = $this->output_shopping_template($cart_item);
            }
        }
        return $itemHtml;
    }

    //=======================================================================
    //Checkers
    //=======================================================================
    public function CheckDuplicateTems($u_id = ''):array
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_cart = $this->getAllbyIndex(Cookies::get(VISITOR_COOKIE_NAME))->get_results();
            if ($user_cart != null) {
                return $user_cart;
            }
        }
        return [];
    }

    public function beforeSave($params = [])
    {
        parent::beforeSave();
        if ($params) {
            if (Cookies::exists(VISITOR_COOKIE_NAME)) {
                $user_data = AuthManager::$currentLoggedInUser; //? AuthManager::$currentLoggedInUser : $this->getDetails(Cookies::get(VISITOR_COOKIE_NAME), $this->get_colIndex());
                $this->user_id = $user_data ? $user_data->visitor_cookie : Cookies::get(VISITOR_COOKIE_NAME);
                $user_cart = $this->user_id ? $this->getAllbyIndex($this->user_id)->get_results() : false;
                if ($user_cart && count($user_cart) > 0) {
                    $cart = array_filter($user_cart, function ($item) {
                        return $item->item_id == $this->item_id;
                    });
                    if ($cart && count($cart) >= 1) {
                        return false;
                    }
                    return true;
                }
                return true;
            }
            $cookies = (new Token())->user_identifiant(36);
            $this->user_id = $cookies;
            Cookies::set(VISITOR_COOKIE_NAME, $cookies, COOKIE_EXPIRY);
        }
        return true;
    }

    public function get_successMsg($response = null, $action = '', $method = '')
    {
        if ($response['saveID']->get_lastID() != null) {
            return [1];
        }
        return [0];
    }

    public function afterDelete($params = [])
    {
        $user_cart = $this->getAllbyIndex($this->user_id)->get_results();
        if (!$user_cart) {
            return file_get_contents(VIEW . 'home' . DS . 'partials' . DS . '_empty_cart_template.php');
        }
    }
}
