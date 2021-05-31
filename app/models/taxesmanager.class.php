<?php
class TaxesManager extends Model
{
    protected $_colID = 'tID';
    protected $_table = 'taxes';
    protected $_colTitle = 't_name';
    protected $_modelName;
    public $tID;
    public $t_name;
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
}
