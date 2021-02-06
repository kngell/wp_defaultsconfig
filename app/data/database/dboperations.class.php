<?php

class DBOperations extends Database
{
    private $_count = 0;
    private $_results = null;
    private $_lastinsertID = null;
    private $_error = false;
    private $_exec_data;
    private static $_instance = null;

    //Getinstance
    public static function getInstance()
    {
        if (!isset(self::$_instance)) {
            self::$_instance = new DBOperations();
        }
        return self::$_instance;
    }
    
    //=======================================================================
    //General Select from table
    //=======================================================================
    //Select

    //$order_by = array( 'order_by' => 'email DESC' );
    //$data = [select =>item1,item2];
    ////Sect conditions
    //$whereconditions = [
    //    'where' => array( 'userID' => 29, 'email' => 'abomoe@gmail.com' ),
    //    'return_type' => 'single',
    //];
    //$limit=array('start'=>'2', 'limit'=>'2');
    public function select($table, $data = [])
    {
        $this->_error = false;
        $this->_exec_data = [];
        $this->_count = 0;
        $this->_results = '';


        $sql = $this->query_select_construction($table, $data);
        
        //execute
        if ($q = $this->execQuery($sql, isset($this->_exec_data['where']) ? $this->_exec_data['where'] : [])) { //execute();
            //Result
            $this->_count = $q->rowCount();
        } else {
            $this->_error = true;
        }

        if (!$this->_error) {
            $this->_results =$this->select_result($q, $data);
            return $this;
        } else {
            return $this->_error;
        }
    }

    
    public function get($table, $where)
    {
        return $this->select($table, $where);
    }

    //=======================================================================
    //Select/Find first
    //=======================================================================
    public function findFirst($table, $data = [])
    {
        $this->_error = false;
        $this->_exec_data = [];
        $this->_error = false;
        $this->_exec_data = [];
        $this->_count = 0;
        $this->_results = '';

        
        $sql = $this->query_select_construction($table, $data);

        //execute
        if ($q = $this->execQuery($sql, isset($this->_exec_data['where']) ? $this->_exec_data['where'] : [])) {
            //dd(!$this->_error);
            //Result
            $data = array_merge($data, ['return_type'=>'first']);
            $this->_count = $q->rowCount();
            $this->_results = $this->select_result($q, $data);
        } else {
            $this->_error = true;
        }
        if (!$this->_error) {
            return  $this->_results;
        } else {
            return $this->_error;
        }
    }

    //=======================================================================
    //Query Select contruction
    //=======================================================================

    private function query_select_construction($table, $data)
    {
        if (strpos($table, 'SELECT')!==false) {
            $sql = $table;
        } else {
            $sql = ' SELECT ';
            $sql .= array_key_exists("select", $data) ? $data[ 'select' ] : '*';
            $sql .= ' FROM ' . $table;
        }
        //Conditions
        if (array_key_exists("where", $data)) {
            $sql .= ' WHERE ';
            $i = 0;
            $op = isset($data['op']) ? $data['op'] : ' AND ';
            $comparator = isset($data['comparator']) ? $data['comparator'] : '=';
            foreach ($data[ 'where' ] as $key => $value) {
                $add = ($i > 0) ? ' ' . $op . ' ' : '';
                $sql .= ($comparator != "=") ? "$add" . "$key " . $comparator . " CONCAT('%',:$key,'%')" : "$add" . "$key=:$key";
                $i++;
            }
            if (isset($data['op']) || isset($data['comparator'])) {
                unset($data['op'],$data['comparator']);
            }
        }
        //Goup By
        if (array_key_exists("group_by", $data)) {
            $sql .= ' GROUP BY ' . $data[ 'group_by' ];
            unset($data[ 'group_by' ]);
        }

        //Order
        if (array_key_exists("order_by", $data)) {
            $sql .= ' ORDER BY ' . $data[ 'order_by' ];
            unset($data[ 'order_by' ]);
        }

        //Limits
        if (array_key_exists("start", $data) && array_key_exists("limit", $data)) {
            $sql .= ' LIMIT ' . $data[ 'start' ] . ',' . $data[ 'limit' ];
            unset($data[ 'start' ]);
            unset($data[ 'limit' ]);
        } elseif (!array_key_exists("start", $data) && array_key_exists("limit", $data)) {
            $sql .= ' LIMIT ' . $data[ 'limit' ];
            unset($data[ 'limit' ]);
        }
        
        $this->_exec_data = $data;

        return $sql;
    }
    //=======================================================================
    //Manage select results from query exec
    //=======================================================================

    private function select_result($q, $data)
    {
        $value = '';
        $type = $this->typeMode($data);

        // $type = array_key_exists("return_mode", $data) ? PDO::FETCH_OBJ : PDO::FETCH_ASSOC;
        if (array_key_exists('return_mode', $data) && $data[ 'return_mode' ]=='class') {
            if (array_key_exists("return_type", $data)) {
                switch ($data[ 'return_type' ]) {
                case 'count':
                    $value = $this->_count;
                break;
                case 'single':
                    $q->setFetchMode(PDO::FETCH_CLASS, $data['class']);
                    $value = $q->fetch(PDO::FETCH_CLASS);
                    //$value = $q->fetch(PDO::FETCH_OBJ);
                break;
                case 'first':
                    $value = current($q->fetchAll($type, $data['class']));
                break;
                default:
                    $value ='';
                break;
            }
            } else {
                $value = $q->fetchAll($type, $data['class']);
            }
        } else {
            if (array_key_exists("return_type", $data)) {
                switch ($data[ 'return_type' ]) {
                case 'count':
                    $value = $this->_count;
                break;
                case 'single':
                    $value = $q->fetch($type);
                break;
                case 'first':
                    $value = current($q->fetchAll($type));
                break;
                default:
                    $value ='';
                break;
            }
            } else {
                if ($q->rowCount() > 0) {
                    $value = $q->fetchAll($type);
                } else {
                    $value = '';
                }
            }
        }
        return $value;
    }

    private function typeMode($data)
    {
        $type = '';
        if (array_key_exists("return_mode", $data)) {
            switch ($data[ 'return_mode' ]) {
                case 'object':
                    $type = PDO::FETCH_OBJ;
                break;
                case 'class':
                    $type = PDO::FETCH_CLASS;
                break;
                default:
                    $type =PDO::FETCH_ASSOC;
                break;
            }
        } else {
            $type =PDO::FETCH_ASSOC;
        }
        return $type;
    }
    //=======================================================================
    //Select from multitibales
    //=======================================================================
    public function select_from_multitable($tables, $data)
    {
        //Core query
        $sql = ' SELECT ';

        $table = array_keys($tables);

        $fields = '';
        if (!empty(array_values($tables))) {
            foreach ($tables as $key => $tab) {
                foreach ($tab as $val) {
                    $fields .= $key . '.' . $val . ',';
                }
            }
        } else {
            $sql .= '*';
        }
        $sql .= rtrim($fields, ',') . ' FROM ' . $table[ 0 ] . ' INNER JOIN ' . $table[ 1 ] . ' ON ';

        //Join on
        $add = '';
        if (array_key_exists("join_on", $data)) {
            foreach ($data[ 'join_on' ] as $k => $v) {
                $add .= $k . '.' . $v . '=';
            }
        }
        $sql .= rtrim($add, '=');

        //Conditions
        $add = '';
        if (array_key_exists("where", $data)) {
            $sql .= ' WHERE ';
            $i = 0;
            foreach ($data[ 'where' ] as $key => $value) {
                $add = ($i > 0) ? ' AND ' : '';
                $sql .= "$add" . "$key=:$key";
                $i++;
            }
        }

        //Goup By
        if (array_key_exists("group_by", $data)) {
            $sql .= ' GROUP BY ' . $data[ 'group_by' ];
        }

        //Order
        if (array_key_exists("order_by", $data)) {
            $sql .= ' ORDER BY ' . $data[ 'order_by' ];
        }

        //Limits
        if (array_key_exists("start", $data) && array_key_exists("limit", $data)) {
            $sql .= ' LIMIT ' . $data[ 'start' ] . ',' . $data[ 'limit' ];
        } elseif (!array_key_exists("start", $data) && array_key_exists("limit", $data)) {
            $sql .= ' LIMIT ' . $data[ 'limit' ];
        }
        //dd($sql);
            //execute
        if ($q = $this->execQuery($sql, $data[ 'where' ])) { //execute();
            //Result
            $this->_results = $this->select_result($q, $data);
        } else {
            $this->_error = true;
        }

        if (!$this->_error) {
            return !empty($this->_results) ? $this->_results : false;
        } else {
            return $this->_error;
        }
    }
   
    //=======================================================================
    //Select string type Like *
    //=======================================================================
    protected function selectALL_String_Type($table, $data)
    {
        //query
        $sql = "SELECT * FROM $table";

        $i = 0;
        foreach ($data as $key => $value) {
            //Sql Query
            if ($i === 0) {
                $sql .= " WHERE $key LIKE ?";
            } else {
                $sql .= " AND $key LIKE ?";
            }
            $i++;
        }
        //query exec
        if ($q = $this->execQuery($sql, $data[ 'where' ])) { //execute();
            //Result
            $this->_results = $this->select_result($q, $data);
        } else {
            $this->_error = true;
        }

        if (!$this->_error) {
            return !empty($this->_results) ? $this->_results : false;
        } else {
            return $this->_error;
        }
    }


    //=======================================================================
    //Insert into
    //=======================================================================
    //insert data
    public function create($table, $data)
    {
        if (!empty($data) && is_array($data)) {
            $key = '';
            $values = '';
            $i = 0;

            $keys = implode(', ', array_keys($data));
            $values = ':' . implode(', :', array_keys($data));
        }

        $sql = "INSERT INTO " . $table . " (" . $keys . ") VALUES (" . $values . ")";
        //dd($data);
        //execquery
        if ($q = $this->execQuery($sql, $data)) {
            //result
            $this->_lastinsertID = $this->_con->lastInsertId();
            
            return $this->_lastinsertID;
        } else {
            $this->_error = true;
            return false;
        }
    }
    //=======================================================================
    //Update Table
    //=======================================================================
    //Updatet data
    //$sql=UPDATE Table SET name:name, email:email, WHERE id=:id
    //$q= $this->con->prepare($sql)
    //$q-> BindValue(:name,$name)
    //$q-> BindValue(:email,$email)
    //$q->execute()

    public function update($table, $data, $cond)
    {
        if (!empty($data) && is_array($data)) {
            $keyValues = '';
            $whereCond = '';

            //Data
            $i = 0;
            foreach ($data as $key => $val) {
                $add = ($i > 0) ? ', ' : '';
                $keyValues .= "$add" . "$key=:$key";
                $i++;
            }
        }

        //Where Conditiond
        if (!empty($cond) && is_array($cond)) {
            $whereCond .= " WHERE ";
            $i = 0;
            foreach ($cond as $key => $val) {
                $add = ($i > 0) ? ' AND ' : '';
                $whereCond .= "$add" . "$key=:$key";
                $i++;
            }
        }

        //Query
        $sql = "UPDATE " . $table . " SET " . $keyValues . $whereCond;

        //dd($sql);
        //execQuery
        if ($q = $this->execQuery($sql, $data, $cond)) {
            $this->_count = $q->rowCount();
        } else {
            $this->_error = true;
        }
        return $this ;
    }
    //=======================================================================
    //Delete From Table
    //=======================================================================
    //Delete data
    //$sql= DELETE FROM Table WHERE id=:id
    //$q= $this->con->prepare($sql)
    //$q-> BindValue(:id,$id)

    //$q->execute()

    public function delete($table, $data = [])
    {
        if (!empty($data) && is_array($data)) {
            $whereCond = " WHERE ";
            $i = 0;
            foreach ($data as $key => $val) {
                $add = ($i > 0) ? ' AND ' : '';
                $whereCond .= "$add" . "$key=:$key";
                $i++;
            }
        }

        $sql = "DELETE FROM " . $table . $whereCond;

        if ($q = $this->execQuery($sql, $data)) {
            $this->_results = $q->rowCount();
        } else {
            $this->_error = true;
        }
        return $this->_results;
    }
    //=======================================================================
    //returning result
    //=======================================================================
    public function get_results()
    {
        return $this->_results;
    }


    //=======================================================================
    //Get all tables
    //=======================================================================

    public function getAll_tables()
    {
        $q = $this->execQuery("SHOW TABLES");
        return $q->fetchAll(PDO::FETCH_OBJ);
    }
    //=======================================================================
    //Get column from a table
    //=======================================================================

    public function getColumn($table)
    {
        $q = $this->execQuery("SHOW COLUMNS FROM " . "{$table}");
        return $q->fetchAll(PDO::FETCH_OBJ);
    }
    //=======================================================================
    //set/get rows count
    //=======================================================================
    public function count()
    {
        return $this->_count;
    }


    //=======================================================================
    //Manage transactions
    //=======================================================================
    public function beginTransaction()
    {
        return $this->_query->beginTransaction();
    }


    public function endTransaction()
    {
        return $this->_query->commit();
    }


    public function cancelTransaction()
    {
        return $this->_query->rollBack();
    }
    public function CustomQueryExec($sql, $data=[], $cond=[])
    {
        if ($q = $this->execQuery($sql, $data, $cond)) {
            return $q->rowCount();
        };
        return false;
    }
}