<?php

class HomeController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        //Global Assets
        if ($this->view_instance != null) {
            $this->view_instance->set_siteTitle("K'nGELL Ingénierie Logistique");
            //Ecommerce products
            $this->view_instance->products = ($this->get_model('ProductManager', 'product')['product'])->getAllItem()->get_results();
            $this->view_instance->user_cart = ($this->get_model('CartManager', 'cart')['cart'])->CheckDuplicateTems() ?? [];
        }
    }

    //page index

    public function index($data = [])
    {
        $this->view_instance->set_pageTitle('Boutique');
        $this->view_instance->render('home' . DS . 'index');
    }

    //page product
    public function product($data = [])
    {
        $id = array_pop($data) ?? 1;
        $this->view_instance->p_details = $this->model_instance['product']->getDetails($id);
        $this->view_instance->set_pageTitle('Prodyct');
        $this->view_instance->render('home' . DS . 'product');
    }

    //page cart
    public function cart($data = [])
    {
        $this->view_instance->set_pageTitle('Cart');
        $this->view_instance->render('home' . DS . 'cart');
    }

    //page account
    public function account()
    {
        // dd(($this->get_model('UsersManager')['users'])->get_Tables_Column('commandes'));
        $this->view_instance->set_pageTitle('Account');
        $this->view_instance->render('home' . DS . 'account' . DS . 'profile');
    }

    //page profile
    public function profile()
    {
        // dd(($this->get_model('UsersManager')['users'])->get_Tables_Column('commandes'));
        $this->view_instance->set_pageTitle('Account');
        $this->view_instance->render('home' . DS . 'account' . DS . 'profile');
    }
}
