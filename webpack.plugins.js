const webpack = require("webpack");
const path = require("path");
const DelWebpackPlugin = require("del-webpack-plugin");
const AssetsPlugin = require("assets-webpack-plugin");
const FileManagerPlugin = require("filemanager-plugin").WebpackFilemanager;
const ASSET_PATH =
  process.env.ASSET_PATH ||
  `${path.sep}kngell_ecom${path.sep}public${path.sep}assets${path.sep}`;
module.exports = [
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
    popper: "@popperjs/core",
    moment: "moment",
  }),
  new webpack.DefinePlugin({
    "process.env.ASSET_PATH": JSON.stringify(ASSET_PATH),
  }),
  new webpack.SourceMapDevToolPlugin({}),
  // new CKEditorWebpackPlugin({ language: "fr" }),
  new FileManagerPlugin({
    events: {
      end: {
        copy: {
          items: [
            {
              source: path.join(__dirname, "src", ".htaccess"),
              destination: "./public/",
            },
            {
              source: path.join(__dirname, "src", "index.php"),
              destination: "./public/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "blog-post"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "brand"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "default"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "upload"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "register"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "camera"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(
                __dirname,
                "src",
                "assets",
                "img",
                "user_profile"
              ),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "admin"),
              destination: "./public/assets/img/",
            },
            {
              source: path.join(__dirname, "src", "assets", "img", "icons"),
              destination: "./public/assets/img/",
            },
          ],
        },
      },
    },
  }),
];
