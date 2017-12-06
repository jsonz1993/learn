const xml2js = require('xml2js')
const tpl = require('./tpl')

module.exports.parseXMLAsync = xml=> new Promise((resolve, reject)=> {
  xml2js.parseString(xml, {
    trim: true,
  }, (err, content)=> {
    if (err) return reject(err)
      else resolve(content)
  })
})

const formatMessage = result=> {
  let message = {}

  if (typeof result === 'object') {
    let keys = Object.keys(result)
    for (let i = 0; i < keys.length; i++) {
      let item = result[keys[i]]
      let key = keys[i]

      if (!(item instanceof Array) || item.length === 0) {
        continue
      }

      if (item.length === 1) {
        let val = item[0]

        if (typeof val === 'object') {
          message[key] = formatMessage(val)
        } else {
          message[key] = (val || '').trim()
        }
      } else {
        message[key] = []

        for (let j = 0, k = item.length; j < k; j++) {
          message[key].push(formatMessage(item[j]))
        }
      }

    }
  }

  return message
}

module.exports.formatMessage = formatMessage


module.exports.tpl = (content, message)=> {
  const info = {}
  const msgType = Array.isArray(content)? 'news': (content.type || 'text');
  let {toUsername: FromUserName, formUsername: ToUserName} = message

  info.content = content
  info.createTime = Date.now()
  info.msgType = type
  info.toUsername = formUsername
  info = {
    content,
    createTime: Date.now(),
    msgType,
    toUsername,
    formUsername
  }

  return tpl.compiled(info)

}