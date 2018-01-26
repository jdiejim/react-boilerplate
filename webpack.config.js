const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  context: resolve('src'),
  entry: {
    app: './index.jsx',
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : 'eval',
  output: {
    path: resolve('build'),
    filename: '[name].bundle.js',
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  devServer: {
    contentBase: resolve('build'),
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|woff|eot|ttf|svg|gif|jpg|jpeg)$/,
        use: 'url-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css||scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};

module.exports = config;
