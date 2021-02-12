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
    "css/plugins/backend/adminplugins": {
      import: ["css/plugins_entries/adminplugins.scss"],
      dependOn: "css/librairies/adminlib",
    },

    //Admin dashboard
    // "css/custom/admin/dashboard": {
    //   import: ["css/custom/admin/index.scss"],
    //   dependOn: "css/librairies/adminlib",
    // },
    //Admin login
    "css/custom/admin/login": {
      import: ["css/custom/admin/login.scss"],
      dependOn: "css/librairies/adminlib",
    },
    //Admin product caegories
    "css/custom/admin/products/categories": {
      import: ["css/custom/admin/products/categories.css"],
      dependOn: "css/librairies/adminlib",
    },
  },
};
