<?php

class ProductsManager extends Model
{
    protected $_colID = 'pdtID';
    protected $_table = 'products';
    protected $_colTitle = 'p_title';
    protected $_colContent = '';
    protected $_modelName;
    public $pdtID;
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
    // After save .. manage categories
    //=======================================================================
    public function afterSave($params = [])
    {
        // parent::beforeSave();
        if ($params) {
            $categories = isset($params['categorie']) && $params['categorie'] != '' ? explode(',', $params['categorie']) : [];
            $lastID = $params['saveID']->count();
            if ($categories) {
                $product_categorie = (new ProductCategorieManager())->getAllbyIndex(empty($this->pdtID) ? $params['saveID']->get_lastID() : $this->pdtID);
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
                    $product_categorie->pdtID = empty($this->pdtID) ? $lastID : $this->pdtID;
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
            $m->$media_key = IMG . 'products' . US . 'product-80x80.jpg';//[ImageManager::asset_img('products' . US . 'product-80x80.jpg')];
        }
        return $m;
    }

    //=======================================================================
    // Get Selected Options
    //=======================================================================
    public function get_selectedOptions($pdtID = '')
    {
        $tables = ['categories' => ['*'], 'product_categorie' => ['pdtID', 'catID']];
        $data = ['join' => 'INNER JOIN', 'rel' => ['catID', 'catID'], 'where' => ['pdtID' => ['value' => $pdtID ? $pdtID : $this->pdtID, 'tbl' => 'product_categorie']]];
        $pdt_categories = (new ProductCategorieManager())->getAllItem($data, $tables);
        $response = [];
        if ($pdt_categories->count() >= 1) {
            foreach ($pdt_categories->get_results() as $item) {
                $response[$item->catID] = $item->categorie;
            }
        }
        $pdt_categories = null;
        return $response ? $response : [];
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
}
