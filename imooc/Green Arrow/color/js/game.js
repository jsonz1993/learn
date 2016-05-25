/*说明： 语言配置，包括标题、等级等*/
var _lang = {
        zh: {
            title: "看你有多色",
            help_txt: "找出所有色块里颜色不同的一个",
            score: "得分:",
            btn_pause: "暂停",
            btn_normal: "普通场",
            btn_double: "双飞场",
            btn_normal_mode: "普通模式",
            btn_double_mode: "双飞模式",
            btn_reTry: "重来",
            btn_more_game: "更多游戏",
            game_pause: "游戏暂停",
            btn_resume: "继续",
            loading: "加载中...",
            lv_txt: ["瞎子", "色盲", "色郎", "色狼", "色鬼", "色魔", "超级色魔", "变态色魔", "孤独求色"],
            lv_txt2: ["色不起来", "有色心没色胆", "好色之徒", "色胆包天", "色不知耻", "英雄本色", "色射具全", "裸色舔香", "衣冠禽色"],
            tips: '再得<em id="_score"></em>分，就可再打败<em id="_num"></em>万人',
            share_txt_d: "[双飞]",
            share_txt1: "我怒砍",
            share_txt2: "分,击败",
            share_txt3: "%的人,我是[",
            share_txt4: "],不服来战！",
            desc: "找出所有色块中颜色不同的一块。分享朋友圈，找到身边的色魔"
        }
    },
/*配置，包括语言类型；时间，等级对应的个字数*/
    _config = {
        lang: 'zh',
        color: {
            allTime: 60,
            addTime: 0,
            lvMap: [2, 3, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9]
        }
    };

(function() {
    var box = $('#box'), // 游戏界面主体
    /*游戏界面用到的一些dom结构*/
        b = {
            lv: $('#room .lv em'),
            time: $('#room .time'),
            start: $('#dialog .btn-restart'),
            pause: $('#room .btn-pause'),
            resume: $('#dialog .btn-resume'),
            mode: $('#mode'),
            dialog: $('#dialog'),
            d_content: $('#dialog .content'),
            d_pause: $('#dialog .pause'),
            d_gameover: $('#dialog .gameover')
        },
    /*游戏主体*/
        c = {
            target: 1, // 游戏类型
            finded: 0, // 答对个数的标识
            scored: 0, // 分数
            /**
             * 初始化
             * 包括声明type,target,api,config,lang,parent,el,
             * 设置结束页面按钮显示字段
             * 初始化时间和等级 reset
             * 重置UI renderUI
             * 判断初始化事件
             * 开始游戏
             */
            init: function(type, el, parent) {
                this.type = type; // 初始化类型
                this.target = 'color2' == type ? 2 : 1; // 初始化游戏类型
                this.api = API[type]; // 拿到游戏类型的api
                this.config = _cconfig[type]; // 拿到游戏类型的配置
                this.lang = _lang[_config.lang]; // 拿到游戏类型的语言文字配置
                b.mode.data("type", "color" == type ? "color2" : "color").html("color" == type ? this.lang.btn_double : this.lang.btn_normal); // 根据data 去显示按钮的文字
                this.reset(); // 调用初始化等级和时间
                this.parent = parent; // 声明parent，既app实例
                this.el = el; // 初始化el，方便后期填充dom结构
                this.renderUI(); // 初始化UI
                this.inited || this.initEvent(); // 如果是第一次进来，执行事件初始化
                this.inited = true; // 判断是否第一次进来的标识
                this.start(); // 初始化完成调用开始方法
            },

            /*说明： 初始化UI 包括判断横竖屏*/
            renderUI: function() {
                var isLandscape = 90 == window.orientation || -90 == window.orientation; // 判断横竖屏 移动端才有
                var width = isLandscape ? window.innerHeight : window.innerWidth; // 根据横竖屏去获取页面高度 or 宽度
                width -= 20; // 可删除 ？？？
                width = Math.min(width, 500); // 最小宽度取 500
                box.width(width).height(width); // 设置为一个正方形
                this.el.show(); // 显示dom 盒子
            },
            /*说明：初始化游戏事件*/
            initEvent: function() {
                var eventName = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';// 判断事件

                // window改变大小调用renderUI初始化ui
                $(window).resize(function() {
                    myGame.renderUI();
                });

                /*点击span块，判断是否正确*/
                box.on(eventName, 'span', function() {
                    var type = $(this).data('type'); // 获取色块上的type

                    // 如果type 等于 a，既选对的情况
                    if (type === 'a') {

                        // 点击后为色块设置颜色加html为了在设备卡的时候让用户感知选对了，修改type防止重复调用函数
                        $(this).css('background-color', '#f00').data('type', '').html('<em></em>');
                        myGame.finded++; // 选对的标识+1

                        // 不解？？？ target不是初始化为1和2吗。后面有更新这个值？
                        if (myGame.finded == myGame.target) {
                            myGame.nextLv.call(myGame); // 不解
                        }
                    }
                });

                // _.bind(fn, obj, *arguments); fn 里面的this指向obj
                b.pause.on(evenName, _.bind(this.pause, this)); // 绑定暂停事件 用的是 underscore
                b.resume.on(eventName, _.bind(this.resume, this)); // 绑定继续事件
                b.start.on(eventName, function() { // 绑定重来事件
                	myGame.score = 0; // 分数
                	b.time.html(0);  // 重置时间显示
                	myGame.reset(); // 调用重置事件
                	myGame.start() // 调用开始游戏事件
                })
            },
            /*说明：游戏开始事件*/
            start: function() {
                this.time > 5 && b.time.removeClass("danger"); // 如果时间大于5秒，移除高亮danger类名
                this.finded = 0; // 初始化 finded 变量
                b.dialog.hide(); // 隐藏暂停页面
                this._pause = false; // 暂停标识改为false
                this.lv = "undefined" != typeof this.lv ? this.lv + 1 : 0; // 初始化等级lv
                this.lvMap = this.config.lvMap[this.lv] || _.last(this.config.lvMap); // 初始化色块个数，超出设定等级则用最后一个
                this.renderMap(); // 生成dom,填充到box盒子
                this.renderInfo(); // 更新分数显示
                // 判断调用时间倒数
                this.timer ||
                    (this.timer = setInterval(_.bind(this.tick, this), 1000));
            },
            /*说明：继续事件，隐藏暂停页面，把暂停标识设置为true*/
            resume: function() {
                b.dialog.hide();
                this._pause = false
            },
            /*说明：暂停事件 切换标识和显示逻辑*/
            pause: function() {
                this._pause = true;
                b.d_content.hide();
                b.d_pause.show();
                b.dialog.show()
            },
            /*说明：处理和时间有关的事情，倒数和控制游戏结束*/
            tick: function() {
            	// 如果是暂停状态，则return
                if (this._pause) {
                    return
                } else {
                    this.time--; // 减少time，用定时器控制一秒执行一次
                    this.time < 6 && b.time.addClass("danger");// 判断给time加高亮class
                    // 判断如果时间小于 0 ，调用游戏结束事件 否则 更新dom显示时间
                    if (this.time < 0) {
                        this.gameOver()
                    } else {
                        b.time.text(parseInt(this.time));
                    }
                }
            },
            /*说明：生成dom,填充到box盒子*/
            renderMap: function() {
            	// 如果不在暂停情况
                if (!this._pause) {
                    var n = this.lvMap * this.lvMap, // 色块个数
                        c = "", // 存放String的dom结构
                        d = "lv" + this.lvMap; // 拼class
                    // 调用给定的迭代函数n次
                    _(n).times(function() {
                        c += "<span></span>"
                    });

                    //给box绑定class和html
                    box.attr("class", d).html(c);
                    // 调用相应的api 对色块配置颜色 type 等
                    this.api.render(this.lvMap, this.lv);
                }
            },
            /*说明：更新分数显示*/ 
            renderInfo: function() {
                this.score += "color2" == this.type ? this.lvMap / 2 : 1;
                b.lv.text(this.score) // 显示得分
            },
            /*说明：游戏结束逻辑*/
            gameOver: function() {
                var d = this.api.getGameOverText(this.score); // 获取游戏结束的信息
                this.lastScore = this.score; // 最终分数
                this.lastGameTxt = d.txt; // 结束的文本
                b.d_content.hide(); // 隐藏弹出页面
                b.d_gameover.show().find("h3").html(this.lastGameTxt); // 显示gameover界面，填充结束文本

                // 隐藏色块，显示结束页面。先准备好再显示可以提高用户体验
                box.find("span").fadeOut(1500, function() {
                    b.dialog.show();
                });

                // 如果是双飞模式。暂时忽略这个= =
                if ("color2" == this.type) {
                    var e = [2, 3, 4][parseInt(2 * Math.random())];
                    $("#_score").html(e);
                    var f;
                    f = this.socre < 70 ? (20 + 10 * Math.random()).toFixed(1) : this.socre < 80 ? (30 + 20 * Math.random()).toFixed(1) : this.socre < 90 ? (70 + 10 * Math.random()).toFixed(1) : this.socre < 100 ? (100 + 100 * Math.random()).toFixed(1) : this.socre < 110 ? (60 + 10 * Math.random()).toFixed(1) : this.socre < 120 ? (30 + 20 * Math.random()).toFixed(1) : this.socre < 130 ? (10 + 10 * Math.random()).toFixed(1) : (5 + 10 * Math.random()).toFixed(1);
                    $("#_num").html(f), $("#tips").show()
                } else
                    $("#tips").hide();

                // 暂停标识设为true
                this._pause = true;
            },
            /*说明：初始化等级和时间*/
            reset: function() {
                this.time = this.config.allTime;
                this.lv = -1;
            },
            /*说明：进入下一等级事件*/
            nextLv: function() {
                this.time += this.config.addTime;// 为强者续1秒!!!
                b.time.text(parseInt(this.time));  // 更新时间 可删除？？？
                // 如果不是暂停，重新调用start
                if(!this._pause)
                    this.start();
            }
        };

    window.myGame = c;
})();