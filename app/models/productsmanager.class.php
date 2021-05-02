<?php
class ProductsManager extends Model
{
    protected $_colID = 'pdtID';
    protected $_table = 'products';
    protected $_colTitle = 'p_title';
    protected $_colContent = '';
    protected $_modelName;
    public $pdtID;
    public $user_salt;
    public $p_title;
    public $p_short_descr;
    public $p_descr;
    public $p_regular_price;
    public $p_compare_price;
    public $p_cost_per_item;
    public $p_charge_tax;
    public $p_media;
    public $p_sku;
    public $p_barre_code;
    public $p_track_qty;
    public $p_continious_sell;
    public $p_qty;
    public $p_back_border;
    public $p_stock_threshold;
    public $p_weight;
    public $p_lenght;
    public $p_width;
    public $p_height;
    public $p_shipping_class;
    public $p_warehouse;
    public $p_company;
    public $p_slug;
    public $created_at;
    public $updated_at;
    public $deleted;

    //=======================================================================
    //construct
    //=======================================================================
    public function __construct()
    {
        parent::__construct();
        $this->_modelName = str_replace(' ', '', ucwords(str_replace('_', ' ', $this->_table))) . 'Manager';
    }

    //=======================================================================
    //Getters & setters
    //=======================================================================
    public function get_successMessage($method = '', $data = [])
    {
        switch ($method) {
            case 'update':
                return 'Produit mis a jour avec success!';
                break;
            case 'delete':
                return 'Produit Supprimé!';
                break;
            default:
                return 'Produit créee avec success!';
                break;
        }
    }

    //=======================================================================
    // Before save manage check boxes & select Data
    //=======================================================================
    public function beforeSave($params = [])
    {
        parent::beforeSave($params);
        // Manage chechboxes
        $checkboxes = ['p_charge_tax', 'p_track_qty', 'p_continious_sell'];
        foreach ($checkboxes as $checkbox) {
            if (!isset($params[$checkbox])) {
                $this->$checkbox = null;
            }
        }
        $checkboxes = null;
        //manage select2 organisation
        $select2_field = ['p_company', 'p_warehouse', 'p_shipping_class'];
        foreach ($select2_field as $select2) {
            $select2_data = isset($params[$select2]) ? json_decode($this->htmlDecode($params[$select2]), true) : [];
            if ($select2_data && $select2_data[0]) {
                $this->$select2 = $select2_data[0]['id'];
                $select2_data = null;
            }
        }
        // Manage prices
        $this->p_regular_price = (double)$this->p_regular_price;
        $this->p_compare_price = (double)$this->p_compare_price;
        $this->p_cost_per_item = (double)$this->p_cost_per_item;
        // User Salt
        $this->user_salt = AuthManager::$currentLoggedInUser->salt;
        return true;
    }

    //=======================================================================
    // After save .. manage categories
    //=======================================================================
    public function afterSave($params = [])
    {
        // parent::beforeSave();
        if ($params) {
            $categories = isset($params['custom_categorie']) && $params['custom_categorie'] != '' ? explode(',', $params['custom_categorie']) : [];
            $colID = $this->get_colID();
            $lastID = $this->$colID == null ? $params['saveID']->get_lastID() : $this->$colID;
            if ($categories) {
                $product_categorie = (new ProductCategorieManager())->getAllbyIndex($lastID);
                if ($product_categorie->count() > 0) {
                    foreach ($product_categorie->get_results() as $pc) {
                        if (!$pc->delete()) {
                            break;
                            return false;
                        }
                    }
                }
                foreach ($categories as $catID) {
                    $product_categorie->catID = $catID;
                    $product_categorie->pdtID = $this->pdtID == null ? $lastID : $this->pdtID;
                    if (!$product_categorie->save()) {
                        break;
                        $product_categorie = null;
                        return false;
                    }
                }
                $product_categorie = null;
            }
        }
        return true;
    }

    //=======================================================================
    // After find operation
    //=======================================================================
    //
    public function afterFind($m = null)
    {
        $media_key = H_upload::get_mediaKey($m);
        $m->$media_key = unserialize($m->$media_key);
        if (is_array($m->$media_key)) {
            foreach ($m->$media_key as $key => $url) {
                $m->$media_key[$key] = IMG . $url;//ImageManager::asset_img($url);
            }
        } else {
            $m->$media_key = [IMG . 'products' . US . 'product-80x80.jpg'];//[ImageManager::asset_img('products' . US . 'product-80x80.jpg')];
        }
        return $m;
    }

    //=======================================================================
    // Get Selected Options
    //=======================================================================
    public function get_selectedOptions($table = '')
    {
        $options = $this->get_options_data($table);
        $response = [];
        if ($options) {
            $colTitle = array_pop($options);
            $colID = array_pop($options);
            if (count($options) > 0) {
                foreach ($options as $item) {
                    $response[$item->$colID] = $this->htmlDecode($item->$colTitle);
                }
            }
        }
        $options = null;
        return $response ? $response : [];
    }

    // Get options
    public function get_options_data($table)
    {
        switch ($table) {
            case 'categories':
                $tables = ['categories' => ['*'], 'product_categorie' => ['pdtID', 'catID']];
                $data = ['join' => 'INNER JOIN', 'rel' => ['catID', 'catID'], 'where' => ['pdtID' => ['value' => $this->pdtID, 'tbl' => 'product_categorie']], 'group_by' => 'categorie'];
                $r = (new ProductCategorieManager())->getAllItem($data, $tables)->get_results();
                $r['colID'] = 'catID';
                $r['colTitle'] = 'categorie';
                return $r;
            break;
            case 'warehouse':
                $r = (new WarehouseManager())->getAllbyParams(['whID' => $this->p_warehouse])->get_results();
                $r['colID'] = 'whID';
                $r['colTitle'] = 'wh_name';
                return $r;
            break;
            case 'company':
                $r = (new CompanyManager())->getAllbyParams(['compID' => $this->p_company])->get_results();
                $r['colID'] = 'compID';
                $r['colTitle'] = 'sigle';
                return $r;
            break;
            case 'shipping_class':
                $r = (new ShippingClassManager())->getAllbyParams(['shcID' => $this->p_shipping_class])->get_results();
                $r['colID'] = 'shcID';
                $r['colTitle'] = 'sh_name';
                return $r;
            break;

            default:
                // code...
            break;
        }
    }

    //=======================================================================
    // Get Products
    //=======================================================================
    public function get_Products()
    {
        $tables = ['products' => ['*'], 'product_categorie' => ['pdtID', 'catID'], 'categories' => ['categorie']];
        $data = ['join' => 'LEFT JOIN', 'rel' => [['pdtID', 'pdtID'], ['catID', 'catID']], 'where' => ['brID' => ['value' => 2, 'tbl' => 'categories']]];
        $pdt = (new ProductCategorieManager())->getAllItem($data, $tables);
        return $pdt->count() > 0 ? $pdt->get_results() : false;
    }

    //=======================================================================
    // Get Select2 field Names
    //=======================================================================
    public function get_fieldName($table)
    {
        switch ($table) {
                case 'categories':
                    return 'categorie';
                break;
                case 'warehouse':
                    return 'p_warehouse';
                break;
                case 'shipping_class':
                    return 'p_shipping_class';
                break;
                case 'company':
                    return 'p_company';
                break;
                default:
                break;
            }
    }
}
