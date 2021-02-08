<?php
class Mailling
{
    public $my_email;
    public $bcc;
    public $subject;
    public $continue;
    public $auto_redirect;
    public $redirect_url;
    public $required_fields_check;
    public $required_field;
    public $show_ip;
    public $banned_ips_check;
    public $banned_ips = array();
    public $banned_ip_message = "Your IP address is banned.  The form was not sent.";
    public $require_cookie = 0;
    public $check_referrer = 1;
    public $word_block = 1;
    public $blocked_words = array('http://', 'https://', 'viagra');
    public $gobbledegook_check = 1;
    public $identiPIC_photo_CAPTCHA = 0;
}
