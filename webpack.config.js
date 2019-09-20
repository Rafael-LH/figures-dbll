const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/public/assets/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "public/"),
    publicPath: "/",
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.?scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },

          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};
