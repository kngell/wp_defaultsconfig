<?php

class LoginController extends Controller
{
    //=======================================================================
    //Construct
    //=======================================================================

    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        $this->get_model('AuthManager');
    }

    //=======================================================================
    //Login
    //=======================================================================
    public function login()
    {
        if ($this->request->exists('post')) {
            $data = $this->request->getAll();
            if ((new Token())->validateToken($data['csrftoken'])) {
                $this->model_instance->assign($data);
                $this->model_instance->validator($data, Form_rules::login());
                if ($this->model_instance->validationPasses()) {
                }
            }
        }
    }

    //=======================================================================
    //Register
    //=======================================================================
    public function register()
    {
        if ($this->request->exists('post')) {
            $data = $this->request->getAll();
            if ((new Token())->validateToken($data['csrftoken'])) {
                $this->model_instance->assign($data);
                $this->model_instance->validator($data, Form_rules::login());
                if ($this->model_instance->validationPasses()) {
                }
            }
        }
    }
}
