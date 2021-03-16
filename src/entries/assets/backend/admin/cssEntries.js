//=======================================================================
//Css entries
//=======================================================================
module.exports = {
  entry: {
    //Admin main
    "css/main/backend/admin/main": {
      import: ["css/main/backend/admin/main.scss"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin plugins
    "css/plugins/adminplugins": {
      import: ["css/plugins_entries/adminplugins.sass"],
      dependOn: "css/librairies/adminlib",
    },

    // Admin dashboard
    "css/custom/admin/dashboard": {
      import: ["css/custom/admin/index.scss"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin login
    "css/custom/admin/login": {
      import: ["css/custom/admin/login.scss"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin product caegories
    "css/custom/admin/products/categories": {
      import: ["css/custom/admin/products/categories.scss"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin users allusers
    "css/custom/admin/users/allusers": {
      import: ["css/custom/admin/users/allusers.sass"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin users allusers
    "css/custom/admin/users/profile": {
      import: ["css/custom/admin/users/profile.scss"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin users permissions
    "css/custom/admin/users/permissions": {
      import: ["css/custom/admin/users/permissions.sass"],
      dependOn: "css/librairies/adminlib",
    },
  },
};
