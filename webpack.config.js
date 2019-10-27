const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': resolve(__dirname, './src/Components/'),
      '@assets': resolve(__dirname, './src/assets/'),
    },
  },
  devtool: 'source-map',
  devServer: {
    contentBase: resolve(__dirname, 'public/'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(s*)css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|server)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jpg|png|svg$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].[chunkhash].css',
    }),
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'public/index.html'), filename: './index.html' }),
  ],
};
