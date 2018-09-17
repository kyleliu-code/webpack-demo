const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  // mode: 'development',
  devtool: 'inline-source-map', // 开发环境需要 错误提示
  devServer: {
    contentBase: './dist' // webpack-dev-server 开启本地服务使用
  }
});
