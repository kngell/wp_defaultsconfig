<?php

class CartManager extends Model
{
    protected $_colID = 'cart_id';
    protected $_table = 'cart';
    protected $_colIndex = 'user_id';
    protected $_colContent = '';
    protected $_modelName;
    public static $cart_template;
    public static $sub_total_template;
    public static $wishlist_template;
    public static $empty_cart_template;
    public $cart_id;
    public $user_id;
    public $item_id;
    public $item_qty;
    public $totalAmount;
    public $c_content;

    //=======================================================================
    //construct
    //=======================================================================
    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
        self::$cart_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'shopping_cart' . DS . 'shpping_cart_template.php');
        self::$sub_total_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'shopping_cart' . DS . 'cart_subtotal_template.php');
        self::$wishlist_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'shopping_cart' . DS . 'whishlist_template.php');
        self::$empty_cart_template = file_get_contents(VIEW . 'home' . DS . 'partials' . DS . '_empty_cart_template.php');
    }

    //=======================================================================
    //Getters & setters
    //=======================================================================
    public function getUserItem($cookie = '', $tbl = '', )
    {
        $tables = [$this->_table => ['*'], 'products' => ['*'], 'product_categorie' => ['*'], 'categories' => ['categorie']];
        $data = ['join' => 'INNER JOIN', 'rel' => [['item_id', 'pdtID'], ['pdtID', 'pdtID'], ['catID', 'catID']], 'where' => ['user_id' => ['value' => $cookie, 'tbl' => $this->_table]]];
        $uc = $this->getAllItem($data, $tables);
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

    //=======================================================================
    // Update Cart price
    //=======================================================================
    public function update_UserCartPrice($params)
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_id = Cookies::get(VISITOR_COOKIE_NAME);
            $user_items = $this->getUserItem($user_id);
            $query_params = ['item_id' => $params['id'], 'user_id' => $user_id];
            $this->update($query_params, ['item_qty' => $params['qty']]);
            if ($user_items) {
                $user_item = current(array_filter($user_items, function ($item) use ($params) {
                    return $item->item_id == $params['id'];
                }));
                $old_qty = $user_item->item_qty;
                $user_item->item_qty = $params['qty'];
                $taxe_lines = $this->get_taxes([$user_item->catID]);
                $taxe_values = $this->get_taxesValues([$user_item], $taxe_lines);
            }
            $user_items = null;
            return $user_item ? [$user_item, $taxe_values, $old_qty] : null;
        }
    }

    public function get_sub_total_taxes_html($taxes = null, $temp = '')
    {
        $template_html = '';
        $total = 0;
        if ($taxes != null) {
            foreach ($taxes as $key => $value) {
                $template = $temp == '' ? file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'shopping_cart' . DS . 'shopping_cart_taxes_template.php') : $temp;
                $template = str_replace('{{title}}', $value[1], $template);
                $template = str_replace('{{tax_amount}}', $this->get_currency($value[0]), $template);
                $template = str_replace('{{tax-class}}', $key, $template);
                $template_html .= $template;
                $total += $value[0];
            }
        }
        return [$template_html, $total];
    }

    //=======================================================================
    // Get Cart Template
    //=======================================================================
    public function getHtmlData($item = [])
    {
        $user_cart = $this->get_userCart();
        $cart_html = '';
        $wl_html = '';
        $price = $this->get_currency(0);
        $nb_item = 0;
        if ($user_cart && count($user_cart[0]) > 0) {
            foreach ($user_cart[0] as $product) {
                if ($product->c_content == 'cart') {
                    $item_html = $this->output_shopping_template($product);
                    $cart_html .= $item_html[0];
                    $price = $price->plus($item_html[1]);
                    $nb_item++;
                } elseif ($product->c_content == 'wishlist') {
                    $wl_html .= $this->output_shopping_template($product, self::$wishlist_template)[0];
                }
            }
            $sub_total = self::$sub_total_template;
            $total_taxes = $this->get_sub_total_taxes_html($user_cart[1]);
            $sub_total = str_replace('{{nb_items}}', $nb_item, $sub_total);
            $sub_total = str_replace('{{total_price}}', $price, $sub_total);
            $sub_total = str_replace('{{taxes_tempplate}}', $total_taxes[0], $sub_total);
            $sub_total = str_replace('{{total_ttc}}', $price->plus($total_taxes[1]), $sub_total);
        }
        if ($cart_html == '') {
            $cart_html = self::$empty_cart_template;
        }
        $user_cart = null;
        return [$nb_item ?? 0, $cart_html ?? '', $sub_total ?? '', $wl_html ?? ''];
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
            $temp = str_replace('{{token}}', (new Token())->generate_token(8), $temp);

            return [$temp, $product->p_regular_price * $product->item_qty];
        }

        return [false, 0];
    }

    //=======================================================================
    // Add to Car
    //=======================================================================
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
    //Get Taxes
    //=======================================================================
    public function get_taxes($cat = [], $country_code = '')
    {
        $tables = ['taxes' => ['*'], 'taxe_region' => ['*']];
        $data = ['join' => 'RIGHT JOIN', 'rel' => [['tID', 'tr_tax_ID']], 'where' => ['tr_catID' => ['value' => $cat, 'tbl' => 'taxe_region', 'operator' => 'IN']]];
        $uc = $this->getAllItem($data, $tables);
        return $uc->count() > 0 ? $uc->get_results() : [];
    }

    // Get taxes values
    public function get_taxesValues($user_cart = [], $taxe_lines = [])
    {
        $taxe_values = [];
        foreach ($user_cart as $product) {
            if ($product->p_charge_tax == 'on') {
                $taxe_product = array_filter($taxe_lines, function ($taxe) use ($product) {
                    return $product->catID == $taxe->tr_catID;
                });
                if ($taxe_product) {
                    foreach ($taxe_product as $tp) {
                        if (!isset($taxe_values[$tp->t_class])) {
                            $taxe_values[$tp->t_class] = [$product->p_regular_price * $tp->t_rate * $product->item_qty / 100, $tp->t_name];
                        } else {
                            $taxe_values[$tp->t_class][0] += $product->p_regular_price * $tp->t_rate * $product->item_qty / 100;
                        }
                    }
                }
            }
        }
        return $taxe_values;
    }

    //=======================================================================
    //Get Cart data no html
    //=======================================================================
    public function get_userCart($u_tax = ''):array
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_cart = $this->getUserItem(Cookies::get(VISITOR_COOKIE_NAME));
            $ht = $this->get_currency(0);
            if ($user_cart) {
                foreach ($user_cart as $product) {
                    $product->price = $this->get_currency($product->p_regular_price * $product->item_qty);
                    $ht = $ht->plus($product->p_regular_price * $product->item_qty);
                }
                $pdt_categories = array_column(array_filter($user_cart, function ($uc) {return $uc->c_content == 'cart';}), 'catID');
                $taxe_lines = $this->get_taxes($pdt_categories);
                $taxe_values = $this->get_taxesValues($user_cart, $taxe_lines);
                if ($u_tax == 'checkout') {
                    $temp = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'checkout' . DS . 'checkout_tax_template.php');
                    $checkout_tax_html = $this->get_sub_total_taxes_html($taxe_values, $temp);
                    $ttc = $ht->plus($checkout_tax_html[1]);
                }

                return [$user_cart, $taxe_values, [$ht ?? 0, $ttc ?? 0], $checkout_tax_html ?? []];
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
            $cookies = (new Token())->generate_token(36);
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
