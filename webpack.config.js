const { resolve } = require('path');

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
        test: /\.(js||jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;
