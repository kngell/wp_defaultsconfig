<?php

class UsersController extends Controller
{
    //=======================================================================
    //Construct
    //=======================================================================
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

    //=======================================================================
    //Account
    //=======================================================================
    public function account($data)
    {
        $page = array_pop($data);
        $this->view_instance->set_pageTitle(ucfirst($page));
        $this->view_instance->set_siteTitle(ucfirst($page));
        $this->view_instance->set_viewData($this->get_model('UsersManager'));
        if (in_array($page, ['account', 'profile', 'payment', 'login', 'register'])) {
            if (isset(AuthManager::$currentLoggedInUser)) {
                !in_array($page, ['login', 'register']) ? $this->view_instance->render('users' . DS . 'account' . DS . $page) : '';
            } else {
                if ($page == 'register') {
                    $temp = file_get_contents(VIEW . 'users' . DS . 'account' . DS . 'partials' . DS . '_register.php');
                    $temp = str_replace('{{link}}', PROOT . 'users' . DS . 'account' . DS . 'login', $temp);
                    $temp = str_replace('{{csrf}}', FH::csrfInput('csrftoken', (new Token())->generate_token(8)), $temp);
                } else {
                    $temp = file_get_contents(VIEW . 'users' . DS . 'account' . DS . 'partials' . DS . '_login.php');
                    $temp = str_replace('{{link}}', PROOT . 'users' . DS . 'account' . DS . 'register', $temp);
                    $temp = str_replace('{{csrf}}', FH::csrfInput('csrftoken', (new Token())->generate_token(8)), $temp);
                }
                $this->view_instance->log_file = $temp;
                $this->view_instance->render('users' . DS . 'account' . DS . 'login');
                $temp = '';
            }
        } else {
            Rooter::redirect('restricted' . DS . 'index');
        }
    }

    //=======================================================================
    //Checkout
    //=======================================================================
    public function checkout()
    {
        $this->view_instance->set_pageTitle('Checkout');
        $this->view_instance->set_siteTitle('Checkout');
        if (isset(AuthManager::$currentLoggedInUser)) {
            $this->view_instance->render('home' . DS . 'account' . DS . 'checkout');
        } else {
            Rooter::redirect('users' . DS . 'account' . DS . 'login');
        }
    }

    //=======================================================================
    //Profile
    //=======================================================================
    public function profile()
    {
        // dd(($this->get_model('UsersManager')['users'])->get_Tables_Column('commandes'));
        $this->view_instance->set_pageTitle('Profile');
        $this->view_instance->set_siteTitle('Profile');
        $this->view_instance->render('users' . DS . 'account' . DS . 'profile');
    }

    //=======================================================================
    //Email verified results
    //=======================================================================
    public function emailverified($data)
    {
        $msg = '';
        foreach ($data as $value) {
            $msg .= $value;
        }
        $this->view_instance->msg = $msg;
        $this->view_instance->set_pageTitle('Email Verification');
        $this->view_instance->render('users' . DS . 'emailverified');
    }

    //=======================================================================
    //Reset password
    //=======================================================================
    public function resetpassword($data)
    {
        $this->view_instance->set_pageTitle('Reset Password');
        $this->view_instance->render('users' . DS . 'account' . DS . 'resetpassword');
    }

    //Payment
    public function payment()
    {
        $this->view_instance->set_pageTitle('Payment Paypal');
        $this->view_instance->render('users' . DS . 'account' . DS . 'payment');
    }
}
