<?php
class UserSessionsManager extends Model
{
    protected $_table = 'user_sessions';
    public $usID;
    public $userID;
    public $session;
    public $user_agent;
    public $hash;
    public $remember_token;

    //=======================================================================
    //construct
    //=======================================================================
    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
    }

    //=======================================================================
    //Getters
    //=======================================================================

    public static function getFromCokkies()
    {
        if (Cookies::exists(REMEMBER_ME_COOKIE_NAME)) {
            $hash = Cookies::get(REMEMBER_ME_COOKIE_NAME);
            $userSession = (new self())->findFirst(['where' => ['session' => $hash], 'return_mode' => 'class', 'class' => 'UserSessionsManager']);
        }
        return $userSession ?? false;
    }
    public function get_results()
    {
        return $this->_results;
    }
}
