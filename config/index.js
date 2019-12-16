const path = require('path')
const SERVER_URL = process.env.SERVER_URL || 'https://127.0.0.1'
const THANOS_URL = process.env.THANOS_URL || 'https://127.0.0.1'
const API_TOKEN = process.env.API_TOKEN || 'Bear ***'

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/rancher-api': {
        target: SERVER_URL,
        pathRewrite: { '^/rancher-api': '' },
        changeOrigin: true,
        secure: false,
        ws: true,
        xfwd: true,
        onProxyReq: (proxyReq, req, socket, options, head) => {
          proxyReq.setHeader('Authorization', API_TOKEN);
          proxyReq.setHeader('Origin', SERVER_URL)
        },
        onProxyReqWs: (proxyReq, req, socket, options, head) => {
          proxyReq.setHeader('Authorization', API_TOKEN);
          proxyReq.setHeader('Origin', SERVER_URL)
        }
      },
      '/thanos-api': {
        target: THANOS_URL,
        pathRewrite: { '^/thanos-api': '' },
        changeOrigin: true,
        secure: true,
      },
    },
    host: '127.0.0.1',
    port: 3000,
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'cheap-module-eval-source-map'
  },
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    devtool: '#source-map'
  }
}
