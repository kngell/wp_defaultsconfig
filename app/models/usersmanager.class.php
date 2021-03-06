<?php
class UsersManager extends Model
{
    protected $_colID = 'userID';
    protected $_table = 'users';
    protected $_colIndex = 'userID';
    public $userID;
    public $firstName;
    public $lastName;
    public $userName;
    public $email;
    public $address1;
    public $address2;
    public $ville;
    public $zip_code;
    public $region;
    public $gender;
    public $dob;
    public $admin;
    public $rank;
    public $groupe;
    public $password;
    public $registerDate;
    public $updateAt;
    public $profileImage;
    public $salt;
    public $token;
    public $visitor_cookie;
    public $remember_cookie;
    public $token_expire;
    public $phone;
    public $deleted;
    public $acl;
    public $verified;
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
        $btn = ['text-danger', 'deleteBtn', 'delete_user'];
        return $this->output_users($users, $btn);
    }

    //Restored users list
    public function get_deletedUsers($start = '', $limit = '')
    {
        $this->_deleted_item = true;
        $users = isset($start) && isset($limit) ? $this->getAll_MinMax($start, $limit)->get_results() : $this->getAllItem()->get_results();
        $btn = ['text-secondary', 'restoreBtn', 'restore_user'];
        return $this->output_users($users, $btn);
    }

    public function restore_User($id = [])
    {
        return $this->update(['userID' => $id], ['deleted' => 0]);
    }

    //output users
    public function output_users($users, $btn = [])
    {
        $output = '';
        if ($users && is_array($users)) {
            foreach ($users as $user) {
                $template = file_get_contents(FILES . 'template' . DS . 'admin' . DS . 'users.php');
                $template = $this->output_userData($user, $template, $btn);
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
    public function output_userData($user = null, $temp = '', $btn = '')
    {
        $template = $temp;
        $template = str_replace('{{firstname}}', $user->firstName ?? '', $template);
        $template = str_replace('{{lastname}}', $user->lastName ?? '', $template);
        $template = str_replace('{{userID}}', $user->userID, $template);
        $template = str_replace('{{image}}', $user->profileImage ?? IMG . 'users' . US . 'avatar.png', $template);
        $template = str_replace('{{phone}}', $user->phone ?? '', $template);
        $template = str_replace('{{delBtnClass}}', $btn[0] ?? '', $template);
        $template = str_replace('{{btn}}', $btn[1] ?? '', $template);
        $template = str_replace('{{formClass}}', $btn[2] ?? '', $template);
        $template = str_replace('{{users_profile}}', PROOT . 'admin' . US . 'profile' . US . $user->userID, $template);
        $template = str_replace('{{token}}', FH::csrfInput('csrftoken', hash_hmac('sha256', 'delete_user' . $user->userID, $_SESSION[TOKEN_NAME])), $template);
        return $template;
    }

    //output users extradata
    public function output_userExtraData($m = null, $temp = '')
    {
        $extra_data = (new UserextradataManager())->getDetails($m->userID, 'userID');
        $template = $temp;
        $template = str_replace('{{function}}', $extra_data->u_function ?? '', $template);
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
