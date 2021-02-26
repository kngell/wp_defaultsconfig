//=======================================================================
//Js entries
//=======================================================================
module.exports = {
  entry: {
    //Main js
    "js/main/backend/admin/main": {
      import: ["js/main/backend/admin/main"],
      dependOn: "js/librairies/adminlib",
    },
    //Admin plugins
    "js/plugins/adminplugins": {
      import: ["js/plugins_entries/adminplugins"],
      dependOn: "js/librairies/adminlib",
    },
    //Admin dashboard
    "js/custom/admin/dashboard": {
      import: ["js/custom/admin/index"],
      dependOn: "js/librairies/adminlib",
    },
    // Admin login
    "js/custom/admin/login": {
      import: ["js/custom/admin/login"],
      dependOn: "js/librairies/adminlib",
    },
    //Admin product categories
    "js/custom/admin/products/categories": {
      import: ["js/custom/admin/products/categories"],
      dependOn: "js/librairies/adminlib",
    },
    //Admin users allusers
    "js/custom/admin/users/allusers": {
      import: ["js/custom/admin/users/allusers"],
      dependOn: "js/librairies/adminlib",
    },
  },
};
