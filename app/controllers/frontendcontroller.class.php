<?php
class FrontendController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        //CSS
        //librairies
        $this->view_instance->cssFrontlib = $this->assets->{'css/librairies/frontlib'}->css ?? '';
        $this->view_instance->jsFrontlib = $this->assets->{'js/librairies/frontlib'}->js ?? '';
    }

    //page index

    public function index($data = [])
    {
        dump($data);
        $this->view_instance->set_page_title('HomePage');
        $this->view_instance->render('pages' . DS . 'index');
    }
}
