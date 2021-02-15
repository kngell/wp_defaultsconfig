<?php

class WishlistManager extends Model
{
    protected $_colID = 'wl_id';
    protected $_table = 'wishlist';
    protected $_colIndex = 'user_id';
    protected $_colContent = '';
    protected $_modelName;
    public static $wishlist_template;
    public static $sub_total_template;
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
        self::$wishlist_template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'whishlist_template.php');
        // $this->fmt = new NumberFormatter('de-DE', NumberFormatter::CURRENCY);
        // $this->fmt->setSymbol(NumberFormatter::CURRENCY_SYMBOL, '');
    }

    //=======================================================================
    //Guetters & setters
    //=======================================================================

    //=======================================================================
    //Operations
    //=======================================================================
    // Save for later
    public function save_For_Later()
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $this->user_id = Cookies::get(VISITOR_COOKIE_NAME);
            $cart_item = current(array_filter((new CartManager())->getAllbyIndex($this->user_id)->get_results(), function ($cart) {
                return $cart->item_id == $this->item_id;
            }));
            $itemHtml = [];
            if ($cart_item) {
                $this->cart_id = $cart_item->cart_id;
                if ($this->save()) {
                    $itemHtml = $cart_item->output_shopping_template($this->item_id, self::$wishlist_template);
                    $del_html = $cart_item->delete();
                }
            }
            return [$itemHtml, $del_html];
        }
        return [];
    }
}
