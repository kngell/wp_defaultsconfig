<?php
class Form_rules
{
    //Register form validation rules
    public static function register()
    {
        return [
            'terms' => [
                'required' => true,
                'display' => ''
            ],
            'firstName' => [
                'required' => true,
                'min' => 2,
                'max' => 64,
                'display' => 'Firstname'
            ],
            'lastName' => [
                'required' => true,
                'min' => 2,
                'max' => 64,
                'display' => 'Lastname'
            ],
            'userName' => [
                'display' => "Username",
                'required' => true,
                'unique' => 'users',
                'max' => 20
            ],
            'email' => [
                'display' => "Email",
                'required' => true,
                'unique' => 'users',
                'max' => 150,
                'valid_email' => true
            ],
            'password' => [
                'display' => "Password",
                'required' => true,
                'min' => 5,
                'max' => 64
            ],
            'cpassword' => [
                'display' => "Confirm Password",
                'required' => true,
                'min' => 5,
                'matches' => 'password'
            ]
        ];
    }
    //login rules 
    public static function login()
    {
        return [
            'email' => [
                'display' => "Email",
                'required' => true,
                'valid_email' => true
            ],
            'password' => [
                'display' => "Password",
                'required' => true,
                'min' => 5
            ]
        ];
    }
    //Add categories rules 
    public static function categories()
    {
        return [
            'categorie' => [
                'display' => "Categorie",
                'required' => true,
                'unique' => 'categorie',
                'max' => 155
            ],

        ];
    }

    public static function admin_login()
    {
        return [
            'username' => [
                'display' => 'Username',
                'required' => true,
                'min' => 5,
                'max' => 65
            ],
            'password' => [
                'display' => 'Password',
                'required' => true,
                'min' => 5,
                'max' => 65
            ]
        ];
    }
}
