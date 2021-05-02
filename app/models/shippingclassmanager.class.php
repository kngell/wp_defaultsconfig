<?php

class ShippingClassManager extends Model
{
    protected $_colID = 'shcID';
    protected $_table = 'shipping_class';
    protected $_colTitle = 'sh_name';
    protected $_modelName;
    public $shcID;
    public $sh_name;
    public $sh_descr;
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
