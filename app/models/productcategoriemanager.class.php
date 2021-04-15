<?php

class ProductCategorieManager extends Model
{
    protected $_colID = 'pcID';
    protected $_table = 'product_categorie';
    protected $_colIndex = 'pdtID';
    protected $_modelName;
    public $pcID;
    public $pdtID;
    public $catID;
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
