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
    //Index page js
    "js/custom/home/home": {
      import: ["js/custom/home/index"],
      dependOn: "js/librairies/frontlib",
    },
  },
};
