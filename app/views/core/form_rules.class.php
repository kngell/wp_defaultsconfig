<?php
class Form_rules
{
    //Register form validation rules
    public static function register()
    {
        return [
             'terms' => [
            'required' => true,
            'display'=>''
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
            'unique' => 'utilisateur',
            'max' => 20
        ],
        'email' => [
            'display' => "Email",
            'required' => true,
            'unique' => 'utilisateur',
            'max' => 150,
            'valid_email'=>true
        ],
        'password' => [
            'display' => "Password",
            'required' => true,
            'min' => 5,
            'max'=>64
        ],
         'cpassword' => [
            'display' => "Confirm Password",
            'required' => true,
            'min' => 5,
            'matches'=>'password'
        ]
    ];
    }

    public static function updateuser()
    {
        return [
        'firstName' => [
            'required' => true,
            'min' => 2,
            'max' => 50,
            'display' => 'Firstname'
        ],
        'lastName' => [
            'required' => true,
            'min' => 2,
            'max' => 50,
            'display' => 'Lastname'
        ]
    ];
    }

    public static function login()
    {
        return [
        'email' => [
            'display' => "Email",
            'required' => true,
            'valid_email'=>true
        ],
        'password' => [
            'display' => "Password",
            'required' => true,
            'min' => 5
        ]
    ];
    }
    public static function forgot()
    {
        return [
        'email' => [
            'display' => "Email",
            'required' => true,
            'valid_email'=>true
        ]
    ];
    }
    public static function resetPass()
    {
        return [
            'password' => [
            'display' => "Password",
            'required' => true,
            'min' => 5
        ],
          'cpassword' => [
            'display' => "Confirm Password",
            'required' => true,
            'min' => 5,
            'matches'=>'password'
        ]
    ];
    }

    
    public static function admin_login()
    {
        return [
        'username' => [
            'display' => "Username",
            'required' => true,
            'min'=>5,
            'max'=>65
        ],
        'password' => [
            'display' => "Password",
            'required' => true,
            'min' => 5,
            'max'=>65
        ]
    ];
    }
    public static function assoc()
    {
        return [
        'sigle' => [
            'display' => "Sigle",
            'required' => true,
            'min'=>2,
            'max'=>65
        ],
        'denomination' => [
            'display' => "Dénomination",
            'required' => true,
            'min' => 2,
            'max'=>65
        ],
        'couriel' => [
            'display' => "Email",
            'required' => true,
            'max'=>65,
            'valid_email'=>true,
            'unique'=>'assoc'
        ]

    ];
    }

    public static function posts()
    {
        return [
        'postTitle' => [
            'display' => "Title",
            'required' => true,
            'min'=>10,
            'max'=>150
        ],
        'postContent' => [
            'display' => "Content",
            'required' => true,
            'min' => 20,

        ]
    ];
    }

    public static function categories()
    {
        return [
        'categorie' => [
            'display' => "Categorie",
            'required' => true,
            'min'=>2,
            'max'=>50,
            'unique'=>'categories'
        ]
    ];
    }

    public static function change_pass_adin_user()
    {
        return [
            'curpass' => [
            'display' => "Current Password",
            'required' => true,
            'max'=>65,
            'min' => 5
        ],
          'newpass' => [
            'display' => "New Password",
            'required' => true,
            'min' => 5,
          ],
           'cnewpass' => [
            'display' => "Confirm New Password",
            'required' => true,
            'min' => 5,
            'matches'=>'newpass'
        ]
    ];
    }

    public static function feedback()
    {
        return [
            'subject' => [
            'display' => "Subject",
            'required' => true,
            'max'=>155,
            'min' => 5
        ]
    ];
    }

    public static function adherents()
    {
        return [
            'nom' => [
            'display' => "Nom",
            'required' => true,
            'max'=>65,
            'min' => 2
            ],
            'prenom' => [
            'display' => "Prenom",
            'required' => true,
            'max'=>65,
            'min' => 2
            ],
            'email' => [
            'display' => "Email",
            'max'=> 150,
            'min'=> 5,
            'valid_email'=>true,
            'unique'=>'contacts'
        ]
    ];
    }

    public static function comments()
    {
        return [
            'message' => [
            'display' => "Message",
            'required' => true
        ]
    ];
    }
    public static function newsletters()
    {
        return [
            'email' => [
            'display' => "Email",
            'required' => true,
            'valid_email'=>true,
            'unique'=>'newsletters',
            'max'=>125
        ]
    ];
    }

    public static function realisations()
    {
        return [
            'societe' => [
            'display' => "Société",
            'required' => true,
            'max'=>150
            ],
            //  'title' => [
            // 'display' => "Titre",
            // 'required' => true,
            //  ],
            //   'resultats' => [
            // 'display' => "Résultats",
            // 'required' => true,
            //  ],
    ];
    }

    public static function contacts()
    {
        return [
            'fullName' => [
            'display' => "Le nom complet",
            'required' => true,
            'max'=>255,
            'min' => 2
            ],
            'email' => [
            'display' => "Email",
            'max'=> 150,
            'valid_email'=>true,
            'unique'=>'contacts'
            ],
            'phone' => [
            'display' => "Téléphone",
            'max'=> 155,
             'required' => true
            ],
             'sujet' => [
            'display' => "Sujet",
            'max'=> 255,
             'required' => true
            ],
    ];
    }

    public static function candidatures()
    {
        return [
            'nom' => [
            'display' => "Nom",
            'required' => true,
            'max'=>155,
            'min' => 2,
            ],
            'email' => [
            'display' => "Email",
            'max'=> 155,
            'valid_email'=>true,
            'unique'=>'candidatures',
            'required' => true
            ],
    ];
    }
    public static function inscription_formation()
    {
        return [
            'nom' => [
            'display' => "Nom",
            'required' => true,
            'max'=>155,
            'min' => 2,
            ],
             'prenom' => [
            'display' => "Prénom",
            'required' => true,
            'max'=>155,
            'min' => 2,
            ],
            'email' => [
            'display' => "Email",
            'max'=> 155,
            'valid_email'=>true,
            'unique'=>'candidatures',
            'required' => true
            ],
    ];
    }
    public static function post_file_url()
    {
        return [
    ];
    }

    public static function sessions_formations()
    {
        return [
            'formID' => [
            'display' => "Titre",
            'required' => true,
            ],
             'start_date' => [
            'display' => "Date de début",
            'required' => true,
            ],
            'end_date' => [
            'display' => "Date de fin",
            'required' => true,
            ],
    ];
    }
}