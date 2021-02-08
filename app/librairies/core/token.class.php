<?php
class Token extends RandomStringGenerator
{
    public function user_identifiant($length)
    {
        $identifiant = '';

        for ($i = 0; $i < $length; $i++) {
            $randomKey = $this->getRandomInteger(0, $this->alphabetLength);
            $identifiant .= $this->alphabet[$randomKey];
        }
        return $identifiant;
    }

    public function generate($length)
    {
        $token = '';

        for ($i = 0; $i < $length; $i++) {
            $randomKey = $this->getRandomInteger(0, $this->alphabetLength);
            $token .= $this->alphabet[$randomKey];
        }
        Session::set(TOKEN_NAME, $token);
        return $token;
    }
    
    public static function check($formName, $token)
    {
        if (Session::exists(TOKEN_NAME) && $token === Session::get(TOKEN_NAME)) {
            Session::delete(TOKEN_NAME);
            return true;
        }
        $serverToken = hash_hmac('sha256', $formName, Session::exists(TOKEN_NAME)? Session::get(TOKEN_NAME) :'');
        return hash_equals($serverToken, $token);
        //(Session::exists($token_name) && $token === Session::get($token_name));
    }
}