(function() {

    var dom = {
    		box : $('#box'),
    		pauseBtn : $('.btn-pause'),
            pause : $('.pause'),
    		room : $('#room'),
    		dialog : $('#dialog'),
    		resume : $('.btn-resume'),
    		restart : $('.btn-restart'),
    		time : $('.time'),
    		lv : $('.lv').find('em'),
    		gameover : $('.gameover'),
    		content : $('.content')
        },
        _game = {
        	scored : 0, // 初始化分数

            /* 说明： 初始化变量和事件*/
            init: function(type, el) {
            	this.type = type;
            	this.config = _conf[type];
            	this.el = el;
            	this.api = window.API[this.type];

            	document.title = _lang.title;

            	this.reset();
            	this.renderUI();
            	this.hasEvent || this.initEvent();
            	this.hasEvent = true;
                this.start();
            },

            /*说明：UI初始化，最大500px*/
            renderUI : function(){
            	var isLandscape = window.innerHeight === 90 || window.innerHeight === -90,
            		length = isLandscape ? window.innerHeight : window.innerWidth;

                if (length > 500) {
                    length = 500;
                }

                length -= 40;
            	dom.box.width(length).height(length);
            	this.el.show();
            },

            /*说明：重置等级，事件，分数*/
            reset : function(){
            	this.time = this.config.allTime;
                this.scored = 0;
                dom.time.text(this.time);
            	this.lv = -1;
            },

            /*说明：事件绑定，resize, 选择色块，暂停，重来，继续*/
            initEvent : function(){
            	var event = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click',
            		_this = this;

            	$(window).resize(_.bind(_this.renderUI, _this));

            	dom.box.on(event, 'span', function(){
            		var $this = $(this),
            			_type = $this.data('type');

            		if (_type == '1') {
            			$this.css('backgroundColor', '#f00').removeAttr('dataType').html('<em></em>');
            			_this.scored ++;
            			_this.nextLv();
            		} else {
                        _this.time -= _this.config.lessTime;
                        if (_this.time <= 0) {
                            this.gameOver();
                        }
                    }
                    
                    dom.time.text(_this.time);
            	});

            	dom.pauseBtn.on(event, _.bind(_this.pause, _this));
            	dom.resume.on(event, _.bind(_this.resume, _this));
            	dom.restart.on(event, function(){
                    _this.reset();
                    _this.resume();
            		_this.start();
            	})

            },

            /*说明：开始游戏,初始化生成dom所需数据，切换视图，调绘制游戏区域，刷新事件等*/
            start : function(){
                var _this = this;

            	dom.dialog.hide();
            	_this.isPause = false;
            	_this.lv = typeof _this.lv === 'undefined' ? 0 : _this.lv + 1; // 做判断是nextLv调用，还是初始化调用
                _this.time > 5 && dom.time.removeClass('danger')
            	_this.lvMap = _this.config.lvMap[_this.lv] || _.last(_this.config.lvMap);
            	_this.renderMap();
            	_this.renderInfo();
            	_this.timer || (this.timer = setInterval(_.bind(this.tick, this), 1000));
            },

            /*说明：根据lvMap生成dom，调用相对于的游戏*/
            renderMap : function(){
            	var n = this.lvMap * this.lvMap,
            		c = '',
            		d = 'lv' + this.lvMap;

            	_(n).times(function(){
            		c += '<span></span>'
            	});

            	dom.box.attr('class' ,d).html(c);

            	this.api && this.api.init && this.api.init(this.lvMap, this.lv);
            },

            /*说明：刷新等级*/
            renderInfo : function(){
            	dom.lv.text(this.scored);
            },

            /*说明：暂停事件*/
            pause : function(){
                dom.content.hide();
                dom.pause.show();
            	dom.room.fadeOut();
            	dom.dialog.fadeIn();
            	this.isPause = true;
            },

            /*说明：继续事件*/
            resume : function(){
            	dom.room.fadeIn();
            	dom.dialog.fadeOut();
            	this.isPause = false;
            },

            /*说明：下一等级*/
            nextLv : function(){
            	this.time += this.config.addTime;
            	this.start();
            },

            /*说明：时间相关事件*/
            tick : function(){
                if (this.isPause) return;
                this.time --;
                dom.time.html(this.time);
                if (this.time >= 5) {
                    dom.time.removeClass('danger');
                } else {
                    dom.time.addClass('danger');
                }
                if (Math.floor(this.time) <= 0) {
                    this.gameOver();
                }
            },

            /*说明：gameOver事件*/
            gameOver : function(){
            	var gameOverText = this.api.getGameOverText ? this.api.getGameOverText(this.scored) : '游戏结束';
            	dom.content.hide();
            	dom.gameover.find('h3').html(gameOverText.html).end().show();

            	dom.box.find('span').fadeOut(1000, function(){
            		dom.dialog.show();
            	});

            	this.isPause = true;
            }
        }

    window.Game = _game;
})();

