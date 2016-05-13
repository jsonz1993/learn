(function($){
	/*私有函数*/

	/*PageSwitch主体*/
	var PageSwitch = (function(){
		function PageSwitch(elem, options) {
			this.element = elem;
			this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});
			this.init();
		}

		PageSwitch.prototype = {
			/*说明：初始化dom变量，调用横竖屏，分页，绑定事件等*/
			init : function(){
				var self = this;

				self.selectors = self.settings.selectors;
				self.sections = self.element.find(self.selectors.sections);
				self.section = self.element.find(self.selectors.section);
				self.direction = self.settings.direction === 'vertical' ? true : false; // true 代表竖屏 false代表横屏
				self.pagesCount = self.getPagesCount();

				self.direction || self._initLayout(); // 如果是横屏调用_initLayout处理样式问题
				self.pagination && self._initPaging() // 如果是有分页，调用分页初始化函数
			},

			/*说明：获取滚动页面个数*/
			getPagesCount : function(){
				return this.section.length;
			},

			/*说明：分页dom初始化处理*/
			_initPaging : function(){
				var self = this,
					htmlTemp = '',
					pagesClass = self.selectors.pages.slice(1),
					len = self.pagesCount;

				htmlTemp += '<ul class='+ pagesClass +'>'
				for (var i = 0; i < len; i++) {
					htmlTemp += '<li></li>';
				}
				htmlTemp +='</ul>';

			},

			/*说明：横屏css处理*/
			_initLayout : function(){

			}
		};

		return PageSwitch;
	})();

	/*挂载到jQuery上*/
	$.fn.PageSwitch = function(options){
		return this.each(function(){
			var self = $(this),
				instance = self.data('PageSwitch');

			if (!instance) {
				instance = new PageSwitch(self, options)
				self.data('PageSwitch', instance);
			}

			if ($.type(options) === 'string') instance[options]();
		})
	};

	/*定义默认配置*/
	$.fn.PageSwitch.defaults = {
		selectors : {
			sections : '.sections',
			section : '.section',
			pages : '.pages',
			active : '.active'
		},
		index : 0,
		easing : 'ease',
		duration : 500,
		loop : true,
		pagination : true,
		keyboard : true,
		direction : 'vertical',
		callback : null
	};

	/*利用钩子初始化默认实例*/
	$(function(){
		$('[data-PageSwitch]').PageSwitch();
	})
})(jQuery);