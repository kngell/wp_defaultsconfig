<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->asset('css/custom/admin/products/allproducts', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<main id=main-site>
    <!-- Content -->
    <div class="page-content">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb ps-0 fs-base">
                <li class="breadcrumb-item"><a href="#">FlexAdmin</a></li>
                <li class="breadcrumb-item"><span>Ecommerce</span></li>
                <li class="breadcrumb-item active" aria-current="page">Products</li>
            </ol>
        </nav>
        <div class="row header justify-content-between mb-4">
            <div class="col-12">
                <h1 class="header-title h3">
                    <i class="fad fa-star-half-alt text-highlight"></i>
                    Products
                </h1>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-12">
                <div class="input-group">
                    <button class="btn btn-highlight" type="button"><i class="fal fa-plus-circle"></i> <span
                            class="d-none d-md-inline">Add Product</span></button>
                    <button class="btn btn-highlight" type="button"><i class="fal fa-file-import"></i> <span
                            class="d-none d-md-inline">Import</span></button>
                    <button class="btn btn-highlight" type="button"><i class="fal fa-arrow-to-bottom"></i> <span
                            class="d-none d-md-inline">Export</span></button>
                    <button class="btn btn-highlight" type="button"><i class="fal fa-list-ul"></i> <span
                            class="d-none d-md-inline">Customize Columns</span></button>
                    <button type="button" class="btn btn-highlight dropdown-toggle dropdown-toggle-split"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fal fa-pen"></i> <span class="d-none d-md-inline">Bulk Actions</span>
                    </button>
                    <ul class="dropdown-menu" style="">
                        <li><a class="dropdown-item" href="#">Delete</a></li>
                        <li><a class="dropdown-item" href="#">Update Statuses</a></li>
                        <li><a class="dropdown-item" href="#">Create Notes</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="ecommerce-datatable" class="table table-middle table-hover table-responsive">
                                <thead>
                                    <tr>
                                        <th class="no-sort">
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </th>
                                        <th class="no-sort">Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Units Sold</th>
                                        <th>Status</th>
                                        <th class="text-center no-sort">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <a href="ecommerce-product-detail.html">
                                                <img class="img-thumbnail" alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48">
                                            </a>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html">Blue Dress For Woman</a></td>
                                        <td>Classic Tee</td>
                                        <td>$19</td>
                                        <td>32</td>
                                        <td>2</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Lether Gray Tuxedo</a></td>
                                        <td>Classic Pullover Hoodie</td>
                                        <td>$25</td>
                                        <td>56</td>
                                        <td>43</td>
                                        <td><span class="badge bg-danger rounded">Deactive</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Woman Full Sliv Dress</a></td>
                                        <td>Classic Pullover Hoodie</td>
                                        <td>$21</td>
                                        <td>44</td>
                                        <td>19</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Light Blue Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$23</td>
                                        <td>44</td>
                                        <td>0</td>
                                        <td><span class="badge bg-danger rounded">Deactive</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Blue Dress For Woman</a></td>
                                        <td>Classic Pullover Hoodie</td>
                                        <td>$26</td>
                                        <td>23</td>
                                        <td>1</td>
                                        <td><span class="badge bg-warning rounded">Pending</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Blue Casual Check Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$19</td>
                                        <td>14</td>
                                        <td>5</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">White Black Line Dress</a></td>
                                        <td>Classic Pullover Hoodie</td>
                                        <td>$18</td>
                                        <td>19</td>
                                        <td>23</td>
                                        <td><span class="badge bg-danger rounded">Deactive</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Men Blue Jins Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$21</td>
                                        <td>76</td>
                                        <td>145</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Woman Full Sliv Dress</a></td>
                                        <td>Classic Tee</td>
                                        <td>$27</td>
                                        <td>22</td>
                                        <td>86</td>
                                        <td><span class="badge bg-warning rounded">Pending</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Red & Black Check Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$16</td>
                                        <td>28</td>
                                        <td>18</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Men Blue Jins Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$19</td>
                                        <td>15</td>
                                        <td>92</td>
                                        <td><span class="badge bg-warning rounded">Pending</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Military And Veterans T-shirts</a>
                                        </td>
                                        <td>Classic Tee</td>
                                        <td>$17.99</td>
                                        <td>44</td>
                                        <td>11</td>
                                        <td><span class="badge bg-danger rounded">Deactive</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Just Eat It! Hamburger</a></td>
                                        <td>Classic Tee</td>
                                        <td>$18</td>
                                        <td>67</td>
                                        <td>35</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">I'm Just Here For The Boos</a></td>
                                        <td>Classic Tee</td>
                                        <td>$21</td>
                                        <td>16</td>
                                        <td>67</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Patriotic Dog Paw</a></td>
                                        <td>Classic Tee</td>
                                        <td>$22</td>
                                        <td>61</td>
                                        <td>13</td>
                                        <td><span class="badge bg-danger rounded">Deactive</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">T-Shirt Form Girls</a></td>
                                        <td>Classic Tee</td>
                                        <td>$23</td>
                                        <td>39</td>
                                        <td>45</td>
                                        <td><span class="badge bg-warning rounded">Pending</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">T-Shirt Form Girls</a></td>
                                        <td>Classic Tee</td>
                                        <td>$17</td>
                                        <td>23</td>
                                        <td>23</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Blue Dress For Woman</a></td>
                                        <td>Classic Tee</td>
                                        <td>$18</td>
                                        <td>48</td>
                                        <td>25</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Woman Full Sliv Dress</a></td>
                                        <td>Classic Pullover Hoodie</td>
                                        <td>$21</td>
                                        <td>35</td>
                                        <td>44</td>
                                        <td><span class="badge bg-danger rounded">Deactive</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Woman Full Sliv Dress</a></td>
                                        <td>Classic Tee</td>
                                        <td>$23</td>
                                        <td>9</td>
                                        <td>11</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Blue Casual Check Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$24</td>
                                        <td>56</td>
                                        <td>12</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Men Blue Jins Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$25</td>
                                        <td>16</td>
                                        <td>45</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Blue Dress For Woman</a></td>
                                        <td>Classic Pullover Hoodie</td>
                                        <td>$23</td>
                                        <td>76</td>
                                        <td>56</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">T-Shirt Form Girls</a></td>
                                        <td>Pillow</td>
                                        <td>$25</td>
                                        <td>45</td>
                                        <td>15</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label class="custom-checkbox">
                                                <input type="checkbox">
                                                <span></span>
                                            </label>
                                        </td>
                                        <td><a href="ecommerce-product-detail.html"><img class="img-thumbnail"
                                                    alt="Product"
                                                    src="<?=$this->asset('img/products/product-80x80.jpg')?>"
                                                    width="48"></a></td>
                                        <td><a href="ecommerce-product-detail.html">Light Blue Shirt</a></td>
                                        <td>Classic Tee</td>
                                        <td>$26</td>
                                        <td>34</td>
                                        <td>35</td>
                                        <td><span class="badge bg-success rounded">Active</span></td>
                                        <td>
                                            <ul class="list-unstyled table-actions">
                                                <li><a href="ecommerce-add-product.html"><i class="fal fa-pen"
                                                            data-bs-original-title="Edit"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-cog" data-bs-original-title="Settings"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-chart-bar"
                                                            data-bs-original-title="Analytics"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-clone"
                                                            data-bs-original-title="Duplicate"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                                <li><a href="#"><i class="fal fa-trash" data-bs-original-title="Archive"
                                                            data-bs-toggle="tooltip"></i></a></li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!----------Add new categorie Modal-------->
    <div class="modal fade" role="dialog" id="modal-box">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h5 class="modal-title text-light"> Add new</h5>
                    <button type="button" class="close text-light" data-bs-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <form action="#" method="post" id="Categorie-frm" class="px-3 needs-validation">
                        <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'Categorie-frm', $_SESSION[TOKEN_NAME])); ?>
                        <input type="hidden" name="operation" id="operation">
                        <input type="hidden" name="catID" id="catID">
                        <input type="hidden" name="date_enreg" id="date_enreg">
                        <input type="hidden" name="updateAt" id="updateAt">
                        <input type="hidden" name="status" id="status">
                        <div id="alertErr"></div>
                        <div class="form-group">
                            <input type="text" name="categorie" id="categorie" class="form-control "
                                placeholder="Catégorie">
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="form-group">
                            <textarea name="description" id="description" class="form-control ck-content"
                                placeholder="Description..."></textarea>
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="form-group select-box">
                            <select class="form-control" id="parentID" name="parentID">

                            </select>
                            <span class="custom-arrow"></span>
                        </div>
                        <div class="form-group justify-content-between">
                            <input type="submit" name="addCategorie" id="addCategorieBtn" value="Add Categorie"
                                class="btn btn-light text-light bg-dark btn-block">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Fin Content -->
    <input type="hidden" id="ip_address" style="display:none"
        value="<?=H_visitors::getIP()?>">
</main>
<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->asset('js/custom/admin/products/allproducts', 'js') ?? ''?>">
</script>
<?php $this->end();
