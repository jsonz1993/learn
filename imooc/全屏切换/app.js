/**
 * Created by Administrator on 2016/5/12.
 */
/**
 * 闭包作用
 * 避免全局依赖
 * 避免第三方破坏
 * 兼容jQuery操作符 $ 和 jQuery
 */

/**
 * 组件开发方式
 * 类级别组件开发
 *  给jquery命名空间下添加新的全局函数，也成静态方法
 *  jQuery.myPlugin = function(){};
 *  $.ajax();
 *
 * 对象级别组件开发
 *  挂载jQuery原型下的方法，这样通过选择器选取的jQuery对象实例也能共享该方法，也称动态方法。
 *  $.fn.myPlugin = function(){}; $.fn === $.prototype;
 *  addClass() attr()...
 */

/**
 * 链式调用
 * $.fn.myPlugin = function(){
 *  ...
 *  return this;
 * }
 */

/**
 * 单例模式
 * $.fn.myPlugin = function(){
 *  var me = $(this),
 *      instance = me.data('myPlugin');
 *  if (!instance) {
 *      me.data('myPlugin', (instance = new myPlugin()))
 *  }
 * }
 *
 * 如果存在实例，则不重新创建实例
 * 利用 data来存放插件对象的实例
 */

(function($){
	var privateFn = function(){
		// 私有方法
	}

	var PageSwitch = (function(){
		function PageSwitch(elem, options){
			this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});// 合并用户配置和默认配置到 this.settings
			this.element = elem;
			this.init();// 初始化插件
		}

		PageSwitch.prototype = {
			/*说明：初始化插件*/
			/*实现：初始化dom结构，布局，分页及绑定事件*/
			init : function(){
				var self = this; // this指的是PageSwitch对象
				self.selectors = self.settings.selectors;
				self.sections = self.selectors.sections;
				self.section = self.selectors.section;

				self.direction = self.settings.direction === 'vertical' ? true : false;
				self.pagesCount = self.pagesCount();
				self.index = (self.settings.index >= 0 && self.settings.index < self.pagesCount) ? self.settings.index : 0;

				// 如果是横屏，调用_initLayout
				if (!self.direction) self._initLayout();

				// 判断是否进行分页处理
				if (!self.settings.pagination) self._initPaging();

				// 绑定时间
				self._initEvent();
			},

			/*说明：获取滑动页面数量*/
			pagesCount : function(){
				return this.section.length;
			},

			/*说明：获取滑动的宽度（横屏滑动）或高度（竖屏滑动）有可能在改变窗口时调用，所以定义为共有方法*/
			switchLength : function(){
				return this.direction ? this.element.height() : this.element.width();
			},

			/*说明：主要针对横屏情况进行页面布局*/
			_initLayout : function(){
				var self = this,
					width = (self.pagesCount * 100) + '%', // 页面主体宽度
					childWidth = (100 / self.pagesCount).toFixed(2) + '%'; // 页面子类宽度，避免除不尽取两位小数

				self.sections.width(width);
				self.section.width(childWidth).css('float','left');
			},

			/*说明：实现分页的dom结构及css样式*/
			_initPaging : function(){
				var self = this,
					pagesClass = self.selectors.page.substring(1), // 获取分页ul class
					activeClass = self.selectors.active.substring(1), // 获取分页当前li calss
					directionClass = '',
					pageHtml = '<ul class='+ pagesClass +'>';
					
				for (var i = 0,len = self.pagesCount; i < len; i++) {
					pageHtml += '<li></li>'
				}

				pageHtml += '</ul>';
				self.element.append(pageHtml);
				var pages = self.element.find(self.selectors.page);
				self.pageItem = pages.find('li'); // 后面滑动动画的时候需要对pageItem进行操作，所以配置到self下
				self.pageItem.eq(self.index).addClass(activeClass);

				// 判断方向给分页加相应的class
				directionClass = self.direction ? 'vertical' : 'horizontal';
				pages.addClass(directionClass);
			},

			/*说明：初始化插件事件 插件核心*/
			/*实现：点击分页事件，滚轮事件，键盘事件，尺寸改变事件，回调事件*/
			_initEvent : function(){
				var self = this;
				// 动态加上去的dom结构，所以用事件委托
				self.element.on('click', self.selectors.page + ' li', function(){
					self.index = $(this).index(); // 修改index;
					self._scrollPage();
				});

				// 鼠标滚轮事件兼容 mouseWheel DOMMouseScroll(FF)
				// 滚轮方向 向下滚动时 wheeldalta -120 detail 3(FF)
				self.element.on('mouseWheel DOMMouseScroll', function(e){
					var delta = e.originalEvent.wheelDeta || -e.originalEvent.detail; // jquery 把原生属性封装到e.originalEvent里面
					// '-' 做了处理，大于0代表向上滑动，小于0则向下滑动

					//鼠标滚轮事件，判断方向与是否可以循环播放
					if (delta > 0 && (self.index && !self.settings.loop || self.settings.loop)) {self.prev()
					} else if(delta < 0 && (self.index < (self.pagesCount - 1) && !self.settings.loop || self.settings.loop)) {
						self.next();
					}
				});

				// 键盘事件 IE keyCode属性 || FF which 和 charCode || Opera keyCode 和 which
				// jquery 实现了兼容，可以用 .witch 和 .keyCode来确定
				// left => 37, up => 38, right => 39, down => 40;
				if (self.settings.keyboard) {
					$(window).on('keydown', function(e){
						var keyCode = e.keyCode;
						if (keyCode === 37 || keyCode === 38) self.prev();
						else if (keyCode === 39 || keyCode === 40) self.next();
					})
				}

				// 窗口resize事件
				$(window).on('resize', function(){
					var currentLength = self.switchLength(),
						offset = self.settings.direction ? self.section.eq(self.index).offset().top() : self.section.eq(self.index).offset().left;

						if (Math.abs(offset) > currentLength/2 && (self.index < pagesCount - 1)) self.index ++;
						if (self.index) self._scrollPage();
				});

				// 过渡效果后的回调 兼容各种支持的浏览器
				self.sections.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function(){
					if (self.settings.callback && $.type(self.settings.callback) === 'function') self.settings.callback();
				})
				
			},

			/*说明：实现滚动效果*/
			_scrollPage : function(){

			},

			/*说明：向前滑动既上一页*/
			prev : function(){
				var self = this;

				if (self.index > 0) self.index--;
				else if (self.settins.loop) self.index = self.pagesCount -1;

				self._scrollPage();
			},

			/*说明：向下滑动既下一页面*/
			next : function(){
				var self = this;
				if (self.index < self.pagesCount) self.index ++;
				self if (self.settings.loop) self.index = 0;

				self._scrollPage();
			}
		}

		return PageSwitch;
	})();

	$.fn.PageSwitch = function(options){
		return this.each(function(){
			var self = $(this),
			instance = self.data('PageSwitch');

			// 单例判断
			if (!instance) {
				instance = new PageSwitch(self, options);
				self.data('PageSwitch', instance); // 实例存放在$.data('PageSwitch')
			}

			// 判断传入参数是什么类型，如果是string，则调用实例上的对应方法 \
			// Ex $('div').PageSwitch('init');
			if ($.type(options) === 'string') return instance[options]();

			
		})
	}

	// 定义默认配置
	$.fn.PageSwitch.defaults = {
		selectors : {
			sections : '.sections', // 对应dom的sections
			section : '.section', // 对应dom的 section
			page : '.pages', // 对应当前页数
			active : '.active' // 对应选中
		},

		index : 0, // 默认从第几页开始展示
		easing : 'ease', // 动画效果
		duration : 500, // 动画执行时间 ms
		loop : false, // 是否循环播放
		pagination : true, // 分页处理
		keyboard : true, // 是否触发键盘事件
		direction : 'vertical', // 	展示类型 默认竖屏 横屏(horizontal)
		callback : null // 滑动后的回调
	}

	$(function(){
		$('[data-PageSwitch]').PageSwitch();
	})

})(jQuery);
