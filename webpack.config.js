const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  // 模塊加載器
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};