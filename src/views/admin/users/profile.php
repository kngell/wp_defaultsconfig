<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->get_Asset('css/custom/admin/users/profile', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<div class="content-wrapper">
    <section class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1>User Profile</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Dashbord</a></li>
                        <li class="breadcrumb-item active">User Profile</li>
                    </ol>
                </div>
            </div>
        </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="card card-solid">
                <h5 class="card-header bg-info d-flex">
                    <span class="text-light lead">Profile Details</span>
                    <span class="ml-auto"> <a href="javascript:history.go(-1)" class="btn btn-light btn-secondary"
                            id="back"><i class="far fa-arrow-alt-circle-left fa-lg"></i></i>&nbsp;Back
                        </a>&nbsp;
                    </span>
                </h5>
                <div class="row">
                    <div class="col-md-4 col-xl-3">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h5 class="card-title mb-0">Profile Details</h5>
                            </div>
                            <div class="card-body text-center">
                                <img src="../../../assets/img/users/avatar.png" alt="Christina Mason"
                                    class="img-fluid rounded-circle mb-2" width="128" height="128" />
                                <h5 class="card-title mb-0">Christina Mason</h5>
                                <div class="text-muted mb-2">Lead Developer</div>

                                <div>
                                    <a class="btn btn-primary btn-sm" href="#">Follow</a>
                                    <a class="btn btn-primary btn-sm" href="#"><span
                                            data-feather="message-square"></span> Message</a>
                                </div>
                            </div>
                            <hr class="my-0" />
                            <div class="card-body">
                                <h5 class="h6 card-title">Skills</h5>
                                <a href="#" class="badge bg-primary mr-1 my-1">HTML</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">JavaScript</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">Sass</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">Angular</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">Vue</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">React</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">Redux</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">UI</a>
                                <a href="#" class="badge bg-primary mr-1 my-1">UX</a>
                            </div>
                            <hr class="my-0" />
                            <div class="card-body">
                                <h5 class="h6 card-title">About</h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-1"><span data-feather="home" class="feather-sm mr-1"></span> Lives in
                                        <a href="#">San Francisco, SA</a>
                                    </li>

                                    <li class="mb-1"><span data-feather="briefcase" class="feather-sm mr-1"></span>
                                        Works at <a href="#">GitHub</a></li>
                                    <li class="mb-1"><span data-feather="map-pin" class="feather-sm mr-1"></span> From
                                        <a href="#">Boston</a>
                                    </li>
                                </ul>
                            </div>
                            <hr class="my-0" />
                            <div class="card-body">
                                <h5 class="h6 card-title">Elsewhere</h5>
                                <ul class="list-unstyled mb-0">
                                    <li class="mb-1"><span class="fas fa-globe fa-fw mr-1"></span> <a
                                            href="#">staciehall.co</a></li>
                                    <li class="mb-1"><span class="fab fa-twitter fa-fw mr-1"></span> <a
                                            href="#">Twitter</a></li>
                                    <li class="mb-1"><span class="fab fa-facebook fa-fw mr-1"></span> <a
                                            href="#">Facebook</a></li>
                                    <li class="mb-1"><span class="fab fa-instagram fa-fw mr-1"></span> <a
                                            href="#">Instagram</a></li>
                                    <li class="mb-1"><span class="fab fa-linkedin fa-fw mr-1"></span> <a
                                            href="#">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->get_Asset('js/custom/admin/users/profile', 'js') ?? ''?>">
</script>
<?php $this->end();
