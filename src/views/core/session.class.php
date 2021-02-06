<?php
class Session
{
    public static function exists($name)
    {
        return (isset($_SESSION[$name])) ? true : false;
    }
    
    public static function get($name)
    {
        return $_SESSION[$name];
    }
    
    public static function set($name, $value)
    {
        return $_SESSION[$name] =$value;
    }
    
    public static function delete($name)
    {
        if (self::exists($name)) {
            unset($_SESSION[$name]);
        }
    }
    
    public static function uagent_no_version()
    {
        $uagent = $_SERVER['HTTP_USER_AGENT'];
        $regx = '/\/[a-zA-z0-9.]+/';
        $newString = preg_replace($regx, '', $uagent);
        return $newString;
    }
    
    public static function flash($name, $string = '')
    {
        if (self::exists($name)) {
            $session = self::get($name);
            self::delete($name);
            return $session;
        } else {
            self::set($name, $string);
        }
    }
    public static function displayMsg()
    {
        $alerts = ['alert-info','alert-sucess','alert-warning','alert-danger'];
        $html  ='';
        foreach ($alerts as $alert) {
            if (self::exists($alert)) {
                $html = '<div class="alert '.$alert.' alert-dismissable" role="alert">';
                $html .= '<button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>';
                $html .= self::get($alert);
                $html .='</div>';
                self::delete($alert);
            }
        }
    }

    public static function addMsg($type, $msg)
    {
        $sessionName = 'alert'.$type;
        self::set($sessionName, $msg);
    }
}