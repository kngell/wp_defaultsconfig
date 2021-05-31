<?php
class DatabaseHelper
{
    //=======================================================================
    //Db opérations Where prefix with IN Clause
    //=======================================================================
    public static function prefixArray($prefix, $values, &$bindArray)
    {
        $str = '';
        foreach ($values as $index => $value) {
            $str .= ':' . $prefix . $index . ',';
            $bindArray[$prefix . $index] = $value;
        }
        return rtrim($str, ',');
    }
}
