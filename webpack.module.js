const path = require("path");
const devMode = process.env.NODE_ENV !== "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  rules: [
    {
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: "babel-loader",
      options: {
        plugins: [
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-proposal-class-properties",
        ],
      },
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
            attrs: ["img:src", "link:href", "style:url"],
          },
        },
        {
          loader: "html-loader",
          options: {
            attributes: true,
            esModule: true,
            minimize: false,
          },
        },
      ],
    },
    {
      test: /\.s[ac]ss$/i,
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
      test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
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
