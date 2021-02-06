//=======================================================================
//Js entries
//=======================================================================
module.exports = {
  entry: {
    //main js
    "js/main/backend/admin/main": {
      import: ["js/main/backend/admin/main.js"],
      dependOn: "js/librairies/backend/admin/lib",
    },
  },
};
