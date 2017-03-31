(function($) {
    /*私有函数*/
    var _prefix = (function(temp) {

        var aPrefix = ['webkit', 'Moz', 'o', 'ms'],
            props = '';

        for (var i = 0; i < aPrefix.length; i++) {
            props = aPrefix[i] + 'Transition';
            if (temp.style[props] !== undefined) {
                return '-' + aPrefix[i].toLowerCase() + '-';
            }
        }
        return false;
    })(document.createElement('div'));

    /*PageSwitch主体*/
    var PageSwitch = (function() {
        function PageSwitch(elem, options) {
            this.element = elem;
            this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});
            this.init();
        }

        PageSwitch.prototype = {
            /*说明：初始化dom变量，调用横竖屏，分页，绑定事件等*/
            init: function() {
                var self = this;

                self.selectors = self.settings.selectors; // 页面选择器
                self.sections = self.element.find(self.selectors.sections); // 页面外部容器
                self.section = self.element.find(self.selectors.section); // 滚动页面
                self.type = '_' + self.type || '_' + self.scrollPage; // 过渡类型
                self.direction = self.settings.direction === 'vertical' ? true : false; // true 代表竖屏 false代表横屏
                self.pagesCount = self.getPagesCount(); // 滚动页面个数
                self.index = (self.settings.index >= 0 && self.settings.index < self.pagesCount) ? self.settings.index : 0;
                self.direction || self._initLayout(); // 如果是横屏调用_initLayout处理样式问题
                self.settings.pagination && self._initPaging() // 如果是有分页，调用分页初始化函数
                self.canScroll = true; // 是否可以滚动的标识

                // 添加过滤css属性
                if (_prefix) {
                    self.sections.css(_prefix + 'transition', 'all ' + self.settings.duration + 'ms ' + self.settings.easing);
                }

                self._initEvent();
            },

            /*说明：获取滚动页面个数*/
            getPagesCount: function() {
                return this.section.length;
            },

            /*说明：分页dom初始化处理*/
            _initPaging: function() {
                var self = this,
                    htmlTemp = '',
                    pagesClass = self.selectors.pages.slice(1),
                    len = self.pagesCount;

                htmlTemp += '<ul class=' + pagesClass + '>'
                for (var i = 0; i < len; i++) {
                    htmlTemp += '<li></li>';
                }
                htmlTemp += '</ul>';

                self.element.append(htmlTemp);
                // 对分页样式做相应处理
                this.pagesList = self.element.find(self.selectors.pages + ' li');
                this.pagesList.eq(self.index).addClass(self.selectors.active.slice(1));
            },

            /*说明：横屏css处理*/
            _initLayout: function() {
                var self = this;
                self.sections.css('width', self.pagesCount * 100 + '%');
                self.section.css({
                    'width': 100 / self.pagesCount + '%',
                    'float': 'left'
                });
                self.pagination && self.element.find(self.pagesClass).addClass('pages_horizontal');
            },

            /*说明：事件回调_initEvent*/
            _initEvent: function() {
                var self = this;

                //点击li切换视图
                self.element.on('click', self.selectors.pages + ' li', function() {
                    self.index = $(this).index();
                    self._scrollType();
                });

                // 鼠标滚动事件
                self.element.on('mousewheel DOMMouseScroll', function(e) {
                    var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail; // 大于0代表向上滑动，小于0则向下滑动（其他浏览器和FF）

                    // 向上滚动 && (不是第一张 + 不可以循环) && 可以滚动
                    if (delta > 0 && ((!self.settings.loop && self.index) || self.settings.loop)) {
                        self.prev();
                    } else if (delta < 0 && (self.index < (self.pagesCount - 1) && !self.settings.loop || self.settings.loop)) {
                        self.next();
                    }
                })

                // 键盘事件
                if (self.settings.keyboard) {
                	$(window).on('keydown', function(e){
                		var keyCode = e.keyCode;
                		if (keyCode === 37 || keyCode === 38) {
                			self.prev();
                		} else if (keyCode === 39 || keyCode === 40) {
                			self.next();
                		}
                	})
                }

                // TODO resize事件
                $(window).on('resize', function(){
                	
                })

                // 动画执行完事件
                self.sections.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function() {
                    self._callBack()
                });
            },

            /*说明：上一页滚动*/
            prev: function() {
                var self = this;
                if (!self.canScroll) return;
                if (self.index > 0) self.index--;
                else if (self.settings.loop) self.index = self.pagesCount - 1;
                self._scrollType();
            },

            /*说明：下一页滚动*/
            next: function() {
                var self = this;
                if (!self.canScroll) return;
                if (self.index < (self.pagesCount - 1)) self.index ++;
                else if (self.settings.loop) self.index = 0;
                self._scrollType();
            },

            /*说明：回调事件*/
            _callBack : function(){
            	var self = this;

            	self.canScroll = true;
            	if (self.settings.callback && $.isFunction(self.settings.callback)) 
            		self.settings.callback(self);
            },

            /*说明：实现滚动效果*/
            _scrollType: function() {
                var self = this,
                    dest = self.section.eq(self.index).position(),
                    dist = 0,
                    activeClass = self.selectors.active.slice(1);

                if (!self.canScroll || !dest) return;

                self.canScroll = false;

                dist = self.direction ? dest.top : dest.left; // 判断是用left还是top

                // 判断是用css还是jq
                if (_prefix) {
                    // css方法
                    var translate = self.direction ? 'translateY(-' + dest.top + 'px)' : 'translateX(-' + dest.left + 'px)';
                    self.sections.css(_prefix + 'transform', translate);
                } else {
                    // jq方法
                    var animateCss = self.direction ? { top: dest.top } : { left: dest.left };
                    self.sections.animate(animateCss, function() {
                        self._callBack();
                    });
                }

                // 为li修改class
                self.pagesList.eq(self.index).addClass(activeClass).siblings().removeClass(activeClass);
            },

            /*说明：获取屏幕宽度 && 高度*/
            _getScreenLength : function(){
            	return this.direction ? this.element.height() : this.element.width();
            }
        };

        return PageSwitch;
    })();

    /*挂载到jQuery上*/
    $.fn.PageSwitch = function(options) {
        return this.each(function() {
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
        selectors: {
            sections: '.sections',
            section: '.section',
            pages: '.pages',
            active: '.active'
        },
        index: 0,
        easing: 'ease',
        duration: 500,
        loop: true,
        pagination: true,
        keyboard: true,
        direction: 'vertical',
        callback: null
    };

    /*利用钩子初始化默认实例*/
    $(function() {
        $('[data-PageSwitch]').PageSwitch();
    })
})(jQuery);
