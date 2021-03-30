const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development' ? true : false;

module.exports = {
  devtool: isDev ? "inline-source-map" : "source-map",
  mode: isDev ? "development" : "production",
  // target: "web",
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "./dist"),
    // publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".css"],
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      hash: true,
      title: "observer-util",
    }),
    // 定义全局变量
    new webpack.DefinePlugin({
      VERSION: JSON.stringify("V1.2.10086"),
    }),
    // 将变量暴露给全局window
    new webpack.ProvidePlugin({
      _: "lodash",
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8080,
    compress: true,
    hot: true,
    open: true,
    host: "localhost",
    // historyApiFallback: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    // proxy: {
    //   // 代理到后端的服务地址，会拦截所有以api开头的请求地址
    //   "/api": "http://localhost:3000",
    // },
  },
};