<?php

class View
{
    protected $ressources;
    protected $_head;
    protected $_body;
    protected $_footer;
    protected $_siteTitle = SITE_TITLE;
    protected $_outputBuffer;
    protected $_layout = DEFAULT_LAYOUT;
    protected $view_file;
    protected $view_data;
    public $page_title;

    //=======================================================================
    //Constructor & Destructor
    //=======================================================================
    public function __construct($view_file = '', $view_data = [])
    {
        $this->view_file = $view_file;
        $this->view_data = $view_data;
        $this->ressources = json_decode(file_get_contents(APP . 'assets.json'));
    }

    public function __destruct()
    {
        include VIEW . 'layouts' . DS . $this->_layout . '.php';
        $this->ressources = null;
        $this->_head = null;
        $this->_body = null;
        $this->_footer = null;
        $this->_siteTitle = null;
        $this->_outputBuffer = null;
        $this->_layout = null;
        $this->view_file = null;
        $this->view_data = null;
        $this->page_title = null;
    }

    //=======================================================================
    //Rendering
    //=======================================================================
    public function render($viewname)
    {
        if ($this->view_file != $viewname) {
            $this->view_file = preg_replace("/\s+/", '', $viewname);
        }
        if (file_exists(VIEW . $this->view_file . '.php')) {
            include VIEW . $this->view_file . '.php';
        // include VIEW . 'layouts' . DS . $this->_layout . '.php';
        } else {
            Rooter::redirect('restricted' . DS . 'index');
        }
    }

    public function content($type)
    {
        if ($type == 'head') {
            return $this->_head;
        } elseif ($type == 'body') {
            return $this->_body;
        } elseif ($type == 'footer') {
            return $this->_footer;
        } else {
            return false;
        }
    }

    //start
    public function start($type)
    {
        $this->_outputBuffer = $type;
        ob_start();
    }

    //end
    public function end()
    {
        if ($this->_outputBuffer == 'head') {
            $this->_head = ob_get_clean();
        } elseif ($this->_outputBuffer == 'body') {
            $this->_body = ob_get_clean();
        } elseif ($this->_outputBuffer == 'footer') {
            $this->_footer = ob_get_clean();
        } else {
            die('you must first run de start method!');
        }
    }

    //=======================================================================
    //Setters
    //=======================================================================
    //Site Title
    public function set_siteTitle($title = '')
    {
        $this->_siteTitle = $title;
    }

    //Set Layout
    public function set_Layout($path)
    {
        $this->_layout = $path;
    }

    //page title
    public function set_pageTitle($p_title = '')
    {
        $this->page_title = $p_title;
    }

    //Datas
    public function set_viewData($data)
    {
        $this->view_data = $data;
    }

    //Files Insert / include

    public function insert_File($path)
    {
        include VIEW . $path . '.php';
    }

    //Insert Partial
    public function insert_Partial($group, $partial)
    {
        include VIEW . $group . DS . 'partials' . DS . $partial . '.php';
    }

    //=======================================================================
    //Gettters
    //=======================================================================
    // Site Title
    public function get_siteTitle()
    {
        return $this->_siteTitle;
    }

    //Get Method
    public function get_Method()
    {
        return (explode('\\', $this->view_file))[1];
    }

    //Page Title
    public function get_pageTitle($p_title = '')
    {
        return $this->page_title;
    }

    //Get assets
    public function asset($asset = '', $ext = '')
    {
        $root = isset($asset) ? explode('/', $asset) : [];
        if ($root) {
            $path = '';
            $check = array_shift($root);
            foreach ($root as $value) {
                $separator = $value == end($root) ? '' : US;
                $path .= $value . $separator;
            }
            switch ($check) {
                case 'img':
                    return ASSET_SERVICE_PROVIDER ? ASSET_SERVICE_PROVIDER . US . IMG . $path : IMG . $asset;
                break;
                case 'fonts':
                    return ASSET_SERVICE_PROVIDER ? ASSET_SERVICE_PROVIDER . US . FONT . $path : FONT . $asset;
                break;
                default:
                    if (isset($this->ressources->$asset)) {
                        return ASSET_SERVICE_PROVIDER ? ASSET_SERVICE_PROVIDER . $this->ressources->$asset->$ext ?? '' : $this->ressources->$asset->$ext ?? '';
                    }
            }
        }

        return '';
    }
}
