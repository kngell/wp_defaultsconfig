<?php

class CompanyManager extends Model
{
    protected $_colID = 'compID';
    protected $_table = 'company';
    protected $_colTitle = 'denomination';
    protected $_modelName;
    public $compID;
    public $sigle;
    public $denomination;
    public $siret;
    public $site_web;
    public $created_at;
    public $updated_at;
    public $rna;
    public $tva;
    public $activite;
    public $couriel;
    public $phone;
    public $mobile;
    public $fax;
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
    public function get_successMessage($method = '', $data = [])
    {
        switch ($method) {
            case 'update':
                return 'Compagnie mis a jour avec success!';
                break;
            case 'delete':
                return 'Compagnie Supprimé!';
                break;
            default:
                return 'Compagnie créee avec success!';
                break;
        }
    }

    public function getCompanyName($name = false)
    {
        return htmlspecialchars_decode(html_entity_decode($name ?? $this->denomination), ENT_QUOTES);
    }

    // Get All addresses
    public function getAllAddress($id)
    {
        $params = ['relID' => $id, 'tbl' => $this->_table];
        return !empty($id) ? (new AddressBookManager())->getAllbyParams($params)->get_results() : [];
    }

    //Output address html
    public function getCompanyAddressHtml($data)
    {
        if ($data) {
            $addressTemplate = file_get_contents(FILES . 'template' . DS . 'admin' . DS . 'companyaddressTemplate.php');
            foreach ($data as $add) {
                $addressTemplate = str_replace('{{address}}', $add->address, $addressTemplate);
                $addressTemplate = str_replace('{{zip_code}}', $add->zip_code, $addressTemplate);
                $addressTemplate = str_replace('{{ville}}', $add->ville, $addressTemplate);
                $addressTemplate = str_replace('{{pays}}', $add->pays, $addressTemplate);
            }
            return $addressTemplate;
        }
        return '';
    }

    //=======================================================================
    //Operations
    //=======================================================================

    //save addresse
    public function afterSave($params = [])
    {
        if (isset($params) && count($params) > 0) {
            $add = new AddressBookManager();
            $colID = $this->get_colID();
            $add->tbl = $this->_table;
            $add->relID = empty($this->$colID) ? $params['saveID']->get_lastID() : $this->$colID;
            $add->address = $params['address'];
            $add->zip_code = $params['zip_code'];
            $add->ville = $params['ville'];
            $add->pays = $params['pays'];
            if (!$add->save()->count() > 0) {
                return false;
            }
            $add = null;
        }
        return true;
    }

    // After Deleted
    public function afterDelete($params = [])
    {
        $data = ['where' => ['relID' => $params['id'], 'tbl' => $this->_table]];
        return $params['id'] ? (new AddressBookManager())->delete(null, $data) : false;
    }

    //Get Details company
    public function getDetails($id, $colID = '')
    {
        $tables = ['company' => ['*'], 'address_book' => ['*']];
        $params = ['join' => 'LEFT JOIN', 'rel' => ['compID', 'relID'], 'where' => [$this->get_colID() => $id]];
        $companies = array_filter($this->getAllItem($params, $tables)->get_results(), function ($comp) {
            if ($comp->get_tableName() == $this->_table) {
                $comp->sigle = $this->getCompanyName($comp->sigle) ;
                $comp->denomination = $this->getCompanyName($comp->denomination);
                return $comp;
            }
        });
        return $companies && count($companies) ? current($companies) : false;
    }
}
