<?php

class LoginAttemptsManager extends Model
{
    protected $_colID = 'laID';
    protected $_table = 'login_attempts';
    protected $_colIndex = 'userID';
    protected $_modelName;
    public $laID;
    public $userID;
    public $ip;
    public $timesamp;
    public $created_at;
    public $updated_at;

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
