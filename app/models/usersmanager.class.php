<?php
class UsersManager extends Model
{
    private $_colID = 'userID';
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
                $cond = ['where' => ['userID' => $user], 'return_mode' => 'class', 'class' => 'UsersManager'];
                $u = $this->_db->findFirst($this->_table, $cond);
            } else {
                $cond = ['where' => ['email' => $user], 'return_type' => 'single', 'return_mode' => 'class', 'class' => 'UsersManager'];
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
            'where' => ['email' => $email, 'deleted' => !1], 'return_mode' => 'class', 'class' => 'UsersManager'
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
            $U = new UsersManager((string) Session::get(CURRENT_USER_SESSION_NAME));
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
    //Login / Logout User
    //=======================================================================

    public function login($rememberMe = false)
    {
        Session::set($this->_sessionName, $this->email);
        $session = new UserSessionsManager();
        $hashCheck = $session->findFirst(['where' => ['userID' => $this->userID], 'return_mode' => 'object']);
        if ($rememberMe) {
            if (!$hashCheck) {
                $token = new Token();
                $hash = $token->user_identifiant(36);
                $Insertdata = ['session' => $hash, 'remember_token' => $token->user_identifiant(128), 'user_agent' => Session::uagent_no_version(), 'userID' => $this->userID];
                $session->assign($Insertdata);
                $session->save($Insertdata);
            } else {
                $hash = $session->get_results()->session;
            }
            Cookies::set($this->_cookieName, $hash, REMEMBER_COOKIE_EXPIRY);
            $token = null;
            $session = null;
        } else {
            if ((!Cookies::exists(REMEMBER_ME_COOKIE_NAME) && $hashCheck) || ($hashCheck && Cookies::get(REMEMBER_ME_COOKIE_NAME) != $hashCheck->session)) {
                $session->delete('userID', $this->userID);
            }
        }
    }
    //Login from cookies
    public static function loginUserFromCookies()
    {
        $userSession = UserSessionsManager::getFromCokkies();
        if ($userSession && $userSession->userID != '') {
            $user = new self((int)$userSession->userID);
            if (!$user) {
                $userSession->delete('userID', $userSession->userID);
                Cookies::delete(REMEMBER_ME_COOKIE_NAME);
            };
            return $user;
        } else {
            if (Cookies::exists(REMEMBER_ME_COOKIE_NAME)) {
                Cookies::delete(REMEMBER_ME_COOKIE_NAME);
            }
        }
        return;
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
        $userSession = UserSessionsManager::getFromCokkies();
        if (!$userSession) {
            //$userSession->delete('userID', $userSession->userID);
            if (Cookies::exists(REMEMBER_ME_COOKIE_NAME)) {
                Cookies::delete(REMEMBER_ME_COOKIE_NAME);
            }
            if ($this->_db->findFirst('user_sessions', ['where' => ['userID' => $this->userID], 'return_mode' => 'object'])) {
                (new UserSessionsManager)->delete('userID', $this->userID);
            }
        } else {
            ($userSession->session != Cookies::get(REMEMBER_ME_COOKIE_NAME)) ? Cookies::delete(REMEMBER_ME_COOKIE_NAME) : '';
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
