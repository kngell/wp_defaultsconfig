<?php
// -----------------------------------------------------------------------
// DEFINE SEPERATOR ALIASES
// -----------------------------------------------------------------------
define("URL_SEPARATOR", '/');
define("DS", DIRECTORY_SEPARATOR);
define("PS", PATH_SEPARATOR);
define("US", URL_SEPARATOR);
// -----------------------------------------------------------------------
// ROOT PATH
// -----------------------------------------------------------------------
define('ROOT', dirname(__DIR__) . DS);
define('APP', ROOT . 'app' . DS);
define('FILES', ROOT . 'files' . DS);
define('CORE', ROOT . 'app' . DS . 'core' . DS);
define('MODEL', ROOT . 'app' . DS . 'models' . DS);
define('VIEW', ROOT . 'app' . DS . 'views' . DS);
define('DATA', ROOT . 'app' . DS . 'data' . DS);
define('CONTROLLER', ROOT . 'app' . DS . 'controllers' . DS);
define('VENDOR', ROOT . 'vendor' . DS);
define('IMAGE_ROOT', dirname(__DIR__) . US . 'public' . US . 'assets' . US . 'img' . US);
define('ACME_ROOT', ROOT . 'public' . DS . 'assets' . DS . 'acme-challenge' . DS);
define('UPLOAD_ROOT', ROOT . 'public' . DS . 'assets' . DS . 'img' . DS . 'upload' . DS);
define('LAZYLOAD_ROOT', ROOT . 'public' . DS . 'assets' . DS . 'lazyload' . DS);
define('CUSTOM_VALIDATOR', ROOT . DS . 'app' . DS . 'custom_validator' . DS);

$modules = [ROOT, APP, CORE, CONTROLLER, DATA, CUSTOM_VALIDATOR];
set_include_path(get_include_path() . PS . implode(PS, $modules));

// -----------------------------------------------------------------------
// DEFAULT ITEMS
// -----------------------------------------------------------------------
define("DEFAULT_CONTROLLER", 'HomeController'); //default controller if there isen't one define in the url
define('DEFAULT_METHOD', 'index'); //Default methode for controllers

define('DEBUG', true);
define('DEFAULT_LAYOUT', 'default'); //if any layout is define in the controller use this one

define('SITE_TITLE', "K'nGELL Ingénierie Logistique"); //This will be use if any sie title is set
// -----------------------------------------------------------------------
// URL ROOT
// -----------------------------------------------------------------------
define('URLROOT', 'http://localhost' . US . 'kngell' . US);
// -----------------------------------------------------------------------
// SCRIPT/CSS/IMG ACCESS
// -----------------------------------------------------------------------
define('PROOT', '/kngell/'); // set this to '/' for a live server
define('SCRIPT', dirname($_SERVER['SCRIPT_NAME']));
define('CSS', SCRIPT . DS . 'assets' . DS . 'css' . DS);
define('JS', SCRIPT . DS . 'assets' . DS . 'js' . DS);
define('IMG', SCRIPT . DS . 'assets' . DS . 'img' . DS);
define('FONT', URLROOT . 'public' . DS . 'fonts' . DS);
define('ADMIN_CSS', SCRIPT . DS . 'assets' . DS . 'css' . DS . 'admin' . DS);
define('ADMIN_JS', SCRIPT . DS . 'assets' . DS . 'js' . DS . 'admin' . DS);
define('ADMIN_IMG', SCRIPT . DS . 'assets' . DS . 'admin' . DS . 'img' . DS);
define('ADMIN_PG', SCRIPT . DS . 'assets' . DS . 'js' . DS . 'admin' . DS . 'plugins' . DS);
define('NODE_MODULE', SCRIPT . DS . 'node_modules' . DS);
define('CKFINDER', SCRIPT . DS . 'ckfinder' . DS);
define('UPLOAD', SCRIPT . DS . 'assets' . DS . 'img' . DS . 'upload' . DS);
define('LAZYLOAD', SCRIPT . DS . 'assets' . DS . 'lazyload' . DS);

//var_dump(FONT);
// -----------------------------------------------------------------------
// DATA BASE PARAMS
// -----------------------------------------------------------------------
define('DB_NAME', 'blogkngell'); // database Name
define('DB_USER', 'root'); //User
define('DB_PWD', ""); //Passord
define('DB_HOST', '127.0.0.1'); //host use IP adresse to avoid DNS lookup

// -----------------------------------------------------------------------
// LOGIN & REGISTRATION
// -----------------------------------------------------------------------
define('CURRENT_USER_SESSION_NAME', 'user'); //Session name for loggedin user
define('REMEMBER_ME_COOKIE_NAME', 'hash'); //Cookies for logged in user remember me
define('REMEMBER_COOKIE_EXPIRY', 2592000); //time expiry remember me cookies expiry
define('TOKEN_NAME', 'token');
define('USERNAME', 'admin@kngell.com');
define('NO_REPLY', 'no-reply@kngell.com');
define('PASSWORD', 'Akonoakono169&169');

// -----------------------------------------------------------------------
// PERMISSIONS
// -----------------------------------------------------------------------
define('ACCESS_RESTRICTED', 'Restricted'); //Controller name for the restricted redirect

// -----------------------------------------------------------------------
// FACEBOOK
// -----------------------------------------------------------------------
define('FB_APP_ID', '297739978156061');
define('FB_APP_SECRET', 'a4ff4070fc4261a36d9ff551ec7cd07f');
define('FB_LOGIN_URL', 'http://localhost/kngell/guests/fblogin');
define('FB_GRAPH_VERSION', 'v6.0');
define('FB_GRAPH_DOMAIN', 'https://graph.facebook.com/');
define('FB_GRAPH_STATE', 'eciphp');
// -----------------------------------------------------------------------
// Keys
// -----------------------------------------------------------------------
define('IP_KEY', '4eb97a89cdfdaf7a911e1c0a9b01dc78b72f85d8fe297572e7fb549d9d3a0c33');
define('EMAIL_KEY', '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');

// ----------------------------------------------------------------------
// SSL Letsencrypt
// -----------------------------------------------------------------------
