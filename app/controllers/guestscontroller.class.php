<?php

class GuestsController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
    }

    //=======================================================================
    //Coutries
    //=======================================================================

    public function get_countries()
    {
        $search = strtolower($this->request->getAll('searchTerm'));
        $data = file_get_contents(APP . 'librairies' . DS . 'database' . DS . 'json' . DS . 'countries.json');
        $countries = array_filter(array_column(json_decode($data, 1), 'name'), function ($countrie) use ($search) {
            return str_starts_with(strtolower($countrie), $search);
        });
        $results = array_map(
            function ($i, $map_countrie) {
                return ['id' => $i, 'text' => $map_countrie];
            },
            array_keys($countries),
            $countries
        );
        $this->jsonResponse(['result' => 'success', 'msg' => $results]);
    }

    //=======================================================================
    //Add
    //=======================================================================
    public function Add()
    {
        if ($this->request->exists('post')) {
            $data = $this->request->getAll();
            if ((new Token())->validateToken($data['csrftoken'])) {
                $table = $this->request->getAll('table');
                $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
                $file = H_upload::upload_files($_FILES, $this->model_instance[$table]);
                if ($file['success']) {
                    $this->model_instance[$table]->assign($data);
                    method_exists('Form_rules', $table) ? $this->model_instance[$table]->validator($data, Form_rules::$table()) : '';
                    if ($this->model_instance[$table]->validationPasses()) {
                        if ($resp = $this->model_instance[$table]->save($data)) {
                            !in_array($table, ['cart']) ? $this->sendMail($data) : '';
                            $action = ($table == 'utilisateur' && isset($_REQUEST['action'])) ? $this->request->getAll('action') : '';
                            $success_msg = $this->model_instance[$table]->get_successMsg($resp, $action, $this->_method);
                            $output_msg = (isset($data['wrap_msg']) && $data['wrap_msg'] == true) ? FH::showMessage('success text-center p-3', $success_msg) : $success_msg;
                            $this->jsonResponse(['result' => 'success', 'msg' => $output_msg]);
                        } else {
                            $err_msg = !in_array($table, ['cart']) ? FH::showMessage('danger', 'Server encountered errors!') : false;
                            $this->jsonResponse(['result' => 'error', 'msg' => $err_msg]);
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
    }

    //add to cart (ecommerce), from whishlist
    public function toggleWishlistAndcCart()
    {
        $data = $this->request->getAll();
        if ((new Token())->validateToken($data['csrftoken'])) {
            $table = $data['table'];
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $this->model_instance[$table]->assign($data);
            $method = $this->request->getAll('method');
            if ($output = $this->model_instance[$table]->manage_user_cart($method)) {
                $this->jsonResponse(['result' => 'success', 'msg' => $output]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => '']);
            }
        }
    }

    private function sendMail($data)
    {
        $to = 'daniel.akono@kngell.com';
        $body = '';
        $body .= 'You have a new message from ' . $data['email'] . ' into your ' . $data['table'] . ' table' . "\r\n";
        $subject = 'New candidate has sent a cv';
        H_Email::sendmailgrid($to, $subject, $body);
        //mail($to, $subjet, $body);
    }

    //=======================================================================
    //Search bar
    //=======================================================================

    public function search()
    {
        if ($this->request->exists('post')) {
            $data = $this->request->getAll();
            if ((new Token())->validateToken($data['csrftoken'])) {
                if (!empty($data['search'])) {
                    $tables = ($this->get_model('SearchManager'))->getAll_tables();
                    if ($output = TH::searchTable($tables, $this->model_instance, $data)) {
                        $this->jsonResponse(['result' => 'success', 'msg' => $output]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('info text-center', '0 resultat(s)')]);
                    }
                } else {
                    $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('info text-center', 'la barre de recherche est vide')]);
                }
            }
        }
    }

    //=======================================================================
    //Search bar results
    //=======================================================================
    public function search_results($data)
    {
        $this->view_instance->set_view_data($data);
        $this->view_instance->render('home' . DS . 'search');
    }

    //=======================================================================
    //Delete data
    //=======================================================================

    public function delete()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $data = $this->request->getAll();
            $method = isset($data['method']) ? $data['method'] : '';
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $output = $method != '' ? $this->model_instance[$table]->$method($data) : $this->model_instance[$table]->delete($data);
            if ($output) {
                $this->jsonResponse(['result' => 'success', 'msg' => $output]);
            }
        }
    }

    //=======================================================================
    //Simple ajax call
    //=======================================================================
    public function call()
    {
        $table = $this->request->getAll('table');
        $data = $this->request->getAll();
        $method = isset($data['method']) ? $data['method'] : '';
        $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
        if ($output = $this->model_instance[$table]->$method($data)) {
            $this->jsonResponse(['result' => 'success', 'msg' => $output]);
        }
    }
}
