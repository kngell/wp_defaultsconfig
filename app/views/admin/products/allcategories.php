<?php $this->start('head'); ?>
<!-------Costum-------->
<link href="<?= $this->css ?>" rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">Dashboard</h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">allCategories</a></li>
                        <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="card border-primary">
                <h5 class="card-header bg-primary d-flex">
                    <span class="text-light lead">Manage Categories</span>
                    <span class="ml-auto"> <a href="javascript:history.go(-1)" class="btn btn-light btn-secondary"
                            id="back"><i class="far fa-arrow-alt-circle-left fa-lg"></i></i>&nbsp;Back
                        </a>&nbsp;&nbsp;
                        <a href="" class="btn btn-secondary" data-toggle="modal" data-target="#modal-box" id="addNew"><i
                                class="fas fa-plus-circle fa-lg"></i>&nbsp;Add new</a>
                    </span>
                </h5>
                <div id="globalErr"></div>
                <div class="card-body">
                    <div class="table-responsive" id="showAll">
                        <p class="text-center lead mt-5">Please wait...</p>
                    </div>
                </div>
            </div>
        </div><!-- /.container-fluid -->
        <!----------Add new categorie Modal-------->
        <div class="modal fade" role="dialog" id="modal-box">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h5 class="modal-title text-light"> Add new</h5>
                        <button type="button" class="close text-light" data-dismiss="modal">&times;</button>
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

        <!----------End Add new post Modal-------->
    </section>
    <!-- /.content -->
</div>
<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript" src="<?= $this->js ?>"></script>
<?php $this->end();
