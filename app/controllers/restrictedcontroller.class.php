<?php
class RestrictedController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        // $this->view_instance->footerPosts = $this->get_model('PostsManager', 'posts');
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
    public function index()
    {
        $this->view_instance->render('restricted' . DS . 'index');
    }

    public function badtoken()
    {
        $this->view_instance->render('restricted' . DS . 'badtoken');
    }

    public function Add()
    {
        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('info text-center', 'Connecter-vous pour envoyer des commentaires au serveur')]);
    }
}
