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
        $this->view_instance->jsHomePlugins = $this->assets->{'js/plugins/frontend/homeplugins'}->js ?? '';
        $this->view_instance->jsHomeMain = $this->assets->{'js/main/frontend/main'}->js ?? '';
        $this->view_instance->setSiteTitle("K'nGELL Ingénierie Logistique");
    }

    //page index

    public function index($data = [])
    {
        $this->view_instance->js = $this->assets->{'js/custom/home/home'}->js ?? '';
        $this->view_instance->css = $this->assets->{'css/custom/home/home'}->css ?? '';
        $this->view_instance->set_page_title('Boutique');
        $this->view_instance->render('home' . DS . 'index');
    }
}
