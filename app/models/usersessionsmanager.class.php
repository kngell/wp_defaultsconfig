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
    public function __construct($userSession = null)
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
        $user_session = $m->visitor_cookie ? $this->getAllbyParams(['userID' => $m->userID]) : [];
        if ($user_session->count() > 1) {
            $user_session = array_map(function ($session) use ($m) {
                $m->visitor_cookie && $session->visitor_cookie != $m->visitor_cookie ? $session->delete() : '';
                return $session;
            }, $user_session->get_results());
            $user_session = array_filter($user_session, function ($session) use ($m) {
                return $session->visitor_cookie == $m->visitor_cookie;
            });
            return $user_session ? $this->update_user_session(current($user_session), $m) : false;
        } elseif ($user_session->count() == 1) {
            $user_session = current($user_session->get_results());
            return $this->update_user_session($user_session, $m);
        } else {
            return $this->create_user_session($m);
        }
    }

    public function update_user_session($s = null, $u = null)
    {
        $save = false;
        if ($u->remember_cookie) {
            if ($s->remember_cookie != $u->remember_cookie) {
                $s->remember_cookie = $u->remember_cookie;
                $save = true;
            }
        }
        if ($u->visitor_cookie) {
            if ($s->visitor_cookie != $u->visitor_cookie) {
                $s->visitor_cookie = $u->visitor_cookie;
                $save = true;
            }
        }
        if ($u->email) {
            if ($s->email != $u->email) {
                $s->email = $u->email;
                $save = true;
            }
        }
        return $save ? $s->save() : '';
    }

    public function create_user_session($user = null)
    {
        $this->userID = $user->userID ?? '';
        $this->remember_cookie = $user->remember_cookie ?? '';
        $this->email = $user->email;
        $this->user_agent = Session::uagent_no_version();
        $this->visitor_cookie = $user->visitor_cookie;
        return $this->save();
    }

    // public function check_session($obj1 = null, $obj2 = null)
    // {
    //     return array_diff_assoc((array)$obj1, [$obj2]);
    // }
}
