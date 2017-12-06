module.exports.reply = async (ctx, next)=> {
  const message = ctx.wechat

  ctx.bili = 'test'

  switch (message.MsgType) {
    // 事件推送
    case 'event': {
      const event = message.Event

      console.log(message.Event)
      if (event === 'subscribe') {

        ctx.body = '哈哈, 你订阅了这个号 \r\n 消息ID: ' + message.FromUserName
      } else if (event === 'unsubscribe') {
        console.log('无情取关 ')
        ctx.body = ''
      }
      break
    }

    // 上报地理位置
    case 'LOCATION': {
      ctx.body = '您上报的位置是: ' + message.Latitude + '/' + message.Longitude + ' - ' + message.Precision
    }

  }

}