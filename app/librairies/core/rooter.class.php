<?php
class Rooter
{
    private static $_instance = null;
    private $controller = DEFAULT_CONTROLLER;
    private $method = DEFAULT_METHOD;
    private $params;
    private $_controller_Name;
    private $_method_Name;

    //=======================================================================
    //Construct
    //=======================================================================

    public function __construct()
    {
        $this->parseURL();

        if (file_exists($this->_controller_Name == 'AuthController' ? CONTROLLER . 'auth' . DS . strtolower($this->_controller_Name) . '.class.php' : CONTROLLER . strtolower($this->_controller_Name) . '.class.php')) {
            $this->controller = $this->_controller_Name;
        } else {
            $this->_controller_Name = $this->controller;
            $this->_method_Name = !isset($this->_method_Name) ? $this->method : $this->_method_Name;
        }
        if (!GrantAccess::hasAccess($this->_controller_Name, $this->_method_Name)) {
            $this->manageRestrictedAccess();
        }
        $this->controller = !is_object($this->controller) ? new $this->controller($this->_controller_Name, $this->_method_Name) : '';
        if (method_exists($this->controller, $this->method)) {
            Session::set_redirect($this->_controller_Name, $this->_method_Name);
            call_user_func_array([$this->controller, $this->method], [$this->params]);
        } else {
            self::redirect('home' . DS . '');
        }
    }

    //=======================================================================
    //Parse url
    //=======================================================================

    private function parseURL()
    {
        if (isset($_GET['url'])) {
            $url = explode('/', filter_var(rtrim($_GET['url'], '/'), FILTER_SANITIZE_URL));
            if (isset($url[0])) {
                $this->_controller_Name = ucfirst(strtolower($url[0])) . 'Controller';
            }
            $this->_method_Name = isset($url[1]) ? $url[1] : $this->method;
            switch ($this->_method_Name) {
                case 'upload':
                    $this->_controller_Name = 'AssetsController';
                    $this->method = $this->_method_Name;
                    break;

                default:
                    $this->method = $this->_method_Name;
                    break;
            }
            unset($url[0], $url[1]);
            $this->params = count($url) > 0 ? array_values($url) : [];
        }
    }

    //=======================================================================
    //Redirect
    //=======================================================================

    public static function redirect($location = '')
    {
        if (!headers_sent()) {
            header('location:' . PROOT . $location);
            exit();
        } else {
            echo '<script type="text/javascript">';
            echo 'window.location.href="' . PROOT . $location . '";';
            echo '</script>';
            echo '<noscript>';
            echo '<meta http-equiv="refresh" content="0;url=' . $location . '" />';
            echo '</noscript>';
            exit();
        }
    }

    //Manage restricted access
    private function manageRestrictedAccess()
    {
        if (($this->controller == 'AdminController') && ($this->method == 'index')) {
            $this->method = $this->_method_Name = 'login';
        } else {
            $this->_controller_Name = $this->controller = ACCESS_RESTRICTED . 'Controller';
            $this->method = empty($this->_method_Name) ? 'index' : $this->method;
        }
    }
}
