[全屏切换](http://www.imooc.com/video/9951)
	
	(function($){
	
	})(jQuery);
	
	/*
	 * 此处闭包作用
	 * 避免全局依赖
	 * 避免第三方破坏
	 * 兼容jQuery操作符 $ 和 jQuery
	 * $.ajax()
	 */

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

思路好6
http://www.imooc.com/video/9956