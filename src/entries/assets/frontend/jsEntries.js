//=======================================================================
//Js entries
//=======================================================================
module.exports = {
  entry: {
    //main js
    "js/main/frontend/main": {
      import: ["js/main/frontend/main.js"],
      dependOn: "js/librairies/frontlib",
    },
    //Home plugins
    "js/plugins/homeplugins": {
      import: ["js/plugins_entries/homeplugins"],
      dependOn: "js/librairies/frontlib",
    },
    //Ecommerce - Index page js
    "js/custom/home/home": {
      import: ["js/custom/home/index"],
      dependOn: "js/librairies/frontlib",
    },
    //Ecommerce - Product page js
    "js/custom/home/product": {
      import: ["js/custom/home/product"],
      dependOn: "js/librairies/frontlib",
    },
    //Ecommerce - Cart page js
    "js/custom/home/cart": {
      import: ["js/custom/home/cart"],
      dependOn: "js/librairies/frontlib",
    },
    //Ecommerce - Profile page js
    "js/custom/home/profile": {
      import: ["js/custom/home/profile"],
      dependOn: "js/librairies/frontlib",
    },
  },
};
