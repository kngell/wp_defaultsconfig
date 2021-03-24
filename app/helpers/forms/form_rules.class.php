<?php
class Form_rules
{
    // =======================================================================
    // Users
    // =======================================================================
    // Users groups
    public static function groups()
    {
        return [
            'name' => [
                'display' => 'Group Name',
                'required' => true,
                'max' => 65,
                'unique' => 'groups',
            ],
        ];
    }

    // Units validation
    public static function units()
    {
        return [
            'unit' => [
                'display' => 'Unit',
                'required' => true,
                'max' => 65,
                'unique' => 'units',
            ],
        ];
    }

    //Users datas
    public static function users()
    {
        return [
            'terms' => [
                'required' => true,
                'display' => ''
            ],
            'firstName' => [
                'required' => true,
                'max' => 64,
                'display' => 'Firstname'
            ],
            'lastName' => [
                'required' => true,
                'max' => 64,
                'display' => 'Lastname'
            ],
            'userName' => [
                'display' => 'Username',
                'required' => true,
                'unique' => 'users',
                'max' => 20
            ],
            'email' => [
                'display' => 'Email',
                'required' => true,
                'unique' => 'users',
                'max' => 150,
                'valid_email' => true
            ],
            'password' => [
                'display' => 'Password',
                'required' => true,
                'min' => 5,
                'max' => 64
            ],
            'cpassword' => [
                'display' => 'Confirm Password',
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
                'display' => 'Email',
                'required' => true,
                'valid_email' => true
            ],
            'password' => [
                'display' => 'Password',
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
                'display' => 'Categorie',
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

    public static function change_pass_admin_user()
    {
        return [
            'curpass' => [
                'display' => 'Current Password',
                'required' => true,
                'max' => 65,
                'min' => 5
            ],
            'newpass' => [
                'display' => 'New Password',
                'required' => true,
                'min' => 5,
            ],
            'cnewpass' => [
                'display' => 'Confirm New Password',
                'required' => true,
                'min' => 5,
                'matches' => 'newpass'
            ]
        ];
    }

    public static function forgot()
    {
        return [
            'email' => [
                'display' => 'Email',
                'required' => true,
                'valid_email' => true
            ]
        ];
    }

    public static function resetPass()
    {
        return [
            'password' => [
                'display' => 'Password',
                'required' => true,
                'min' => 5
            ],
            'cpassword' => [
                'display' => 'Confirm Password',
                'required' => true,
                'min' => 5,
                'matches' => 'password'
            ]
        ];
    }
}
