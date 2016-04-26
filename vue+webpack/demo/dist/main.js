/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _try = __webpack_require__(30);

	var _try2 = _interopRequireDefault(_try);

	var _app = __webpack_require__(1);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// var app = require('./components/app');

	Vue.config.debug = true;

	var appVue = new Vue(_app2.default);

	appVue.$watch('text', function (newV, oldV) {
		console.log(newV, oldV);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\app.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\app.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.fade-transition {\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.fade-enter, .fade-leave {\n  opacity: 0;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _list = __webpack_require__(7);

	var _list2 = _interopRequireDefault(_list);

	var _home = __webpack_require__(10);

	var _home2 = _interopRequireDefault(_home);

	var _filter = __webpack_require__(13);

	var _filter2 = _interopRequireDefault(_filter);

	var _test = __webpack_require__(16);

	var _test2 = _interopRequireDefault(_test);

	var _life = __webpack_require__(19);

	var _life2 = _interopRequireDefault(_life);

	var _resource = __webpack_require__(24);

	var _resource2 = _interopRequireDefault(_resource);

	var _dataMethod = __webpack_require__(31);

	var _dataMethod2 = _interopRequireDefault(_dataMethod);

	var _event = __webpack_require__(36);

	var _event2 = _interopRequireDefault(_event);

	var _dom = __webpack_require__(41);

	var _dom2 = _interopRequireDefault(_dom);

	var _directive = __webpack_require__(46);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <script>
	exports.default = {
		el: '#example',
		data: {
			msg: 'hello',
			text: '',
			tog: 'home',
			view: 'aa',
			message: 'test',
			obj: {
				name: 'jsonz',
				age: 20
			}
		},
		components: {
			list: _list2.default,
			home: _home2.default,
			filter: _filter2.default,
			test: _test2.default,
			life: _life2.default,
			resource: _resource2.default,
			dataMethod: _dataMethod2.default,
			dom: _dom2.default,
			directive: _directive2.default
		},
		methods: {
			t: function t() {
				console.log(1);
			},
			a: function a(msg) {
				this.text = msg;
			},
			toggle: function toggle() {
				// 更新dom调用
				Vue.nextTick(function () {
					console.log('dom更新了');
				});
				this.tog = this.text === 'list' ? 'list' : 'home';
			}
		},

		events: {}
	};


	Vue.component('aa', {
		// prop 可以用在模板内
		// 可以用 `this.msg` 设置
		template: '<p>components A</p>'
	});

	Vue.component('bb', {
		// prop 可以用在模板内
		// 可以用 `this.msg` 设置
		template: '<p>components B</p>'
	});
	// </script>
	//
	//
	// <template>
	// 	<directive></directive>
	//
	// 	<br><br><br><br>
	// 	<component :is="tog">
	// 	  <!-- 组件在 vm.currentview 变化时改变 -->
	// 	</component>
	// 	{{tog}}
	// 	<div id="ddd">
	// 		ddd
	// 	</div>
	// 	<input type="text" v-model="text" @keyup="toggle">
	//
	// <!-- 	<list :msg="text" @b="a" try="yoyo">
	// 		<p slot="A">This is slot A</p>
	// 		<p slot="B">This is slot B</p>
	// 	</list> -->
	//
	//
	// 	<!-- 先淡出再淡入 -->
	// 	<label for="aa"><input type="radio" v-model="view" value="aa" id="aa">AA</label>
	//
	// 	<label for="bb"><input type="radio" v-model="view" value="bb" id="bb">BB</label>
	//
	// 	{{view}}
	// 	<component
	// 	  :is="view"
	// 	  transition="fade"
	// 	  transition-mode="out-in">
	// 	</component>
	//
	// 	<filter :msg="msg" :text="text"></filter>
	//
	// </template>
	//
	//
	// <style>
	// 	.fade-transition {
	// 	  transition: opacity .3s ease;
	// 	}
	// 	.fade-enter, .fade-leave {
	// 	  opacity: 0;
	// 	}
	// </style>

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {

		props: {
			'msg': ['String', 'Object'],
			'try': 'String'
		},

		data: function data() {
			return {
				name: '2222'
			};
		},

		methods: {
			inputing: function inputing(e) {
				if (e.keyCode === 13 && this.msg.length) {
					this.$parent.t();
					this.$dispatch('b', this.msg);
				}
			}
		}

	};
	// </script>
	//
	// <template>
	// 	<slot name="B"></slot>
	// 	<div>A custom component! {{name}} , {{ msg }}</div>
	// 	<input type="text" v-model="msg" @keyup="inputing" >
	// 	<slot name="A"></slot>
	// 	<b>{{try}}</b>
	// </template>

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<slot name=\"B\"></slot>\n<div>A custom component! {{name}} , {{ msg }}</div>\n<input type=\"text\" v-model=\"msg\" @keyup=\"inputing\" >\n<slot name=\"A\"></slot>\n<b>{{try}}</b>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		props: ['message']
	};
	// </script>
	//
	// <template>
	// 	<p>
	// 		{{message}}
	// 	</p>
	// 	<h1>Hello World</h1>
	// </template>

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<p>\n\t{{message}}\n</p>\n<h1>Hello World</h1>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\filter.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\filter.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		props: ["msg"],
		data: function data() {
			return {
				text: '1',
				capitalize: 'abcd',
				uppercase: 'abdc',
				lowercase: 'ABCD',
				currency: '1234',
				obj: {
					name: 'jsonz',
					age: '20'
				},
				nowTime: '',
				limitBy: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				filterBy: '',
				orderBy: [{
					name: 'jsonz',
					age: 20
				}, {
					name: 'zhang',
					age: 23
				}]
			};
		},
		methods: {
			tKeyup: function tKeyup() {
				console.log(this.nowTime = new Date().getTime());
			},
			tKeyDown: function tKeyDown() {
				console.log(new Date().getTime() - this.nowTime);
			}
		},
		filters: {
			tt: {
				// model -> view
				// 在更新 `<input>` 元素之前格式化值
				read: function read(val) {
					if (!val) return;
					val = parseFloat(val);
					return '$' + val.toFixed(2);
				},
				// view -> model
				// 在写回数据之前格式化值
				write: function write(val, oldVal) {
					var number = +val.replace(/[^\d.]/g, '');
					return isNaN(number) ? 0 : parseFloat(number.toFixed(2));
				}
			}
		}
	};

	// </script>
	//
	// <template id="list">
	// 	<span>基础过滤器 {{msg | reverse}}</span>
	// 	<div>
	// 		<p>双向过滤器</p>
	// 		<input type="text" v-model="text | tt">
	// 		<br>
	// 		<b>Model Value : {{text}}</b>
	// 	</div>
	//
	// 	<div>
	// 		内置过滤器
	// 		<ul>
	// 			<li>capitalize - {{capitalize}} - {{capitalize | capitalize}}</li>
	// 			<li>uppercase  - {{uppercase }} - {{uppercase | uppercase }}</li>
	// 			<li>lowercase  - {{lowercase }} - {{lowercase | lowercase }}</li>
	// 			<li>currency  - <input type="text" v-model="currency"> {{currency | currency '人名币'}}</li>
	// 			<li>json - {{obj}} - <pre>{{obj | json 4}}</pre></li>
	// 			<li>debounce 处理器延迟x秒 <input type="text" @keyup="tKeyup" @keydown="tKeyDown | debounce 1000"></li>
	// 			<li><input type="text" v-model="filterBy"></li>
	// 			<li>
	// 				<template v-for="item in limitBy | limitBy 7 2 | filterBy filterBy">
	// 						{{item}} -
	// 				</template>
	// 			</li>
	// 			<li >
	// 				<template v-for="user in orderBy | orderBy 'name' ">
	// 					{{ user.age }}- {{ user.name }}
	// 				</template>
	// 			</li>
	// 		</ul>
	// 	</div>
	//
	// 	<h3>数组扩展方法 </h3>
	// </template>

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<span>基础过滤器 {{msg | reverse}}</span>\n<div>\n\t<p>双向过滤器</p>\n\t<input type=\"text\" v-model=\"text | tt\">\n\t<br>\n\t<b>Model Value : {{text}}</b>\n</div>\n\n<div>\n\t内置过滤器\n\t<ul>\n\t\t<li>capitalize - {{capitalize}} - {{capitalize | capitalize}}</li>\n\t\t<li>uppercase  - {{uppercase }} - {{uppercase | uppercase }}</li>\n\t\t<li>lowercase  - {{lowercase }} - {{lowercase | lowercase }}</li>\n\t\t<li>currency  - <input type=\"text\" v-model=\"currency\"> {{currency | currency '人名币'}}</li>\n\t\t<li>json - {{obj}} - <pre>{{obj | json 4}}</pre></li>\n\t\t<li>debounce 处理器延迟x秒 <input type=\"text\" @keyup=\"tKeyup\" @keydown=\"tKeyDown | debounce 1000\"></li>\n\t\t<li><input type=\"text\" v-model=\"filterBy\"></li>\n\t\t<li>\n\t\t\t<template v-for=\"item in limitBy | limitBy 7 2 | filterBy filterBy\">\n\t\t\t\t\t{{item}} -\n\t\t\t</template>\n\t\t</li>\n\t\t<li >\n\t\t\t<template v-for=\"user in orderBy | orderBy 'name' \">\n\t\t\t\t{{ user.age }}- {{ user.name }}\n\t\t\t</template>\n\t\t</li>\n\t</ul>\n</div>\n\n<h3>数组扩展方法 </h3>\n";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\test.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\test.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	// <script>
	Vue.directive('my-directive', {
		bind: function bind() {
			console.log('bind');
		},
		update: function update(newValue, oldValue) {
			if (oldValue && oldValue.length > 5) console.log(newValue, oldValue);
		},
		unbind: function unbind() {
			console.log('unbind');
		}
	});

	module.exports = {
		data: function data() {
			return {
				text: 'text',
				a: true
			};
		},
		methods: {
			t: function t() {
				if (this.text === 'delete') {
					this.a = false;
				}
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<b>111</b>
	// 	<input type="text" v-model="text" v-my-directive="text" @keyup="t" v-if="a">
	// </template>

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<b>111</b>\n<input type=\"text\" v-model=\"text\" v-my-directive=\"text\" @keyup=\"t\" v-if=\"a\">\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\life.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\life.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./life.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./life.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		init: function init() {
			console.log('vue init 在实例开始初始化时同步调用。此时数据观测、事件和 watcher 都尚未初始化。');
		},

		created: function created() {
			console.log('created 在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在。');
		},

		beforeCompile: function beforeCompile() {
			console.log('beforeCompile 在编译开始前调用。');
		},

		compiled: function compiled() {
			console.log('compiled 在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档');
		},

		ready: function ready() {
			console.log('ready 在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。 ');
		},

		attached: function attached() {
			console.log('attached 在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会触发这个钩子。');
		},

		detached: function detached() {
			console.log('detached 在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。');
		},

		beforeDestroy: function beforeDestroy() {
			console.log('beforeDestroy 在开始销毁实例时调用。此时实例仍然有功能');
		},

		destroyed: function destroyed() {
			console.log('destroyed 在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed 钩子在过渡完成之后调用。');
		}
	};
	// </script>
	//
	// <template>
	// 	<div></div>
	// </template>
	//
	// <style>
	//
	// </style>

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div></div>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\resource.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\resource.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./resource.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./resource.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	var mixin = {
		data: function data() {
			return {
				name: 'mixin'
			};
		},
		methods: {
			foo: function foo() {
				console.log('foo');
			}
		}
	};
	exports.default = {
		mixins: [mixin]
	};
	// </script>
	//
	// <template>
	// 	<hr><hr><hr>
	// 	<h1>{{name}}</h1>
	// 	<hr><hr><hr>
	// </template>
	//
	// <style>
	//
	// </style>

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n<hr><hr><hr>\n<h1>{{name}}</h1>\n<hr><hr><hr>\n";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n\t<directive></directive>\n\n\t<br><br><br><br>\n\t<component :is=\"tog\">\n\t  <!-- 组件在 vm.currentview 变化时改变 -->\n\t</component>\n\t{{tog}}\n\t<div id=\"ddd\">\n\t\tddd\n\t</div>\n\t<input type=\"text\" v-model=\"text\" @keyup=\"toggle\">\n\n<!-- \t<list :msg=\"text\" @b=\"a\" try=\"yoyo\">\n\t\t<p slot=\"A\">This is slot A</p>\n\t\t<p slot=\"B\">This is slot B</p>\n\t</list> -->\n\n\n\t<!-- 先淡出再淡入 -->\n\t<label for=\"aa\"><input type=\"radio\" v-model=\"view\" value=\"aa\" id=\"aa\">AA</label>\n\t\n\t<label for=\"bb\"><input type=\"radio\" v-model=\"view\" value=\"bb\" id=\"bb\">BB</label>\n\t\n\t{{view}}\n\t<component\n\t  :is=\"view\"\n\t  transition=\"fade\"\n\t  transition-mode=\"out-in\">\n\t</component>\n\n\t<filter :msg=\"msg\" :text=\"text\"></filter>\n\n";

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(34)
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\dataMethod.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\dataMethod.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		props: ['msg'],
		data: function data() {
			return {
				a: 209
			};
		},
		methods: {
			getName: function getName() {
				this.$get('msg.name');
				// vm 实例获取表达式的值 vm.$get(obj.name);
			},
			setName: function setName() {
				// 多数情况直接vm.obj.name = 'zhang'
				// 不存在的值或者用keypath才用vm.$set('obj.name')来设置
			}
		}
	};

	// </script>
	//
	// <template>
	// 	<p>{{a}}</p>
	// 	<input type="text" v-model="a">
	// 	<br>
	// 	<input type="text" v-model="obj.name">
	// 	<button @click="getName">获取</button>
	//
	// </template>
	//
	// <style>
	//
	// </style>

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<p>{{a}}</p>\n<input type=\"text\" v-model=\"a\">\n<br>\n<input type=\"text\" v-model=\"obj.name\">\n<button @click=\"getName\">获取</button>\n\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(35);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./dataMethod.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./dataMethod.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(39)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\event.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\event.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		data: function data() {
			return {
				name: 'jsonz'
			};
		},

		methods: {
			event1: function event1() {}
		}
	};

	// </script>
	//
	// <template>
	// 	<button @click="event1">按钮1</button>
	// </template>
	//
	// <style>
	//
	// </style>

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<button @click=\"event1\">按钮1</button>\n";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./event.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./event.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(42)
	__vue_script__ = __webpack_require__(44)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\dom.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(45)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\dom.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./dom.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./dom.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		data: function data() {
			return {
				i: 0
			};
		},
		methods: {
			fn1: function fn1() {}
		}
	};
	// </script>
	//
	//
	//
	// <template>
	// 	<button @click="fn1">按钮1</button>
	// 	<!-- <p id="template1">children</p> -->
	// </template>
	//
	// <style>
	//
	// </style>

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n<button @click=\"fn1\">按钮1</button>\n<!-- <p id=\"template1\">children</p> -->\n";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(47)
	__vue_script__ = __webpack_require__(49)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\directive.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(50)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "F:\\GitHub\\learn\\vue+webpack\\demo\\src\\components\\directive.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./directive.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./directive.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		data: function data() {
			return {
				text: 1,
				div: '<b>Hello World</b>',
				isTrue: true,
				isFalse: false,
				list: [{ name: 'jsonz', age: 20 }, { name: 'zhang', age: 40 }, { name: 'xinxin', age: 30 }]
			};
		},
		computed: {
			obj: function obj() {
				var _obj = {};
				for (var i = 0, len = this.list.length; i < len; i++) {
					_obj['name' + i] = this.list[i].age;
				}
				return _obj;
			}
		},
		methods: {
			fn: function fn() {
				console.log(this.isTrue);
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<button @click="isTrue = !isTrue">按钮</button>
	// 	<br>
	//
	// 	<span v-text="text"></span>
	// 	<span>{{text}}</span>
	// 	<br>
	//
	// 	<div v-html="div"></div>
	// 	<br>
	//
	// 	<span v-if="isTrue">isTrue</span>
	// 	<span v-if="isFalse">isFalse</span>
	// 	<span v-else>v-else</span>
	// 	<br>
	//
	// 	<span v-show="isTrue">isTrue</span>
	// 	<span v-show="isFalse">isFalse</span>
	// 	<br>
	//
	// 	<ul>
	// 		<li v-for="item in list">{{item.name}} - {{item.age}}</li>
	// 	</ul>
	//
	// 	<ul>
	// 		<li v-for="(key, val) in obj">{{key}} - {{val}}</li>
	// 	</ul>
	//
	//
	//
	// 	<br>
	//
	// </template>
	//
	// <style>
	//
	// </style>

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<button @click=\"isTrue = !isTrue\">按钮</button>\n<br>\n\n<span v-text=\"text\"></span>\n<span>{{text}}</span>\n<br>\n\n<div v-html=\"div\"></div>\n<br>\n\n<span v-if=\"isTrue\">isTrue</span>\n<span v-if=\"isFalse\">isFalse</span>\n<span v-else>v-else</span>\n<br>\n\n<span v-show=\"isTrue\">isTrue</span>\n<span v-show=\"isFalse\">isFalse</span>\n<br>\n\n<ul>\n\t<li v-for=\"item in list\">{{item.name}} - {{item.age}}</li>\n</ul>\n\n<ul>\n\t<li v-for=\"(key, val) in obj\">{{key}} - {{val}}</li>\n</ul>\n\n\n\n<br>\n\n";

/***/ }
/******/ ]);