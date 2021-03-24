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
    public $verified;
    public $fb_access_token ;

    //=======================================================================
    //construct
    //=======================================================================

    public function __construct($user = '')
    {
        parent::__construct();
    }

    //=======================================================================
    //Manage users
    //=======================================================================
    public function get_users($method, $start = '', $limit = '', $html = true)
    {
        $op = '';
        switch ($method) {
            case 'get_adminUsers':
                $this->_deleted_item = false;
                $op = ' == ';
                $textClass = 'text-danger';
                break;
            case 'get_deletedUsers':
                $this->_deleted_item = true;
                $op = ' != ';
                $textClass = 'text-secondary';
                break;
            default:
                $this->_deleted_item = false;
                $op = ' != ';
                $textClass = 'text-danger';
                break;
        }
        $tables = ['users' => ['*'], 'group_user' => ['groupID']];
        $data = ['join' => 'LEFT JOIN', 'relation' => ['userID', 'userID']];
        $data = !empty($limit) ? array_merge($data, ['start' => $start, 'limit' => $limit]) : $data;
        $admin_group = (new GroupsManager)->getDetails('admin', 'name');
        $all_users = $this->getAllItem($data, $tables)->get_results();
        if ($all_users && $admin_group) {
            $admin_users = array_unique(array_column($all_users, 'userID'));
            $admin_users = array_filter($all_users, function ($user) use ($admin_group) {
                return $user->groupID == $admin_group->grID;
            });
            $users = array_filter($all_users, function ($user) use ($admin_group, $op) {
                return $user->groupID . $op . $admin_group->grID && $admin_group->status == 1;
            });
        }
        $btn = [$textClass, 'deleteBtn', 'delete_user'];
        $admin_group = null;
        $all_users = null;
        return $html ? $this->output_users($users, $btn) : count($users);
    }

    // //Get admin users
    // public function get_adminUsers($start = '', $limit = '', $html = true)
    // {
    //     $all_users = $this->get_users($start, $limit);
    //     $admin_group = (new GroupsManager)->getDetails('admin', 'name');
    //     $users = [];
    //     if ($all_users && $admin_group) {
    //         $users = array_filter($all_users, function ($user) use ($admin_group) {
    //             return $user->groupID == $admin_group->grID && $admin_group->status == 1;
    //         });
    //     }
    //     $btn = ['text-danger', 'deleteBtn', 'delete_user'];
    //     $admin_group = null;
    //     $all_users = null;
    //     return $html ? $this->output_users($users, $btn) : count($users);
    // }

    // //Get all users
    // public function get_allUsers($start = '', $limit = '', $html = true)
    // {
    //     $all_users = $this->get_users($start, $limit);
    //     $admin_group = (new GroupsManager)->getDetails('admin', 'name') ;
    //     $users = [];
    //     if ($all_users && $admin_group) {
    //         $users = array_filter($all_users, function ($user) use ($admin_group) {
    //             return ($user->groupID != $admin_group->grID) && $admin_group->status == 1;
    //         });
    //     }
    //     $admin_group = null;
    //     $btn = ['text-danger', 'deleteBtn', 'delete_user'];
    //     return $html ? $this->output_users($users, $btn) : count($users);
    // }

    // //Restored users list
    // public function get_deletedUsers($start = '', $limit = '', $html = true)
    // {
    //     $this->_deleted_item = true;
    //     $all_users = $this->get_users($start, $limit);
    //     $admin_group = (new GroupsManager)->getDetails('admin', 'name');
    //     $users = [];
    //     if ($all_users && $admin_group) {
    //         $users = array_filter($all_users, function ($user) use ($admin_group) {
    //             return ($user->groupID != $admin_group->grID) && $admin_group->status == 1;
    //         });
    //     }
    //     $admin_group = null;
    //     $btn = ['text-secondary', 'restoreBtn', 'restore_user'];
    //     return $html ? $this->output_users($users, $btn) : count($users);
    // }

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
        $this->set_SoftDelete(true);
        return true;
    }

    //=======================================================================
    //Get User form Template
    //=======================================================================
    public function getHtmlData($item = [])
    {
        $template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'account' . DS . 'userTemplate.php');
        return $template;
    }

    //=======================================================================
    //Set users permissions
    //=======================================================================
    // On insert
    public function afterSave($params = [])
    {
        // parent::beforeSave();
        if ($params) {
            $select2_data = $params['select2'] ? json_decode($params['select2'], true) : [];
            return $select2_data ? !$this->saveUserGroup($select2_data, $params['saveID'] ?? $params['userID']) : '';
        }
        return false;
    }

    //Save user permission group
    public function saveUserGroup($params = [], $userID = '')
    {
        $user_roles = (new GroupUserManager())->getAllbyIndex($userID);
        $user_group = (new GroupsManager())->getAllbyParams(['name' => strtolower($params[0]['text'])]);
        $error = false;
        $groupID = false;
        if ($user_roles->count() >= 1) {
            foreach ($user_roles->get_results() as $role) {
                if (!$role->delete()) {
                    $error = true;
                    break;
                }
            }
        }
        if ($user_group->count() == 0) {
            $user_group->name = strtolower($params[0]['text']);
            $groupID = $user_group->save();
        }
        if ($params && $groupID) {
            foreach ($params as $group) {
                $user_roles->userID = $userID;
                $user_roles->groupID = $groupID;
                if (!$user_roles->save()) {
                    $error = true;
                    break;
                }
            }
        }
        $user_roles = null;
        $user_group = null;
        return $error;
    }

    //get selected option
    public function get_selectedOptions($userID = '')
    {
        $tables = ['groups' => ['*'], 'group_user' => ['userID', 'groupID']];
        $data = ['join' => 'INNER JOIN', 'relation' => ['grID', 'groupID'], 'where' => ['userID' => $userID ? $userID : $this->userID]];
        $user_roles = (new GroupUserManager())->getAllItem($data, $tables);
        $response = [];
        if ($user_roles->count() >= 1) {
            foreach ($user_roles->get_results() as $role) {
                $response[$role->groupID] = $role->name;
            }
        }
        $user_roles = null;
        return $response ? $response : [];
    }

    public function get_successMessage($method = '', $action = '')
    {
        if ($method == 'update') {
            return 'Profil mis a jour avec success!';
        } else {
            return 'Profil Ajouté avec Success!';
        }
    }
}
