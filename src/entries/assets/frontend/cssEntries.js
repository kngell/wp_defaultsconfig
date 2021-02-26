//=======================================================================
//Css entries
//=======================================================================
module.exports = {
  entry: {
    //Front pages
    "css/main/frontend/main": {
      import: ["css/main/frontend/main.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Home plugins
    "css/plugins/homeplugins": {
      import: ["css/plugins_entries/homeplugins.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Index page css ecommerce
    "css/custom/home/home": {
      import: ["css/custom/home/index.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Product page Ecommerce
    "css/custom/home/product": {
      import: ["css/custom/home/product.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Cart Page
    "css/custom/home/cart": {
      import: ["css/custom/home/cart.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Account Page
    "css/custom/home/profile": {
      import: ["css/custom/home/profile.scss"],
      dependOn: "css/librairies/frontlib",
    },
  },
};
