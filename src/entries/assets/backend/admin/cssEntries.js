//=======================================================================
//Css entries
//=======================================================================
module.exports = {
  entry: {
    //Front pages
    "css/main/backend/admin/main": {
      import: ["css/main/backend/admin/main.scss"],
      dependOn: "css/librairies/adminlib",
    },
  },
};
