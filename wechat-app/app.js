//app.js
// App({用来注册小程序})
App({
  // 生命周期函数--监听小程序初始化	当小程序初始化完成时，
  // 会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  // 生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function() {
    console.log('onShow')
  },
  // 生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
  onHide: function() {

  },
  // 开发者可以添加任意的函数或数据到 Object 参数中，用 this 可以访问
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})