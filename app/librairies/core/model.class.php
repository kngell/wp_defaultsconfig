<?php

abstract class Model
{
    protected $_db;
    protected $_modelName;
    protected $_softDelete = false;
    protected $update = true;
    protected $_results;
    protected $_count;
    protected $validates = true;
    protected $validationErr = [];

    public function __construct()
    {
        $this->_db = DBOperations::getInstance();
        $this->_results = $this->_db->get_results();
    }

    //=======================================================================
    //Gets
    //=======================================================================
    //get all tables
    public function getAll_tables()
    {
        return $this->_db->getAll_tables();
    }

    //get All Items
    public function getAllItem($params = [])
    {
        if (!empty($params) && in_array($params['table'], ['sessions_formations', 'offre_emploi'])) {
            return $this->getHtmlData($params);
        }
        return $this->find(['return_mode' => 'class']);
    }

    public function getHtmlData()
    {
    }

    //GetAll By uerID
    public function getAll($by_user = 0)
    {
        return $this->find(H::setQueryData($by_user));
    }

    //GetAll some element with a 1 limit
    public function getRecent_Items($limit)
    {
        return $this->find(['limit' => $limit, 'return_mode' => 'class', 'order_by' => $this->get_colID() . ' DESC']);
    }

    //GetAll interval min and max
    public function getAll_MinMax($min, $max)
    {
        return $this->find(['start' => $min, 'limit' => $max, 'return_mode' => 'class', 'order_by' => $this->get_colID() . ' DESC']);
    }

    //getAll by ID
    public function getAllbyIndex($index_value = '')
    {
        return $this->find(['where' => [$this->get_colIndex() => (int) $index_value], 'return_mode' => 'class']);
    }

    //get selected options
    public function getAll_inputSelectOptions($parentID = 0, $sub_option = '')
    {
        // $table = $this->get_tableName();
        $options = $parentID == 0 ? $this->getAllItem()->get_results() : $this->getAllbyIndex($parentID)->get_results();
        $my_options = '';
        if ($options) {
            $colID = $this->get_colID();
            $colTitle = $this->get_colTitle();
            foreach ($options as $option) {
                $my_options .= '<option value="' . $option->$colID . '">' . $sub_option . $option->$colTitle . '</option>';
                $my_options .= $parentID != 0 ? $this->get_Children($option, $sub_option) : '';
            }
        }
        return $my_options;
    }

    //output nested Items
    public function get_Children($option = null, $sub_option = '')
    {
        $item = '';
        $colID = $option->get_colID();
        $childrens = $this->getAllbyIndex($option->$colID)->get_results();
        if ($childrens) {
            foreach ($childrens as $children) {
                $item .= $children->getAll_inputSelectOptions($children->parentID, $sub_option . '--- ');
            }
        }
        return $item;
    }

    public function get_parent($id)
    {
        return $this->getDetails($id);
    }

    //getAll by any column
    public function getAllbyAnyColumn($params = [])
    {
        return $this->find(['where' => $params, 'return_mode' => 'class']);
    }

    //Get details by id
    public function getDetails($id)
    {
        $data_query = ['where' => [$this->get_colID() => $id], 'return_mode' => 'class'];
        return $this->findFirst($data_query);
    }

    //get colID
    public function get_colID()
    {
        return isset($this->_colID) ? $this->_colID : '';
    }

    //get title
    public function get_colTitle()
    {
        return $this->_colTitle;
    }

    //get results
    public function get_results()
    {
        return $this->_results;
    }

    //get indexed colID
    public function get_colIndex()
    {
        return $this->_colIndex;
    }

    //get col content
    public function get_colContent()
    {
        return $this->_colContent;
    }

    //get tables coloumn
    public function get_Tables_Column($table)
    {
        $column = $this->setTableColumns($table);
        foreach ($column as $key => $val) {
            $colomns[] = '$' . $val;
        }
        $colomns = implode(',', $colomns);
        return $colomns;
    }

    //get table columns
    public function get_columns($table)
    {
        return $this->_db->getColumn($table);
    }

    //get table Name
    public function get_tableName()
    {
        return $this->_table;
    }

    //get data from objets
    public function data()
    {
        $data = new stdClass();
        foreach (H::getObjectProperties($this) as $column => $value) {
            $data->column = $value;
        }
        return $data;
    }

    //get db connexion
    public function getDB()
    {
        return $this->_db;
    }

    //get date time format
    public function getDate($date): string
    {
        return (new DateTime($date))->format('d-m-Y');
    }

    public function getfrontDate($date): string
    {
        return (new DateTime($date))->format('d/m/Y');
    }

    // post content 200 char
    public function getContentOverview($content): string
    {
        // $headercontent = preg_match_all('|<h[^>]+>(.*)</h[^>]+>|iU', htmlspecialchars_decode($content, ENT_NOQUOTES), $headings);
        return substr(strip_tags(htmlspecialchars_decode($this->$content, ENT_NOQUOTES)), 0, 200) . '...';
    }

    //get Selected Options
    public function getOptions($t_options = '')
    {
        switch ($t_options) {
            case 'categories':
                return $this->getpostCategorie();
                break;
            case 'programme_formation':
                return $this->getProgrammeOption();
                break;

            default:
                // code...
                break;
        }
    }

    // Selected categories
    public function getSelectedOptions($allOptions, $selectedOptions)
    {
        $all = $allOptions;
        foreach ($all as $option) {
            $option->selected = '';
        }
        foreach ($all as $option) {
            $colID = $colID ?? $option->get_colID();
            foreach ($selectedOptions as $sc) {
                if ($option->$colID == $sc->$colID) {
                    $option->selected = 'selected';
                } elseif ($option->selected != 'selected') {
                    $option->selected = '';
                }
            }
        }
        return $all;
    }

    public function getpostCategorie()
    {
    }

    public function getProgrammeOption()
    {
    }

    //=======================================================================
    //Sets
    //=======================================================================
    // set table columns
    public function setTableColumns($table)
    {
        $columns = $this->get_columns($table);

        foreach ($columns as $column) {
            $columnName[] = $column->Field;
        }
        return $columnName;
    }

    //set soft delete to true (=update)
    public function sets_SoftDeleteOnTrue()
    {
        $this->_softDelete = true;
    }

    public function _set_tableName($table)
    {
        $this->_table = $table;
    }

    //set model name
    protected function _set_ModelName($name)
    {
        $this->_modelName = $name;
    }

    //set ID
    protected function _set_Id($id)
    {
        $this->userID = $id;
    }

    //Set query params deleted
    protected function _softDelete_Params($params)
    {
        if ($this->_softDelete) {
            if (array_key_exists('where', $params)) {
                if (is_array($params['where'])) {
                    $params['where'] = array_merge($params['where'], ['deleted' => !1]);
                } else {
                    $params['where'] .= ['deleted' => !1];
                }
            } else {
                $params['where'] = ['deleted' => !1];
            }
        }
        return $params;
    }

    //assign data to objects
    public function assign($params)
    {
        if (!empty($params)) {
            foreach ($params as $key => $val) {
                if (!is_array($key) && property_exists($this, $key)) {
                    $this->$key = $val;
                }
            }
            return true;
        }
        return false;
    }

    //=======================================================================
    //Findind datas
    //=======================================================================

    //find all
    public function find($params = [])
    {
        $params = $this->_softDelete_Params($params);
        if (isset($params['return_mode']) && $params['return_mode'] == 'class') {
            if (!isset($params['class'])) {
                $params = array_merge($params, ['class' => get_class($this)]);
            }
        }
        //$resultsQuery = $this->_db->select($this->_table, $params);
        $this->_results = $this->_db->select($this->_table, $params)->get_results();
        $this->_count = $this->_db->count();
        return $this;
    }

    //Find first corresponding record
    public function findFirst($params = [])
    {
        if (isset($params['return_mode']) && $params['return_mode'] == 'class') {
            if (!isset($params['class'])) {
                $params = array_merge($params, ['class' => get_class($this)]);
            }
        }
        $params = $this->_softDelete_Params($params);
        $resultQuery = $this->_db->findFirst($this->_table, $params);
        if (!$resultQuery) {
            return false;
        }
        $resultQuery->_count = $this->_db->count();
        return $resultQuery;
    }

    //Count rows/records
    public function count()
    {
        return $this->_count;
    }

    //populate data
    public function populateObjData($result)
    {
        //dd($this);
        foreach ($result as $key => $val) {
            $this->$key = $val;
        }
    }

    //=======================================================================
    //Inserting Data
    //=======================================================================
    public function insert($fields)
    {
        if (empty($fields)) {
            return false;
        }
        $insert = $this->_db->create($this->_table, $fields);
        $this->_count = $this->_db->count();
        return $insert;
    }

    public function notify($userID, $type, $message)
    {
        $this->_table = 'notification';
        $fields = ['type' => $type, 'message' => $message, 'userID' => $userID];
        $this->insert($fields);
    }

    //=======================================================================
    //Updating Data
    //=======================================================================

    public function update($cond, $fields)
    {
        if (isset($fields['id'])) {
            unset($fields['id']);
        }
        $update = $this->_db->update($this->_table, $fields, $cond);
        $this->_count = $update->count();
        return $update;
    }

    //=======================================================================
    //Deleting Data
    //=======================================================================
    public function delete($id = '', $params = [])
    {
        if ($id == '' && $this->userID = '') {
            return false;
        }
        $id = ($id == '') ? $this->id : $id;
        $params = array_merge($params, [$this->get_colID() => $id]);
        if ($this->beforeDelete()) {
            if ($this->_softDelete) {
                $delete = $this->_db->update($this->_table, ['deleted' => 1], $params);
            } else {
                $delete = $this->_db->delete($this->_table, $params);
            }
        }
        if ($delete) {
            $del_actions = $this->afterDelete($params);
        }
        return $del_actions ? $del_actions : $delete;
    }

    public function deleteAllNullIndex()
    {
        $sql = 'DELETE FROM ' . $this->_table . ' WHERE ' . $this->_Index . ' IS NULL';
        return $this->execquery($sql);
    }

    //======================================================================
    //Custom query exec
    //=======================================================================

    public function execquery($sql, $data = [], $cond = [])
    {
        return $this->_db->CustomQueryExec($sql, $data, $cond);
    }

    //=======================================================================
    //Save data
    //=======================================================================
    //Save
    public function save($col = '')
    {
        if ($data = $this->beforeSave()) {
            $fields = H::getObjectProperties($this);
            if (property_exists($this, 'id') && $this->id != '') {
                $fields = $this->beforeSaveUpadate($fields);
                $save = $this->update([($col == '') ? $this->get_colID() : $col => $this->id], $fields);
                $this->afterSave();
                return ($save->count() > 0);
            } else {
                $fields = $this->beforeSaveInsert($fields);
                $save = $fields ? $this->insert($fields) : $fields;
                $this->afterSave();
                return $save;
                //  }
            }
        }
        return $data;
    }

    //before save
    public function beforeSave()
    {
        if (isset(UsersManager::$currentLoggedInUser->userID) && property_exists($this, 'userID')) {
            if (!isset($this->userID) || empty($this->userID) || $this->userID == null) {
                $this->userID = UsersManager::$currentLoggedInUser->userID;
            }
        }
        if (isset($this->msg)) {
            unset($this->msg);
        }
        if (isset($this->fileErr)) {
            unset($this->fileErr);
        }
        return true;
    }

    //Before savewhen updating
    public function beforeSaveUpadate($fields = [])
    {
        $f = $fields;
        $current = new DateTime();
        $f['updateAt'] = $f['updateAt'] == '' ? $current->format('Y-m-d H:i:s') : '';
        return $f;
    }

    //Befor save when inserting
    public function beforeSaveInsert($fields = [])
    {
        $f = $fields;
        if (array_key_exists('token', $f)) {
            unset($f['token']);
        }
        if (isset($f['fmt'])) {
            unset($f['fmt']);
        }
        foreach ($f as $key => $val) {
            if (empty($val)) {
                unset($f[$key]);
            }
        }
        if (array_key_exists($this->get_colID(), $f)) {
            unset($f[$this->get_colID()]);
        }
        return $f;
    }

    //After save
    public function afterSave()
    {
    }

    //Before delete
    public function beforeDelete()
    {
        return true;
    }

    //After delete
    public function afterDelete($params = [])
    {
        return true;
    }

    //=======================================================================
    //Validate data
    //=======================================================================
    //run Validator
    public function runValidation($validator)
    {
        $key = $validator->field;
        //dd($validator);
        if (!$validator->success) {
            $this->validates = false;
            $this->validationErr[$key] = $validator->msg;
        }
        //dd($validator);
    }

    //get errors when validating
    public function getErrorMessages()
    {
        return $this->validationErr;
    }

    //check for validation
    public function validationPasses()
    {
        return $this->validates;
    }

    //add message after validation
    public function addErrMessage($field, $msg)
    {
        $this->validates = false;
        $this->validationErr[$field] = $msg;
    }

    //run validator
    public function validator($source = [], $items = [])
    {
        FH::validate_forms($source, $items, $this);
    }

    //=======================================================================
    //Other operations
    //=======================================================================
    //Check is new object
    public function isNew()
    {
        return (property_exists($this, 'id') && !empty($this->id)) ? false : true;
    }

    //Count total table
    public function TotalCount($table)
    {
        $this->_table = $table;
        $conditions = ['return_type' => 'count'];
        $count = $this->find($conditions)->count();
        return $count;
    }

    //count by index
    public function countByIndex($index)
    {
        return $this->find(['where' => [$this->get_colIndex() => $index], 'return_type' => 'count']);
    }
}
