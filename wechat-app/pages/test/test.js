var helloData = {
    name: 'Wechat',
    age: [{
        jsonz: 1
    }]
},
util = require('../../utils/util.js'),
app = getApp(); // 获取全局实例

Page({
    // data {} 页面初始化数据
    data: helloData,
    onLoad: function() {
        // 一个页面只会调用一次。
        // 接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。
        console.log('监听页面加载');
    },
    onReady: function() {
        // 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
        // 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
        console.log('监听页面初次渲染完成');
    },
    onShow: function() {
        // 每次打开页面都会调用一次。
        console.log('监听页面显示');
    },
    onHide: function() {
        // 当navigateTo或底部tab切换时调用
        console.log('监听页面隐藏');
    },
    onUnload: function() {
        // 当redirectTo或navigateBack的时候调用。
        console.log('监听页面卸载');
    },
    onPullDownRefresh: function() {
        // 监听用户下拉刷新事件。
        // 需要在config的window选项中开启enablePullDownRefresh。
        // 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新
        console.log('监听下拉刷新');
    },
    onReachBottom: function() {
        console.log('页面上拉触底事件的处理函数');
    },
    changeName: function(e) {
        this.setData({
            name: 'Jsonz'
        })
    },
    fn1: function() {
        // setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。
        // 直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致。
        // 单次设置的数据不能超过1024kB，请尽量避免一次设置过多的数据。
        // 其中 key 可以非常灵活，以数据路径的形式给出，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义。
        this.setData({
            name: 'Jsonz',
            'age[0].jsonz': '2',
            page: JSON.stringify(getCurrentPages())
        });
        console.log(getCurrentPages());
        util.sayHello('Jsonz')
    }
})