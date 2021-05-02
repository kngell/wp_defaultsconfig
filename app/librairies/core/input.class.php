<?php
class Input
{
    public static function sanitize($dirty)
    {
        return htmlspecialchars(self::validate_input_text($dirty), ENT_NOQUOTES, 'UTF-8');
    }

    //Sanitize Helper
    private static function validate_input_text($textValue)
    {
        switch (true) {
            case is_bool($textValue):
                return filter_var($textValue, FILTER_VALIDATE_BOOLEAN);
                break;
            case is_numeric($textValue):
                   return filter_var($textValue, FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
                break;
            case is_string($textValue):
                    return filter_var($textValue, FILTER_SANITIZE_STRING);
                 break;
            default:
                    return '';
                break;
        }
    }

    private static function validate_input_email($emailValue)
    {
        if (!empty($emailValue)) {
            $trim_text = trim($emailValue);
            // remove illegl caracters

            $sanitize_str = filter_var($trim_text, FILTER_SANITIZE_EMAIL);
            return $sanitize_str;
        }
        return '';
    }

    public function exists($type)
    {
        switch ($type) {
            case 'post':
                return ($_SERVER['REQUEST_METHOD'] == 'POST') ? true : false;
                break;
            case 'get':
                return ($_SERVER['REQUEST_METHOD'] == 'GET') ? true : false;
                break;
            case 'put':
                return ($_SERVER['REQUEST_METHOD'] == 'PUT') ? true : false;
            break;
            case 'files':
                return ($_SERVER['REQUEST_METHOD'] == 'FILE') ? true : false;
            break;
            default:
                return false;
            break;
        }
    }

    public function get($input)
    {
        if (isset($_POST[$input])) {
            return $this->sanitize($_POST[$input]);
        } elseif (isset($_GET[$input])) {
            return $this->sanitize($_GET[$input]);
        }
        return '';
    }

    public function extract_key($source, $keyName)
    {
        $s = $source;
        unset($s[$keyName]);
        return $s;
    }

    public function getAll($input = false)
    {
        if (isset($_REQUEST[$input]) && is_array($_REQUEST[$input])) {
            $r = [];
            foreach ($_REQUEST[$input] as $val) {
                $r[] = self::sanitize($val);
            }
            return $r;
        }
        if (!$input) {
            $data = [];
            foreach ($_REQUEST as $field => $value) {
                !is_array($value) ? $data[$field] = self::sanitize($value) : '';
            }
            return $data;
        }
        return isset($_REQUEST[$input]) ? self::sanitize($_REQUEST[$input]) : '';
    }

    public function csrfCheck($formName, $token)
    {
        if (!Token::check($formName, $token)) {
            Rooter::redirect('restricted/badtoken');
        }
        return true;
    }

    public function getParams($source)
    {
        if (isset($source['by_user'])) {
            return json_decode($this->getAll('by_user'));
        } else {
            return [(int)$this->getAll('start'), (int) $this->getAll('max'), (int)$this->getAll('id')];
        }
    }
}
