//导入proxy
var proxy = require('http-proxy-middleware')

//context可以是单个字符串，也可以是多个字符串数组，分别对应你需要代理的api,星号（*）表示匹配当前路径下面的所有api
const context = [`/login`, `/admin/*`, `/api/*`, `*`]

module.exports = {
    devServer: {
       host: 'localhost',
       port: '3000',
       proxy: [
           {
                context: context,
                target: 'http://119.23.129.240:80',
                secure: false，
                changeOrigin: true,
                ws: true
          }
       ]
    }
}
