const sha1 = require('sha1')
const Wechat = require('./wechat')
const getRawBody = require('raw-body')
const util = require('./util')

// 验证url
const verifyWechat = (opts, reply) => {
  const wechat = new Wechat(opts)
  return async(ctx, next) => {
    const token = opts.token
    const { signature, nonce, timestamp, echostr } = ctx.query
    let str = [token, timestamp, nonce].sort().join('')
    const shaValue = sha1(str)

    if (ctx.method === 'GET') {
      if (shaValue === signature) {
        ctx.body = echostr + ''
      } else {
        ctx.body = '你个大傻逼';
      }
    } else if (ctx.method === 'POST') {

      // 验证是否合法
      if (shaValue !== signature) return

      const data = await getRawBody(ctx.req, {
        length: ctx.length,
        limit: '1mb',
        encoding: ctx.charset
      })
      const content = await util.parseXMLAsync(data)
      const message = util.formatMessage(content.xml)
      ctx.wechat = message
      await reply.call(this, ctx)
      
    }
  }
}

module.exports = verifyWechat