<?php

class ProductsManager extends Model
{
    protected $_colID = 'pdtID';
    protected $_table = 'products';
    protected $_colTitle = 'p_title';
    protected $_colIndex = '';
    protected $_colContent = 'p_cat_id';
    protected $_modelName;
    public $pdtID;
    public $p_title;
    public $p_short_descr;
    public $p_descr;
    public $p_regular_price;
    public $p_sales_price;
    public $p_media;
    public $p_sku;
    public $p_sku_status;
    public $p_lot_size;
    public $create_at;
    public $update_at;

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
