<?php

class FormsController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
    }

    //=======================================================================
    //Show All Items
    //=======================================================================
    public function showAll()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $_REQUEST['method'] = 'showAll';
            $pagination = $this->request->getAll('pagination');
            $tableHTML = $table . 'Table';
            $tableClass = (isset($_REQUEST['user']) && $_REQUEST['user'] == 'admin') ? 'TH_Admin' : 'TH';
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            in_array($table, ['assoc', 'users', 'contacts']) ? $this->model_instance[$table]->set_SoftDelete(true) : '';
            $output = $tableClass::$tableHTML(FH::getShowAllData($this->model_instance[$table], $this->request, $_REQUEST));
            if (isset($pagination) && $pagination) {
                $output = TH::pagination($output, $this->model_instance[$table], $this->request->getAll());
            }
            $action = (isset($_REQUEST['user']) && $_REQUEST['user'] == 'guest') ? 'frontend' : 'backend';
            if ($output) {
                $this->jsonResponse(['result' => 'success', 'msg' => $output]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('info text-center', H::get_errorMsg($this->model_instance[$table], $action, $this->_method))]);
            }
        }
    }

    //=======================================================================
    //Show All Items
    //=======================================================================

    public function showDetails()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $_REQUEST['method'] = 'showDetails';
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $output = FH::getShowAllData($this->model_instance[$table], $this->request, $this->request->getAll());
            if ($output) {
                $this->jsonResponse(['result' => 'success', 'msg' => $output]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning', 'erreur serveur!')]);
            }
        }
    }

    //=======================================================================
    //Adding Items
    //=======================================================================
    public function Add()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            // $categories = (array_key_exists('categorie', $_REQUEST)) ? array_values($_REQUEST['categorie']) : '';
            $data = $this->request->getAll();
            //$posturl = ($table == 'posts') ? H_upload::uploadPostUrl($data['postContent']) : '';
            $this->model_instance[$table]->assign($data);
            method_exists('Form_rules', $table) ? $this->model_instance[$table]->validator($data, Form_rules::$table()) : '';
            if ($this->model_instance[$table]->validationPasses()) {
                $action = ($table == 'users' && isset($_REQUEST['action'])) ? $this->request->getAll('action') : '';
                $file = H_upload::upload_files($_FILES, $this->model_instance[$table]);
                if ($file['success']) {
                    $this->model_instance[$table] = $file['msg'];
                    if ($LastID = $this->model_instance[$table]->save($data)) {
                        H_upload::manage_uploadImage($LastID, $table, $data);
                        (!empty($categories)) ? $this->model_instance[$table]->postID = $LastID->get_lastID() : '';
                        (!empty($categories)) ? $this->model_instance[$table]->saveCategories($categories, 'post_categorie') : '';
                        $this->model_instance[$table]->notify(AuthManager::currentUser()->userID, $this->request->getAll('notification'), 'A ' . $table . ' has been added');
                        ($table == 'comments') ? $this->jsonResponse(['result' => 'success', 'msg' => $this->commentResponse($table, $this->model_instance[$table], $LastID)]) : $this->jsonResponse(['result' => 'success', 'msg' => $this->model_instance[$table]->get_successMessage($this->_method, $action)]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning text-center', 'Le formulaire est vide!')]);
                    }
                }
            } else {
                $errors = H::Object_Keys_format($this->model_instance[$table]->getErrorMessages(), H::get_Newkeys($this->model_instance[$table], $this->request->getAll('frm_name')));
                $this->jsonResponse(['result' => 'error-field', 'msg' => $errors]);
            }
        }
    }

    //Add comment response
    private function commentResponse($table, $model, $LastID)
    {
        $tableHTML = $table . 'Table';
        $model->_set_tableName($table);
        $data = $model->getAllbyId($LastID)->get_results();
        $data[0]->firstName = AuthManager::currentUser()->firstName;
        $data[0]->lastName = AuthManager::currentUser()->lastName;
        $data[0]->profileImage = AuthManager::currentUser()->profileImage;
        $output = TH::$tableHTML($data);

        return $output;
    }

    //store URL
    public function storeFiletUrl()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $files = $_FILES;
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $data = $this->request->getAll();
            $this->model_instance[$table]->assign($data);
            $file = H_upload::validate_and_upload_file($_FILES, $this->model_instance[$table]);
            if ($file['success']) {
                $this->model_instance[$table]->save();
                $this->jsonResponse(['result' => 'success', 'msg' => $this->model_instance[$table]->fileUrl]);
            }
        }
    }

    //delete url
    public function deletepostUrl()
    {
        if ($this->request->exists('post')) {
            $file = basename($this->request->getAll('src'));
            file_exists(UPLOAD_ROOT . 'postsImg' . DS . $file) ? unlink(UPLOAD_ROOT . 'postsImg' . DS . $file) : '';
        }
    }

    //=======================================================================
    //Edit data
    //=======================================================================
    public function edit()
    {
        if ($this->request->exists('post')) {
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            $table = $this->request->getAll('table');
            $t_options = $this->request->getAll('tbl_options');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $this->get_options_model($t_options);
            if ($item = $this->model_instance[$table]->getDetails((int)$this->request->getAll('id'))) {
                $this->jsonResponse(['result' => 'success', 'msg' => ['items' => $item, 'selectedOptions' => $this->get_options($t_options, $item)]]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger', 'Server encountered errors!')]);
            }
        }
    }

    // Manage Edit get selected options
    private function get_options($t_options = '', $item = null)
    {
        $options = [];
        if (!empty($t_options)) {
            if (is_array($t_options)) {
                foreach ($t_options as $tab) {
                    $options[$item->get_fieldName($tab)] = $tab ? $this->model_instance[$tab]->get_Options($item->get_selectedOptions($tab), $this->model_instance[$tab]) : false;
                }
            } else {
                $options[$item->get_fieldName($t_options)] = $t_options ? $this->model_instance[$t_options]->get_Options($item->get_selectedOptions(), $this->model_instance[$t_options]) : false;
            }
        }
        return $options;
    }

    //=======================================================================
    //Update data
    //=======================================================================

    public function update()
    {
        if ($this->request->exists('post')) {
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $colID = $this->model_instance[$this->request->getAll('table')]->get_colID();
            $this->model_instance[$table]->set_SoftDelete(true);
            $categories = ($table === 'posts' && array_key_exists('categorie', $_REQUEST)) ? array_values($_REQUEST['categorie']) : '';
            $data = $this->request->getAll();
            $this->model_instance[$table]->assign($this->model_instance[$table]->getDetails($data[$colID]));
            AuthManager::check_UserSession();
            $this->model_instance[$table]->assign($data);
            $action = ($table == 'users' && isset($_REQUEST['action'])) ? $this->request->getAll('action') : '';
            $this->model_instance[$table]->id = $data[$colID];
            method_exists('Form_rules', $table) ? $this->model_instance[$table]->validator($data, Form_rules::$table()) : '';
            if ($this->model_instance[$table]->validationPasses()) {
                $file = H_upload::upload_files($_FILES, $this->model_instance[$table]);
                if ($file['success']) {
                    $this->model_instance[$table] = $file['msg'];
                    if ($this->model_instance[$table]->save($data)) {
                        H_upload::manage_uploadImage($this->model_instance[$table]->$colID, $table, $data);
                        (!empty($categories)) ? $this->model_instance[$table]->saveCategories($categories, 'post_categorie') : '';
                        $this->model_instance[$table]->notify(AuthManager::currentUser()->userID, $this->request->getAll('notification'), 'A' . $table . ' has been updated');
                        $this->jsonResponse(['result' => 'success', 'msg' => $this->model_instance[$table]->get_successMessage($this->_method, $action)]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger', 'Server encountered errors!')]);
                    }
                } else {
                    $this->jsonResponse(['result' => 'error-file', 'msg' => $file['msg']]);
                }
            } else {
                $this->jsonResponse(['result' => 'error-field', 'msg' => $this->model_instance[$table]->getErrorMessages()]);
            }
        }
    }

    //=======================================================================
    //Delete data
    //=======================================================================
    //check for delete
    public function checkdelete()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            if ($output = $this->model_instance[$table]->check_forEmptyParent($this->request->getAll('id'))) {
                $this->jsonResponse(['result' => 'success', 'msg' => FH::showMessage('light', $output)]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => '']);
            };
        }
    }

    //Delete

    public function delete()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            in_array($table, ['contacts', 'assoc', 'users']) ? $this->model_instance[$this->request->getAll('table')]->set_SoftDelete(true) : '';
            $data = $this->request->getAll();
            if ($this->model_instance[$table]->delete($data['id'], $data)) {
                $SuccessMsg = $this->model_instance[$table]->get_successMessage($this->_method, $data);
                $this->model_instance[$table]->notify(AuthManager::currentUser()->userID, $this->request->getAll('notification'), $SuccessMsg);
                $this->jsonResponse(['result' => 'success', 'msg' => $SuccessMsg]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning', 'Something goes wrong. Please try later!')]);
            }
        }
    }

    public function fillMultiselect()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $options = $this->model_instance[$table]->getAll_inputSelectOptions();
            if ($options != '') {
                $this->jsonResponse(['result' => 'success', 'msg' => $options]);
            }
            // else {
            //     $action = ($table == 'users' && isset($_REQUEST['action'])) ? $this->request->getAll('action') : '';
            //     $errMsg = H::get_errorMsg($this->model_instance[$table], $action, $this->_method);
            //     $this->jsonResponse(['error' => 'success', 'msg' => FH::showMessage('warning text-center', $errMsg)]);
            // }
        } else {
            $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning text-center', 'Erreur serveur. Veuillez contacter l\'administrateur.')]);
        }
    }

    public function addcategorie()
    {
        if ($this->request->exists('post')) {
            ($this->get_model('CategoriesManager'))->assign($this->request->getAll());
            if ($this->model_instance->save()) {
                $this->model_instance->notify(AuthManager::currentUser()->userID, 'admin', 'A categorie has been added');
                $this->jsonResponse('success');
            } else {
                $this->jsonResponse('Un problème ' . "'" . 'est posé lors de la mise à jour des catégories');
            }
        }
    }
}
