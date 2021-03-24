<?php

class ProductManager extends Model
{
    protected $_colID = 'item_id';
    protected $_table = 'product';
    protected $_colIndex = '';
    protected $_colContent = '';
    protected $_modelName;
    public $item_id;
    public $item_brand;
    public $item_name;
    public $item_price;
    public $item_image;
    public $item_register;

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
}
