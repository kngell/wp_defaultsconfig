<?php
class UsersManager extends Model
{
    protected $_colID = 'userID';
    protected $_table = 'users';
    protected $_colIndex = 'userID';
    protected $_modelName;
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
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
    }

    //=======================================================================
    //Manage users
    //=======================================================================
    //Get Select2 fields Names
    public function get_fieldName($table = '')
    {
        return 'group';
    }

    // Get single user Data
    public function get_single_user($id)
    {
        $tables = ['users' => ['*'], 'user_extra_data' => ['*'], 'address_book' => ['*']];
        $data = ['join' => 'INNER JOIN', 'rel' => ['userID', 'userID', 'relID'], 'where' => ['userID' => ['value' => $id, 'tbl' => 'users'], 'relID' => ['value' => $id, 'tbl' => 'address_book'], 'tbl' => ['value' => $this->_table, 'tbl' => 'address_book']]];
        $user = $this->getAllItem($data, $tables)->get_results();
        return $user ? current($user) : null;
    }

    // Get All Users
    public function get_users($method, $start = '', $limit = '', $html = true)
    {
        $tables = ['groups' => ['*'], 'group_user' => ['userID']];
        $data = ['join' => 'INNER JOIN', 'rel' => ['grID', 'groupID'], 'where' => ['name' => ['value' => 'admin', 'tbl' => 'groups']]];
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
        $data = isset($where) && !empty($where) ? array_merge(['join' => 'LEFT JOIN', 'rel' => ['userID', 'userID'], 'group_by' => 'userID DESC'], $where) : ['join' => 'LEFT JOIN', 'rel' => ['userID', 'userID'], 'group_by' => 'userID DESC'];
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
        $template = str_replace('{{image}}', ImageManager::asset_img(!empty($user->profileImage) ? unserialize($user->profileImage)[0] : 'users.avatar.png'), $template);
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
        $extra_data = (new UserExtraDataManager())->getDetails($m->userID, 'userID');
        $template = $temp;
        $template = str_replace('{{function}}', $extra_data->u_function ?? '', $template);
        $template = str_replace('{{address}}', $extra_data->u_address ?? '', $template);
        $extra_data = null;
        return $template;
    }

    // After find a user manage image profile
    public function afterFind($m = null)
    {
        $m->profileImage = isset($m->profileImage) && !empty($m->profileImage) ? unserialize($m->profileImage)[0] : '';
        return $m;
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
        $user = $this->get_single_user($item['id']);
        return $this->output_users_account_overview($template, $user);
    }

    // output account overview data
    public function output_users_account_overview($temp = '', $user = null)
    {
        $template = $temp;
        $template = str_replace('{{nom}}', $user->firstName ?? '' . '&nbsp;' . $user->lastName ?? '', $template);
        $template = str_replace('{{email}}', $user->email ?? '', $template);
        $template = str_replace(' {{csrftoken}}', FH::csrfInput('csrftoken', hash_hmac('sha256', 'user-profile-frm', $_SESSION[TOKEN_NAME])), $template);
        $template = str_replace('{{firstName}}', $user->firstName ?? '', $template);
        $template = str_replace('{{lastName}}', $user->lastName ?? '', $template);
        $template = str_replace('{{userID}}', AuthManager::$currentLoggedInUser->userID, $template);
        $template = str_replace('{{registerDate}}', AuthManager::$currentLoggedInUser->registerDate, $template);
        $template = str_replace('{{updateAt}}', AuthManager::$currentLoggedInUser->updateAt, $template);
        $template = str_replace('{{profileImage}}', $user->profileImage ? IMG . unserialize($user->profileImage)[0] : IMG . 'users' . US . 'avatar.png', $template);
        $template = str_replace('{{deleted}}', AuthManager::$currentLoggedInUser->deleted, $template);
        $template = str_replace('{{profession}}', $user->u_function ?? '', $template);
        $template = str_replace('{{usdID}}', $user->usdID, $template);
        $template = str_replace('{{phone}}', $user->phone ?? '', $template);
        $template = str_replace('{{address}}', $this->htmlDecode($user->address) ?? '', $template);
        $template = str_replace('{{ville}}', $this->htmlDecode($user->ville) ?? '', $template);
        $template = str_replace('{{region}}', $this->htmlDecode($user->region) ?? '', $template);
        $template = str_replace('{{zip_code}}', $this->htmlDecode($user->zip_code) ?? '', $template);
        $template = str_replace('{{checked}}', $user->principale == 'on' ? 'checked' : '', $template);
        $template = str_replace('{{gender}}', $user->gender ?? '', $template);
        $template = str_replace('{{u_descr}}', $user->u_descr ?? '', $template);
        $template = str_replace('{{dob}}', $user->dob ?? '', $template);
        return [$template, $this->get_countrie($user->pays)];
    }

    //=======================================================================
    //Set users permissions
    //=======================================================================
    // On insert
    public function afterSave($params = [])
    {
        // parent::beforeSave();
        if (isset($params['group'])) {
            $select2_data = $params['group'] ? json_decode($this->htmlDecode($params['group']), true) : [];
            $select2_data ? !$this->saveUserGroup($select2_data, $params['saveID']->get_lastID() ?? $params['userID']) : '';
        }
        // Manage default adresse
        if (!isset($params['principale'])) {
            $params['principale'] = null;
        }
        //save address
        if ($this->get_address_fields($params)) {
            $this->partial_save($params, ['tbl' => 'users', 'relID' => $params['userID']], 'address_book', $params['userID']);
        }
        // save user extra data
        if ($this->get_user_extra_data($params)) {
            $this->partial_save($params, ['userID' => $params['userID']], 'user_extra_data', $params['userID']);
        }
        return true;
    }

    //get address fields
    private function get_address_fields($params)
    {
        $ad = [];
        $ad['address'] = isset($params['address']) ? $params['address'] : '';
        $ad['zip_code'] = isset($params['zip_code']) ? $params['zip_code'] : '';
        $ad['ville'] = isset($params['ville']) ? $params['ville'] : '';
        $ad['pays'] = isset($params['pays']) ? $params['pays'] : '';
        $ad['principale'] = isset($params['principale']) ? $params['principale'] : '';

        foreach ($ad as $param) {
            if (empty($param)) {
                continue;
            } else {
                return true;
            }
        }
        return false;
    }

    //get user extra data fields
    private function get_user_extra_data($params)
    {
        $ux = [];
        $ux['u_descr'] = isset($params['u_descr']) ? $params['u_descr'] : '';
        $ux['gender'] = isset($params['gender']) ? $params['gender'] : '';
        $ux['dob'] = isset($params['dob']) ? $params['dob'] : '';
        $ux['u_function'] = isset($params['u_function']) ? $params['u_function'] : '';

        foreach ($ux as $param) {
            if (empty($param)) {
                continue;
            } else {
                return true;
            }
        }
        return false;
    }

    //Save user permission group
    public function saveUserGroup($params = [], $userID = '')
    {
        $user_roles = (new GroupUserManager())->getAllbyIndex($userID);
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
        if ($params && count($params) > 0) {
            foreach ($params as $role) {
                $user_group = (new GroupsManager())->getAllbyParams(['name' => strtolower($role['text'])]);
                if ($user_group->count() <= 0) {
                    $user_group->name = strtolower($role['text']);
                    $groupID = $user_group->save();
                }
                $user_roles->userID = $userID;
                $user_roles->groupID = $user_group->count() > 0 ? current($user_group->get_results())->grID : $groupID->get_lastID();
                if (!$user_roles->save()) {
                    $error = true;
                }
                $user_group = null;
            }
        }
        $user_roles = null;

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

    public function get_successMessage($method = '', $action = '')
    {
        switch ($method) {
            case 'update':
                if ($action == 'custom_message') {
                    return FH::showMessage('success text-center', 'Profil mis à jour ave succès');
                }
                return 'Profil mis a jour avec succès!';
                break;
            case 'delete':
                if ($action == 'restore_user') {
                    return 'Utilisateur restauré avec succès!';
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
