(function(root, factory){
	// amd 模块
	if (typeof define === 'function' && define.amd) {
		define(['underscore', 'jquery', 'exports'], function(_, $, exports){
			root.Backbone = factory(root, exports, _, $);
		})

	// node || CommonJs
	} else if (typeof exports !== 'undefined') {
		var _ = require('underscore');
		factory(root, exports, _);
	} else {
		// global
		root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	}
})(this, function(root, Backbone, _, $){

	// 将当前的Backbone赋值给 previousBackbone 防止后面冲突
	var previousBackbone = root.Backbone;

	// 获取array 已经部分方法，后期可以使用
	var array = [],
		push = array.push,
		slice = array.slice,
		splice = array.splice;

	// 当前的backbone版本
	Backbone.VERSION = '1.1.2';

	// 把jQUery || Zepto 赋值给 Backbone.$
	Backbone.$ = $;

	// 冲突机制，不理解
	Backbone.noConfilict = function(){
		root.Backbone = previousBackbone;
		return this;
	}

	// 是否屏蔽掉部分HTTP功能，PUT && PATCH && DELETE
	Backbone.emulateHttp = false;

	// 是否不支持JSON数据传输，默认支持
	Backbone.emulateJSON = false;

	//Regular expression used to split event strings.
	var eventSplitter = /\s+/;
});
