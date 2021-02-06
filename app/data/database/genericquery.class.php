<?php


class GenericQuery
{
    private $_error = false;
    private $_query;
    private $_count;
    private $_results;

    public function query($sql, $params = [])
    {
        $this->_error = false;

        if ($this->_query = $this->_pod->prepare($sql)) {
            if (count($params)) {
                foreach ($params as $key => $val) {
                    $this->_query->BiindValue($key, $val);
                }
            }
            if ($this->_query->execute()) {
                $this->_results = $this->_query->fetchAll(PDO::FETCH_OBJ);
                $this->_count = $this->_query->rowCount();
            } else {
                $this->_error = true;
            }
        }
        
        return $this;
    }


    public function error()
    {
        return $this->_error;
    }
    
    private function action($action, $table, $where)
    {
        if (count($where ===3)) {
            $operators = ['=','<','>','<=','>='];
            $fields = $where[0];
            $operator = $where[1];
            $value = $where[2];
        }
        
        if (in_array($operator, $operators)) {
            $sql = "{$action} FROM {$table} WHERE {$fields} {$operator} ?";
            
            if (!$this->query($sql, array($value))->error()) {
                return $this;
            }
        }
        return false;
    }
    
    public function get($table, $where)
    {
        return $this->action('SELECT *', $table, $where);
    }
    
    public function results()
    {
        return $this->_results;
    }
    
    public function first()
    {
        return $this->results()[0];
    }
    
    public function insert($table, $fields)
    {
        $key = array_keys($fields);
        $value = null;
    }
    
    public function update()
    {
    }
    public function delete($table, $where)
    {
        return $this->action('DELETE', $table, $where);
    }
    
    public function count()
    {
        return $this->_count;
    }
}