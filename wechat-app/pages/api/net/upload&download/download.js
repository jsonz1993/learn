wx.downloadFile({
  url: 'http://example.com/audio/123', //仅为示例，并非真实的资源
  success: function(res) {
    wx.playVoice({
      filePath: res.tempFilePath
    })
  }
})