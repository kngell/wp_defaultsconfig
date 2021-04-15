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
        $tables = ['groups' => ['*'], 'group_user' => ['userID']];
        $data = ['join' => 'INNER JOIN', 'relation' => ['grID', 'groupID'], 'where' => ['name' => 'admin']];
        $admin_group = (new GroupsManager)->getAllItem($data, $tables)->get_results();
        switch ($method) {
            case 'get_adminUsers':
                $this->_deleted_item = false;
                $textClass = 'text-danger';
                $where = $admin_group ? ['where' => ['groupID' => ['value' => array_column($admin_group, 'grID'), 'operator' => 'IN', 'tbl' => 'group_user']]] : [];
                $style_restore = 'style="display:none"';
                $style_edit = '';
                break;
            case 'get_deletedUsers':
                $this->_deleted_item = true;
                $textClass = 'text-secondary';
                $style_restore = '';
                $style_edit = 'style="display:none"';
                break;
            default:
                $this->_deleted_item = false;
                $textClass = 'text-danger';
                $where = $admin_group ? ['where' => ['userID' => ['value' => array_column($admin_group, 'userID'), 'operator' => 'NOT IN', 'tbl' => 'users']]] : [];
                $style_restore = 'style="display:none"';
                $style_edit = '';
                break;
        }

        $tables = ['users' => ['*'], 'group_user' => ['groupID']];
        $data = isset($where) && !empty($where) ? array_merge(['join' => 'LEFT JOIN', 'relation' => ['userID', 'userID'], 'group_by' => 'userID DESC'], $where) : ['join' => 'LEFT JOIN', 'relation' => ['userID', 'userID'], 'group_by' => 'userID DESC'];
        $data = !empty($limit) ? array_merge($data, ['start' => $start, 'limit' => $limit]) : $data;
        $users = $this->getAllItem($data, $tables)->get_results();
        $btn = [$textClass, $method, $style_restore, $style_edit];
        $admin_group = null;
        return $html ? $this->output_users($users, $btn) : count($users);
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
        $template = str_replace('{{method}}', $btn[1] ?? '', $template);
        $template = str_replace('{{style_restore}}', $btn[2] ?? '', $template);
        $template = str_replace('{{style_edit}}', $btn[3] ?? '', $template);
        $template = str_replace('{{image}}', ImageManager::asset_img(!empty($user->profileImage) ? $user->profileImage : 'users.avatar.png'), $template);
        $template = str_replace('{{phone}}', $user->phone ?? '', $template);
        $template = str_replace('{{delBtnClass}}', $btn[0] ?? '', $template);
        $template = str_replace('{{users_profile}}', PROOT . 'admin' . US . 'profile' . US . $user->userID, $template);
        $template = str_replace('{{token_d}}', FH::csrfInput('csrftoken', hash_hmac('sha256', 'delete_user' . $user->userID, $_SESSION[TOKEN_NAME])), $template);
        $template = str_replace('{{token_r}}', FH::csrfInput('csrftoken', hash_hmac('sha256', 'restore_user' . $user->userID, $_SESSION[TOKEN_NAME])), $template);
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

    public function beforeDelete($params = [])
    {
        if (isset($params['method'])) {
            switch ($params['method']) {
                case 'get_deletedUsers':
                    if ((new Input())->csrfCheck($params['frm_name'], $params['csrftoken'])) {
                        $this->set_SoftDelete(false);
                    }
                    break;
                case 'restore_user':
                    $this->set_SoftDelete(true);
                    $params['restore'] = ['deleted' => 0];
                    break;
                default:
                    // code...
                    break;
            }
        } else {
            $this->set_SoftDelete(true);
        }
        return $params;
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
        if ($groupID) {
            $user_roles->userID = $userID;
            $user_roles->groupID = $groupID;
            if (!$user_roles->save()) {
                $error = true;
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
        $data = ['join' => 'INNER JOIN', 'rel' => ['grID', 'groupID'], 'where' => ['userID' => $userID ? $userID : $this->userID]];
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

    public function get_successMessage($method = '', $data = [])
    {
        switch ($method) {
            case 'update':
                return 'Profil mis a jour avec success!';
                break;
            case 'delete':
                if (isset($data['method']) && $data['method'] == 'restore_user') {
                    return 'Utilisateur restauré avec success!';
                } else {
                    return 'Utilisateur Supprimé!';
                }
                break;
            default:
                return 'Utilisateur créee avec success!';
                break;
        }
    }
}
