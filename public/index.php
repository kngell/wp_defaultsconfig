<?php

//start the session
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
//autoload
require_once dirname(__DIR__) . '/vendor/autoload.php';

// Token form
if (empty($_SESSION[TOKEN_NAME])) {
    (new Token())->generate(64);
}
//Rooter
new Rooter();
