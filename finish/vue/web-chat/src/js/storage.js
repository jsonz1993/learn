var key = 'vue-chat';

if (!window.localStorage.getItem(key)) {
    var time = new Date().getTime(),
        data = {
            userIndex : 0,

            user: {
                id: 1,
                name: '张欣欣',
                img: 'build/images/1.jpg'
            },

            userList: [{
                id: 2,
                name: '大蟹',
                img: 'build/images/2.png'
            }, {
                id: 3,
                name: 'Jsonz',
                img: 'build/images/3.jpg'
            }, {
                id: 4,
                name: '肥灿--安卓大神',
                img: 'build/images/dashen.jpg'
            }],

            sessionList: [{
                userId: 2,
                data: [{
                    text: '这是第一条信息',
                    time: time
                },{
                	text : '要搬家了,长寿路那边',
                	time : time
                }]
            },{
            	userId: 3,
            	data: []
            },{
                userId : 4,
                data : [{
                    text : 'hey 我是肥灿，分分钟给你做个安卓APP<br/>不要就别比比，我要看夹娃视频',
                    time : time
                }]
            }]
        };
    window.localStorage.setItem(key, JSON.stringify(data));
}

export default {
    fetch: function() {
        return JSON.parse(window.localStorage.getItem(key));
    },

    save: function(data) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}
