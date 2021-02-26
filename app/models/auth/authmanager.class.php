<?php
class AuthManager extends Model
{
    protected $_colID = 'userID';
    protected $_table = 'users';
    private $_sessionName;
    private $_cookieName;
    public static $currentLoggedInUser = null;
    private $_isLoggedIn = false;
    private $_confirm;
    protected $_count;

    public $userID;
    public $oauth_provider;
    public $oauth_uid;
    public $admin;
    public $rank;
    public $firstName;
    public $lastName;
    public $userName;
    public $salt;
    public $email;
    public $password;
    public $phone;
    public $gender;
    public $dob;
    public $token;
    public $visitor_cookie;
    public $remember_cookie;
    public $token_expire;
    public $profileImage;
    public $link;
    public $registerDate;
    public $updateAt;
    public $verified;
    public $deleted;
    public $groupe;
    public $acl;
    public $fb_access_token;

    //=======================================================================
    //construct
    //=======================================================================

    public function __construct($user = '')
    {
        parent::__construct();
        $this->_sessionName = CURRENT_USER_SESSION_NAME;
        $this->_cookieName = REMEMBER_ME_COOKIE_NAME;
        if ($user) {
            if (is_int($user)) {
                $cond = ['where' => ['userID' => $user], 'return_mode' => 'class', 'class' => 'AuthManager'];
                $u = $this->_db->findFirst($this->_table, $cond);
            } else {
                $cond = ['where' => ['email' => $user], 'return_type' => 'single', 'return_mode' => 'class', 'class' => 'AuthManager'];
                $u = $this->_db->select($this->_table, $cond);
            }
            if ($u) {
                $this->_results = $this->_db->get_results();
                foreach ($this->_results as $key => $val) {
                    $this->$key = $val;
                }
            }
        }
    }

    //=======================================================================
    //Find and check users
    //=======================================================================
    public function getAllUsers($deleted)
    {
        $data = ['where' => ['deleted' => $deleted], 'return_mode' => 'class', 'order_by' => 'userID DESC'];
        return $this->find($data);
    }

    // check if user is logged
    public function isLoggedIn()
    {
        return $this->_isLoggedIn;
    }

    //Find by email
    public function findByEmail($email)
    {
        $data = [
            'where' => ['email' => $email, 'deleted' => !1], 'return_mode' => 'class', 'class' => 'AuthManager'
        ];
        return $this->findFirst($data);
    }

    //find Password
    public function findPassword()
    {
        $data = [
            'where' => ['userID' => $this->userID], 'return_type' => 'single', 'select' => 'password'
        ];
        return $this->findFirst($data);
    }

    //check current user
    public static function currentUser()
    {
        if (!isset(self::$currentLoggedInUser) && Session::exists(CURRENT_USER_SESSION_NAME)) {
            $U = new AuthManager((string) Session::get(CURRENT_USER_SESSION_NAME));
            self::$currentLoggedInUser = $U;
        }
        return self::$currentLoggedInUser;
    }

    //=======================================================================
    //Delete and restore users
    //=======================================================================
    public function deleteUser($id, $complete)
    {
        !$complete ? $this->_softDelete = true : '';
        return $this->delete('UserId', $id);
    }

    //restore User

    public function restoreUser($id)
    {
        $fields = ['deleted' => 0];
        return $this->update(['userID' => $id], $fields);
    }

    //=======================================================================
    //Login / register/ Logout User
    //=======================================================================

    public function login($rememberMe = false)
    {
        $this->id = $this->userID;
        if ($rememberMe) {
            if (!Cookies::exists($this->_cookieName)) {
                $rem_cookie = $this->get_unique('remember_cookie');
                Cookies::set($this->_cookieName, $rem_cookie, COOKIE_EXPIRY);
                $this->remember_cookie = $rem_cookie;
                $this->save();
            } elseif (!$this->remember_cookie && Cookies::exists(VISITOR_COOKIE_NAME)) {
                $this->remember_cookie = Cookies::get(VISITOR_COOKIE_NAME);
                $this->save();
            }
        } else {
            Cookies::exists(REMEMBER_ME_COOKIE_NAME) ? Cookies::delete($this->_cookieName) : '';
            $this->remember_cookie = null;
            $this->save();
        }
        (new UserSessionsManager())->set_userSession($this);
        return  Session::set($this->_sessionName, $this->email) ?? false;
    }

    // Register
    public function register()
    {
        if (!Cookies::exists(VISITOR_COOKIE_NAME)) {
            $v_cookie = $this->get_unique('visitor_cookie');
            Cookies::set(VISITOR_COOKIE_NAME, $v_cookie, COOKIE_EXPIRY);
            $this->visitor_cookie = $v_cookie ;
        }
        $this->visitor_cookie = Cookies::get(VISITOR_COOKIE_NAME);
        return $this->save();
    }

    //Check for remember me cookies
    public static function rememberMe_checker()
    {
        $user_data = [];
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_session = (new UserSessionsManager(Cookies::get(VISITOR_COOKIE_NAME)));
            if ($user_session->remember_cookie) {
                $user_data['remember'] = true;
                $user_data['email'] = $user_session->email ?? '';
            }
        }
        return $user_data;
    }

    //login From Facebook
    public static function loginFromFacebook($userData)
    {
        $user = new self($userData['email']);
        if (!$user->findByEmail($userData['email'])) {
            $user->firstName = $userData['first_name'];
            $user->lastName = $userData['last_name'];
            $user->email = $userData['email'];
            $user->fb_access_token = $userData['accessToken'];
            $user->profileImage = $userData['picture']['url'];
            $user->save();
            $subject = 'Email verification';
            $body = '<h3>Cliquez sur le lien ci-dessous pour changer pour vérifier votre email</h3>.<p><a href="' . URLROOT . 'users/emailVerified/' . $userData['email'] . '">' . URLROOT . 'users/emailVerified/' . $userData['email'] . '</a><br>KnGELL! </p><p>Vous disposez de 30 minutes pour changer votre mot de pass. Au delà, vous devrez recommencer</p>';
            H::sendEmail($userData['email'], $subject, $body);
            $user->login();
        } else {
            $user->login();
        }
    }

    //Logout
    public function logout()
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            if (!$this->remember_cookie || ($this->remember_cookie && !Cookies::exists(REMEMBER_ME_COOKIE_NAME))) {
                Cookies::exists(REMEMBER_ME_COOKIE_NAME) ? Cookies::delete(REMEMBER_ME_COOKIE_NAME) : '';
                $user_session = (new UserSessionsManager(Cookies::get(VISITOR_COOKIE_NAME)));
                $user_session->count() > 0 ? $user_session->delete() : '';
            }
        } else {
            (new VisitorsManager())->add_new_visitor();
        }

        if (Cookies::exists(REMEMBER_ME_COOKIE_NAME)) {
            if ($this->remember_cookie != Cookies::get(REMEMBER_ME_COOKIE_NAME)) {
                Cookies::delete(REMEMBER_ME_COOKIE_NAME);
                $cookies = $this->get_unique('remember_cookie');
                Cookies::set(REMEMBER_ME_COOKIE_NAME, $cookies, COOKIE_EXPIRY);
                $this->remember_cookie = $cookies;
                $this->id = $this->userID;
                $this->save();
            }
        }
        Session::delete(CURRENT_USER_SESSION_NAME);
        self::$currentLoggedInUser = null;
        return true;
    }

    //=======================================================================
    //ACL Permissions
    //=======================================================================
    public function acls()
    {
        if (empty($this->acl)) {
            return [];
        }
        return json_decode($this->acl, true);
    }

    //form validation
    public function validator($source = [], $items = [])
    {
        FH::validate_forms($source, $items, $this);
    }

    //=======================================================================
    //Getters
    //=======================================================================

    public function displayName()
    {
        return $this->firstName . ' ' . $this->lastName;
    }

    public function get_columnNames()
    {
        return $this->_columnNames;
    }

    public function getConfirm()
    {
        return $this->_confirm;
    }

    //=======================================================================
    //Setters
    //=======================================================================
    public function setConfirm($value)
    {
        $this->_confirm = $value;
    }

    //=======================================================================
    //Operations
    //=======================================================================

    //Before Save
    public function beforeSave()
    {
        if (property_exists($this, 'cpassword')) {
            unset($this->cpassword);
        }
        if (property_exists($this, 'terms')) {
            unset($this->terms);
        }

        if ($this->isNew() == true) {
            $this->password = password_hash($this->password, PASSWORD_DEFAULT);
            $this->salt = hash_hmac('sha256', $this->email, $_SESSION[TOKEN_NAME]);
            $this->groupe = 1;
        }
        //Unset Auth providers ???
        unset($this->oauth_provider, $this->oauth_uid,$this->link);
        return true;
    }

    //After save
    public function afterSave()
    {
    }

    //confirm Email
    public function confirmEmail($email)
    {
        $cond = ['email' => $email];
        return ($this->update($cond, ['verified' => 1]))->count();
    }

    //find user when resetting password
    public function find_from_reset_password($email, $token)
    {
        $conditions = [
            'where' => [
                'token' => !(null),
                'token' => $token,
                'deleted' => !1,
                'email' => $email
            ],
            'return_mode' => 'class',
            'return_type' => 'single'
        ];
        $row = $this->find($conditions);
        return $row;
    }

    //Before update
    public function beforeSaveUpadate($fields = [])
    {
        return parent::beforeSaveUpadate($fields);
    }
}
