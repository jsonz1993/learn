Page({
    bindButtonTap: function() {
        var that = this
        wx.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
            camera: ['front','back'],
            success: function(res) {
                that.setData({
                    src: res.tempFilePath
                })
            }
        })
    }
})