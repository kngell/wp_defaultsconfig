<?php

class GroupsManager extends Model
{
    protected $_colID = 'grID';
    protected $_table = 'groups';
    protected $_colIndex = 'parentID';
    protected $_colContent = '';
    protected $_modelName;
    public $grID;
    public $name;
    public $description;
    public $status;
    public $date_enreg;
    public $updateAt;
    public $parentID;

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
    public function getSelect2Data($params)
    {
        $search = strtolower($params['searchTerm']);
        $data = $this->getAllItem()->get_results();
        $output = array_filter($data, function ($item) use ($search) {
            return str_starts_with(strtolower($item->name), $search);
        });
        return array_map(
            function ($group) {
                $colID = $group->get_colID();
                return ['id' => (int)$group->$colID, 'text' => $group->name];
            },
            $output
        );
    }

    //=======================================================================
    //Operations
    //=======================================================================
    public function beforeSave()
    {
        parent::beforeSave();
        if ($this->status == 'on') {
            $this->status = '1';
        }
        return true;
    }
}
