<?php
class UsersManager extends Model
{
    protected $_colID = 'userID';
    protected $_table = 'users';
    protected $_colIndex = 'userID';
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
    //Manage users
    //=======================================================================

    //Get all users
    public function get_allUsers($start = '', $limit = '')
    {
        $this->_deleted_item = false;
        $users = isset($start) && isset($limit) ? $this->getAll_MinMax($start, $limit)->get_results() : $this->getAllItem()->get_results();
        return $this->output_users($users);
    }

    //Restore users
    public function restore_Users($start = '', $limit = '')
    {
        $this->_deleted_item = true;
        $users = isset($start) && isset($limit) ? $this->getAll_MinMax($start, $limit)->get_results() : $this->getAllItem()->get_results();
        return $this->output_users($users);
    }

    //output users
    public function output_users($users)
    {
        $output = '';
        if ($users && is_array($users)) {
            foreach ($users as $user) {
                $template = file_get_contents(FILES . 'template' . DS . 'admin' . DS . 'users.php');
                $template = $this->output_userData($user, $template);
                $template = $this->output_userExtraData($user, $template);
                $output .= $template;
            }
        } elseif ($users) {
            $template = file_get_contents(FILES . 'template' . DS . 'admin' . DS . 'users.php');
            $template = $this->output_userData($users, $template);
            $template = $this->output_userExtraData($users, $template);
            $output .= $template;
        }
        $users = null;
        $template = '';
        return $output;
    }

    //output users data
    public function output_userData($user = null, $temp = '')
    {
        $template = $temp;
        $template = str_replace('{{firstname}}', $user->firstName ?? '', $template);
        $template = str_replace('{{lastname}}', $user->lastName ?? '', $template);
        $template = str_replace('{{userID}}', $user->userID, $template);
        $template = str_replace('{{image}}', $user->profileImage ?? IMG . 'users' . US . 'avatar.png', $template);
        $template = str_replace('{{phone}}', $user->phone ?? '', $template);
        $template = str_replace('{{token}}', FH::csrfInput('csrftoken', hash_hmac('sha256', 'delete_user' . $user->userID, $_SESSION[TOKEN_NAME])), $template);
        return $template;
    }

    //output users extradata
    public function output_userExtraData($m = null, $temp = '')
    {
        $extra_data = (new UserextradataManager())->getDetails($m->userID, 'userID');
        $template = $temp;
        $template = str_replace('{{function}}', $extra_data->u_function ?? '', $template);
        $template = str_replace('{{description}}', $this->getContentOverview($extra_data->u_descr ?? '', 60) ?? '', $template);
        $template = str_replace('{{address}}', $extra_data->u_address ?? '', $template);
        $extra_data = null;
        return $template;
    }

    //=======================================================================
    //Manage deleted users
    //=======================================================================

    public function beforeDelete()
    {
        $this->sets_SoftDelete(true);
        return true;
    }
}
