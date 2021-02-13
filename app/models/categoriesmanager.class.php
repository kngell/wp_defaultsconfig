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

    //Search categories in all table
    public function searchCategorie($id)
    {
        $tables = $this->getAll_tables();
        $output = false;
        foreach ($tables as $table) {
            $this->_table = $table->{'Tables_in_kngell_eshopping'};
            if ($this->_table != 'categories') {
                $fields = [];
                $columns = $this->get_columns($this->_table);
                foreach ($columns as $column) {
                    if ($column->Field == 'catID') {
                        $fields[$column->Field] = $id;
                    };
                }
                if (!empty($fields)) {
                    if ($row = $this->find(['where' => $fields])->count()) {
                        $output = true;
                        break;
                    }
                }
            }
        }
        $this->_table = 'categories';
        return $output;
    }

    //=======================================================================
    //Operations
    //=======================================================================
    public function check($id = '', $params = [])
    {
        $categories = $this->getAllbyIndex($id)->get_results();
        $output = '';
        if ($categories) {
            $otherslink = $this->searchCategorie($id);
            $output .= '<h5> This category contains sub-categories : </h5>';

            foreach ($categories as $categorie) {
                $ponctuation = $categorie === end($categories) ? '.' : ',';
                $output .= '<span class="py-0 text-gray font-italic">' . $categorie->categorie . $ponctuation . '</span>&nbsp;</br>';
            }
            if ($otherslink) {
                $output .= '<h6>Its also used by pther links : </h6>';
            }
            $output .= '<h6 class="text-center pt-2">Do you really want to delete it ?</h6>';
        }
        return $output;
    }

    //After delete categorie
    public function afterDelete($params = [])
    {
        $categories = $this->getAllbyIndex($params[$this->get_colID()])->get_results();
        if ($categories) {
            foreach ($categories as $categorie) {
                $key = $categorie->get_colID();
                $delete = $this->delete($categorie->$key);
            }
            return $delete;
        }
        return true;
    }

    //Update active categories
    public function categorieStatus($item = [])
    {
        $categorie = $this->getDetails($item['id']);
        $categorie->status = $categorie->status == 1 ? 0 : 1;
        $categorie->id = $item['id'];
        $output = '';
        if ($categorie->save()) {
            if ($categorie->status == 1) {
                $output = 'green';
            } else {
                $output = '#dc3545';
            }
        }
        return $output;
    }
}
