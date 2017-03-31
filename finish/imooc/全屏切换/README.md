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

##### css3 变形 过渡
	/*
	 * transform 变形
	 * 旋转 rotate transform: rotate(45deg);
	 * 缩放 scale transform: scale(2, .5)];
	 * 移动 translate transform: translate(100px, -50px);
	 * 扭曲 skew transform: skew(45deg, 45deg);
	 * 
	 * transition 过渡
	 * transition-property 过渡效果属性 background
	 * transition-duration 过渡时间 s/ms
	 * transition-timing-function 时间曲线 linear
	 * transition-delay 延时事件 s/ms
	 * transition: <transition-property> <transition-duration> <transition-timing-function> <transition-delay>
	*/


### 思路和方法

1. 创建一部分私有函数
	1. 获取浏览器前缀与判断是否支持transition
2. 创建PageSwitch主体
	1. 构造函数
		1. 定义`settings` 合并用户选项和默认参数
		2. 定义`element` 方便后面调用
		3. 调用初始化函数
	2. 原型挂载方法
		1. init __初始化__ √√√
			1. 初始化后期需要的dom，横竖标识，页面数量，index,canScroll
			2. 根据横竖屏调用方法
			3. 根据是否分页调用方法
			4. 绑定事件
		2. pagesCount __获取滑动页面数量__ √√√
		3. switchLength __根据页面的类型获取滑动的宽度或高度__ 
		4. _initLayout __对横屏做布局css处理__ √√√
		5. _initPaging __分页处理__ √√√
			1. 对分页进行dom处理和css样式处理
			2. 暴漏出分页li方便外部调用修改class
		6. _initEvent __事件绑定__
			1. 点击分页li事件
			2. 滚动事件
			3. 键盘事件
			4. resize事件
			5. 回调事件
		7. prev __调用上一页滚动__
			1.  判断是否循环等条件，修改index
			2.  调用滚动事件
		8. next __调用下一页滚动__
			1. 同prev
		9. _scrollPage __实现滚动效果__
			1. 判断是否可以滚动
			2. 获取滚动的距离
			3. 判断是用css还是animate
			4. 修改页面li的class 
			 
3. 挂载到jQuery上
	1. return this.each()方式，保持链式调用
	2. 判断是否有实例(instance)，没有则创建实例并缓存起来
	3. 传入参数[self,options]
	4. 如果传入的是字符串，则调用实例上方法
4. 定义默认配置 `defaults`
	1. `selectors` 选择器
		1. `sections` 对应的分页wrap _.sections_
		2. `section` 分页div _.section_
		3. `page` 页数dom _.pages_
		4. `active` 选中的class _.active_
	2. `index` 当前选中页 _0_
	3. `easing` 动画效果 _ease_
	4. `duration` 动画执行时间(ms) _500_
	5. `loop` 是否可以循环播放 _true_
	6. `pagination` 是否做分页处理 _true_
	7. `keyboard` 是否触发键盘事件 _true_
	8. `direction` 展示类型[horizontal] _vertical_
	9. `callback` 回调函数 _null_
5. 利用钩子初始化默认实例
	1. 钩子 `data-PageSwitch`

