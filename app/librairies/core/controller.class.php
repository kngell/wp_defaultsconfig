<?php

/*This is the base controller witch load models and view*/

class Controller extends Application
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
        $this->assets = json_decode(file_get_contents(APP . 'assets.json'));
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
        return isset($this->view_instance) ? isset($this->view_instance) : null;
    }

    //Load model
    public function get_model($modelName, $model = '')
    {
        if (!empty($modelName) && class_exists($modelName)) {
            if (file_exists(MODEL . strtolower($modelName) . '.class.php')) {
                // require_once MODEL . strtolower($modelName) . '.class.php';
                if (!empty($model)) {
                    $this->model_instance[$model] = !isset($this->model_instance[$model]) ? new $modelName() : $this->model_instance;
                } else {
                    $this->model_instance = !isset($this->model_instance) ? new $modelName() : $this->model_instance;
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

    //=======================================================================
    //Extra opérations
    //=======================================================================
    //Json Response
    public function jsonResponse($resp)
    {
        header('Access-Control-Allow-Origin: *');
        header('Content-type: application/json; charset=UTF-8');
        http_response_code(200);
        echo json_encode($resp);
        exit;
    }
}
