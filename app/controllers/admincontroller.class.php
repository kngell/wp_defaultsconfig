<?php
class AdminController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        //CSS
        //librairies
        $this->view_instance->cssAdminlib = $this->assets->{'css/librairies/adminlib'}->css ?? '';
        $this->view_instance->cssAdminPlugins = $this->assets->{'css/plugins/adminplugins'}->css ?? '';
        $this->view_instance->cssAdminMain = $this->assets->{'css/main/backend/admin/main'}->css ?? '';
        $this->view_instance->jsAdminlib = $this->assets->{'js/librairies/adminlib'}->js ?? '';
        $this->view_instance->jscommonVendor = $this->assets->{'commons/backend/admin/commonVendor'}->js ?? '';
        $this->view_instance->jsAdminPlugins = $this->assets->{'js/plugins/adminplugins'}->js ?? '';
        $this->view_instance->jsAdminMain = $this->assets->{'js/main/backend/admin/main'}->js ?? '';
        $this->view_instance->setSiteTitle("K'nGELL Administration");
        $this->view_instance->setLayout('admin');
    }

    //page index
    public function index($data = [])
    {
        $this->view_instance->js = $this->assets->{'js/custom/admin/dashboard'}->js ?? '';
        $this->view_instance->css = $this->assets->{'css/custom/admin/dashboard'}->css ?? '';
        $this->view_instance->set_page_title('Dashboard');
        $this->view_instance->render('admin' . DS . 'index');
    }

    // Categories add and Manage categories
    public function allcategories()
    {
        $this->view_instance->js = $this->assets->{'js/custom/admin/products/categories'}->js ?? '';
        $this->view_instance->css = $this->assets->{'css/custom/admin/products/categories'}->css ?? '';
        $this->view_instance->set_page_title('Categories');
        $this->view_instance->render('admin' . DS . 'products' . DS . 'allcategories');
    }

    public function login()
    {
        $this->view_instance->setLayout('adminlogin');
        $this->view_instance->js = $this->assets->{'js/custom/admin/login'}->js ?? '';
        $this->view_instance->css = $this->assets->{'css/custom/admin/login'}->css ?? '';
        $this->view_instance->set_page_title('Login');
        $this->view_instance->render('admin' . DS . 'login');
    }
}
