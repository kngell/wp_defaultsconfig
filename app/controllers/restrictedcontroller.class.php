<?php
class RestrictedController extends Controller
{
    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        // $this->view_instance->footerPosts = $this->get_model('PostsManager', 'posts');
    }

    //page index
    public function index()
    {
        $this->view_instance->render('restricted' . DS . 'index');
    }

    public function badtoken()
    {
        $this->view_instance->render('restricted' . DS . 'badtoken');
    }

    public function Add()
    {
        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('info text-center', 'Connecter-vous pour envoyer des commentaires au serveur')]);
    }
}
