(function() {
    var dom = {
            loading: $('#loading'),
            index: $('#index'),
            room: $('#room'),
            play: $('.btn-play'),
            startBtn: $('#startBtn'),
            color: $('.btn[data-type="color"]'),
            color2: $('.btn[data-type="color2]'),
            help: $('#help'),
            goIndex: $('.go_index'),
            page : $('.page')
        },

        app = {
            /*说明：调用事件绑定，调用loading*/
            init: function() {
                this.loading();
                this.initEvent();
            },

            /*说明: 判断图片是否加载完成，加载完成调用render*/
            loading: function() {
                var _this = this;

                function count() {
                    counts++;
                    counts === len && _this.render();
                }

                if (_conf.loadPic) {
                    for (var i = 0, len = _conf.pic.length, counts = 0; i < len; i++) {
                        var g = new Image();
                        g.src = _conf.pic[i];
                        g.addEventListener('load', count)
                    }
                } else {
                    this.render();
                }
            },

            /*说明：初始化开始页面展示，切换视图*/
            render: function() {
                dom.help.html(_lang.helpText);
                dom.startBtn.find('button').each(function(index, item, list) {
                    var _type = $(item).data('type');
                    $(item).html(_lang[_type].btnText);
                })
                setTimeout(_.bind(this.ready), 1000)
            },

            ready: function() {
                dom.page.hide();
                dom.index.fadeIn();
            },

            /*说明：切换游戏开始事件和调用游戏初始化事件*/
            initEvent: function() {
                var event = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
                dom.play.on(event, function() {
                    var type = $(this).data('type');
                    dom.index.fadeOut();
                    type && Game.init(type, dom.room);
                });

                dom.goIndex.on(event, _.bind(this.ready, this))
            }
        }

    $('body').show();
    app.init();

    window.API = {
        app: app
    }
    window.dom = dom;
})();
