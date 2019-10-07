const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = (env) => {
  const typeMode = env.NODE_ENV;
  const isDev = typeMode === 'development';
  const plugins = [];

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    );
    plugins.push(
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
    );
  }
  return {
    mode: isDev,
    entry: {
      index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: '/public/assets/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devtool: isDev && 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public/'),
      publicPath: '/',
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          exclude: /(node_modules)/,
          test: /\.(js|jsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ],
              sourceMap: !!isDev,
            },
          },
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: !!isDev,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !!isDev,
              },
            },
          ],
        },
      ],
    },
    plugins,
  };
};
