<?php
class RestrictedController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        // $this->view_instance->footerPosts = $this->get_model('PostsManager', 'posts');
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
    public function adminlogin()
    {
        $this->view_instance->cssAdminlib = $this->assets->{'css/librairies/adminlib'}->css ?? '';
        $this->view_instance->cssAdminPlugins = $this->assets->{'css/plugins/backend/adminplugins'}->css ?? '';
        $this->view_instance->cssAdminMain = $this->assets->{'css/main/backend/admin/main'}->css ?? '';
        $this->view_instance->jsAdminlib = $this->assets->{'js/librairies/adminlib'}->js ?? '';
        $this->view_instance->jscommonVendor = $this->assets->{'commons/admin/commonVendor'}->js ?? '';
        $this->view_instance->jsAdminPlugins = $this->assets->{'js/plugins/backend/adminplugins'}->js ?? '';
        $this->view_instance->jsAdminMain = $this->assets->{'js/main/backend/admin/main'}->js ?? '';
        $this->view_instance->js = $this->assets->{'js/custom/admin/login'}->js ?? '';
        $this->view_instance->css = $this->assets->{'css/custom/admin/login'}->css ?? '';
        $this->view_instance->set_page_title('Login');
        $this->view_instance->render('admin' . DS . 'login');
    }
}
