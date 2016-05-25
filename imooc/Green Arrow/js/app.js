(function(){
	/*说明：页面常用dom*/
	var b = {
		index : $('#index'), // 开始界面
		room : $('#room'), // 游戏界面
		loading : $('#loading'), // loading界面
		dialog : $('#dialog'), // 暂停和结束界面
		play : $('.btn-play') // 开始按钮
	},
	ua = window.navigator.userAgent.toLowerCase(), // 浏览器ua 判断机型
	isAndroid = /android/i.test(ua),
	isIOS = /iphone|ipad|ipod/i.test(ua),
	/*说明：控制页面主流程*/
	app = {
		/*说明：初始化，事件和loading事件*/
		init : function(){
			this.initEvent();
			this.loading();
		},

		/*说明：loading事件，包括判断图片加载完成，加载完成就调用render()显示游戏界面*/
		loading : function(){
			function a() {
				d++;
				d == c && app.render();
			}

			if (_config.pic.isOpen) {
				for (var b = ['img/1.png','img/2.png','img/3.png']) {
					var g = new Image;
					g.onload = a;
					g.src = b[e];
				}
			} else {
				app.render();
			}
		},

		/*说明：切换界面，显示游戏主页面*/
		render : function(){
			setTimeout(function(){
				b.loading.hide();
				b.index.show();
			}, 1000)
		},

		/*说明：事件绑定，判断事件是click还是touch，根据点击按钮调用游戏初始化*/
		initEvent : function(){
			var clickEvent = 'ontouchstart' in document.documentElement  ? 'touchstart' : 'click',
				myApp = this;

			b.play.on(clickEvent, function(){
				var type = $(this).data('type') || 'color';
				b.index.hide();
				Game.init(type, b.room, myApp);
			})
		}
	}

	// 初始化调用
	app.init();

	// 创建个全局api，方便其他地方调用。
	window.API = {};

})();