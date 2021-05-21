"use strict";

const pageConfigs = PhpConfig.page_options.map(
  (page_option) =>
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, page_option.template),
      filename: page_option.filename,
      inject: page_option.inject,
      minify: false,
    })
);
const _entries = {
  //=======================================================================
  //Home Ecommerce Pages and Layouts
  //=======================================================================
  "home/index": "views/home/index.php",
  "home/partials/_banner_area": "views/home/partials/_banner_area.php",
};
const base = "./app/views";
const _page_options = Object.keys(_entries).map(function (key, value) {
  return {
    template: "./src/" + _entries[key],
    inject: false,
    filename: key + ".php",
  };
});

class PagesConfig {
  static get entries() {
    return _entries;
  }
  static get page_options() {
    return _page_options;
  }
}

module.exports = PagesConfig;
