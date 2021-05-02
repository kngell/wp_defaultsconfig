<?php
abstract class Database
{
    private $_query;
    private $_error = false;
    private $_dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME;
    private $_dbuser = DB_USER;
    private $_dbpass = DB_PWD;
    protected $_con;
    //=======================================================================
    //Database connection
    //=======================================================================

    protected function __construct()
    {
        // Set Options
        $options = [
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci',
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET CHARACTER SET UTF8mb4',
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::MYSQL_ATTR_FOUND_ROWS => true
        ];
        // Create a new PDO instance
        if (!isset($this->_con)) {
            try {
                $this->_con = new PDO($this->_dsn, $this->_dbuser, $this->_dbpass, $options);
            } catch (PDOException $e) {
                $this->error = $e->getMessage();
                die('Error : ' . $this->error);
            }
        }
        return $this->_con;
    }

    //=======================================================================
    //General execution of queries
    //=======================================================================
    //Query
    protected function execQuery($sql, $data = [], $cond = [])
    {
        $this->_error = false;

        // if prepare ok !
        if ($this->_query = $this->_con->prepare($sql)) {
            //Bind conditions
            if (!empty($cond)) {
                foreach ($cond as $key => $val) {
                    $this->bind(":$key", is_array($val) ? $val['value'] : $val);
                }
            }
            //Bind params
            if (array_key_exists('where', $data)) {
                foreach ($data['where'] as $key => $val) {
                    $this->bind(":$key", is_array($val) ? $val['value'] : $val);
                }
                unset($data['where']);
            }

            //Bind the datas whitch left
            if (!empty($data)) {
                //dd( $data );
                foreach ($data as $key => $val) {
                    if (is_array($val)) {
                        switch (true) {
                            case isset($val['operator']) && $val['operator'] == '!=':
                                $this->bind(":$key", $val['value']);
                                break;
                            case isset($val['operator']) && in_array($val['operator'], ['NOT IN', 'IN']):
                                $this->bind(":$key", implode("', '", $val['value']));
                                break;
                            default:
                                $this->bind(":$key", $val['value']);
                                break;
                        }
                    } else {
                        $this->bind(":$key", $val);
                    }
                }
            }
        } else {
            $this->error = true;
            die('Error : ' . 'Il y a un problème avec la base de donnée');
        }
        //Execute
        if (!$this->_query->execute()) {
            //return
            return $this->_error = false;
        }
        return (object) $this->_query;
    }

    //=======================================================================
    //Custom queries execution
    //=======================================================================
    protected function query($sql)
    {
        $this->_query = $this->_con->prepare($sql);
    }

    /**
     * --------------------------------------------------------------------------------------------------
     * Binding the given values of the query
     * @param $param
     * @param $value
     * @param null $type
     */
    protected function bind($param, $value, $type = null)
    {
        switch (is_null($type)) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                break;
                default:
                    $type = PDO::PARAM_STR;
            }
        $this->_query->bindValue($param, $value, $type);
    }

    //execute prepare statement

    protected function execute()
    {
        return $this->_query->execute();
    }

    //get result set as array of object
    protected function resultsetObj()
    {
        return $this->_query->fetchAll(PDO::FETCH_OBJ);
    }

    //get result set as single object
    protected function resultsignleObj()
    {
        return $this->_query->fetch(PDO::FETCH_OBJ);
    }

    //get rowcount
    public function rowcount()
    {
        return $this->_query->rowCount();
    }

    //Last Insert ID
    public function get_lastInsertId()
    {
        return $this->_con->lastInsertId();
    }

    //=======================================================================
    //Error maanagement
    //=======================================================================
    //error
    protected function error()
    {
        return $this->_error;
    }
}
