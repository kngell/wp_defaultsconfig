<?php

class PurchasesManager extends Model
{
    protected $_colID = 'phID';
    protected $_table = 'purchases';
    protected $_colIndex = 'productID';
    protected $_modelName;
    public $phID;
    public $whID; // Warehouse
    public $productID;
    public $unitID;
    public $packing_size;
    public $quantity;
    public $price;
    public $userID;
    public $purchase_type;
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
