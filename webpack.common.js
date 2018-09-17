const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebapckPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },

// 模塊加載器
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebapckPlugin({
      title: 'Production'
    })
  ],  

// 插件
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
