<?php
class TaxesRegionManager extends Model
{
    protected $_colID = 'trID';
    protected $_table = 'taxe_region';
    protected $_colTitle = 'tr_rate';
    protected $_colIndex = 'tr_country_code';
    protected $_modelName;
    public $trID;
    public $tr_tax_ID;
    public $tr_code;
    public $tr_rate;
    public $tr_country_code;
    public $tr_country;
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
}
