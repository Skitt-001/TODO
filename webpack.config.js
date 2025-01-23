const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
      ],
      optimization: {
        splitChunks: {
            chunks: 'all',
        },
      },
      performance: {
        hints: false,
        maxEntrypointSize: 244000,
        maxAssetSize: 244000,
    },
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
          }
          
        ],
      }
  };