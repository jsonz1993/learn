// 获取更新accessToken
const request = require('request-promise');
const util = require('../libs/util')
const wechatApiPrefix = 'https://api.weixin.qq.com/cgi-bin/';
let api = {
  accessToken: wechatApiPrefix + 'token?grant_type=client_credential&'
}

module.exports = class Wechat {
  constructor(opts) {
    this.appID = opts.appID
    this.appSecret = opts.appSecret
    this.wechat_file = opts.wechat_file

    return this.getAccessToken()
      .then(data=> {
        try {
          data = JSON.parse(data)
        } catch(e) {
          return this.updateAccessToken()
        }

        return this.isValidAccessToken(data)? data: this.updateAccessToken()
      })
      .then(data=> {

        this.access_token = data.access_token
        this.expires_in = data.expires_in
        this.saveAccessToken(data)
      })
  }

  isValidAccessToken(data) {
    if (!data || !data.access_token || !data.expires_in) return false;
    
    const {access_token, expires_in} = data
    const now = Date.now()

    return now < expires_in
  }

  updateAccessToken() {
    const {appID, appSecret} = this
    const url = api.accessToken + `&appid=${appID}&secret=${appSecret}`

    return request({
      url,
      json: true,
    }).then(response=> {
      let now = Date.now()
      // 提前20s刷新 预留时间延迟 || 服务器刷新
      let expires_in = now + (response.expires_in - 20) * 1000

      response.expires_in = expires_in

      return response
    })

  }

  getAccessToken() {
    return util.readFileAsync(this.wechat_file)
  }

  saveAccessToken(data){
    data = JSON.stringify(data)
    return util.writeFileAsync(this.wechat_file, data)
  }

  reply(ctx) {
    const content = ctx.body
    const message = ctx.wechat

    const xml = util.tpl(content, message)
    ctx.status = 200
    ctx.type = 'application/xml'
    ctx.body = xml
  }
}