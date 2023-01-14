const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const isDevelopment = process.env.NODE_ENV !== "production"

module.exports = {
  entry: "./src/index.tsx",
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: { static: path.join(__dirname, "src") },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    isDevelopment && new ReactRefreshPlugin({ exclude: [/^http.*/, /node_modules/] }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  experiments: {
    buildHttp: {
      allowedUris: [
        "https://framer.com/m/",
        "https://framerusercontent.com/",
        "https://fonts.gstatic.com/",
        "https://ga.jspm.io/",
        "https://jspm.dev/",
        "https://cdn.skypack.dev/",
      ],
    },
  },
}
