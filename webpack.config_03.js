const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { // 入口
    app: './src/index.js', // html 默认引入首个js文件
    print: './src/print.js',
  },
  output: { // 出口
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // webpack-dev-middleware ,中间件开启 server
  },

  mode: 'development',
  devtool: 'inline-source-map', // 用来追查模块错误，仅用于开发环境
  devServer: { // 告知 webpack-dev-server 以下面路径为 rootpath 开启服务, live-loading 效果
    contentBase: './dist',
  },

  // 插件

  plugins: [
    new CleanWebpackPlugin(['dist']), // 清出 dist 文件中无关项插件
    new HtmlWebpackPlugin({ // html 文件处理插件
      title: 'Development',
      filename: './index.html',
    }),
  ],

  // 加载器
};
