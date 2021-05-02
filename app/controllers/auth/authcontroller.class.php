<?php

class AuthController extends Controller
{
    //=======================================================================
    //Construct
    //=======================================================================

    public function __construct($controller, $method)
    {
        parent::__construct($controller, $method);
        $this->get_model('AuthManager', 'users');
        // $this->view_instance->setLayout('default');
        // $this->view_instance->footerPosts = $this->get_model('PostsManager', 'posts');
    }

    //=======================================================================
    //Login
    //=======================================================================

    public function ajaxLogin()
    {
        if ($this->request->exists('post')) {
            $this->request->csrfCheck('login-frm', $this->request->getAll('csrftoken'));
            $this->model_instance['users']->assign($this->request->getAll());
            $this->model_instance['users']->validator($this->request->getAll(), Form_rules::login());
            if ($this->model_instance['users']->validationPasses()) {
                $user = $this->model_instance['users']->findByEmail($this->request->getAll('email'));
                if ($user && password_verify($this->request->getAll('password'), $user->password)) {
                    $remember = ((isset($this->request->getAll()['rem'])) && $this->request->getAll('rem') === 'on') ? true : false;
                    $user->login($remember);
                    $this->jsonResponse(['result' => 'success', 'msg' => '']);
                } else {
                    $this->model_instance['users']->addErrMessage('password', 'Incorrect Email or password!');
                    $this->jsonResponse(['result' => 'error-field', 'msg' => $this->model_instance['users']->getErrorMessages()]);
                }
            } else {
                $this->jsonResponse(['result' => 'error-field', 'msg' => $this->model_instance['users']->getErrorMessages()]);
            }
        }
    }

    //=======================================================================
    //Check for remember me cookies
    //=======================================================================

    public function remember_check()
    {
        if ($this->request->exists('post')) {
            if ($userdata = AuthManager::rememberMe_checker()) {
                $this->jsonResponse(['result' => 'success', 'msg' => $userdata]);
            } else {
                $this->jsonResponse(['result' => 'error', 'msg' => '']);
            }
        }
    }

    //=======================================================================
    //Facebook Login
    //=======================================================================

    // public function fblogin()
    // {
    //     if ($this->request->exists('post')) {
    //         $fb_data = json_decode($this->request->getAll()['freedata'], true, JSON_UNESCAPED_SLASHES);
    //         if ($fb_data['email']) {
    //             $this->model_instance['users']->assign($this->renameKeys($fb_data, ['last_name' => 'lastName', 'first_name' => 'firstName']));
    //             if (!$this->model_instance['users']->findByEmail($fb_data['email'])) {
    //                 $this->model_instance['users']->profileImage = $fb_data['picture']['data']['url'];
    //                 $this->model_instance['users']->oauth_provider = 'facebook';
    //                 $this->model_instance['users']->save();
    //             }
    //             $remember = ((isset($this->request->getAll()['rem'])) && $this->request->getAll('rem') === 'on') ? true : false;
    //             $this->model_instance['users']->login($remember);
    //             $this->jsonResponse(['result' => 'success', 'msg' => '']);
    //         } else {
    //             $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning text-center', 'User cancel login or did not fully authorized')]);
    //         }
    //     }
    // }

    //=======================================================================
    //Register
    //=======================================================================

    public function ajaxRegister()
    {
        if ($this->request->exists('post')) {
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            $this->model_instance['users']->assign($this->request->getAll());
            $this->model_instance['users']->setConfirm($this->request->getAll('password'));
            $this->model_instance['users']->cpassword = $this->request->getAll('cpassword');
            $this->model_instance['users']->terms = !isset($_POST['terms']) ? '' : $this->request->getAll('terms');
            $this->model_instance['users']->validator($this->request->getAll(), Form_rules::users());
            $file = H_upload::upload_files($_FILES, $this->model_instance['users']);
            if ($file['success']) {
                if ($this->model_instance['users']->validationPasses()) {
                    if ($lastID = $this->model_instance['users']->register()) {
                        $msgsuccess = FH::showMessage('success text-center', ' <p>Welcome!</p> <p>Please check your email to confirm your account</p>');
                        $this->VerifyEmail($this->model_instance['users'], $lastID->get_lastID(), $msgsuccess);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning', 'erreur server!contacter l\'admin')]);
                    }
                } else {
                    $newKeys = ['email' => 'reg_email', 'password' => 'pass', 'cpassword' => 'cpass'];
                    $this->jsonResponse(['result' => 'error-field', 'msg' => H::Object_Keys_format($this->model_instance['users']->getErrorMessages(), $newKeys)]);
                }
            } else {
                $this->jsonResponse(['result' => 'error-field', 'msg' => $file['msg']]);
            }
        }
    }

    //=======================================================================
    //Register - Email verification
    //=======================================================================

    public function emailVerified($userInfos)
    {
        $email = array_pop($userInfos);
        $salt = array_pop($userInfos);
        $this->view_instance->set_page_title('Email verification');
        $user = $this->model_instance['users']->findByEmail($email);
        $msg = file_get_contents(FILES . 'template' . DS . 'home' . DS . 'LR' . DS . 'verification_result.php');
        if ($user && $user->salt === $salt) {
            $msg = str_replace('{{class}}', 'text-success', $msg);
            $msg = str_replace('{{accueil}}', 'Congratulation!! Your email is verified!', $msg);
            $msg = str_replace('{{message}}', 'You can now logged in and enjoy our services. If you have some questions, please contact our <a href="mailto:contact@kngell.com"><sapn>client administrator.</a></sapn>', $msg);
            $user->confirmEmail($email);
        } else {
            $msg = str_replace('{{class}}', 'text-warning ', $msg);
            $msg = str_replace('{{accueil}}', 'An error ocurred!', $msg);
            $msg = str_replace('{{message}}', 'Please try later our contact our <a href="mailto:admin@kngell.com"><span>admin.</span></a>.', $msg);
        }
        $this->view_instance->verification_result = $msg;
        $this->view_instance->render('users' . DS . 'emailVerified');
    }

    //=======================================================================
    //Change Password
    //=======================================================================

    public function changePassword()
    {
        if ($this->request->exists('post')) {
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            $user = AuthManager::currentUser();
            $user->curpass = $this->request->getAll('curpass');
            $user->newpass = $this->request->getAll('newpass');
            $user->cnewpass = $this->request->getAll('cnewpass');
            $user->setConfirm($this->request->getAll('newpass'));
            $user->assign($this->request->getAll());
            $user->validator($this->request->getAll(), Form_rules::change_pass_admin_user());
            if ($user->validationPasses()) {
                if (password_verify($user->curpass, $user->password)) {
                    $user->id = $user->userID;
                    $user->password = password_hash($user->newpass, PASSWORD_DEFAULT);
                    unset($user->curpass, $user->newpass, $user->cnewpass);
                    if ($user->save('userID')) {
                        $user->notify($user->userID, 'admin', 'Password changed');
                        $this->jsonResponse(['result' => 'success', 'msg' => FH::showMessage('success', 'Password is change successsfully!!')]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger', 'Something goes wrong!! <br>Please contact admin')]);
                    }
                } else {
                    $user->addErrMessage('curpass', 'Your Current password is incorrect');
                    $this->jsonResponse(['result' => 'error-field', 'msg' => $user->getErrorMessages()]);
                }
            } else {
                $this->jsonResponse(['result' => 'error-field', 'msg' => $user->getErrorMessages()]);
            }
        }
    }

    //=======================================================================
    //Verifiy Email
    //=======================================================================

    public function VerifyEmail($m = null, $lastID = '', $msgsuccess = '')
    {
        $m = (!$m) ? AuthManager::$currentLoggedInUser : $m;
        $subject = 'Email verification';
        $body = file_get_contents(FILES . 'template' . DS . 'home' . DS . 'LR' . DS . 'emailVerif.php');
        $body = str_replace('{{email}}', $m->email, $body);
        $body = str_replace('{{salt}}', $m->salt, $body);
        $body = str_replace('{{URLROOT}}', URLROOT, $body);
        $msgsuccess = (!$msgsuccess && $this->request->exists('post')) ? FH::showMessage('success text-center', 'A verification link has been sent to your Email box. Please check!') : $msgsuccess;
        if ($err = H::sendmailgrid($m->email, $subject, $body)) {
            $this->jsonResponse(['result' => 'success', 'msg' => $msgsuccess, 'img' => IMG . 'users' . DS . 'avatar.png']);
        } else {
            $lastID ? $this->model_instance['users']->delete('userID', $lastID) : '';
            $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning text-center', $err)]);
        }
    }

    //=======================================================================
    //Forgot password
    //=======================================================================

    public function forgot()
    {
        if ($this->request->exists('post')) {
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            $this->model_instance['users']->assign($this->request->getAll());
            $this->model_instance['users']->validator($this->request->getAll(), Form_rules::forgot());
            if ($this->model_instance['users']->validationPasses()) {
                $user = $this->model_instance['users']->findByEmail($this->model_instance['users']->email);
                if ($user) {
                    $user->token = (new Token())->user_identifiant(128);
                    $user->token_expire = ((new DateTime('now'))->add(new DateInterval('PT30M')))->format('Y-m-d H:i:s');
                    $user->id = $user->userID;
                    $user->save();
                    $subject = 'Reset Password';
                    $body = file_get_contents(FILES . 'template' . DS . 'home' . DS . 'LR' . DS . 'passwordreset.php');
                    $body = str_replace('{{email}}', $user->email, $body);
                    $body = str_replace('{{salt}}', $user->token, $body);
                    $body = str_replace('{{URLROOT}}', URLROOT, $body);
                    if ($err = H::sendmailgrid($user->email, $subject, $body)) {
                        $this->jsonResponse(['result' => 'success', 'msg' => FH::showMessage('success text-center', 'Reset link have been sent!<br>Please check your email box.')]);
                    } else {
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning text-center', 'server encountered errors. please try later')]);
                    }
                } else {
                    $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger text-center', 'This user does not exist')]);
                }
            } else {
                $newKeys = ['email' => 'forgot_email'];
                $this->jsonResponse(['result' => 'error-field', 'msg' => H::Object_Keys_format($this->model_instance['users']->getErrorMessages(), $newKeys)]);
            }
        }
    }

    public function resetpass()
    {
        $this->view_instance->set_page_title('Reset password');
        $this->view_instance->render('users' . DS . 'resetpass');
    }

    public function ajaxresetpass()
    {
        //dd($email, $token);
        if ($this->request->exists('post')) {
            $this->request->csrfCheck($this->request->getAll('frm_name'), $this->request->getAll('csrftoken'));
            $this->model_instance['users']->assign($this->request->getAll());
            $this->model_instance['users']->setConfirm($this->request->getAll('password'));
            $this->model_instance['users']->cpassword = $this->request->getAll('cpassword');
            $this->model_instance['users']->validator($this->request->getAll(), Form_rules::resetPass());
            if ($this->model_instance['users']->validationPasses()) {
                $url = explode('/', $this->request->getAll('url_data'));
                $token = array_pop($url);
                $email = array_pop($url);
                $user = $this->model_instance['users']->findByEmail($email);
                if (!$user->count() > 0) {
                    $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning', 'Votre email n\'existe pas dans notre system!<br>Merci de vous enregistrer')]);
                } elseif ($token == $user->token) {
                    $user->token = '';
                    $user->id = $user->userID;
                    $datetime1 = new DateTime('now');
                    $datetime2 = new Datetime($user->token_expire);
                    if ($datetime1 < $datetime2) {
                        $user->password = password_hash($this->request->getAll('password'), PASSWORD_DEFAULT);
                        if ($user->save()) {
                            $this->jsonResponse(['result' => 'success', 'msg' => FH::showMessage('success text-center', 'le mot de pass a été changé avec success!<br> Vous pouvez continuer votre navigation')]);
                        } else {
                            $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger', 'une erreur a été rencontrée sur le serveur!')]);
                        }
                    } else {
                        $user->save();
                        $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('warning', 'le délai a expiré. Veuillez recommencer!')]);
                    }
                } else {
                    $this->jsonResponse(['result' => 'error', 'msg' => FH::showMessage('danger text-center', 'Votre lien n\'est pas valide!<br> Veuillez redemander un autre lien!')]);
                }
            } else {
                $newKeys = ['password' => 'password_ch'];
                $this->jsonResponse(['result' => 'error-field', 'msg' => H::Object_Keys_format($this->model_instance['users']->getErrorMessages(), $newKeys)]);
            }
        } else {
        }
        //dd($this);
    }

    public function logout($members = '')
    {
        if (AuthManager::currentUser()) {
            if (AuthManager::currentUser()->logout()) {
                if ($members) {
                    Rooter::redirect('');
                }
                if (Session::exists(REDIRECT)) {
                    // $url = explode('/', $_SERVER['HTTP_REFERER']);
                    // if (array_pop($url) == Session::get(REDIRECT)) {
                    Session::delete(REDIRECT);
                    $this->jsonResponse(['result' => 'success', 'msg' => 'redirect']);
                    // }
                }
                $this->jsonResponse(['result' => 'success', 'msg' => 'no_redirect']);
            }
        }
        $this->jsonResponse(['result' => 'error', 'msg' => 'Something goes wrong']);
    }
}
