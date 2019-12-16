const path = require('path')
const merge = require('webpack-merge')
const safeParser = require('postcss-safe-parser')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')

const config = require('../config')
const utils = require('./utils')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public') + '/index.html',
      filename: 'index.html',
      templateParameters: { BASE_URL: "./" },
      favicon: './src/favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public/static'),
        to: path.resolve(__dirname, '..', 'dist'),
        ignore: ['.*']
      }
    ]),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, ".."),
      exclude: ['manifest.json', 'vendor.dll.js'],
      verbose: true,
      dry: false
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        parser: safeParser,
        discardComments: {
          removeAll: true
        }
      }
    }),
    new ParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: false,
          comments: false
        },
        warnings: false,
        compress: {
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        }
      }
    })
  ]
})
