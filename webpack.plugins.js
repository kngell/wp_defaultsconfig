const webpack = require("webpack");
const path = require("path");
const DelWebpackPlugin = require("del-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const FileManagerPlugin = require("filemanager-plugin").WebpackFilemanager;
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const ASSET_PATH =
  process.env.ASSET_PATH ||
  `${path.sep}kngell_ecommerce${path.sep}public${path.sep}assets${path.sep}`;
module.exports = {
  plugins: [
    new DelWebpackPlugin({
      include: ["*.js", "*.css"], //"*.js",
      info: true,
      keepGeneratedAssets: true,
      allowExternal: false,
    }),
    new AssetsPlugin({
      filename: "assets.json",
      includeManifest: "manifest",
      path: path.join(__dirname, "app"),
      processOutput: function (assets) {
        return JSON.stringify(assets);
      },
      includeAllFileTypes: false,
      fileTypes: ["js", "css"],
      integrity: true,
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "global.jQuery": "jquery",
      "popper.js": "popper.js",
    }),
    new webpack.DefinePlugin({
      "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
    }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3003,
      proxy: "localhost:80/kngell_ecommerce/home",
      browser: "chrome",
    }),
    // new CKEditorWebpackPlugin({ language: "fr" }),
    new FileManagerPlugin({
      events: {
        end: {
          copy: {
            items: [
              {
                source: path.resolve(__dirname, "src", ".htaccess"),
                destination: "./public/",
              },
              {
                source: path.join(__dirname, "src", "index.php"),
                destination: "./public/",
              },
              {
                source: path.join(__dirname, "src", "assets", "img", "users"),
                destination: "./public/assets/img/",
              },
            ],
          },
        },
      },
    }),
  ],
};
