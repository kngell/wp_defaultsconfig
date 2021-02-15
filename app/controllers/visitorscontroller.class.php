<?php

class VisitorsController extends Controller
{
    //=======================================================================
    //Construct
    //=======================================================================
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
    }

    //=======================================================================
    //Tract visitors
    //=======================================================================

    //visitor visit the page => save hits
    public function track()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $data = $this->request->getAll();
            if ($output = $this->model_instance[$table]->manageVisitors($data)) {
                $this->jsonResponse(['result' => 'success', 'msg' => $output]);
            }
        }
    }

    public function saveipdata()
    {
        if ($this->request->exists('post')) {
            $data = H::Object_Keys_format($this->request->getAll(), H_visitors::new_IpAPI_keys());
            $this->model_instance->assign($data);
            if (isset($data['ipAddress']) && !$this->model_instance->getByIp($data['ipAddress'])) {
                $this->model_instance->save();
            }
        }
    }
}
