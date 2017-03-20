import {corConfig, userList, url} from '../../libs/config';
import {openImg} from '../../utils/util';

Page({
    data: {
        myAvatar: '', // 头像
        userIndex: 1, // 第几位参加
        corConfig: corConfig, // 本地数据
        userList: userList.length > 9? userList.slice(0, 9): userList, // 显示的的用户
        overNumber: userList.length - 9, // 还有多少用户
        swipe: {
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 1000
        },
        animatedClass: '',
        gameIsShow: false, // 是否显示游戏简介
        gameInfo: {},
        // 第一个轮播图
        swipeList1: [
            url + '/swipe1-1.jpg',
            url + '/swipe1-2.jpg',
            url + '/swipe1-3.jpg',
            url + '/swipe1-4.jpg'
        ],
        // 第二个轮播图
        swipeList2: [
            url + '/swipe2-1.jpg',
            url + '/swipe2-2.jpg',
            url + '/swipe2-3.jpg',
            url + '/swipe2-4.jpg',
        ],
        // 无边界协作图
        concertList: [
            url + '/member-1.jpg',
            url + '/member-2.jpg',
            url + '/member-3.jpg',
            url + '/member-4.jpg',
        ],
        // 独立空间图
        IndependentList: [
            url + '/pic-1.jpg',
            url + '/pic-2.jpg',
            url + '/pic-3.jpg',
            url + '/pic-4.jpg',
        ], 
        // 二维码
        herelyCode: url + '/herely-code.jpg'
    },
    // 显示游戏说明弹窗
    showGame: function(event) {
        const data = this.data.corConfig[event.target.dataset.type];
        this.setData({
            gameIsShow: true,
            gameInfo: data,
            animatedClass: 'zoomIn'
        });
    },
    hideGame: function(e) {
        this.setData({
            animatedClass: 'zoomOut'
        });
        setTimeout(()=> {
            this.setData({
                gameIsShow: false
            });
        }, 400)
    },
    onPullDownRefresh() {
        console.log('刷新')
        setTimeout(wx.stopPullDownRefresh, 2000);
    },
    showSwiper(e) {
        const data = e.currentTarget.dataset;
        const list = this.data[data.list];
        
        wx.previewImage({
            urls: list,
            current: this.data[data.list + 'Index'] 
        });
    },
    onLoad() {

    },
    chooseIndex(e) {
        const current = e.detail.current;
        this.setData({
            [e.target.dataset.list + 'Index']: current
        });
    },
    openImg
})