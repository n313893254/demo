const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

const host = process.env.host
const port = process.env.port && Number(process.env.port)

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')}
      ]
    },
    https: true,
    hot: true,
    contentBase: config.build.assetsRoot,
    compress: true,
    host: host || config.dev.host,
    port: port || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warning: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    disableHostCheck: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: config.dev.poll
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rancher Monitoring',
      template: path.resolve(__dirname, '../public') + '/index.html',
      filename: 'index.html',
      inject: true,
      templateParameters: { BASE_URL: "./" },
      favicon: './src/favicon.ico',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public/static'),
        to: path.resolve(__dirname, '..', 'dist'),
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = devWebpackConfig
