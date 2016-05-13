[全屏切换](http://www.imooc.com/video/9951)

### 单独知识点
	
##### 插件闭包
	(function($){
	
	})(jQuery);
	
	/*
	 * 此处闭包作用
	 * 避免全局依赖
	 * 避免第三方破坏
	 * 兼容jQuery操作符 $ 和 jQuery
	 * $.ajax()
	 */

##### jq插件开发模式

	/**
	 * 组件开发方式
	 * 类级别组件开发
	 *  给jquery命名空间下添加新的全局函数，也成静态方法
	 *  jQuery.myPlugin = function(){};
	 * 对象级别组件开发
	 *  挂载jQuery原型下的方法，这样通过选择器选取的jQuery对象实例也能共享该方法，也称动态方法。
	 *  $.fn.myPlugin = function(){}; $.fn === $.prototype;
	 *  addClass()
	 */

##### 链式调用

	/**
	 * 链式调用
	 * $.fn.myPlugin = function(){
	 *  ...
	 *  return this;
	 * }
	 */


##### 单例模式

	/**
	 * 单例模式 确保只有一个实例
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

##### 判断浏览器前缀

	var _prefix = (function(temp){

		var aPrefix = ['webkit', 'Moz', 'o', 'ms'],
			props = '';

		for (var i = 0;i < aPrefix.length; i++) {
			props = aPrefix[i] + 'Transition';
			if (temp.style[props] !== undefined) {
				return '-' + aPrefix[i].toLowerCase() + '-';
			}
		}
		return false;
	})(document.createElement('div'));

##### css3 transition 过渡动画执行完后回调

	self.sections.on('transitionend webkitTransitionEnd oTransitionEnd otransitionend', function(){
					
	}) 
