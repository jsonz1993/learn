wx.chooseImage({
  success: function(res) {
    var tempFilePaths = res.tempFilePaths
    wx.uploadFile({
      url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData:{
        'user': 'test'
      },
      success: function(res){
        var data = res.data
        //do something
      }
    })
  }
})

