const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {resolve} = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");


plugins = [
  require('./stylelint'),
  new webpack.ProvidePlugin({
    throttle: 'lodash.throttle',
  }),
  new webpack.LoaderOptionsPlugin({ minimize: true }),
  new ExtractTextPlugin('styles.css'),
  new VueLoaderPlugin(),
  // new CopyPlugin({
  //   patterns: [
  //     {from: resolve(__dirname, 'src/assets/img'),
  //       to: resolve(__dirname, 'dist/img')}
  //   ],
  // }),
    new CopyWebpackPlugin([
      {from: resolve(__dirname, '../../src/assets/img'),
            to: resolve(__dirname, '../../dist/img')}
    ])
];

if (process.env.NODE_ENV === 'development') {
  plugins.push(require('./browser-sync'));
  plugins.push(require('./stylelint'));
}

module.exports = plugins;
