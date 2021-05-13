<?php
class CartController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
    }

    //=======================================================================
    //PHP cart operations
    //=======================================================================
    public function display_cart()
    {
        $cart = (new CartManager())->getHtmlData();
    }
}
