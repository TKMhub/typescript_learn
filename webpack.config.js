const path = require("path");

module.exports = {
  entry: "./dist/section10_module_webpack/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
};
