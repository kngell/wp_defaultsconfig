const cssEntries = require("./cssEntries");
const jsEntries = require("./jsEntries");
module.exports = {
  frontCssEntries: function () {
    return cssEntries;
  },
  frontJsEntries: function () {
    return jsEntries;
  },
};
