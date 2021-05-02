<?php

class AddressBookManager extends Model
{
    protected $_colID = 'abID';
    protected $_table = 'address_book';
    protected $_colIndex = 'table';
    protected $_colContent = '';
    protected $_modelName;
    public $abID;
    public $tbl;
    public $relID;
    public $address;
    public $zip_code;
    public $ville;
    public $region;
    public $pays;
    public $principale;
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
    public function getHtmlData($item = [])
    {
        $template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'account' . DS . 'addessTemplate.php');
        return [$template];
    }
}
