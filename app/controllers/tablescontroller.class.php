<?php
class TablesController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
    }

    //=======================================================================
    //Update table
    //=======================================================================

    public function update()
    {
        if ($this->request->exists('post')) {
            $table = $this->request->getAll('table');
            $this->get_model(str_replace(' ', '', ucwords(str_replace('_', ' ', $table))) . 'Manager', $table);
            $this->model_instance[$table]->set_SoftDelete(true);
            $data = $this->request->getAll();
            $method = $data['method'];
            if ($output = $this->model_instance[$table]->$method($data)) {
                $this->jsonResponse(['result' => 'success', 'msg' => $output]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning', 'something goes wrong')]);
            }
        }
    }
}
