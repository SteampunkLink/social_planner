const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./favicon.ico",
      filename: "./index.html",
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        router: () => "http://localhost:3000",
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource"
      }
    ],
  },
};