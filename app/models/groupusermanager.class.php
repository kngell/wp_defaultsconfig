<?php

class GroupUserManager extends Model
{
    protected $_colID = 'gruID';
    protected $_table = 'group_user';
    protected $_colIndex = 'userID';
    protected $_modelName;
    public $gruID;
    public $userID;
    public $groupID;
    public $date_enreg;
    public $updateAt;

    //=======================================================================
    //construct
    //=======================================================================
    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
    }

    //=======================================================================
    //Getters & setters
    //=======================================================================

    //=======================================================================
    //Operations
    //=======================================================================
}
