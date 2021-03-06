<?php
class FH
{
    public static function inputBlock($type, $name, $label, $value = '', $inputAttrs = [], $divAttrs = [])
    {
        $html = '';
        $divString = !empty($divAttrs) ? self::stringifyAttrs($divAttrs) : '';
        $inputString = self::stringifyAttrs($inputAttrs);

        if (!empty($divAttrs)) {
            $html = '<div' . $divString . '>';
        }
        if (($label != '')) {
            $html .= '<label for = "' . $name . '" class="font-weight-600">' . $label . '</label>';
        }
        $html .= '<input type = "' . $type . '" id = "' . $name . '" name = "' . $name . '" value = "' . $value . '"' . $inputString . '" />';
        $html .= '<div class="invalid-feedback"></div>';
        if (!empty($divAttrs)) {
            $html .= '</div>';
        }
        return $html;
    }

    public static function inputBlockArea($name, $label, $value = '', $inputAttrs = [], $divAttrs = [])
    {
        $divString = self::stringifyAttrs($divAttrs);
        $inputString = self::stringifyAttrs($inputAttrs);

        $html = '<div' . $divString . '>';
        if (($label != '')) {
            $html .= '<label for="' . $name . '">' . $label . '</label> <br>';
        }
        $html .= '<textarea id="' . $name . '" name="' . $name . '" value="' . $value . '"' . $inputString . '">';
        $html .= '</textarea>';
        //$html .= '<span class=" text-danger">'. $err.'</span>';
        $html .= '</div>';
        return $html;
    }

    public static function submitTag($buttonText, $name, $inputAttrs = [])
    {
        $inputString = self::stringifyAttrs($inputAttrs);
        $html = '<input type ="submit" id="' . $name . '" value="' . $buttonText . '"' . $inputString . '>';
        return $html;
    }

    public static function checkBoxBlock($name, $check = false, $label = '', $inputAttrs = [], $divAttrs = [])
    {
        $divString = self::stringifyAttrs($divAttrs);
        $inputString = self::stringifyAttrs($inputAttrs);
        $checkString = ($check) ? true : false;
        if (!empty($divAttrs)) {
            $html = '<div' . $divString . '>';
        }
        if (($label != '')) {
            $html .= '<label for = "' . $name . '">' . $label . '<input type ="checkbox" id = "' . $name . '"';
            $html .= 'name="' . $name . '" value = "on"' . $checkString . $inputString . '></label>';
        }
        if (!empty($divAttrs)) {
            $html .= '</div>';
        }
    }

    public static function submitBloc($buttonText, $inputAttrs = [], $divAttrs = '')
    {
        $divString = self::stringifyAttrs($divAttrs);
        $inputString = self::stringifyAttrs($inputAttrs);
        $html = '<div' . $divString . '>';
        $html .= '<input type ="submit"  value ="' . $buttonText . '"' . $inputString . '>';
        $html .= '</div>';
        return $html;
    }

    public static function stringifyAttrs($attrs)
    {
        $string = '';
        foreach ($attrs as $key => $value) {
            $string .= ' ' . $key . '="' . $value . '"';
        }
        return $string;
    }

    public static function csrfInput($name, $token)
    {
        return '<input type="hidden" name="' . $name . '" value="' . $token . '" />';
    }

    public static function displayErrors($errors)
    {
        $hasErrors = (!empty($errors)) ? 'has-errrors' : '';
        $html = '<ul class="text-danger ' . $hasErrors . '">';
        foreach ($errors as $field => $error) {
            $html .= '<li class="text-danger">' . $error[0] . '</li>';
            $html .= '<script type="text/javascript" defer>jquery("document").ready(function(){
            jquery("#' . $field . '").parent().closest("div").addClass(":is-invalid");});</script>';
        }
        $html .= '</ul>';
        return $html;
    }

    //Error & Sucess messages alert

    public static function showMessage($type, $message)
    {
        return '<div class="align-self-center alert alert-' . $type . ' alert-dismissible">
                    <button type="button" class="close" data-bs-dismiss="alert"><span class="float-end">&times;</span></button>
                    <strong class="text-center">' . $message . '</strong>
              </div>';
    }

    public static function AssignErrors($source, $errors)
    {
        $frm_errors = $errors;
        $a_errors = new stdClass;
        foreach ($source as $key => $val) {
            $a_errors->$key = '';
            if (!empty($frm_errors)) {
                foreach ($frm_errors as $k => $v) {
                    if ($key == $k) {
                        $a_errors->$key = $v;
                        array_shift($frm_errors);
                    }
                }
            }
        }
        return $a_errors;
    }

    public static function validate_forms($source, $items, $obj)
    {
        if (!isset($source['terms'])) {
            $source['terms'] = '';
        }
        foreach ($items as $item => $rules) {
            $item = Input::sanitize($item);
            $display = $rules['display'];
            foreach ($rules as $rule => $rule_value) {
                $value = Input::sanitize(trim($source[$item]));
                if ($rule === 'required' && empty($value)) {
                    $requireMsg = ($item == 'terms') ? 'Please accept terms & conditions' : "{$display} is require";
                    $obj->runValidation(new Requirevalidator($obj, ['field' => $item, 'msg' => $requireMsg]));
                } elseif (!empty($value)) {
                    switch ($rule) {
                        case 'min':
                            $obj->runValidation(new Minvalidator($obj, ['field' => $item, 'rule' => $rule_value, 'msg' => "{$display} must be a minimum of {$rule_value} characters"]));
                            break;
                        case 'max':
                            $obj->runValidation(new Maxvalidator($obj, ['field' => $item, 'rule' => $rule_value, 'msg' => "{$display} must be a maximum of {$rule_value} caracters"]));
                            break;
                        case 'valid_email':
                            $obj->runValidation(new ValidEmailvalidator($obj, ['field' => $item, 'rule' => $rule_value, 'msg' => "{$display} must be a valid email address"]));
                            break;
                        case 'is_numeric':
                            $obj->runValidation(new Numericvalidator($obj, ['field' => $item, 'rule' => $rule_value, 'msg' => "{$display} has to be a number. Please use a numeric value"]));

                            break;
                        case 'matches':
                            $mathdisplay = $items[$rule_value]['display'];
                            $obj->runValidation(new MatchesValidator($obj, ['field' => $item, 'rule' => $obj->getConfirm(), 'msg' => "{$display} does not math {$mathdisplay}"]));
                            break;
                        case 'unique':
                            $obj->runValidation(new UniqueValidator($obj, ['field' => $item, 'rule' => [$rule_value, $obj->get_colID()], 'msg' => "This {$item} already exist."]));
                            break;
                    }
                }
            }
        }
    }

    //get showAll data refactor
    public static function getShowAllData($model, $request, $item)
    {
        switch (true) {
                    case isset($item['data_type']) && $item['data_type'] == 'values': //values or html template
                        if (isset($item['return_mode']) && $item['return_mode'] == 'details') { // Detals or All
                            return $model->getDetails($request->getAll('id'));
                        } elseif (isset($item['return_mode']) && $item['return_mode'] == 'index') {
                            return $model->getAllbyIndex($request->getAll('id'));
                        } else {
                            return $model->getAllItem()->get_results();
                        }
                    break;
                    case $item['data_type'] == 'template':
                        return $model->getHtmlData($item);
                    break;
                }
    }
}
