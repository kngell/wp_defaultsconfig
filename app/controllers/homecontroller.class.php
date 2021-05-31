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
            $this->view_instance->products = ($this->get_model('ProductsManager', 'products')['products'])->get_Products();
            $this->view_instance->user_cart = ($this->get_model('CartManager', 'cart')['cart'])->get_userCart('checkout') ?? [];
            $this->view_instance->search_box = file_get_contents(FILES . 'template' . DS . 'base' . DS . 'search_box.php');
        }
    }

    //page index

    public function index($data = [])
    {
        $this->view_instance->set_pageTitle('Home');
        $this->view_instance->set_siteTitle('Home');
        $this->view_instance->render('home' . DS . 'index');
    }

    //page product
    public function product($data = [])
    {
        $id = $this->request->add_slashes(array_pop($data));
        if ($id) {
            $this->view_instance->set_pageTitle('Product');
            $this->view_instance->set_siteTitle('Product');
            $this->view_instance->p_details = $this->model_instance['products']->getDetails($id, 'p_slug');
        }
        $this->view_instance->render('home' . DS . 'product' . DS . 'product');
    }

    // Product details custom
    public function details($data = [])
    {
        // $id = $this->request->add_slashes(array_pop($data));

        $this->view_instance->set_pageTitle('Details');
        $this->view_instance->set_siteTitle('Details');
        // $this->view_instance->p_details = $this->model_instance['products']->getDetails($id, 'p_slug');
        $this->view_instance->render('home' . DS . 'product' . DS . 'details');
    }

    //page cart
    public function cart($data = [])
    {
        // $cart = (new CartManager())->getHtmlData();
        // if (!$cart[3]) {
        //     $this->view_instance->display = 'display: none;';
        // } else {
        //     $this->view_instance->display = 'display: bloc;';
        // }
        // $this->view_instance->cart = $cart;
        $this->view_instance->set_pageTitle('Cart');
        $this->view_instance->set_siteTitle('Cart');
        $this->view_instance->render('home' . DS . 'cart' . DS . 'cart');
    }

    // Promotions page
    public function promotions()
    {
        $this->view_instance->set_pageTitle('Promotions');
        $this->view_instance->set_siteTitle('Promotions');
        $this->view_instance->render('home' . DS . 'promotions' . DS . 'promotions');
    }

    // Boutique page
    public function boutique()
    {
        $this->view_instance->set_pageTitle('Boutique');
        $this->view_instance->set_siteTitle('Boutique');
        $this->view_instance->render('home' . DS . 'boutique' . DS . 'boutique');
    }

    //sitemap
    public function sitemap()
    {
        $this->view_instance->set_pageTitle('Sitemap');
        $this->view_instance->render('home' . DS . 'sitemap' . DS . 'sitemap');
    }
}
