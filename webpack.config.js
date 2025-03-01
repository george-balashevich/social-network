const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    index: "./src/js/index.ts",
    profilePage: "./src/js/profilePage.ts",
    registration: "./src/js/registration.ts",
    login: "./src/js/login.ts",
    forgotPassword: "./src/js/forgotPassword.ts",
  },
  mode: "development",
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"], 
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/dist"),
    },
    compress: true,
    port: 2370,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"], 
    }),
    new HtmlWebpackPlugin({
      filename: "forgotPassword.html",
      template: "./src/forgotPassword.html",
      chunks: ["forgotPassword"],
    }),
    new HtmlWebpackPlugin({
      filename: "registration.html",
      template: "./src/registration.html",
      chunks: ["registration"], 
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: "./src/login.html",
      chunks: ["login"], 
    }),
    new HtmlWebpackPlugin({
      filename: "profilePage.html",
      template: "./src/profilePage.html",
      chunks: ["profilePage"], 
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
    }),
  ],
};
