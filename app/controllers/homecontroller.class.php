<?php

class HomeController extends Controller
{
	public function __construct($controller, $method)
	{
		parent::__construct($controller, $method);
		//Global Assets
		$this->view_instance->cssHomelib = $this->assets->{'css/librairies/frontlib'}->css ?? '';
		$this->view_instance->cssHomePlugins = $this->assets->{'css/plugins/homeplugins'}->css ?? '';
		$this->view_instance->cssHomeMain = $this->assets->{'css/main/frontend/main'}->css ?? '';
		$this->view_instance->jsHomelib = $this->assets->{'js/librairies/frontlib'}->js ?? '';
		$this->view_instance->jscommonVendor = $this->assets->{'commons/frontend/commonVendor'}->js ?? '';
		$this->view_instance->jscustomComnonModules = $this->assets->{'commons/frontend/commonCustomModules'}->js ?? '';
		$this->view_instance->jsHomePlugins = $this->assets->{'js/plugins/frontend/homeplugins'}->js ?? '';
		$this->view_instance->jsHomeMain = $this->assets->{'js/main/frontend/main'}->js ?? '';
		$this->view_instance->setSiteTitle("K'nGELL Ingénierie Logistique");

		//Ecommerce products
		$this->view_instance->products = ($this->get_model('ProductManager', 'product')['product'])->getAllItem()->get_results();
		$this->view_instance->user_cart = ($this->get_model('CartManager', 'cart')['cart'])->CheckDuplicateTems(1) ?? [];
	}

	//page index

	public function index($data = [])
	{
		$this->view_instance->js = $this->assets->{'js/custom/home/home'}->js ?? '';
		$this->view_instance->css = $this->assets->{'css/custom/home/home'}->css ?? '';
		$this->view_instance->set_page_title('Boutique');
		$this->view_instance->render('home' . DS . 'index');
	}

	//page product
	public function product($data = [])
	{
		$id = array_pop($data) ?? 1;
		$this->view_instance->p_details = $this->model_instance['product']->getDetails($id);
		$this->view_instance->set_page_title('Prodyct');
		$this->view_instance->css = $this->assets->{'css/custom/home/product'}->css;
		$this->view_instance->js = $this->assets->{'js/custom/home/product'}->js;
		$this->view_instance->render('home' . DS . 'product');
	}

	//page cart
	public function cart($data = [])
	{
		$this->view_instance->set_page_title('Cart');
		$this->view_instance->css = $this->assets->{'css/custom/home/cart'}->css;
		$this->view_instance->js = $this->assets->{'js/custom/home/cart'}->js;
		$this->view_instance->render('home' . DS . 'cart');
	}
}
