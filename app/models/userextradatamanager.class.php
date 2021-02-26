<?php
class UserextradataManager extends Model
{
    protected $_colID = 'usdID';
    protected $_table = 'user_extra_data';
    protected $_colIndex = 'userID';
    public $userID;
    public $u_address;
    public $u_drescr;
    public $u_function;
    public $date_enreg;
    public $updateAt;
    public $u_total_spend;

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
                $this->_results = $u->get_results();
                foreach ($this->_results as $key => $val) {
                    $this->$key = $val;
                }
            }
        }
    }

    //=======================================================================
    //Find and check users
    //=======================================================================
}
