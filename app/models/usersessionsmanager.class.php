<?php
class UserSessionsManager extends Model
{
    protected $_table = 'user_sessions';
    protected $_colIndex = 'visitor_cookie';
    protected $_colID = 'usID';
    public $usID;
    public $userID;
    public $session;
    public $visitor_cookie;
    public $user_agent;
    public $remember_cookie;
    public $email;

    //=======================================================================
    //construct
    //=======================================================================
    public function __construct($userSession = '')
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
        if ($userSession) {
            $cond = ['where' => ['visitor_cookie' => $userSession], 'return_mode' => 'class', 'class' => 'UserSessionsManager'];
            $us = $this->findFirst($cond);
            if ($us) {
                foreach ($us as $key => $val) {
                    $this->$key = $val;
                }
            }
        }
    }

    //=======================================================================
    //Setters
    //=======================================================================
    public function set_userSession($m = null)
    {
        $user_session = $m->visitor_cookie ? current($this->getAllbyIndex($m->visitor_cookie)->get_results()) : null;
        if (!$user_session) {
            $this->userID = $m->userID ?? '';
            $this->remember_cookie = $m->remember_cookie ?? '';
            $this->email = $m->email;
            $this->user_agent = Session::uagent_no_version();
            if (Cookies::exists(VISITOR_COOKIE_NAME)) {
                if ($m->visitor_cookie != Cookies::get(VISITOR_COOKIE_NAME)) {
                    $m->visitor_cookie = $this->visitor_cookie = Cookies::get(VISITOR_COOKIE_NAME);
                    $m->id = $m->userID;
                    $m->save();
                } else {
                    $this->visitor_cookie = $m->visitor_cookie;
                    return $this->save();
                }
            } else {
                $cookie = (new Token())->user_identifiant(24);
                Cookies::set(VISITOR_COOKIE_NAME, $cookie, COOKIE_EXPIRY);
                $m->visitor_cookie = $this->visitor_cookie = $cookie;
                $m->id = $m->userID;
                $m->save();
            }
            unset($m->id);
        }
        return $m;
    }

    // public function check_session($obj1 = null, $obj2 = null)
    // {
    //     return array_diff_assoc((array)$obj1, [$obj2]);
    // }
}
