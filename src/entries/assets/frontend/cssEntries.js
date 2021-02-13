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
    //Index page js
    "css/custom/home/home": {
      import: ["css/custom/home/index.scss"],
      dependOn: "css/librairies/frontlib",
    },
  },
};
