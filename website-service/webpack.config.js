const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/entry.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin([
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      title: 'A small frontend App',
    }),
    new webpack.ProvidePlugin({
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
    alias: {
    },
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx$/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'react-hot',
      },
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=1&interlaced=false',
        ],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
};
