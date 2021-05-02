<?php

class CategoriesManager extends Model
{
    protected $_colID = 'catID';
    protected $_colTitle = 'categorie';
    protected $_colIndex = 'parentID';
    protected $_table = 'categories';
    protected $_modelName;
    public $catID;
    public $categorie;
    public $description;
    public $photo;
    public $date_enreg;
    public $updateAt;
    public $parentID;
    public $status;

    //=======================================================================
    //Construct
    //=======================================================================
    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
    }

    //=======================================================================
    //Gets
    //=======================================================================
    public function getPostsFromCategories()
    {
        $this->_table = 'SELECT p.* FROM posts p INNER JOIN post_categorie pc ON pc.postID = p.postID ';
        $data_query = ['where' => ['catID' => (int)$this->catID], 'group_by' => 'pc.postID', 'return_mode' => 'class', 'class' => 'PostsManager'];
        $results = $this->find($data_query);
        $this->_table = 'categories';
        return $results;
    }

    public function countPostByCategorie()
    {
        $this->_table = 'post_categorie';
        $data_query = ['where' => ['catID' => $this->catID], 'select' => 'COUNT(*) as number', 'return_type' => 'single'];
        $results = $this->find($data_query);
        $this->_table = 'categories';
        return $results;
    }

    public function popularTags()
    {
        $this->_table = 'SELECT COUNT(*) AS number,pc.catID, c.categorie FROM post_categorie pc inner join categories c ON c.catID=pc.catID ';
        $data_query = ['group_by' => 'pc.catID', 'order_by' => 'number DESC', 'return_mode' => 'class', 'class' => 'CategoriesManager'];
        $results = $this->find($data_query);
        $this->_table = 'categories';
        return $results;
    }

    // Get succes message
    public function get_successMessage($method = '', $action = '')
    {
        if ($method == 'update') {
            return 'Categorie mise a jour avec success!';
        } else {
            return 'Categorie Ajouté avec Success!';
        }
    }

    //=======================================================================
    //Operations
    //=======================================================================
    //After delete categorie
    public function afterDelete($params = [])
    {
        $categories = $this->getAllbyIndex($params['where'][$this->get_colID()])->get_results();
        if ($categories) {
            foreach ($categories as $categorie) {
                $key = $categorie->get_colID();
                $delete = $this->delete($categorie->$key);
            }
            return $delete;
        }
        return true;
    }

    //=======================================================================
    //Get Select2 fields Names
    //=======================================================================
    public function get_fieldName($table)
    {
        switch ($table) {
                case 'categories':
                    return 'parentID';
                break;
                default:
                break;
            }
    }
}
