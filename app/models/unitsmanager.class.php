<?php

class UnitsManager extends Model
{
    protected $_colID = 'unID';
    protected $_table = 'units';
    protected $_colTitle = 'unit';
    protected $_modelName;
    public $unID;
    public $unit;
    public $descr;
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
    public function get_successMessage($method = '', $action = '')
    {
        if ($method == 'Add') {
            return 'Unité de mesure crée avec success!';
        } else {
            return 'L\'unité de mesure a été mise à jour';
        }
    }

    //Get Select2 fields Names
    public function get_fieldName($table = '')
    {
        return 'unit';
    }
}
