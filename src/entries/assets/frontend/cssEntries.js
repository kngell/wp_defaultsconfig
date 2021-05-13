//=======================================================================
//Css entries
//=======================================================================
module.exports = {
  entry: {
    //Front pages
    "css/main/frontend/main": {
      import: ["css/main/frontend/main.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Home plugins
    "css/plugins/homeplugins": {
      import: ["css/plugins_entries/homeplugins.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Index page css ecommerce
    "css/custom/home/home": {
      import: ["css/custom/home/index.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Product page Ecommerce
    "css/custom/home/product": {
      import: ["css/custom/home/product.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Cart Page
    "css/custom/home/cart": {
      import: ["css/custom/home/cart.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Account Page
    "css/custom/home/account/account": {
      import: ["css/custom/home/account/account.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Account Page
    "css/custom/home/account/profile": {
      import: ["css/custom/home/account/profile.scss"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Promotions Page
    "css/custom/home/promotions/promotions": {
      import: ["css/custom/home/promotions/promotions.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Promotions Page
    "css/custom/home/account/payment": {
      import: ["css/custom/home/account/payment.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Boutique Page
    "css/custom/home/boutique/boutique": {
      import: ["css/custom/home/boutique/boutique.sass"],
      dependOn: "css/librairies/frontlib",
    },
    //Ecommerce - Checkout Page
    "css/custom/home/acount/checkout": {
      import: ["css/custom/home/account/checkout.sass"],
      dependOn: "css/librairies/frontlib",
    },
  },
};
