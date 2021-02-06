<?php

/*This is the base controller witch load models and view*/

class Controller extends Application
{
    public $assets;
    public $view_instance;
    public $request;
    protected $model_instance;
    protected $_controller;
    protected $_method;

    public function __construct($controller, $method)
    {
        parent::__construct();
        $this->_controller = $controller;
        $this->_method = $method;
        $this->get_view(lcfirst(rtrim($controller, 'Controller')) . DS .$method);
        $this->request = new Input();
        $this->assets = json_decode(file_get_contents(APP . 'assets.json')) ;
    }
    //Load view
    public function get_view(string $viewName = '', $data = [])
    {
        $this->view_instance = new View($viewName, $data);
        return $this->view_instance;
    }
    //Load model
    public function get_model($modelName, $model = '')
    {
        if (file_exists(MODEL . strtolower($modelName) . '.class.php')) {
            require_once MODEL . strtolower($modelName) . '.class.php';
            if (!empty($model)) {
                !isset($this->model_instance[$model]) ? $this->model_instance[$model] = new $modelName() : '';
            } else {
                !(isset($this->model_instance) && $this->model_instance == $modelName)? $this->model_instance = new $modelName() : '';
            }
            return $this->model_instance;
        } else {
            echo 'the model :'. $modelName .'doest not exist';
        }
    }

    protected function load_model($model)
    {
        if (class_exists($model)) {
            $this->{$model.'Model'} = new $model(strtolower($model));
        }
    }

    public function jsonResponse($resp)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-type: application/json; charset=UTF-8");
        http_response_code(200);
        echo json_encode($resp);
        exit;
    }

    public function renameKeys($source, $item)
    {
        $S =$source;
        if (isset($item)) {
            foreach ($source as $key=>$val) {
                foreach ($item as $k => $v) {
                    if ($key==$k) {
                        $S = $this->_rename_arr_key($key, $v, $S);
                    }
                }
            }
        }
        return $S;
    }

    private function _rename_arr_key($oldkey, $newkey, $arr=[])
    {
        if (array_key_exists($oldkey, $arr)) {
            $arr[$newkey] = $arr[$oldkey];
            unset($arr[$oldkey]);
            return $arr;
        } else {
            return false;
        }
    }
}