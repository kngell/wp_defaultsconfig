<?php
use Brick\Money\Money;

abstract class Model
{
    protected $_db;
    protected $_modelName;
    protected $_softDelete = false;
    protected $_deleted_item = false;
    protected $update = true;
    protected $_lastID = false;
    protected $_results;
    protected $_count;
    protected $validates = true;
    protected $validationErr = [];

    public function __construct()
    {
        $this->_db = DBOperations::getInstance();
    }

    //=======================================================================
    //Getterss
    //=======================================================================
    // Get model Name
    public function get_modeName()
    {
        return $this->_modelName;
    }

    //get all tables
    public function getAll_tables()
    {
        return $this->_db->getAll_tables();
    }

    //get All Items
    public function getAllItem($params = [], $tables = [])
    {
        return $this->find($params ? array_merge(['return_mode' => 'class'], $params) : ['return_mode' => 'class'], !$tables ? [] : $tables);
    }

    public function getHtmlData($params = [])
    {
    }

    //GetAll By uerID
    public function getAll($by_user, $params = [], $tables = [])
    {
        return $this->find($params ? array_merge($params, H::setQueryData($by_user)) : H::setQueryData($by_user), $tables ? $tables : '');
    }

    //GetAll interval min and max
    public function getAll_MinMax($min, $max, $params = [], $tables = [])
    {
        $data = $params ? array_merge(['offset' => $min, 'limit' => $max, 'return_mode' => 'class', 'order_by' => $this->get_colID() . ' DESC'], $params) : ['offset' => $min, 'limit' => $max, 'return_mode' => 'class', 'order_by' => $this->get_colID() . ' DESC'];
        return $this->find($data, $tables ? $tables : '');
    }

    //getAll by ID
    public function getAllbyIndex($index_value, $params = [], $tables = [])
    {
        $colIndex = $this->get_colIndex();
        $data = $params ? array_merge(['where' => [$colIndex => $index_value], 'return_mode' => 'class'], $params) : ['where' => [$colIndex => $index_value], 'return_mode' => 'class'];
        return !empty($colIndex) ? $this->find($data, $tables ? $tables : '') : null;
    }

    //Output parent
    public function get_parent($id)
    {
        return $this->getDetails($id);
    }

    //getAll by any column
    public function getAllbyParams($params = [], $tables = [])
    {
        return $this->find(['where' => $params, 'return_mode' => 'class'], $tables ? $tables : '');
    }

    //Get details by id
    public function getDetails($id, $colID = '')
    {
        $data_query = ['where' => [$colID != '' ? $colID : $this->get_colID() => $id], 'return_mode' => 'class'];
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
        return isset($this->_colTitle) ? $this->_colTitle : '';
    }

    //get results
    public function get_results()
    {
        return isset($this->_results) ? $this->_results : [];
    }

    //get indexed colID
    public function get_colIndex()
    {
        return isset($this->_colIndex) ? $this->_colIndex : '';
    }

    //get col content
    public function get_colContent()
    {
        return isset($this->_colContent) ? $this->_colContent : '';
    }

    // Check for unique identifiant
    public function get_unique($id_name)
    {
        $output = (new Token())->user_identifiant(24);
        while ($this->getDetails($output, $id_name)) :
            $output = (new Token())->user_identifiant(24);
        endwhile;
        return $output;
    }

    //get tables coloumn
    public function get_Tables_Columns($table)
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

    //get currency
    public function get_currency($p)
    {
        return Money::of($p, 'EUR');
    }

    //get date time format
    public function getDate($date): string
    {
        return (new DateTime($date))->format('d-m-Y');
    }

    // public function getfrontDate($date): string
    // {
    //     return (new DateTime($date))->format('d/m/Y');
    // }

    // post content 200 char
    public function getContentOverview($content, $length = '', $url = ''): string
    {
        // $headercontent = preg_match_all('|<h[^>]+>(.*)</h[^>]+>|iU', htmlspecialchars_decode($content, ENT_NOQUOTES), $headings);
        return substr(strip_tags(htmlspecialchars_decode($content, ENT_NOQUOTES)), 0, empty($length) ? 200 : $length) . '<a href="' . $url . '" class="text-decoration-none">...</a>';
    }

    //Get selected options
    public function get_Options($selected_optons = [], $m = null)
    {
        $all_options = $m->getAllItem()->get_results();
        if (!$selected_optons) {
            return [];
        }
        return  [array_map(
            function ($option) {
                $colID = $option->get_colID();
                $title = $option->get_colTitle();
                return ['id' => (int)$option->$colID, 'text' => $this->htmlDecode($option->$title)];
            },
            $all_options
        ), array_map(
            function ($id) {
                return $id;
            },
            array_keys($selected_optons)
        )];
    }

    //Get selected options
    public function get_selectedOptions()
    {
        $colID = $this->get_colID();
        $colTitle = $this->_colTitle;
        $response = [];
        if (isset($this->parentID)) {
            $selected_option = $this->getDetails($this->parentID, $colID);
            if ($selected_option) {
                $response[$selected_option->$colID] = $this->htmlDecode($selected_option->$colTitle);
            }
        } else {
            $response[$this->$colID] = $this->htmlDecode($this->$colTitle);
        }
        return $response;
    }

    //Get countrie
    public function get_countrie($ctr = '')
    {
        $data = file_get_contents(APP . 'librairies' . DS . 'database' . DS . 'json' . DS . 'countries.json');
        $country = array_filter(array_column(json_decode($data, 1), 'name'), function ($countrie) use ($ctr) {
            return $countrie == $ctr;
        }, ARRAY_FILTER_USE_KEY);
        return $country;
    }

    public function getpostCategorie()
    {
    }

    public function getProgrammeOption()
    {
    }

    public function getGroupsOption()
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
    public function set_SoftDelete($value)
    {
        $this->_softDelete = $value;
    }

    //set deleted items
    public function set_deleted($value)
    {
        return $this->_deleted_items = $value;
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
    protected function set_deleted_Params($params)
    {
        if (property_exists($this, 'deleted')) {
            if (!$this->_deleted_item) {
                if (array_key_exists('where', $params) && is_array($params['where'])) {
                    $params['where'] = array_merge($params['where'], ['deleted' => !1]);
                } else {
                    $params['where'] = ['deleted' => !1];
                }
            } else {
                if (array_key_exists('where', $params) && is_array($params['where'])) {
                    $params['where'] = array_merge($params['where'], ['deleted' => 1]);
                } else {
                    $params['where'] = ['deleted' => 1];
                }
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
    public function find($params = [], $tables = [])
    {
        $params = $this->set_deleted_Params($params);
        if (isset($params['return_mode']) && $params['return_mode'] == 'class') {
            if ($params && !isset($params['class'])) {
                $params = array_merge($params, ['class' => get_class($this)]);
            }
        }
        $this->_results = $this->_db->select($tables ? $tables : $this->_table, $params)->get_results();
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
        $params = $this->set_deleted_Params($params);
        $resultQuery = $this->_db->findFirst($this->_table, $params);
        if (!$resultQuery) {
            return null;
        }
        $resultQuery->_count = $this->_db->count();
        $resultQuery = $this->afterFind($resultQuery);
        return $resultQuery;
    }

    public function afterFind($r = null)
    {
        return $r;
    }

    //Count rows/records
    public function count()
    {
        return $this->_count;
    }

    public function htmlDecode($str)
    {
        return !empty($str) ? htmlspecialchars_decode(html_entity_decode($str), ENT_QUOTES) : false;
    }

    //populate data
    public function populateObjData($result)
    {
        $r = $result;
        foreach ($r as $key => $val) {
            if (!property_exists($this, $key)) {
                $this->createProperty($key, $val);
            }
        }
        return $this;
    }

    public function createProperty($name, $value)
    {
        $this->{$name} = $value;
    }

    // Find select2 data
    public function getSelect2Data($params)
    {
        $search = strtolower($params['searchTerm']);
        $where = isset($params['parentID']) && $params['parentID'] != '' ? ['company' => $params['parentID']] : [];
        $data = $where ? $this->getAllbyParams($where)->get_results() : $this->getAllItem()->get_results() ;
        $colTitle = $this->get_colTitle();
        $output = array_filter($data, function ($item) use ($search, $colTitle) {
            return str_starts_with(strtolower($item->$colTitle), $search);
        });
        return array_map(
            function ($group) use ($colTitle) {
                $colID = $group->get_colID();
                return ['id' => (int)$group->$colID, 'text' => $this->htmlDecode($group->$colTitle)];
            },
            $output
        );
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
        $this->_count = $insert->count();
        $this->_lastID = $insert->get_lastID();
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

    //Update status
    public function updateStatus($item = [])
    {
        $elts = $this->getDetails($item['id']);
        $output = '';
        if ($elts) {
            if (!property_exists($elts, 'status')) {
                return '';
            } else {
                $elts->status = $elts->status == 1 ? 0 : 1;
            }
            $elts->id = $item['id'];
            $output = '';
            if ($elts->save()) {
                if ($elts->status == 1) {
                    $output = 'green';
                } else {
                    $output = '#dc3545';
                }
            }
        }
        return $output;
    }

    //=======================================================================
    //Deleting Data
    //=======================================================================
    //Main delete
    public function delete($id = null, $params = [])
    {
        $colID = $this->get_colID();
        $id = ($id == '') ? $this->$colID : $id;
        $params = !$id ? $params : array_merge($params, ['where' => [$this->get_colID() => $id]]);
        if ($params = $this->beforeDelete($params)) {
            if ($this->_softDelete) {
                $delete = $this->_db->update($this->_table, isset($params['restore']) ? $params['restore'] : ['deleted' => 1], $params['where']);
            } else {
                $delete = $this->_db->delete($this->_table, $params);
            }
        }
        if ($delete->count() > 0) {
            $del_actions = $this->afterDelete($params);
        }

        return isset($del_actions) ? $del_actions : $delete;
    }

    //Delete Cart =>Ecommerce
    public function delete_cart($params = [], $id = '')
    {
        if (Cookies::exists(VISITOR_COOKIE_NAME)) {
            $user_cart = $this->getAllbyIndex(Cookies::get(VISITOR_COOKIE_NAME))->get_results();
            $item = current(array_filter($user_cart, function ($cart) use ($params) {
                return $cart->item_id == $params['item_id'];
            }));
        }
        return $item ? $item->delete() : false;
    }

    //=======================================================================
    //Save data
    //=======================================================================
    //Master Save
    public function save($params = [])
    {
        if ($data = $this->beforeSave($params)) {
            $fields = H::getObjectProperties($this);
            if (property_exists($this, 'id') && $this->id != '') {
                $fields = $this->beforeSaveUpadate($fields);
                $save = $this->update([(!isset($params['colID'])) ? $this->get_colID() : $params['colID'] => $this->id], $fields);
            } else {
                $fields = $this->beforeSaveInsert($fields);
                $save = $this->insert($fields);
            }
            if ($save->count() > 0) {
                $params['saveID'] = $save ?? '';
                $this->afterSave($params);
                return $save;
            }
        }
        return $data;
    }

    //Partial save
    public function partial_save($data = [], $params = [], $table = '', $index = '')
    {
        if (!empty($table)) {
            $m = str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager';
            $p_data = (new $m())->getAllbyParams($params);
            if ($p_data->count() > 0) {
                $colID = $p_data->get_colID();
                $p_data = current($p_data->get_results());
                $p_data->id = $p_data->$colID;
            } else {
                $p_data->tbl = $table;
                $p_data->relID = $index;
            }
            $p_data->assign($data);
            if ($p_data->save()->count() > 0) {
                $p_data = null;
                return true;
            }
            $p_data = null;
        }
        return false;
    }

    //before save
    public function beforeSave()
    {
        if (isset(AuthManager::$currentLoggedInUser->userID) && property_exists($this, 'userID')) {
            if (!isset($this->userID) || empty($this->userID) || $this->userID == null) {
                $this->userID = AuthManager::$currentLoggedInUser->userID;
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
        $key = current(array_filter(array_keys($fields), function ($field) {
            return str_starts_with($field, 'update');
        }));
        if ($key && !is_array($key)) {
            $f[$key] = $current->format('Y-m-d H:i:s');
        }

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
    public function beforeDelete($params = [])
    {
        return $params;
    }

    //After delete
    public function afterDelete($params = [])
    {
        $params = null;
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

    //other related parent children related links
    public function search_relatedLinks($id, $main_table, $colID)
    {
        $tables = $this->getAll_tables();
        $links = false;
        if ($tables) {
            foreach ($tables as $table) {
                $this->_table = $table->{'Tables_in_kngell_eshopping'};
                if ($this->_table != $main_table) {
                    $fields = [];
                    $columns = $this->get_columns($this->_table);
                    foreach ($columns as $column) {
                        if ($column->Field == $colID) {
                            $fields[$column->Field] = $id;
                        };
                    }
                    if (!empty($fields)) {
                        if ($links = $this->find(['where' => $fields])->count()) {
                            break;
                        }
                    }
                }
            }
            $this->_set_tableName($main_table);
        }

        return $links;
    }

    //check empty parent items, categories, brands, groups etc...
    public function check_forEmptyParent($parentID = '')
    {
        $childItems = property_exists($this, '_colIndex') ? $this->getAllbyIndex($parentID)->get_results() : [];
        // $otherlink = $this->search_relatedLinks($parentID, $this->get_tableName(), $this->get_colID());
        $output = '';
        $output .= ($childItems) ? '<span class="lead text-black-50"> There are releted items : </span>' : '';
        $output .= ($childItems) ? '<div class="py-2 text-gray ps-3">' : '';
        if ($childItems) {
            foreach ($childItems as $childItem) {
                $ponctuation = $childItem === end($childItems) ? '.' : ',';
                $coltitle = $childItem->get_colTitle();
                $output .= '<p class="my-0 italic">' . $childItem->$coltitle . $ponctuation . '</p>';
            }
        }
        $output .= ($childItems) ? '</div>' : '';
        $output .= ($childItems) ? '<span class="text-center pt-3" style="font-size:.9rem">Do you really want to delete it ?</span>' : '';
        return $output;
    }
}
