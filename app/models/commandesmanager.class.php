<?php

class CommandesManager extends Model
{
    protected $_colID = 'cmdID';
    protected $_table = 'commandes';
    protected $_colIndex = 'userID';
    protected $_colContent = '';
    protected $_modelName;
    public $cmdID;
    public $cmd_number;
    public $cmd_date;
    public $address_livraison;
    public $address_facturation;
    public $livraison_date;
    public $cmd_status;

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
        $template = file_get_contents(FILES . 'template' . DS . 'e_commerce' . DS . 'account' . DS . 'commandesTemplate.php');
        return [$template];
    }
}
