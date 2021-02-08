<?php

class View
{
    protected $_head;
    protected $_body;
    protected $_footer;
    protected $_siteTitle = SITE_TITLE;
    protected $_outputBuffer;
    protected $_layout = DEFAULT_LAYOUT;
    protected $view_file;
    protected $view_data;
    public $page_title;

    public function __construct($view_file, $view_data = [])
    {
        $this->view_file = $view_file;
        $this->view_data = $view_data;
        //if($view_data){
        //            $this->view_data = extract($view_data);
        //        }
    }

    public function render($viewname)
    {
        if ($this->view_file != $viewname) {
            $this->view_file =$viewname;
        }
        //dd( VIEW . $viewname . '.php' );
        if (file_exists(VIEW . $viewname . '.php')) {
            include VIEW . $this->view_file . '.php';
            include VIEW . 'layouts' . DS . $this->_layout . '.php';
        //dump(VIEW . $this->view_file . '.php');
        } else {
            die('The view \"' . $this->view_file . '.php \ " does not exist');
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
    //Site Title
    public function siteTitle()
    {
        return $this->_siteTitle;
    }
    public function setSiteTitle($title ='')
    {
        $this->_siteTitle = $title;
    }
    //Set Layout
    public function setLayout($path)
    {
        $this->_layout = $path;
    }


    public function getMethod()
    {
        return (explode('\\', $this->view_file))[ 1 ];
    }

    public function set_page_title($p_title ='')
    {
        $this->page_title = $p_title;
    }
    
    public function get_page_title($p_title ='')
    {
        return $this->page_title;
    }

    public function set_view_data($data)
    {
        $this->view_data = $data;
    }
    public function insert($path)
    {
        include(VIEW . $path . '.php');
    }

    public function partial($group, $partial)
    {
        include(VIEW . $group . DS . 'partials' . DS . $partial . '.php');
    }
    //=======================================================================
    //Get View Path
    //=======================================================================

    public function get_file_path($from = '')
    {
        $path = explode('/', H::currentPage()) ;
        $p = [];
        foreach ($path as $key => $value) {
            if (empty($value) || $value == 'kngell' || is_numeric($value) || $value == 'home') {
                unset($path[$key]);
            }
        }
        foreach (array_values($path) as $key => $value) {
            switch ($value) {
                case 'home':
                    $p[$value] = 'Accueil';
                break;
                case 'aboutUs':
                    $p[$value] = 'A propos';
                break;
                case 'flux':
                    $p[$value] = 'Conception des flux';
                break;
                case 'lean':
                    $p[$value] = 'Lean Management';
                break;
                default:
                    $p[$value] = ucfirst($value);
                break;
                
            }
        }

        return $p;
    }
}