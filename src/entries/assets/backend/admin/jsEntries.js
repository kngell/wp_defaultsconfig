//=======================================================================
//Js entries
//=======================================================================
module.exports = {
  entry: {
    //Main js
    "js/main/backend/admin/main": {
      import: ["js/main/backend/admin/main.js"],
      dependOn: "js/librairies/adminlib",
    },
  },
};
