const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["./src/js/index.js", "./src/sass/styles.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [],
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "css/styles.css",
        },
        use: ["sass-loader"],
      },
    ],
  },
};

module.exports = config;
