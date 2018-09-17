
const webpack = require("webpack");
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // mode: 'production',
  devtool: 'source-map', // 生产环境的 source-map 不同于 开发环境的 inline-source-map, 便于调试
  plugin: [
    // new UglifyJSPlugin(),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinedPlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
