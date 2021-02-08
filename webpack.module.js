const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      include: [path.resolve(__dirname, "src", "assets", "js")],
      exclude: [
        path.resolve(__dirname, "node_modules"),
        path.resolve(__dirname, "src", "assets", "plugins"),
      ],
      enforce: "pre",
      enforce: "post",
      loader: "babel-loader",
    },
    {
      test: /\.(php)$/,
      include: [path.resolve(__dirname, "src", "views")],
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
            context: "src/views",
          },
        },
        {
          loader: "extract-loader",
          options: {
            publicPath: (context) =>
              "../".repeat(
                path
                  .relative(path.resolve(__dirname, "src"), context.context)
                  .split("/").length
              ),
          },
        },
        {
          loader: "html-loader",
          options: {
            attributes: true,
            esModule: false,
            minimize: false,
          },
        },
      ],
    },
    {
      test: /\.scss$/,

      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "/",
          },
        },
        {
          loader: "css-loader",
        },
        {
          loader: "postcss-loader",
        },
        {
          loader: "sass-loader",
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "/",
          },
        },
        {
          loader: "css-loader",
        },
        {
          loader: "postcss-loader",
        },
      ],
    },
    {
      test: /\.(png|svg|jpg|gif|ico)$/,
      exclude: [
        /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
      ],
      use: {
        loader: "file-loader",
        options: {
          name: devMode ? "[name].[ext]" : "[name].[hash].[ext]",
          outputPath: "../../public/assets/img",
          publicPath: (url) => {
            return "/kngell_ecommerce/public/assets/img/" + url;
          },
        },
      },
    },
    {
      test: /\.(woff|woff2|ttf|eot)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/",
            publicPath: "/kngell_ecommerce/public/assets/fonts/",
          },
        },
      ],
    },
    {
      test: /\.svg$/,

      use: [
        {
          loader: "raw-loader",
          options: {},
        },
      ],
    },
  ],
};
