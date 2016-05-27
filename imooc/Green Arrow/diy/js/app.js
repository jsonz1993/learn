(function(){
	var dom = {
		loading : $('#loading'),
		index : $('#index'),
		room : $('#room'),
		play : $('.btn-play'),
		startBtn : $('#startBtn'),
		color : $('.btn[data-type="color"]'),
		color2 : $('.btn[data-type="color2]'),
		help : $('#help')
	},

	na = window.navigator.userAgent.toLowerCase()
	isAndroid = /android/i.test(na),
	isIOS = /iphone|ipad|ipod/i.test(na),

	app = {
		/*说明：调用事件绑定，调用loading*/
		init : function(){
			this.loading();
			this.initEvent();
		},

		/*说明: 判断图片是否加载完成，加载完成调用render*/
		loading : function(){
			var _this = this;

			function count(){
				counts ++;
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
		render : function(){

			dom.help.html(_lang.helpText);
			dom.startBtn.find('button').each(function(index, item, list) {
				var _type = $(item).data('type');
				$(item).text(_lang[_type].btnText);
			})
			setTimeout(function(){
				dom.loading.fadeOut();
				dom.index.fadeIn();
			}, 1)
		},
		

		/*说明：切换游戏开始事件和调用游戏初始化事件*/
		initEvent : function(){
			var event = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click'
			dom.play.on(event, function(){
				var type = $(this).data('type');
				dom.index.fadeOut();
				type && Game.init(type, dom.room);
			});
		}
	}


	$('body').show();
	app.init();

	window.API = {
		app : app
	}
	window.dom = dom;
})();