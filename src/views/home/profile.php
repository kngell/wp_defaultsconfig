<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->get_Asset('css/custom/home/profile', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<main id="main-site">
    <!-- user Details  -->
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <!--====== Profile Start ======-->
                <section class="profile-wrapper" id="profile">
                    <div class="card profile">
                        <div class="card-header profile-header">
                            <div class="profile-cover-photo"></div>
                            <div class="profile-author d-sm-flex">
                                <div class="text-center profile-photo">
                                    <img src="../../assets/img/profile-photo.png" alt="Profile Photo" class="img-fluid">
                                </div>
                                <div class="profile-name">
                                    <h4 class="name">Musa Ahmed</h4>
                                    <p class="email">musa@email.com</p>
                                </div>
                            </div>
                        </div>
                        <a class="btn btn-primary w-100 profile-link" href="javascript:void(0)">Edit</a>
                        <div class="card-body profile-body">
                            <div class="profile-title">
                                <h5 class="title"><i class="fas fa-info-circle"></i>&nbsp;Personal Details</h5>
                            </div>
                            <div class="profile-details">
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">Profession:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>Consultant</p>
                                    </div>
                                </div>
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">About Me:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                            placeat
                                            deleniti. Eos nam ex pariatur voluptate vitae aliquam ?
                                        </p>
                                    </div>
                                </div>
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">Email:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>musa@email.com</p>
                                    </div>
                                </div>
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">Phone:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>+123 456 789 0234</p>
                                    </div>
                                </div>
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">Address:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR.</p>
                                    </div>
                                </div>
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">Gender:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>Male</p>
                                    </div>
                                </div>
                                <div class="single-details-item d-flex flex-wrap">
                                    <div class="details-title">
                                        <h6 class="title">Birthday:</h6>
                                    </div>
                                    <div class="details-content media-body">
                                        <p>04 January 1992</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="profile-footer mt-45 mb-5">
                            <div class="profile-title">
                                <a class="btn btn-primary w-100 profile-link" href="javascript:void(0)">Delete</a>
                            </div>
                        </div>
                    </div>
                </section>
                <!--====== Profile Ends ======-->
            </div>
            <!-- /.col -->
            <div class="col-md-9">
                <section class="transaction-wrapper" id="transaction">
                    <div class="card transaction">
                        <div class="card-header transaction-header">
                            <div class="transaction-cover-photo"></div>
                            <div class="text-center transaction-photo">

                            </div>
                            <div class="profile-card-info">
                                <div class="row">
                                    <div class="col-md-4 col-sm-6">
                                        <div class="single-card-info d-flex">
                                            <div class="card-icon">
                                                <img src="../../assets/img/visa.png" alt="Card">
                                            </div>
                                            <div class="card-info media-body">
                                                <h5 class="card-name">Musa Ahmed</h5>
                                                <p class="card-number">.... 4534 <span>02/20</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="single-card-info d-flex">
                                            <div class="card-icon">
                                                <img src="../../assets/img/american-express.png" alt="Card">
                                            </div>
                                            <div class="card-info media-body">
                                                <h5 class="card-name">Musa Ahmed</h5>
                                                <p class="card-number">.... 4534 <span>02/20</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6">
                                        <div class="single-card-info d-flex">
                                            <div class="card-icon">
                                                <img src="../../assets/img/mastercard.png" alt="Card">
                                            </div>
                                            <div class="card-info media-body">
                                                <h5 class="card-name">Musa Ahmed</h5>
                                                <p class="card-number">.... 4534 <span>02/20</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><!-- /.card-header -->
                        <div class="card-body">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                        aria-selected="true">Mes commandes</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-profile" type="button" role="tab"
                                        aria-controls="pills-profile" aria-selected="false">Mes factures</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-contact" type="button" role="tab"
                                        aria-controls="pills-contact" aria-selected="false">Données
                                        personnelles</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                                    aria-labelledby="pills-home-tab">A</div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                    aria-labelledby="pills-profile-tab">B</div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                                    aria-labelledby="pills-contact-tab">C</div>
                            </div>
                        </div><!-- /.card-body -->

                    </div>
                    <!-- /.card -->
                </section>
            </div>
        </div>

    </div>


    <!-- !user Details -->

    <input type="hidden" id="ip_address" style="display:none"
        value="<?=H_visitors::getIP()?>">
</main>
<!-- End  Main -->

<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!----------custom--------->
<script type="text/javascript"
    src="<?= $this->get_Asset('js/custom/home/profile', 'js') ?? ''?>">
</script>
<?php $this->end();
