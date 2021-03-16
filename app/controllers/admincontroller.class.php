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
        // dd(($this->get_model('UsersManager'))->get_Tables_Column('users'));
        $profile_upload = file_get_contents(FILES . 'template' . DS . 'base' . DS . 'upload_profile_template.php');
        $profile_upload = str_replace('{{form_id}}', 'add-user-frm', $profile_upload);
        $profile_upload = str_replace('{{camera}}', IMG . 'camera' . DS . 'camera-solid.svg', $profile_upload);
        $profile_upload = str_replace('{{avatar}}', IMG . 'users' . DS . 'avatar.png', $profile_upload);
        $this->view_instance->profile_upload = $profile_upload;
        $this->view_instance->set_viewData($this->get_model('UsersManager'));
        $this->view_instance->user_method = array_pop($method);
        $this->view_instance->set_pageTitle('All Users');
        $this->view_instance->render('admin' . DS . 'users' . DS . 'allusers');
    }

    //users profile
    public function profile()
    {
        $this->view_instance->set_pageTitle('Profile');
        $this->view_instance->render('admin' . DS . 'users' . DS . 'profile');
    }

    // Users permissions
    public function permissions()
    {
        $this->view_instance->set_pageTitle('permissions');
        $this->view_instance->options = ($this->get_model('GroupsManager'))->getAllItem()->get_results();
        $this->view_instance->render('admin' . DS . 'users' . DS . 'permissions');
    }
}
