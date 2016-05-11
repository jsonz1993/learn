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
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.config.debug = true;
	
	new Vue(_app2.default);

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
	__vue_template__ = __webpack_require__(37)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\web-chat\\src\\components\\app.vue"
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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./app.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./app.vue");
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
	exports.push([module.id, "#chat {\n  overflow: hidden;\n  border-radius: 3px;\n}\n#chat .sidebar,\n#chat .main {\n  height: 100%;\n}\n#chat .sidebar {\n  float: left;\n  width: 200px;\n  color: #f4f4f4;\n  background-color: #2e3238;\n}\n#chat .main {\n  position: relative;\n  overflow: hidden;\n  background-color: #eee;\n}\n#chat .m-text {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n#chat .m-message {\n  height: calc(100% - 160px);\n}\n", "", {"version":3,"sources":["/./src/components/app.vue"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,QAAQ;CACT;AACD;EACE,2BAA2B;CAC5B","file":"app.vue","sourcesContent":["#chat {\n  overflow: hidden;\n  border-radius: 3px;\n}\n#chat .sidebar,\n#chat .main {\n  height: 100%;\n}\n#chat .sidebar {\n  float: left;\n  width: 200px;\n  color: #f4f4f4;\n  background-color: #2e3238;\n}\n#chat .main {\n  position: relative;\n  overflow: hidden;\n  background-color: #eee;\n}\n#chat .m-text {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n}\n#chat .m-message {\n  height: calc(100% - 160px);\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
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
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _storage = __webpack_require__(7);
	
	var _storage2 = _interopRequireDefault(_storage);
	
	var _card = __webpack_require__(11);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _list = __webpack_require__(17);
	
	var _list2 = _interopRequireDefault(_list);
	
	var _message = __webpack_require__(22);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _text = __webpack_require__(32);
	
	var _text2 = _interopRequireDefault(_text);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		el: '#chat',
	
		// 数据
		data: function data() {
			var _data = _storage2.default.fetch();
			return {
				_data: _data, // storage 数据
	
				user: _data.user, // 当前用户
	
				search: '', // 搜索字段
	
				userIndex: _data.userIndex || 0, // 当前会话
	
				userList: _data.userList, // 好友列表
	
				messageList: _data.sessionList, // 会话列表
	
				text: '', // 发送的信息
	
				showContextMenu: false // 右键
			};
		},
	
		// 组件
		components: {
			card: _card2.default,
			userList: _list2.default,
			message: _message2.default,
			text: _text2.default
		},
	
		//getting setting
		computed: {
			messages: function messages() {
				return this.messageList[this.userIndex];
			}
		},
	
		watch: {
			'[messageList,userIndex]': {
				deep: true,
				handler: function handler() {
					_storage2.default.save({
						userIndex: this.userIndex,
						user: this.user,
						userList: this.userList,
						sessionList: this.messageList
					});
				}
			}
		},
	
		filters: {},
	
		methods: {
			APPCLICK: function APPCLICK() {
				this.showContextMenu = false;
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div @click="APPCLICK()">
	//         <div class="sidebar">
	// 			<card :user="user" :search.sync="search"></card>
	// 			<user-list :user-list="userList" :search="search" :user-index.sync="userIndex"></user-list>
	//         </div>
	//         <div class="main">
	//             <message :message-list="messages" :user-list="userList" :user="user" :show-context.sync="showContextMenu"></message>
	//             <text  :text="text" :messages.sync="messages"></text>
	//         </div>
	//     </div>
	// </template>
	//
	// <style lang="less">
	// 	#chat {
	// 		overflow: hidden;
	//         border-radius: 3px;
	//
	//         .sidebar, .main {
	//             height: 100%;  
	//         }
	//         .sidebar {
	//             float: left;
	//             width: 200px;
	//             color: #f4f4f4;
	//             background-color: #2e3238;
	//         }
	//         .main {
	//             position: relative;
	//             overflow: hidden;  
	//             background-color: #eee;
	//         }
	//         .m-text {
	//             position: absolute;
	//             width: 100%;
	//             bottom: 0;
	//             left: 0;
	//         }
	//         .m-message {
	//             height: ~'calc(100% - 160px)';
	//         }
	// 	}
	// </style>
	/* generated by vue-loader */
	// <script>

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _stringify = __webpack_require__(8);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var key = 'vue-chat';
	
	if (!window.localStorage.getItem(key)) {
	    var time = new Date().getTime(),
	        data = {
	        userIndex: 0,
	
	        user: {
	            id: 1,
	            name: '张欣欣',
	            img: 'build/images/1.jpg'
	        },
	
	        userList: [{
	            id: 2,
	            name: '大蟹',
	            img: 'build/images/2.png'
	        }, {
	            id: 3,
	            name: 'Jsonz',
	            img: 'build/images/3.jpg'
	        }, {
	            id: 4,
	            name: '肥灿--安卓大神',
	            img: 'build/images/dashen.jpg'
	        }],
	
	        sessionList: [{
	            userId: 2,
	            data: [{
	                text: '这是第一条信息',
	                time: time
	            }, {
	                text: '要搬家了,长寿路那边',
	                time: time
	            }]
	        }, {
	            userId: 3,
	            data: []
	        }, {
	            userId: 4,
	            data: [{
	                text: 'hey 我是肥灿，分分钟给你做个安卓APP<br/>不要就别比比，我要看夹娃视频',
	                time: time
	            }]
	        }]
	    };
	    window.localStorage.setItem(key, (0, _stringify2.default)(data));
	}
	
	exports.default = {
	    fetch: function fetch() {
	        return JSON.parse(window.localStorage.getItem(key));
	    },
	
	    save: function save(data) {
	        window.localStorage.setItem(key, (0, _stringify2.default)(data));
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(10)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.3.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(12)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\web-chat\\src\\components\\card.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./card.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./card.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-card {\n  padding: 12px;\n  border-bottom: solid 1px #24272C;\n}\n.m-card footer {\n  margin-top: 10px;\n}\n.m-card .avatar,\n.m-card .name {\n  vertical-align: middle;\n}\n.m-card .avatar {\n  border-radius: 2px;\n}\n.m-card .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n  font-size: 16px;\n}\n.m-card .search {\n  padding: 0 10px;\n  width: 100%;\n  font-size: 12px;\n  color: #fff;\n  height: 30px;\n  line-height: 30px;\n  border: solid 1px #3a3a3a;\n  border-radius: 4px;\n  outline: none;\n  background-color: #26292E;\n}\n", ""]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['user', 'search']
	};
	// </script>
	//
	// <template>
	// 	<div class="m-card">
	// 		<header>
	// 			<img class="avatar" width="40" :src="user.img" :alt="user.name" :title="user.user">
	// 			<p class="name">{{user.name}}</p>
	// 		</header>
	// 		<footer>
	// 			<input type="text" class="search" placeholder="search user..." v-model="search">
	// 		</footer>
	// 	</div>
	// </template>
	//
	// <style style="less">
	// 	.m-card {
	//         padding: 12px;
	//         border-bottom: solid 1px #24272C;
	//
	//         footer {
	//             margin-top: 10px;
	//         }
	//
	//         .avatar, .name {
	//             vertical-align: middle;
	//         }
	//         .avatar {
	//             border-radius: 2px;
	//         }
	//         .name {
	//             display: inline-block;
	//             margin: 0 0 0 15px;
	//             font-size: 16px;
	//         }
	//         .search {
	//             padding: 0 10px;
	//             width: 100%;
	//             font-size: 12px;
	//             color: #fff;
	//             height: 30px;
	//             line-height: 30px;
	//             border: solid 1px #3a3a3a;
	//             border-radius: 4px;
	//             outline: none;
	//             background-color: #26292E;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-card\">\n\t<header>\n\t\t<img class=\"avatar\" width=\"40\" :src=\"user.img\" :alt=\"user.name\" :title=\"user.user\">\n\t\t<p class=\"name\">{{user.name}}</p>\n\t</header>\n\t<footer>\n\t\t<input type=\"text\" class=\"search\" placeholder=\"search user...\" v-model=\"search\">\n\t</footer>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\web-chat\\src\\components\\list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./list.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-list li {\n  padding: 12px 15px;\n  border-bottom: 1px solid #292C33;\n  cursor: pointer;\n  -webkit-transition: background-color 0.1s;\n  transition: background-color 0.1s;\n}\n.m-list li:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.m-list li.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.m-list .avatar,\n.m-list .name {\n  vertical-align: middle;\n}\n.m-list .avatar {\n  border-radius: 2px;\n}\n.m-list .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n}\n", "", {"version":3,"sources":["/./src/components/list.vue"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,iCAAiC;EACjC,gBAAgB;EAChB,0CAAkC;EAAlC,kCAAkC;CACnC;AACD;EACE,4CAA4C;CAC7C;AACD;EACE,2CAA2C;CAC5C;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,mBAAmB;CACpB","file":"list.vue","sourcesContent":[".m-list li {\n  padding: 12px 15px;\n  border-bottom: 1px solid #292C33;\n  cursor: pointer;\n  transition: background-color 0.1s;\n}\n.m-list li:hover {\n  background-color: rgba(255, 255, 255, 0.03);\n}\n.m-list li.active {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.m-list .avatar,\n.m-list .name {\n  vertical-align: middle;\n}\n.m-list .avatar {\n  border-radius: 2px;\n}\n.m-list .name {\n  display: inline-block;\n  margin: 0 0 0 15px;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['userList', 'search', 'userIndex'],
	
	    data: function data() {
	        return {
	            isTrue: true
	        };
	    },
	
	    methods: {
	        chooseThis: function chooseThis(index) {
	            this.userIndex = index;
	        }
	    }
	};
	// </script>
	//
	// <template>
	// 	<div class="m-list">
	// 		<ul>
	// 			<li v-for="user in userList | filterBy search in 'name' " :class="{active : $index === userIndex}" @click="chooseThis($index)">
	// 				<img class="avatar" width="30" height="30" :src="user.img" :alt="user.name" :title="user.name">
	// 				<p class="name">{{user.name}}</p>
	// 			</li>
	// 		</ul>
	// 	</div>
	// </template>
	//
	//
	// <style lang="less">
	//     .m-list {
	//         li {
	//             padding: 12px 15px;
	//             border-bottom: 1px solid #292C33;
	//             cursor: pointer;
	//             transition: background-color .1s;
	//
	//             &:hover {
	//                 background-color: rgba(255, 255, 255, 0.03);
	//             }
	//             &.active {
	//                 background-color: rgba(255, 255, 255, 0.1);
	//             }
	//         }
	//         .avatar, .name {
	//             vertical-align: middle;
	//         }
	//         .avatar {
	//             border-radius: 2px;
	//         }
	//         .name {
	//             display: inline-block;
	//             margin: 0 0 0 15px;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-list\">\n\t<ul>\n\t\t<li v-for=\"user in userList | filterBy search in 'name' \" :class=\"{active : $index === userIndex}\" @click=\"chooseThis($index)\">\n\t\t\t<img class=\"avatar\" width=\"30\" height=\"30\" :src=\"user.img\" :alt=\"user.name\" :title=\"user.name\">\n\t\t\t<p class=\"name\">{{user.name}}</p>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\web-chat\\src\\components\\message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js?id=_v-59d8700e&scoped=true!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./message.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js?id=_v-59d8700e&scoped=true!./../../node_modules/.npminstall/postcss-loader/0.8.2/postcss-loader/index.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./message.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-message[_v-59d8700e] {\n  padding: 10px 15px;\n  overflow-y: scroll;\n  position: relative;\n}\n.m-message li[_v-59d8700e] {\n  margin-bottom: 15px;\n}\n.m-message .time[_v-59d8700e] {\n  margin: 7px 0;\n  text-align: center;\n}\n.m-message .time > span[_v-59d8700e] {\n  display: inline-block;\n  padding: 0 18px;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 2px;\n  background-color: #dcdcdc;\n}\n.m-message .avatar[_v-59d8700e] {\n  float: left;\n  margin: 0 10px 0 0;\n  border-radius: 3px;\n}\n.m-message .text[_v-59d8700e] {\n  display: inline-block;\n  position: relative;\n  padding: 0 10px;\n  max-width: calc(100% - 40px);\n  min-height: 30px;\n  line-height: 2.5;\n  font-size: 12px;\n  text-align: left;\n  word-break: break-all;\n  background-color: #fafafa;\n  border-radius: 4px;\n}\n.m-message .text[_v-59d8700e]:before {\n  content: \" \";\n  position: absolute;\n  top: 9px;\n  right: 100%;\n  border: 6px solid transparent;\n  border-right-color: #fafafa;\n}\n.m-message .self[_v-59d8700e] {\n  text-align: right;\n}\n.m-message .self .avatar[_v-59d8700e] {\n  float: right;\n  margin: 0 0 0 10px;\n}\n.m-message .self .text[_v-59d8700e] {\n  background-color: #b2e281;\n}\n.m-message .self .text[_v-59d8700e]:before {\n  right: inherit;\n  left: 100%;\n  border-right-color: transparent;\n  border-left-color: #b2e281;\n}\n", ""]);
	
	// exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _contextmenu = __webpack_require__(26);
	
	var _contextmenu2 = _interopRequireDefault(_contextmenu);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <script>
	var date = new Date().getDate();
	exports.default = {
	    props: ['messageList', 'userList', 'user', 'showContext'],
	
	    data: function data() {
	
	        return {
	            site: {
	                x: 0,
	                y: 0
	            }
	        };
	    },
	
	    computed: {
	        sessionUser: function sessionUser() {
	            var _this = this;
	            var users = this.userList.filter(function (item) {
	                return item.id === _this.messageList.userId;
	            });
	            return users[0];
	        }
	    },
	
	    filters: {
	        time: function time(val) {
	            var _time = new Date(val),
	                hours = _time.getHours() + ':' + (_time.getMinutes() < 10 ? '0' + _time.getMinutes() : _time.getMinutes()),
	                year = _time.getMonth() + 1 + '月' + _time.getDate() + '日 ',
	                msg = '';
	
	            if (_time.getDate() < date) {
	                msg += year;
	            }
	
	            return _time.getDate() < date ? year + hours : hours;
	        },
	
	        img: function img(val) {
	            var sender = typeof val.self === 'undefined' ? this.sessionUser : this.user;
	            return sender && sender.img;
	        }
	    },
	
	    methods: {
	        showContextMenuFn: function showContextMenuFn(e) {
	            this.site.x = e.offsetX + 20;
	            this.site.y = e.pageY - 50;
	            this.showContext = true;
	        }
	    },
	
	    components: {
	        contextMenu: _contextmenu2.default
	    }
	};
	
	// </script>
	//
	//
	// <template>
	// 	<div class="m-message" @contextmenu.prevent="showContextMenuFn">
	// 		<ul >
	// 			<li v-for="message in messageList.data">
	// 				<p class="time"><span>{{message.time | time}}</span></p>
	// 				<div class="main" :class="{self : message.self}">
	// 					<img class="avatar" width="30" height="30" :src="message | img">
	// 					<div class="text" v-html="message.text"></div>
	// 				</div>
	// 			</li>
	// 		</ul>
	//         <context-menu v-show="showContext" :site="site" :message.sync="messageList" :show-menu.sync="showContext"></context-menu>
	// 	</div>
	// </template>
	//
	//
	// <style scoped>
	//     .m-message {
	//         padding: 10px 15px;
	//         overflow-y: scroll;
	//         position: relative;
	//
	//         li {
	//             margin-bottom: 15px;
	//         }
	//         .time {
	//             margin: 7px 0;
	//             text-align: center;
	//
	//             > span {
	//                 display: inline-block;
	//                 padding: 0 18px;
	//                 font-size: 12px;
	//                 color: #fff;
	//                 border-radius: 2px;
	//                 background-color: #dcdcdc;
	//             }
	//         }
	//         .avatar {
	//             float: left;
	//             margin: 0 10px 0 0;
	//             border-radius: 3px;
	//         }
	//         .text {
	//             display: inline-block;
	//             position: relative;
	//             padding: 0 10px;
	//             max-width: ~'calc(100% - 40px)';
	//             min-height: 30px;
	//             line-height: 2.5;
	//             font-size: 12px;
	//             text-align: left;
	//             word-break: break-all;
	//             background-color: #fafafa;
	//             border-radius: 4px;
	//
	//             &:before {
	//                 content: " ";
	//                 position: absolute;
	//                 top: 9px;
	//                 right: 100%;
	//                 border: 6px solid transparent;
	//                 border-right-color: #fafafa;
	//             }
	//         }
	//
	//         .self {
	//             text-align: right;
	//
	//             .avatar {
	//                 float: right;
	//                 margin: 0 0 0 10px;
	//             }
	//             .text {
	//                 background-color: #b2e281;
	//
	//                 &:before {
	//                     right: inherit;
	//                     left: 100%;
	//                     border-right-color: transparent;
	//                     border-left-color: #b2e281;
	//                 }
	//             }
	//         }
	//     }
	// </style>
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	/* generated by vue-loader */

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(27)
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\contextmenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\web-chat\\src\\components\\contextmenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./contextmenu.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./contextmenu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "#contextMenu {\n  z-index: 1000;\n  position: absolute;\n}\n.dropdown_menu {\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  border: 1px solid #d6d6d6;\n  box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 10px;\n  min-width: 125px;\n}\n.dropdown_menu li:hover {\n  background: #f1f1f1;\n}\n.dropdown_menu a {\n  display: block;\n  text-decoration: none;\n  color: #000;\n  font-size: 14px;\n  padding: 8px;\n  border-bottom: 1px solid #f1f1f1;\n  text-align: left;\n}\n", "", {"version":3,"sources":["/./src/components/contextmenu.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,4CAA4C;EAC5C,iBAAiB;CAClB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,iCAAiC;EACjC,iBAAiB;CAClB","file":"contextmenu.vue","sourcesContent":["#contextMenu {\n  z-index: 1000;\n  position: absolute;\n}\n.dropdown_menu {\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  border: 1px solid #d6d6d6;\n  box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 10px;\n  min-width: 125px;\n}\n.dropdown_menu li:hover {\n  background: #f1f1f1;\n}\n.dropdown_menu a {\n  display: block;\n  text-decoration: none;\n  color: #000;\n  font-size: 14px;\n  padding: 8px;\n  border-bottom: 1px solid #f1f1f1;\n  text-align: left;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		props: ['site', 'showMenu', 'message'],
	
		methods: {
			clearMessage: function clearMessage() {
				this.showMenu = false;
				this.message.data = [];
			}
		}
	};
	// </script>
	//
	// <template>
	// 	<div id="contextMenu" :style="{left:site.x + 'px', top:site.y + 'px'}">
	// 		<ul class="dropdown_menu">
	// 			<li @click="clearMessage">
	// 				<a href="javascript:;">清屏</a>
	// 			</li>
	// 		</ul>
	// 	</div>	
	// </template>
	//
	// <style lang="less">
	// 	#contextMenu {
	// 		z-index: 1000;
	// 		position: absolute;
	// 	}
	// 	.dropdown_menu {
	// 		background-color: #fff;
	// 		border-radius : 4px;
	// 		overflow : hidden;
	// 		border: 1px solid #d6d6d6;
	// 		box-shadow : rgba(0,0,0,.1) 2px 3px 10px;
	// 		min-width : 125px;
	//
	// 		li {
	// 			&:hover {
	// 				background : #f1f1f1;
	// 			}
	// 		}
	//
	// 		a {
	// 			display: block;
	// 			text-decoration: none;
	// 			color: #000;
	// 			font-size: 14px;
	// 			padding: 8px;
	// 			border-bottom: 1px solid #f1f1f1;
	// 			text-align: left;
	// 		}
	// 	}
	// </style>
	/* generated by vue-loader */

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"contextMenu\" :style=\"{left:site.x + 'px', top:site.y + 'px'}\">\n\t<ul class=\"dropdown_menu\">\n\t\t<li @click=\"clearMessage\">\n\t\t\t<a href=\"javascript:;\">清屏</a>\n\t\t</li>\n\t</ul>\n</div>\t\n";

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"m-message\" @contextmenu.prevent=\"showContextMenuFn\" _v-59d8700e=\"\">\n\t\t<ul _v-59d8700e=\"\">\n\t\t\t<li v-for=\"message in messageList.data\" _v-59d8700e=\"\">\n\t\t\t\t<p class=\"time\" _v-59d8700e=\"\"><span _v-59d8700e=\"\">{{message.time | time}}</span></p>\n\t\t\t\t<div class=\"main\" :class=\"{self : message.self}\" _v-59d8700e=\"\">\n\t\t\t\t\t<img class=\"avatar\" width=\"30\" height=\"30\" :src=\"message | img\" _v-59d8700e=\"\">\n\t\t\t\t\t<div class=\"text\" v-html=\"message.text\" _v-59d8700e=\"\"></div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n        <context-menu v-show=\"showContext\" :site=\"site\" :message.sync=\"messageList\" :show-menu.sync=\"showContext\" _v-59d8700e=\"\"></context-menu>\n\t</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\text.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\web\\vue\\web-chat\\src\\components\\text.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./text.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.23.1/css-loader/index.js?sourceMap!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.2.3/vue-loader/lib/selector.js?type=style&index=0!./text.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n", "", {"version":3,"sources":["/./src/components/text.vue"],"names":[],"mappings":"AAAA;EACE,cAAc;EACd,2BAA2B;CAC5B;AACD;EACE,cAAc;EACd,aAAa;EACb,YAAY;EACZ,aAAa;EACb,cAAc;EACd,+BAA+B;EAC/B,aAAa;CACd","file":"text.vue","sourcesContent":[".m-text {\n  height: 160px;\n  border-top: solid 1px #ddd;\n}\n.m-text textarea {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-family: \"Micrsofot Yahei\";\n  resize: none;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <script>
	exports.default = {
	    props: ['text', 'messages'],
	
	    methods: {
	        sendData: function sendData(e) {
	            if (e.keyCode === 13 && e.ctrlKey && this.text.length) {
	                this.messages.data.push({
	                    text: this.text,
	                    time: new Date().getTime(),
	                    self: true
	                });
	
	                this.text = '';
	            }
	        }
	    }
	};
	// </script>
	//
	// <template>
	// 	<div class="m-text">
	// 		<textarea placeholder="按 ctrl + enter 发送" v-model="text" @keyup="sendData"></textarea>
	// 	</div>
	// </template>
	//
	// <style lang='less'>
	// 	 .m-text {
	//         height: 160px;
	//         border-top: solid 1px #ddd;
	//
	//         textarea {
	//             padding: 10px;
	//             height: 100%;
	//             width: 100%;
	//             border: none;
	//             outline: none;
	//             font-family: "Micrsofot Yahei";
	//             resize: none;
	//         }
	//     }
	// </style>
	/* generated by vue-loader */

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-text\">\n\t<textarea placeholder=\"按 ctrl + enter 发送\" v-model=\"text\" @keyup=\"sendData\"></textarea>\n</div>\n";

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n\t<div @click=\"APPCLICK()\">\n        <div class=\"sidebar\">\n\t\t\t<card :user=\"user\" :search.sync=\"search\"></card>\n\t\t\t<user-list :user-list=\"userList\" :search=\"search\" :user-index.sync=\"userIndex\"></user-list>\n        </div>\n        <div class=\"main\">\n            <message :message-list=\"messages\" :user-list=\"userList\" :user=\"user\" :show-context.sync=\"showContextMenu\"></message>\n            <text  :text=\"text\" :messages.sync=\"messages\"></text>\n        </div>\n    </div>\n";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map