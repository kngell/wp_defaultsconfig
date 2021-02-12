<?php $this->start('head'); ?>
<!-------Costum-------->
<!-- Main style -->
<link href="<?= $this->cssAdminlib ?? "" ?>" rel="stylesheet" type="text/css">
<!-- Plugins css -->
<link href="<?= $this->cssAdminPlugins ?? "" ?>" rel="stylesheet" type="text/css">
<!-- Main style -->
<link href="<?= $this->cssAdminMain ?? "" ?>" rel="stylesheet" type="text/css">
<link href="<?= $this->css ?>" rel="stylesheet" type="text/css">
<?php $this->end(); ?>
<?php $this->start('body'); ?>

<!-- login-box -->
<div class="login-box m-auto" id="Login-Register-System">
    <div class="login-logo">
        <a href="<?= PROOT . "backend" ?>"><b>Admin</b> - Area</a>
    </div>
    <!-- /.login-logo -->
    <div class="card" id="login-box">
        <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <form action="" method="post" id="login-frm">
                <?= FH::csrfInput('csrftoken', hash_hmac('sha256', 'login-frm', $_SESSION[TOKEN_NAME])); ?>
                <div id="loginAlert"></div>
                <div class="input-group mb-3">
                    <input type="email" name="email" id="email" class="form-control" placeholder="Email">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                </div>
                <div class="input-group mb-3">
                    <input type="password" name="password" id="password" class="form-control" placeholder="Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-8">
                        <div class="icheck-primary">
                            <input type="checkbox" id="remember">
                            <label for="remember">
                                Remember Me
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                        <button type="submit" class="btn btn-primary btn-block" id="login-btn">Sign In</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

            <div class="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-primary">
                    <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" class="btn btn-block btn-danger">
                    <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
            </div>
            <!-- /.social-auth-links -->

            <p class="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
                <a href="register.html" class="text-center">Register a new admin</a>
            </p>
        </div>
        <!-- /.login-card-body -->
    </div>
</div>
<!-- /.login-box -->


<?php $this->end(); ?>
<?php $this->start('footer') ?>
<!-- Librairies -->
<script type="text/javascript" src="<?= $this->jsAdminlib ?? "" ?>"></script>
<!-- Common vendor -->
<script type="text/javascript" src="<?= $this->jscommonVendor ?? "" ?>"></script>
<!-- Plugins -->
<script type="text/javascript" src="<?= $this->jsAdminPlugins ?? "" ?>"></script>
<!-- Mainjs -->
<script type="text/javascript" src="<?= $this->jsAdminMain ?? "" ?>"></script>
<!----------custom--------->
<script type="text/javascript" src="<?= $this->js ?>"></script>
<?php $this->end();