<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->asset('css/custom/admin/users/allusers', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<!-- Content Wrapper. Contains page content -->
<div class="page-content">
    <div class="row header justify-content-between mb-4 w-100">
        <div class="col">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb ps-0 fs-base">
                    <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                    <li class="breadcrumb-item"><span>Users</span></li>
                    <li class="breadcrumb-item active" aria-current="page">All users</li>
                </ol>
            </nav>
        </div>
        <div class="col text-end">
            <h4 class="header-title h3">
                Manage Users
            </h4>
        </div>
    </div>
    <div class="row mb-4">
        <div class="col-12">
            <div class="card card-solid">
                <h5 class="card-header main-header">
                    <span class="text-light lead">Manage Users</span>
                    <span class="ms-auto"> <a href="javascript:history.go(-1)" class="btn btn-light btn-secondary"
                            id="back"><i class="far fa-arrow-alt-circle-left fa-lg"></i></i>&nbsp;Back
                        </a>&nbsp;&nbsp;
                        <a href="" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modal-box"
                            id="addNew"><i class="fas fa-plus-circle fa-lg"></i>&nbsp;Add new</a>
                    </span>
                </h5>
                <div id="globalErr"></div>
                <div class="card-body pb-0">
                    <div class="row d-flex align-items-stretch" id="users">
                        <?php
                        if (isset($_GET['page']) && !empty($_GET['page'])) {
                            $page = $_GET['page'];
                            $current_page = (int)strip_tags($page);
                            if (!filter_var($page, FILTER_VALIDATE_INT)) {
                                $current_page = 1;
                            };
                        } else {
                            $current_page = 1;
                        }
                        if ($current_page <= 0) {
                            $current_page = 1;
                        }
                        $total_item = (int)$this->view_data->getAllItem()->count();
                        $item_per_page = 6;
                        $total_page = ceil($total_item / $item_per_page);
                        if ($current_page > $total_page) {
                            $current_page = $total_page;
                        }
                        $offset = $item_per_page * ($current_page - 1); $method = $this->user_method;?>
                        <?= $this->view_data->$method($offset, $item_per_page)?>
                    </div>
                </div>
                <!-- /.card-body -->
                <div class="card-footer">
                    <?php if ($total_page > $item_per_page):?>
                    <nav aria-label="Contacts Page Navigation">
                        <ul class="pagination justify-content-center m-0">
                            <li
                                class="page-item <?=($current_page <= 1) ? 'disabled' : ''?>">
                                <a class="page-link"
                                    href="<?=PROOT . 'admin' . US . 'allusers'?>?page=<?=$current_page - 1?>">Précédente</a>
                            </li>
                            <?php for ($page = 1; $page <= $total_page; $page++):?>
                            <li
                                class="page-item <?=($current_page == $page) ? 'active' : ''?>">
                                <a class="page-link"
                                    href="<?=PROOT . 'admin' . US . 'allusers'?>?page=<?=$page?>"><?=$page?></a>
                            </li>
                            <?php endfor;?>
                            <li
                                class="page-item <?=($current_page >= $total_page) ? 'disabled' : ''?>">
                                <a class="page-link"
                                    href="<?=PROOT . 'admin' . US . 'allusers'?>?page=<?=$current_page + 1?>">Suivante</a>
                            </li>
                        </ul>
                    </nav>
                    <?php endif;?>
                </div>
                <!-- /.card-footer -->
            </div>
            <!-- /.card -->
        </div>
    </div>
    <!-- /.content-wrapper -->
</div>
<!----------Add new user-------->
<div class="modal fade" role="dialog" id="modal-box">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="btn-close text-light" data-bs-dismiss="modal"></button>
                <?=$this->profile_upload?>
                <h5 class="modal-title"> New user</h5>
            </div>
            <div class="modal-body">
                <form action="#" method="post" id="add-user-frm" class="px-3 needs-validation"
                    enctype="multipart/form-data">
                    <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'add-user-frm', $_SESSION[TOKEN_NAME])); ?>
                    <input type="hidden" name="operation" id="operation">
                    <input type="hidden" name="userID" id="userID"
                        value="<?=AuthManager::$currentLoggedInUser->userID?>">
                    <input type="hidden" name="date_enreg" id="date_enreg">
                    <input type="hidden" name="updateAt" id="updateAt">
                    <input type="hidden" name="deleted" id="deleted">
                    <div id="alertErr"></div>
                    <div class="row g-3">
                        <div class="col-sm-6 mb-3">
                            <input type="text" name="firstName" id="firstName" class="form-control "
                                placeholder="Prénom">
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <input type="text" name="lastName" id="lastName" class="form-control " placeholder="Nom">
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <input type="text" name="userName" id="userName" class="form-control "
                                placeholder="Identifiant">
                            <div class="invalid-feedback"></div>
                        </div>
                        <div class="col-sm-6 mb-3">
                            <input type="text" name="email" id="email" class="form-control " placeholder="Email">
                            <div class="invalid-feedback"></div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <input type="text" name="phone" id="phone" class="form-control " placeholder="Téléphone">
                        <div class="invalid-feedback"></div>
                    </div>
                    <select class="form-select select2" multiple aria-label="multiple select example" name="acl[]"
                        id="acl">
                        <option value="1" data-custom-attribute="1">Vendor</option>
                        <option value="2" data-custom-attribute="2">Cutomer</option>
                        <option value="2" data-custom-attribute="3">Member</option>
                        <option value="3" data-custom-attribute="4">Admin</option>
                    </select>
                    <div class="mb-3 text-center">
                        <input type="submit" name="submitBtn" id="submitBtn" value="Add" class="button mt-3">
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->asset('js/custom/admin/users/allusers', 'js') ?? ''?>">
</script>
<?php $this->end();
