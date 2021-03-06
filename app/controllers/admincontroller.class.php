<?php
class AdminController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        $this->view_instance->set_siteTitle("K'nGELL Administration");
        $this->view_instance->set_Layout('admin');
    }

    //page index
    public function index($data = [])
    {
        $this->view_instance->set_pageTitle('Dashboard');
        $this->view_instance->render('admin' . DS . 'index');
    }

    //page index
    public function analytics($data = [])
    {
        $this->view_instance->set_pageTitle('Analytics');
        $this->view_instance->render('admin' . DS . 'analytics');
    }

    //page index
    public function calendar($data = [])
    {
        $this->view_instance->set_pageTitle('Calendar');
        $this->view_instance->render('admin' . DS . 'calendar');
    }

    // Categories add and Manage categories
    public function allcategories()
    {
        $this->view_instance->set_pageTitle('Categories');
        $this->view_instance->render('admin' . DS . 'products' . DS . 'allcategories');
    }

    public function login()
    {
        $this->view_instance->set_Layout('adminlogin');
        $this->view_instance->set_pageTitle('Login');
        $this->view_instance->render('admin' . DS . 'login');
    }

    public function allusers($method)
    {
        $this->view_instance->set_viewData($this->get_model('UsersManager'));
        $this->view_instance->user_method = array_pop($method);
        $this->view_instance->set_pageTitle('All Users');
        $this->view_instance->render('admin' . DS . 'users' . DS . 'allusers');
    }

    public function profile()
    {
        $this->view_instance->set_pageTitle('Profile');
        $this->view_instance->render('admin' . DS . 'users' . DS . 'profile');
    }
}
