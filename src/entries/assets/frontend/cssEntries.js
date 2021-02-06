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
  },
};
