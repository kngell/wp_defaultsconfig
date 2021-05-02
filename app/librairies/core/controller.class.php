<?php

/*This is the base controller witch load models and view*/

abstract class Controller extends Application
{
    public $view_instance;
    public $request;
    protected $model_instance;
    protected $_controller;
    protected $_method;
    protected $assets;

    //=======================================================================
    //Construct
    //=======================================================================
    public function __construct($controller, $method)
    {
        parent::__construct();
        $this->_controller = $controller;
        $this->_method = $method;
        $this->view_instance = $this->get_view(substr($controller, 0, strpos($controller, 'Controller')) . DS . $method);
        $this->request = new Input();
    }

    //=======================================================================
    //Load view and model
    //=======================================================================
    //Load view
    public function get_view(string $viewName = '', $data = [])
    {
        $view = explode(DS, $viewName);
        $files = H::search_file(VIEW . strtolower($view[0]), strtolower($view[1]) . '.php');
        if ($files) {
            return !isset($this->view_instance) ? new View($viewName, $data) : $this->view_instance;
        }
        // if (in_array($this->_controller, ['AdminController', 'HomeController'])) {
        //     $this->_controller = 'RestrictedController';
        //     $this->_method = 'index';
        //     return new View('restricted' . DS . 'index', $data);
        // }
        return isset($this->view_instance) ? $this->view_instance : null;
    }

    //Load model
    public function get_model($modelName, $model = false)
    {
        if (!empty($modelName) && class_exists($modelName)) {
            if (file_exists($modelName == 'AuthManager' ? MODEL . 'auth' . DS : MODEL . strtolower($modelName) . '.class.php')) {
                // require_once MODEL . strtolower($modelName) . '.class.php';
                if (!empty($model) && !isset($this->model_instance[$model])) {
                    $this->model_instance[$model] = new $modelName();
                } elseif (!isset($this->model_instance)) {
                    $this->model_instance = new $modelName();
                } else {
                    if (!is_array($this->model_instance)) {
                        if ($this->model_instance->get_modeName() == $modelName) {
                            return $this->model_instance;
                        } else {
                            $this->model_instance = new $modelName();
                        }
                    } else {
                        if (!empty($model)) {
                            if ($this->model_instance[$model]->get_modeName() == $modelName) {
                                return $this->model_instance[$model];
                            } else {
                                $this->model_instance[$model] = new $modelName();
                            }
                        } else {
                            return new $modelName();
                        }
                    }
                }
                return $this->model_instance;
            } else {
                echo 'the model :' . $modelName . 'doest not exist';
            }
        } else {
            echo 'The model is not define!';
        }
        return null;
    }

    // Get options model
    public function get_options_model($t_options = '')
    {
        if (isset($t_options) && is_array($t_options)) {
            foreach ($t_options as $tab) {
                !empty($tab) ? $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $tab))) . 'Manager', $tab) : '';
            }
        } else {
            !empty($t_options) ? $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $t_options))) . 'Manager', $t_options) : '';
        }
    }

    //=======================================================================
    //Extra opérations
    //=======================================================================
    //Json Response
    public function jsonResponse($resp)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json; charset=UTF-8');
        header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        http_response_code(200);
        echo json_encode($resp);
        exit;
    }
}
