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
            in_array($table, ['assoc', 'users', 'contacts']) ? $this->model_instance[$table]->sets_SoftDeleteOnTrue() : '';
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
            $categories = ($table === 'posts' && array_key_exists('categorie', $_REQUEST)) ? array_values($_REQUEST['categorie']) : '';
            $data = $this->request->getAll();
            //$posturl = ($table == 'posts') ? H_upload::uploadPostUrl($data['postContent']) : '';
            $SuccessMsg = H::get_successMsg($this->model_instance[$table], '', $this->_method);
            $this->model_instance[$table]->assign($data);
            $file = H_upload::validate_and_upload_file($_FILES, $this->model_instance[$table]);
            if ($file['success']) {
                $this->model_instance[$table] = $file['msg'];
                method_exists('Form_rules', $table) ? $this->model_instance[$table]->validator($data, Form_rules::$table()) : '';
                if ($this->model_instance[$table]->validationPasses()) {
                    if ($LastID = $this->model_instance[$table]->save()) {
                        H_upload::manage_uploadImage($LastID, $table, $data);
                        (!empty($categories)) ? $this->model_instance[$table]->postID = $LastID : '';
                        (!empty($categories)) ? $this->model_instance[$table]->saveCategories($categories, 'post_categorie') : '';
                        $this->model_instance[$table]->notify(AuthManager::currentUser()->userID, $this->request->getAll('notification'), 'A ' . $SuccessMsg . ' has been added');
                        ($table == 'comments') ? $this->jsonResponse(['result' => 'success', 'msg' => $this->commentResponse($table, $this->model_instance[$table], $LastID)]) : $this->jsonResponse(['result' => 'success', 'msg' => $SuccessMsg]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning text-center', 'Le formulaire est vide!')]);
                    }
                } else {
                    $errors = H::Object_Keys_format($this->model_instance[$table]->getErrorMessages(), H::get_Newkeys($this->model_instance[$table], $this->request->getAll('frm_name')));
                    $this->jsonResponse(['result' => 'error-field', 'msg' => $errors]);
                }
            } else {
                $this->jsonResponse(['result' => 'error-field', 'msg' => $file['msg']]);
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
    public function storepostUrl()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
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
            $t_options = $this->request->getAll('table_options');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            !empty($t_options) ? $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $t_options))) . 'Manager', $t_options) : '';
            if ($items = $this->model_instance[$table]->getDetails((int)$this->request->getAll('id'))) {
                $options = (in_array($table, ['posts', 'sessions_formations'])) ? $this->model_instance[$table]->getSelectedOptions($this->model_instance[$t_options]->getAll(false)->get_results(), $items->getOptions($t_options)) : '';
                $this->jsonResponse(['result' => 'success', 'msg' => ['items' => $items, 'selectedOptions' => $options]]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger', 'Server encountered errors!')]);
            }
        }
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
            $this->model_instance[$table]->sets_SoftDeleteOnTrue();
            $categories = ($table === 'posts' && array_key_exists('categorie', $_REQUEST)) ? array_values($_REQUEST['categorie']) : '';
            $data = $this->request->getAll();
            $this->model_instance[$table]->assign($this->model_instance[$table]->getDetails($data[$colID]));
            $this->model_instance[$table]->assign($data);
            $file = H_upload::validate_and_upload_file($_FILES, $this->model_instance[$table]);
            if ($file['success']) {
                $this->model_instance[$table] = $file['msg'];
                $this->model_instance[$table]->id = $data[$colID];
                $action = ($table == 'users' && isset($_REQUEST['action'])) ? $this->request->getAll('action') : '';
                method_exists('Form_rules', $table) ? $this->model_instance[$table]->validator($data, $action ? Form_rules::$action() : Form_rules::$table()) : '';
                if ($this->model_instance[$table]->validationPasses()) {
                    if ($this->model_instance[$table]->save($colID)) {
                        H_upload::manage_uploadImage($this->model_instance[$table]->$colID, $table, $data);
                        (!empty($categories)) ? $this->model_instance[$table]->saveCategories($categories, 'post_categorie') : '';
                        $SuccessMsg = H::get_successMsg($this->model_instance[$table], $action, $this->_method);
                        $this->model_instance[$table]->notify(AuthManager::currentUser()->userID, $this->request->getAll('notification'), 'A' . $table . ' has been updated');
                        $this->jsonResponse(['result' => 'success', 'msg' => $SuccessMsg]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger', 'Server encountered errors!')]);
                    }
                } else {
                    $this->jsonResponse(['result' => 'error-field', 'msg' => $this->model_instance[$table]->getErrorMessages()]);
                }
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => $file['msg']]);
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
            if ($output = $this->model_instance[$table]->check($this->request->getAll('id'))) {
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
            in_array($table, ['contacts', 'assoc', 'users']) ? $this->model_instance[$this->request->getAll('table')]->sets_SoftDelete(true) : '';
            $SuccessMsg = ($table != 'assoc') ? rtrim($table, 's') : 'Association';
            $data = $this->request->getAll();
            $method = isset($data['method']) ? $data['method'] : 'delete';
            if ($output = $this->model_instance[$table]->$method($data['id'])) {
                $this->model_instance[$table]->notify(AuthManager::currentUser()->userID, $this->request->getAll('notification'), 'A ' . $SuccessMsg . ' has been ' . $method . 'ed');
                $this->jsonResponse(['result' => 'success', 'msg' => 'your ' . $SuccessMsg . ' has been deleted']);
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
