<?php $this->start('head'); ?>
<!-------Costum-------->
<link
    href="<?= $this->asset('css/custom/home/account/account', 'css') ?? ''?>"
    rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>
<main id="main-site">
    <!-- user Details  -->
    <div class="container">
        <div class="row wrapper">
            <div class="col-md-3 mini-profile-wrapper" id="mini-profile">
                <!--====== mini-profile Start ======-->
                <div class="card mini-profile">
                    <div class="card-header mini-profile-header">
                        <div class="mini-profile-cover-photo"></div>
                        <div class="mini-profile-author d-sm-flex">
                            <div class="text-center mini-profile-photo">
                                <img src="../../../assets/img/profile-photo.png" alt="mini-profile Photo"
                                    class="img-fluid">
                            </div>
                            <div class="mini-profile-name">
                                <h4 class="name">Musa Ahmed</h4>
                                <p class="email">musa@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body mini-profile-body">
                        <div class="mini-profile-title">
                            <a class="mini-profile-link" href="javascript:void(0)">
                                <p class="title lead"><i class="fas fa-info-circle fa-lg"></i>&nbsp;Infos
                                </p>
                            </a>

                        </div>
                        <div class="mini-profile-details">
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
                                    <h6 class="title">Phone:</h6>
                                </div>
                                <div class="details-content media-body">
                                    <p>+123 456 789 0234</p>
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
                    <div class="mini-profile-footer">
                        <div class="mini-profile-title">
                            <a class="btn btn-primary w-100 mini-profile-link"
                                href="<?=PROOT . 'home' . US . 'account'?>"><span
                                    class="icon"><i class="far fa-undo"></i></span><span>Retour</span></a>
                        </div>
                    </div>
                </div>
                <!--====== mini-profile Ends ======-->
            </div>
            <!-- /.col -->
            <div class="col-md-9 transaction-wrapper" id="transaction">
                <div class="card transaction">
                    <div class="card-header transaction-header">
                        <div class="transaction-cover-photo"></div>
                        <div class="text-center transaction-photo">
                            <div class="profile-card-info">
                                <div class="row">
                                    <div class="col-md-4 col-sm-6 credit-card">
                                        <div class="single-card-info d-flex">
                                            <div class="card-icon">
                                                <img src="../../../assets/img/visa.png" alt="Card">
                                            </div>
                                            <div class="card-info media-body">
                                                <h5 class="card-name">Musa Ahmed</h5>
                                                <p class="card-number">.... 4534 <span>02/20</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 credit-card">
                                        <div class="single-card-info d-flex">
                                            <div class="card-icon">
                                                <img src="../../../assets/img/american-express.png" alt="Card">
                                            </div>
                                            <div class="card-info media-body">
                                                <h5 class="card-name">Musa Ahmed</h5>
                                                <p class="card-number">.... 4534 <span>02/20</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 credit-card">
                                        <div class="single-card-info d-flex">
                                            <div class="card-icon">
                                                <img src="../../../assets/img/mastercard.png" alt="Card">
                                            </div>
                                            <div class="card-info media-body">
                                                <h5 class="card-name">Musa Ahmed</h5>
                                                <p class="card-number">.... 4534 <span>02/20</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- /.card-header -->
                    <div class="card-body transaction-body">
                        <div class="row transaction-menu">
                            <div class="col-sm-6 transaction-item">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span class="card-img-wrapper"><img
                                                    src="../../../assets/img/mescommandes.png" alt="Mes commandes"
                                                    class="img-fluid"></span>Mes
                                            commandes</h5>
                                        <p class="card-text">Suivre, Retourner ou Acheter à nouveau</p>
                                    </div>
                                    <form class="user_form">
                                        <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'user_form' . AuthManager::currentUser()->userID, $_SESSION[TOKEN_NAME])); ?>
                                        <input type="hidden" name="userID"
                                            value="<?=AuthManager::currentUser()->userID?>">
                                        <input type="hidden" name="template" value="commandes">
                                    </form>
                                </div>
                            </div>
                            <div class="col-sm-6 transaction-item">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span class="card-img-wrapper"><img
                                                    src="../../../assets/img/donnees-personnelles.png"
                                                    alt="Mes données personnelles" class="img-fluid"></span>Données
                                            personnels</h5>
                                        <p class="card-text">Modifier ou supprimer mes données personnels, changer mon
                                            mot
                                            de passe</p>
                                    </div>
                                    <form class="user_form">
                                        <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'user_form' . AuthManager::currentUser()->userID, $_SESSION[TOKEN_NAME])); ?>
                                        <input type="hidden" name="userID"
                                            value="<?=AuthManager::currentUser()->userID?>">
                                        <input type="hidden" name="template" value="users">
                                    </form>
                                </div>
                            </div>
                            <div class="col-sm-6 transaction-item">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span class="card-img-wrapper"><img
                                                    src="../../../assets/img/adresses.png" alt="Mes adresses"
                                                    class="img-fluid"></span>Mes addresses</h5>
                                        <p class="card-text">Modifier ou ajouter les adresses de livraison et de
                                            facturation</p>
                                    </div>
                                    <form class="user_form">
                                        <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'user_form' . AuthManager::currentUser()->userID, $_SESSION[TOKEN_NAME])); ?>
                                        <input type="hidden" name="userID"
                                            value="<?=AuthManager::currentUser()->userID?>">
                                        <input type="hidden" name="template" value="address_book">
                                    </form>
                                </div>
                            </div>
                            <div class="col-sm-6 transaction-item">
                                <div class="card h-100">
                                    <div class="card-body">
                                        <h5 class="card-title"><span class="card-img-wrapper"><img
                                                    src="../../../assets/img/mode-de-paiement.png"
                                                    alt="Mes modes de paiement" class="img-fluid"></span>Moyens de
                                            paiement</h5>
                                        <p class="card-text">Modifier ou supprimer vos moyens de
                                            paiement</p>
                                    </div>
                                    <form class="user_form">
                                        <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'user_form' . AuthManager::currentUser()->userID, $_SESSION[TOKEN_NAME])); ?>
                                        <input type="hidden" name="userID"
                                            value="<?=AuthManager::currentUser()->userID?>">
                                        <input type="hidden" name="template" value="payments_mode">
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div><!-- /.card-body -->
                </div>
                <!-- /.card -->
                <div class="row mt-4 transaction-button">
                    <div class="col-6">
                        <a href="<?=PROOT . 'home'?>"
                            class="btn retour">
                            <i class="fal fa-angle-double-left"></i>
                            Retour à la boutique
                        </a>
                    </div> <!-- end col -->
                    <div class="col-6">
                        <div class="text-end">
                            <a href="#" class="btn continue">
                                <i class="mdi mdi-truck-fast me-1"></i> Shopping cart </a>
                        </div>
                    </div> <!-- end col -->
                </div>
            </div>
        </div>
        <hr class="my-4">
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
    src="<?= $this->asset('js/custom/home/account/account', 'js') ?? ''?>">
</script>
<?php $this->end();