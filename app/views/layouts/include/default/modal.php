<section class="userLR" id="Login-Register-System">
    <div class="log">
        <!--Login form-->
        <div class="modal fade show" id="login-box">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"> <span>&times;</span></button>
                        <div class="form-wrapper rounded bg-light" id="" autocomplete="off">
                            <form action="" method="post" role="form" class="p-2" id="login-frm" autocomplete="off">
                                <?=FH::csrfInput('csrftoken', hash_hmac('sha256', 'login-frm', $_SESSION[TOKEN_NAME]));?>
                                <div class="text-danger" id="loginAlert"></div>
                                <p class="hint-text">Connectez-vous avec votre compte social média</p>
                                <div class="form-group social-btn clearfix">
                                    <a href="javascript:void(0)" class="btn btn-primary pull-left" id="fblink"><i
                                            class="fab fa-facebook"></i>
                                        Facebook</a>
                                    <a href="#" class="btn btn-info pull-right"><i class="fab fa-twitter"></i>
                                        Twitter</a>
                                </div>
                                <div class="or-seperator"><b>ou</b></div>
                                <!--Log-->
                                <div class="form-group">
                                    <input type="text" class="form-control" name="email" id="email"
                                        placeholder="Votre Email" autocomplete="false">
                                    <div class="invalid-feedback">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" id="password"
                                        placeholder="Password" autocomplete="false">
                                    <div class="invalid-feedback">
                                    </div>
                                </div>
                                <!--Remember me and forgot password-->
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="rem" class="custom-control-input" id="customCheck"
                                            autocomplete="false">
                                        <label for="customCheck" class="custom-control-label">Se souvenir</label>
                                        <a href="#" id="forgot-btn" class="float-right" class="close"
                                            data-dismiss="modal" data-toggle="modal" data-target="#forgot-box">Mot de
                                            passe oublié</a>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="login" class="btn btn-primary btn-block" id="login-btn"
                                        value="Login" autocomplete="false">
                                </div>
                                <div class="form-group form-footer d-flex justify-content-center d-inline-block">
                                    <p class="text-center"> <span class="d-inline-block pt-2" style="font-size:1rem">
                                            Nouveau? &nbsp;<a href="#" id="register-btn" class="close mt-1"
                                                data-dismiss="modal" data-toggle="modal"
                                                data-target="#register-box">Enregistrer
                                                vous</a></span> </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Register form-->
        <div class="modal fade show" id="register-box">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"> <span>&times;</span></button>
                        <div class="form-wrapper rounded bg-light" id="">
                            <div class="upload-profile-image d-flex justify-content-center pb-1">
                                <div class="text-center">
                                    <div class="d-flex justify-content-center"> <img class="camera-icon"
                                            src="<?=IMG?>camera/camera-solid.svg" alt="camera" />
                                    </div>
                                    <img src="<?=IMG?>register/profile/beard.png" class="img rounded-circle"
                                        alt="profile" />
                                    <small class="form-text">Profile</small>
                                    <input type="file" form="register-frm" class="form-control-file"
                                        name="profileUpload" id="upload-profile">
                                </div>
                            </div>
                            <hr class="my-0">
                            <form action="" method="post" role="form" class="needs-validation" novalidate
                                id="register-frm" autocomplete="off">
                                <?=FH::csrfInput('csrftoken', hash_hmac('sha256', 'register-frm', $_SESSION[TOKEN_NAME]));?>
                                <div class="pt-0 my-0" id="regAlert"></div>
                                <div class="form-row">
                                    <div class="col">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="lastName" id="lastName"
                                                minlength="3" placeholder="Votre prénom" autocomplete="off"
                                                autocomplete="false">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="firstName" id="firstName"
                                                placeholder="Votre nom" autocomplete="off" autocomplete="false">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="userName" id="userName"
                                        placeholder="Votre surnom" autocomplete="false">
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" id="reg_email"
                                        placeholder="E-Mail" autocomplete="false">
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="pass" name="password"
                                        placeholder="Mot de passe" autocomplete="false">
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="cpassword" id="cpass"
                                        placeholder="Confirmer" autocomplete="false">
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" name="terms" id="terms" class="custom-control-input"
                                            autocomplete="false">
                                        <label for="terms" class="custom-control-label">J'accepte <a href="#">les
                                                termes
                                                &amp; conditions d'utilisation</a></label>
                                        <div class="invalid-feedback"></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="register" class="btn btn-primary btn-block"
                                        id="register-btn" value="Enregistrer" autocomplete="false">
                                </div>
                                <div class="form-group form-footer d-flex justify-content-center">
                                    <p class="text-center"><span class="d-inline-block pt-2">Vous avez déjà un compte?
                                            <a href="#" id="login-btn" class="close mt-1" data-dismiss="modal"
                                                data-toggle="modal" data-target="#login-box">Connectez-vous</a></span>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Forgot password-->
        <div class="modal fade show" id="forgot-box">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal"> <span>&times;</span></button>
                        <div class="form-wrapper rounded bg-light" id="">
                            <form action="" method="post" role="form" class="p-2" id="forgot-frm" autocomplete="off">
                                <?=FH::csrfInput('csrftoken', hash_hmac('sha256', 'forgot-frm', $_SESSION[TOKEN_NAME]));?>
                                <div id="forgotAlert"></div>
                                <div class="form-group"> <small class="text-muted text-center">To reset your password,
                                        enter your
                                        email</small> </div>
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg" name="email"
                                        id="forgot_email" placeholder="E-Mail" autocomplete="false">
                                    <div class="invalid-feedback"></div>
                                </div>
                                <div class="form-group">
                                    <input type="submit" name="forgot" class="btn btn-primary btn-block" id="forgot-btn"
                                        value="Reset password">
                                </div>
                                <div class="form-group form-footer d-flex justify-content-center"> <a href="#"
                                        id="back-btn" class="close" data-dismiss="modal" data-toggle="modal"
                                        data-target="#login-box">Back</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>