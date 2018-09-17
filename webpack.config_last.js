const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack'); // hotreload

module.exports = {
  entry: { // 入口
    app: './src/index.js',
  },
  output: { // 出口
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // webpack-dev-middleware ,中间件开启 server
  },

  // mode: 'production',
  mode: 'development',
  devtool: 'inline-source-map', // 用来追查模块错误，仅用于开发环境
  devServer: { // 告知 webpack-dev-server 以下面路径为 rootpath 开启服务, live-loading 效果
    contentBase: './dist',
    hot: true, // hot module replacement
  },


  // （文件） 加载器
  module: {
    rules: [
      {
        test: /\.css$/, // 以.css 结尾的文件
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // 插件

  plugins: [
    new CleanWebpackPlugin(['dist']), // 清出 dist 文件中无关项插件
    new HtmlWebpackPlugin({ // html 文件处理插件
      title: 'Development',
      filename: './index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // HRM css,js。。 热替换
  ],
};
