<?php

//start the session
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
//config & autoload
require_once '../config/config.php';
require_once VENDOR . 'autoload.php';

// Token form
if (empty($_SESSION[TOKEN_NAME])) {
    (new Token())->generate(64);
}
//Rooter
new Rooter();
