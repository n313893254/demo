const os = require("os")
const path = require("path")
const chalk = require("chalk")
const webpack = require("webpack")
const babelpolyfill = require("babel-polyfill")
const ProgressBarPlugin = require("progress-bar-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin")

const smp = new SpeedMeasurePlugin()
const utils = require("./utils")
const config = require("../config")
const isProd = process.env.NODE_ENV === "production" ? true : false

const manifest = require(path.resolve(__dirname, "../dist/manifest.json"))

function resolve(dir) {
  return path.join(__dirname, "..", dir)
}

module.exports = smp.wrap({
  entry: {
    app: path.resolve("src/index.js")
  },
  output: {
    path: config.build.assetsRoot,
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
    alias: {
      'src': resolve('src'),
      'components': resolve('src/components'),
      'img': resolve('public/static/img')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader?cacheDirectory=true"],
        include: /src/
      },
      {
        enforce: "pre",
        test: /\.(jsx|js)/,
        use: ["eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          !isProd
            ? {
                loader: "style-loader",
                options: { sourceMap: true }
              }
            : MiniCssExtractPlugin.loader,
            "css-loader", "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "css-hot-loader",
          !isProd
            ? { loader: "style-loader", options: { sourceMap: true } }
            : MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader", "less-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        options: {
          limit: 1024,
          name: utils.assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("media/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: !isProd ? "[name].css" : "static/css/[name].[hash:7].css"
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../dist/manifest.json')
    }),
    new ProgressBarPlugin({
      format: ' build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds) ',
      clear: false
    })
  ],
})
