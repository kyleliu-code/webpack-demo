const webpack = require('webpack');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(common, {
  devtool: 'source-map', // 生產環境使用 source-map 方便調試
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),

    new webpack.DefinePlugin({ // 該插件用來指定環境
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})