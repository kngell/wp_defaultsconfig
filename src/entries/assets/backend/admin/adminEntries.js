const cssEntries = require("./cssEntries");
const jsEntries = require("./jsEntries");
module.exports = {
  adminCssEntries: function () {
    return cssEntries;
  },
  adminJsEntries: function () {
    return jsEntries;
  },
};
