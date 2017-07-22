const Koa = require('koa')
const wechat = require('./wechat')
const config = require('./config')
const wechatMiddleware = require('./wechatMiddleware')
const path = require('path')
const app = new Koa()
config.wechat.wechat_file = path.join(__dirname, './config/wechat.txt')

app.use(wechat(config.wechat, wechatMiddleware.reply))

app.listen(8000)

console.log('Listening: 8000')