const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');

const app = express(); // 开启服务器实例
const config = require('./webpack.config.js'); // 获取 modules.exports

const compiler = webpack(config);

app.use(WebpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, () => {
  console.log('listening on port 3000');
});
