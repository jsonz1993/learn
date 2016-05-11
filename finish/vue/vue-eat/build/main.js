/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _base = __webpack_require__(1);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _defaultRem = __webpack_require__(5);
	
	var _defaultRem2 = _interopRequireDefault(_defaultRem);
	
	var _index = __webpack_require__(6);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _add = __webpack_require__(15);
	
	var _add2 = _interopRequireDefault(_add);
	
	var _show = __webpack_require__(62);
	
	var _show2 = _interopRequireDefault(_show);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// js
	
	
	Vue.use(VueAsyncData);
	
	//vue
	// style
	
	Vue.config.debug = true;
	Vue.config.devtools = true;
	
	var Index = Vue.extend(_index2.default),
	    List = Vue.extend(_add2.default),
	    Show = Vue.extend(_show2.default),
	    App = Vue.extend({}),
	    router = new VueRouter();
	router.map({
		'/': {
			component: Index
		},
		'/list': {
			component: List
		},
		'/show': {
			component: Show
		}
	});
	
	router.start(App, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./base.less", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./base.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/*TODO 初始化*/\n* {\n  box-sizing: border-box;\n}\nhtml {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhtml,\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\niframe,\ndl,\ndt,\ndd,\nul,\nol,\nli,\npre,\nform,\nbutton,\ninput,\ntextarea,\nth,\ntd,\na {\n  margin: 0;\n  padding: 0;\n}\nhr {\n  border-width: 0;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1', Arial, Helvetica, Tahoma, sans-serif;\n}\nbutton {\n  cursor: pointer;\n}\nul,\nol {\n  list-style: none;\n}\nimg {\n  border: 0;\n  vertical-align: middle;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\na {\n  color: #333;\n  text-decoration: none;\n}\na:hover,\na:active,\na:visited {\n  text-decoration: none;\n}\ninput[type=button],\ninput[type=submit],\nbutton {\n  cursor: pointer;\n  overflow: visible;\n}\ninput[type=text],\ninput[type=number] {\n  border-width: 0;\n  outline: none;\n  height: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\ni {\n  font-style: normal;\n}\nhtml,\nbody,\n#app,\n.main {\n  width: 100%;\n  height: 100%;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\nheader {\n  line-height: 4rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n}\nheader span {\n  font-size: 1rem;\n  color: #abcdef;\n}\nheader h1 {\n  text-align: center;\n  font-size: 1.6rem;\n  font-weight: 200;\n}\n.main {\n  padding-top: 4rem;\n  background-size: cover;\n  background-position: center;\n  background-color: #efeff4;\n}\n.bottom {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n.bottom .button_bottom {\n  background-color: #FF5722;\n  color: #fff;\n  border: none;\n  font-size: 1.8rem;\n  width: 80%;\n  padding: 1.5rem 0;\n  margin-bottom: 1rem;\n}\n.bottom .info_bottom {\n  line-height: 2rem;\n  color: #fff;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n", ""]);
	
	// exports


/***/ },
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	(function (doc, win) {
	    var docEl = doc.documentElement,
	        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	        recalc = function recalc() {
	        var clientWidth = docEl.clientWidth;
	        if (!clientWidth) return;
	        docEl.style.fontSize = 20 * (clientWidth / 720) + 'px';
	    };
	    if (!doc.addEventListener) return;
	    win.addEventListener(resizeEvt, recalc, false);
	    recalc();
	})(document, window);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(7)
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(14)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\vue-eat\\src\\components\\index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js?id=_v-016815d6&scoped=true!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./index.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js?id=_v-016815d6&scoped=true!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./index.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _data = __webpack_require__(10);
	
	var _data2 = _interopRequireDefault(_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var datas = _data2.default.fetch(); // <script>
	
	
	exports.default = {
		data: function data() {
			return {
				bgUrl: '1.png',
	
				img: datas.img
			};
		},
	
		computed: {
			bgStyle: function bgStyle() {
				return {
					backgroundImage: 'url(./src/images/' + this.img[0] + ')'
				};
			}
		}
	};
	
	// </script>
	//
	// <template>
	// 	<header>
	// 		<h1>去吃啥?</h1>
	// 	</header>
	// 	<div class="main" :style="bgStyle">
	// 		<div class="bottom">
	// 			<button class="button_bottom" v-link="{ path: '/list' }">
	// 				马上选出吃什么!
	// 			</button>
	// 			<p class="info_bottom">选择困难症福音</p>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang="less" scoped>
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(11);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var img = ['test3.jpg', 'test2.jpg', 'test1.jpg', 'test4.jpg', 'test5.jpg', 'test6.jpg', 'test7.jpg', 'test8.jpg', 'test9.jpg', 'test10.jpg', 'test11.jpg', 'test12.jpg'],
	    key = 'jsonz',
	    menu = [];
	
	if (!window.localStorage.getItem(key)) {
	  window.localStorage.setItem(key, (0, _stringify2.default)(menu));
	}
	
	exports.default = {
	  fetch: function fetch() {
	    return {
	      img: img,
	      menu: JSON.parse(window.localStorage.getItem(key))
	    };
	  },
	
	  save: function save(data) {
	    window.localStorage.setItem(key, (0, _stringify2.default)(data));
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(13)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.3.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<header _v-016815d6=\"\">\n\t<h1 _v-016815d6=\"\">去吃啥?</h1>\n</header>\n<div class=\"main\" :style=\"bgStyle\" _v-016815d6=\"\">\n\t<div class=\"bottom\" _v-016815d6=\"\">\n\t\t<button class=\"button_bottom\" v-link=\"{ path: '/list' }\" _v-016815d6=\"\">\n\t\t\t马上选出吃什么!\n\t\t</button>\n\t\t<p class=\"info_bottom\" _v-016815d6=\"\">选择困难症福音</p>\n\t</div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(16)
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\add.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\vue-eat\\src\\components\\add.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js?id=_v-7b527424&scoped=true!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./add.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js?id=_v-7b527424&scoped=true!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./add.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "li[_v-7b527424] {\n  width: 49%;\n  height: 26rem;\n  border-radius: 2px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.49);\n  position: relative;\n  margin: .5%;\n  float: left;\n  background-position: center;\n  background-size: cover;\n}\n.card[_v-7b527424] {\n  background-color: rgba(173, 171, 163, 0.7);\n  position: absolute;\n  bottom: 0;\n  height: 5rem;\n  line-height: 5rem;\n  color: #fff;\n  width: 100%;\n  text-align: center;\n}\n.card span[_v-7b527424] {\n  font-size: 1.5rem;\n}\n.add[_v-7b527424] {\n  background-color: #e91e63;\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  width: 4rem;\n  border-radius: 100%;\n  text-align: center;\n  box-shadow: 1px 5px 8px rgba(0, 0, 0, 0.34);\n}\n.add span[_v-7b527424] {\n  font-size: 3rem;\n  color: #fff;\n  line-height: 4rem;\n}\n.no_menu[_v-7b527424] {\n  opacity: .3;\n}\n.no_menu .card[_v-7b527424] {\n  background-color: rgba(61, 61, 62, 0.52);\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _assign = __webpack_require__(19);
	
	var _assign2 = _interopRequireDefault(_assign);
	
	var _data = __webpack_require__(10);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _popup = __webpack_require__(55);
	
	var _popup2 = _interopRequireDefault(_popup);
	
	var _util = __webpack_require__(60);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var datas = _data2.default.fetch(); // <script>
	
	
	exports.default = {
		data: function data() {
			return {
				img: datas.img,
	
				menus: datas.menu,
	
				popData: {
					show: '',
					title: '',
					input: false,
					del: false,
					cancel: false,
					done: false
				},
	
				index: ''
			};
		},
	
		computed: {
			bgColor: function bgColor() {
				return {
					opacity: '.3'
				};
			}
		},
	
		methods: {
			goBack: _util2.default.goBack,
			add: function add() {
				this.popData = (0, _assign2.default)(this.popData, {
					title: '添加',
					done: true,
					input: true,
					del: false,
					cancel: false
				});
	
				this.showPop();
			},
	
			del: function del(index) {
				this.popData = (0, _assign2.default)(this.popData, {
					title: '确定要删除?',
					del: true,
					cancel: true,
					input: false,
					done: false
				});
				this.showPop();
				this.index = index;
			},
	
			save: function save(menu) {
				this.menus.push({
					text: menu,
					img: this.img[this.getRandom()]
				});
			},
	
			delete: function _delete() {
				this.menus.splice(this.index, 1);
			},
	
			showPop: function showPop() {
				this.popData.show = true;
			},
	
			getRandom: function getRandom() {
				return _util2.default.getRandom(0, datas.img.length);
			}
		},
	
		components: { popup: _popup2.default },
	
		watch: {
			'menus': function menus() {
				_data2.default.save(this.menus);
			}
		}
	};
	
	// </script>
	//
	// <template>
	// 	<header>
	// 		<h1>
	// 			<span class="left" @click="goBack">后退</span>
	// 			去吃啥?{{title}}
	// 			<span class="right" v-link="{ path: '/show' }">选好了</span>
	// 		</h1>
	// 	</header>
	// 	<div class="main">
	// 		<ul>
	// 			<li :style="{backgroundImage:'url(./src/images/' + menu.img +')'}" v-for="menu in menus" @click="del($index)">
	// 				<div class="card">
	// 					<span>{{menu.text}}</span>
	// 				</div>
	// 			</li>
	// 			<li v-show="!menus.length"  :style="{backgroundImage:'url(./src/images/' + img[getRandom()] +')'}" class="no_menu" @click="add">
	// 				<div class="card">
	// 					<span>添加你的选择</span>
	// 				</div>
	// 			</li>
	// 		</ul>
	// 		<div class="add" @click="add">
	// 			<span>+</span>
	// 		</div>
	// 	</div>
	//
	//
	// 	<popup :datas.sync="popData" :index="index"
	// 			@done="save" @del="delete">
	// 	</popup>
	//
	// </template>
	//
	// <style lang="less" scoped>
	// 	ul {
	//
	// 	}
	// 	li {
	// 		width: 49%;
	// 		height: 26rem;
	// 		border-radius: 2px;
	// 		box-shadow: 1px 1px 10px rgba(0,0,0,0.49);
	// 		position: relative;
	// 		margin: .5%;
	// 		float: left;
	// 		background-position: center;
	// 		background-size: cover;
	// 	}
	//
	// 	.card {
	// 		background-color: rgba(173, 171, 163, 0.7);
	// 		position: absolute;
	// 		bottom: 0;
	// 		height: 5rem;
	// 		line-height: 5rem;
	// 		color: #fff;
	// 		width: 100%;
	// 		text-align: center;
	//
	// 		span {
	// 			font-size: 1.5rem
	// 		}
	// 	}
	//
	// 	.add {
	// 		background-color: #e91e63;
	// 		position: fixed;
	// 		bottom: 1rem;
	// 		right: 1rem;
	// 		width: 4rem;
	// 		border-radius: 100%;
	// 		text-align: center;
	// 		box-shadow: 1px 5px 8px rgba(0,0,0,.34);
	//
	// 		span {
	// 			font-size: 3rem;
	// 			color: #fff;
	// 			line-height: 4rem;
	// 		}
	// 	}
	//
	// 	.no_menu {
	// 		opacity: .3;
	//
	// 		.card {
	// 			background-color: rgba(61, 61, 62, 0.52);
	// 		}
	// 	}
	//
	//
	// </style>
	/* generated by vue-loader */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(20), __esModule: true };

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(21);
	module.exports = __webpack_require__(13).Object.assign;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(22);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(36)});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(23)
	  , core      = __webpack_require__(13)
	  , ctx       = __webpack_require__(24)
	  , hide      = __webpack_require__(26)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 23 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(25);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(27)
	  , createDesc = __webpack_require__(35);
	module.exports = __webpack_require__(31) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(28)
	  , IE8_DOM_DEFINE = __webpack_require__(30)
	  , toPrimitive    = __webpack_require__(34)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
	  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(32)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(29)
	  , document = __webpack_require__(23).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(29);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(37)
	  , gOPS     = __webpack_require__(52)
	  , pIE      = __webpack_require__(53)
	  , toObject = __webpack_require__(54)
	  , IObject  = __webpack_require__(41)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(32)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(38)
	  , enumBugKeys = __webpack_require__(51);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(39)
	  , toIObject    = __webpack_require__(40)
	  , arrayIndexOf = __webpack_require__(44)(false)
	  , IE_PROTO     = __webpack_require__(48)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(41)
	  , defined = __webpack_require__(43);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(42);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(40)
	  , toLength  = __webpack_require__(45)
	  , toIndex   = __webpack_require__(47);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(46)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(46)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(49)('keys')
	  , uid    = __webpack_require__(50);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(23)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 52 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 53 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(43);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(56)
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\popup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(59)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\vue-eat\\src\\components\\popup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./popup.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./popup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".pop_mask {\n  font-family: '\\5B8B\\4F53';\n  height: 100%;\n  width: 100%;\n  display: table;\n  z-index: 999;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.pop_wrap {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  vertical-align: middle;\n}\n.pop_container {\n  width: 80%;\n  margin: 0 auto;\n  background-color: #fff;\n  padding: 2rem 1rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  border-right: 2px;\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  position: relative;\n  padding: 2rem 2rem 1rem;\n}\n.pop_container .pop_header {\n  font-size: 1.5rem;\n}\n.pop_container .pop_footer {\n  margin: 3rem 0;\n  text-align: center;\n}\n.pop_container .pop_footer button {\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n  position: absolute;\n  bottom: .5rem;\n  outline: none;\n  padding: .6rem 1.2rem;\n  border-radius: 5px;\n}\n.pop_container .pop_footer button:active {\n  background-color: #929292;\n  color: #fff;\n}\n.pop_container .cancel_btn {\n  right: 5rem;\n  color: #666;\n}\n.pop_container .doned_btn {\n  right: 1rem;\n  color: #2095f2;\n}\n.pop_container input {\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #989898;\n  width: 100%;\n  margin-top: 2rem;\n}\n", ""]);
	
	// exports


/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		props: ['datas', 'index'],
	
		data: function data() {
			return {
				menu: ''
			};
		},
	
		methods: {
			del: function del() {
				this.hidePop();
				this.$dispatch('del');
			},
	
			done: function done() {
				this.hidePop();
				this.menu && this.$dispatch('done', this.menu);
				this.menu = '';
			},
	
			hidePop: function hidePop() {
				this.datas.show = false;
			}
		},
	
		computed: {},
	
		watch: {
			'datas.show': function datasShow() {
				if (!this.datas.input) return;
				document.querySelector('.pop_body').children[0].focus();
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div class="pop_mask" v-show="datas.show">
	// 		<div class="pop_wrap" @click.self="hidePop">
	// 			<div class="pop_container">
	// 				<div class="pop_header" v-show="datas.title">{{datas.title}}</div>
	// 				<div class="pop_body" >
	// 					<input v-show="datas.input" v-model="menu" @keyup.enter="done">
	// 				</div>
	// 				<div class="pop_footer">
	// 					<button class="cancel_btn" @click="hidePop" v-show="datas.cancel">Cancel</button>
	// 					<button class="doned_btn" @click="del" v-show="datas.del">Del</button>
	// 					<button class="doned_btn" @click="done" v-show="datas.done">Done</button>
	// 				</div>
	// 			</div>	
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang="less">
	// 	.pop_mask {
	// 		font-family: '宋体';
	// 		height: 100%;
	// 		width: 100%;
	// 		display: table;
	// 		z-index: 999;
	// 		position: fixed;
	// 		left: 0;
	// 		top: 0;
	// 		background-color: rgba(0, 0, 0, .5);
	// 		transition: opacity .3s ease;
	// 	}
	// 	.pop_wrap {
	// 		width: 100%;
	// 		height: 100%;
	// 		display: table-cell;
	// 		vertical-align: middle;
	// 	}
	// 	.pop_container {
	// 		width: 80%;
	// 		margin: 0 auto;
	// 		background-color: #fff;
	// 		padding: 2rem 1rem;
	// 		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	// 		border-right: 2px;
	// 		transition: all .3s ease;
	// 		position: relative;
	// 		padding: 2rem 2rem 1rem;
	//
	// 		.pop_header {
	// 			font-size: 1.5rem;
	// 		}
	//
	// 		.pop_footer {
	// 			margin: 3rem 0;
	// 			text-align: center;
	//
	// 			button {
	// 				background-color: rgba(0,0,0,0);
	// 				border: none;
	// 				position: absolute;
	// 				bottom: .5rem;
	// 				outline: none;
	// 				padding: .6rem 1.2rem;
	// 				border-radius: 5px;
	//
	// 				&:active {
	// 					background-color: #929292;
	// 					color: #fff;
	// 				}
	// 			}
	// 		}
	//
	// 		.cancel_btn {
	// 			right: 5rem;
	// 			color: #666;
	// 		}
	// 		.doned_btn {
	// 			right: 1rem;
	// 			color: #2095f2;
	// 		}
	//
	// 		input {
	// 			outline: none;
	// 			border: none;
	// 			border-bottom: 1px solid #989898;
	// 			width: 100%;
	// 			margin-top: 2rem;
	// 		}
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"pop_mask\" v-show=\"datas.show\">\n\t<div class=\"pop_wrap\" @click.self=\"hidePop\">\n\t\t<div class=\"pop_container\">\n\t\t\t<div class=\"pop_header\" v-show=\"datas.title\">{{datas.title}}</div>\n\t\t\t<div class=\"pop_body\" >\n\t\t\t\t<input v-show=\"datas.input\" v-model=\"menu\" @keyup.enter=\"done\">\n\t\t\t</div>\n\t\t\t<div class=\"pop_footer\">\n\t\t\t\t<button class=\"cancel_btn\" @click=\"hidePop\" v-show=\"datas.cancel\">Cancel</button>\n\t\t\t\t<button class=\"doned_btn\" @click=\"del\" v-show=\"datas.del\">Del</button>\n\t\t\t\t<button class=\"doned_btn\" @click=\"done\" v-show=\"datas.done\">Done</button>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n</div>\n";

/***/ },
/* 60 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		// 返回包含a 与 b 的随机整数
		getRandom: function getRandom(a, b) {
			return parseInt(Math.random() * (b - a) + a, 10);
		},
	
		goBack: function goBack() {
			history.go(-1);
		}
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n<header _v-7b527424=\"\">\n\t<h1 _v-7b527424=\"\">\n\t\t<span class=\"left\" @click=\"goBack\" _v-7b527424=\"\">后退</span>\n\t\t去吃啥?{{title}}\n\t\t<span class=\"right\" v-link=\"{ path: '/show' }\" _v-7b527424=\"\">选好了</span>\n\t</h1>\n</header>\n<div class=\"main\" _v-7b527424=\"\">\n\t<ul _v-7b527424=\"\">\n\t\t<li :style=\"{backgroundImage:'url(./src/images/' + menu.img +')'}\" v-for=\"menu in menus\" @click=\"del($index)\" _v-7b527424=\"\">\n\t\t\t<div class=\"card\" _v-7b527424=\"\">\n\t\t\t\t<span _v-7b527424=\"\">{{menu.text}}</span>\n\t\t\t</div>\n\t\t</li>\n\t\t<li v-show=\"!menus.length\" :style=\"{backgroundImage:'url(./src/images/' + img[getRandom()] +')'}\" class=\"no_menu\" @click=\"add\" _v-7b527424=\"\">\n\t\t\t<div class=\"card\" _v-7b527424=\"\">\n\t\t\t\t<span _v-7b527424=\"\">添加你的选择</span>\n\t\t\t</div>\n\t\t</li>\n\t</ul>\n\t<div class=\"add\" @click=\"add\" _v-7b527424=\"\">\n\t\t<span _v-7b527424=\"\">+</span>\n\t</div>\n</div>\n\n\n<popup :datas.sync=\"popData\" :index=\"index\" @done=\"save\" @del=\"delete\" _v-7b527424=\"\">\n</popup>\n\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(63)
	__vue_script__ = __webpack_require__(65)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\show.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\vue-eat\\src\\components\\show.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./show.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./show.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".asi-card {\n  background-size: cover;\n  background-position: center;\n  height: 26rem;\n  width: 99%;\n  border-right: 2px;\n  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.49);\n  position: relative;\n  margin: .5%;\n  float: left;\n}\n.asi-card-title {\n  background-color: rgba(173, 171, 163, 0.7);\n  color: #fff;\n  position: absolute;\n  bottom: 0px;\n  height: 6rem;\n  width: 100%;\n  padding: 20px 10px;\n}\n.re-asi-btn {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 15px;\n  background-color: #4AA6FF;\n  color: #fff;\n  text-align: center;\n  display: block;\n}\n", ""]);
	
	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _data2 = __webpack_require__(10);
	
	var _data3 = _interopRequireDefault(_data2);
	
	var _util = __webpack_require__(60);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <script>
	exports.default = {
	    props: [],
	
	    data: function data() {
	        return {
	            item: '',
	            menus: _data3.default.fetch().menu
	
	        };
	    },
	
	    asyncData: function asyncData(resolve, reject) {
	        var self = this;
	        setTimeout(function () {
	            resolve({
	                item: self.menus[self.getRandom()]
	            });
	        }, 1000);
	    },
	
	    computed: {
	        random: function random() {
	            return this.getRandom();
	        },
	        defaultImg: function defaultImg() {
	            return _data3.default.fetch().img[this.random];
	        }
	    },
	
	    methods: {
	        goBack: _util2.default.goBack,
	
	        getRandom: function getRandom() {
	            return _util2.default.getRandom(0, _data3.default.fetch().menu.length);
	        },
	
	        reChoose: function reChoose() {
	            this.item = this.menus[this.getRandom()];
	        }
	    }
	};
	
	// </script>
	//
	// <template>
	// 	<header>
	// 		<span class="left" @click="goBack">后退</span>
	// 		<h1>去吃啥?</h1>
	// 	</header>
	// 	<div class="main">
	//         <div v-if="item" class="asi-card" :style="{backgroundImage:'url(./src/images/' + item.img +')'}">
	// 			<div class="asi-card-title">
	// 				<span>{{item.text}}</span>
	// 			</div>
	// 		</div>
	// 		<div v-if="!item" class="asi-card" :style="{backgroundImage:'url(./src/images/' + defaultImg +')'}">
	// 			<div class="asi-card-title">
	// 				<span>请返回添加菜单</span>
	// 			</div>
	// 		</div>
	// 		<div class="re-asi-btn" @click="reChoose">
	// 			不对不对，在选一次!
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang="less">
	// 	.asi-card {
	// 		background-size : cover;
	// 		background-position: center;
	// 		height: 26rem;
	// 		width: 99%;
	// 		border-right: 2px;
	// 		box-shadow: 1px 1px 10px rgba(0, 0, 0, .49);
	// 		position: relative;
	// 		margin: .5%;
	// 		float: left;
	// 	}
	//
	// 	.asi-card-title {
	// 		background-color: rgba(173, 171, 163, 0.7);
	// 		color: #fff;
	// 		position: absolute;
	// 		bottom: 0px;
	// 		height: 6rem;
	// 		width: 100%;
	// 		padding: 20px 10px;
	// 	}
	//
	// 	.re-asi-btn {
	// 		position: fixed;
	// 		bottom: 0;
	// 		width: 100%;
	// 		padding: 15px;
	// 		background-color: #4AA6FF;
	// 		color: #fff;
	// 		text-align: center;
	// 		display: block;
	//
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n\t<header>\n\t\t<span class=\"left\" @click=\"goBack\">后退</span>\n\t\t<h1>去吃啥?</h1>\n\t</header>\n\t<div class=\"main\">\n        <div v-if=\"item\" class=\"asi-card\" :style=\"{backgroundImage:'url(./src/images/' + item.img +')'}\">\n\t\t\t<div class=\"asi-card-title\">\n\t\t\t\t<span>{{item.text}}</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div v-if=\"!item\" class=\"asi-card\" :style=\"{backgroundImage:'url(./src/images/' + defaultImg +')'}\">\n\t\t\t<div class=\"asi-card-title\">\n\t\t\t\t<span>请返回添加菜单</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"re-asi-btn\" @click=\"reChoose\">\n\t\t\t不对不对，在选一次!\n\t\t</div>\n\t</div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map