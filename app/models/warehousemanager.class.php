<?php

class WarehouseManager extends Model
{
    protected $_colID = 'whID';
    protected $_table = 'warehouse';
    protected $_colIndex = 'company';
    protected $_colTitle = 'wh_name';
    protected $_modelName;
    public $whID;
    public $wh_name;
    public $wh_descr;
    public $created_at;
    public $updated_at;
    public $deleted;

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
