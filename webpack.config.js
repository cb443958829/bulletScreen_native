const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/js/index.js', //入口文件
  output: {//输出文件
    filename: 'bundle.js', //输出文件名
    path: resolve(__dirname, 'dist'), //输出文件路径
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
      contentBase: './',
      open: true
  },
}
