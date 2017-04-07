(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("AnimateText", [], factory);
	else if(typeof exports === 'object')
		exports["AnimateText"] = factory();
	else
		root["AnimateText"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var checkNode = function checkNode(el) {
  if (!el) return errorList(el);
  var dom = null;
  if (typeof el === 'string') {
    dom = document.querySelector(el);
    if (!dom) return errorList(el);
  } else if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object') {
    if (!el.nodeName) return errorList(el);
  }
  return dom || el;
};

var errorList = function errorList(el) {
  return console.error('找不到当前节点', el);
};

exports.checkNode = checkNode;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _check = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AnimateText = function () {
  function AnimateText(el, options) {
    _classCallCheck(this, AnimateText);

    this.init(el, options);
  }

  // 初始化 包括检查el， 数据初始化，动画运行等


  _createClass(AnimateText, [{
    key: 'init',
    value: function init(el, options) {
      return this.initData(el, options) ? this.isNumber ? this.numberAnimation(this.time) : this.textAnimateion(this.time) : '';
    }

    // 初始化数据

  }, {
    key: 'initData',
    value: function initData(el, options) {
      this.el = (0, _check.checkNode)(el);
      if (!this.el) return;
      this.options = this.formatOptions(options);
      this.options.isNumber ? this.numberInit() : this.textInit();
      this.isNumber = this.options.isNumber;
      this.time = this.options.time;
      this.el.innerText = '';
      this.onAnimated = this.options.onAnimated;
      return true;
    }

    // 格式化参数

  }, {
    key: 'formatOptions',
    value: function formatOptions(options) {
      if (typeof options === 'number') options = { time: options };
      return Object.assign({
        time: 500,
        isNumber: false,
        startNumber: 0,
        changeCount: 32,
        onAnimated: function onAnimated() {}
      }, options || {});
    }

    // 数字类型的初始化数据

  }, {
    key: 'numberInit',
    value: function numberInit() {
      this.number = Number(this.el.innerText);
      if (!this.number && this.number !== 0) {
        this.options.isNumber = false;
        return this.initData(el, this.options);
      }
      this.startNumber = this.options.startNumber - 0 || 0;
      this.changeCount = this.options.changeCount - 0 || 24;
    }

    // 文字类型处理

  }, {
    key: 'textInit',
    value: function textInit() {
      this.text = this.el.innerText;
      this.textArr = this.text.split('');
    }

    //  

  }, {
    key: 'numberAnimation',
    value: function numberAnimation() {
      var _this = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.time;

      if (this.number === 0) return;
      var targetNum = this.number,
          targetNumberDecimalLen = this.getDecimaLen(targetNum),
          startDecimalLen = this.getDecimaLen(this.startNumber),
          decimalLength = Math.max(targetNumberDecimalLen, startDecimalLen),
          d = this.number - this.startNumber,
          everyD = (d / this.changeCount).toFixed(decimalLength) - 0,
          curNumber = this.startNumber;
      if (everyD <= 0) {
        console.warn('差值过小');
        return this.el.innerText = targetNum;
      }

      this.tid = setInterval(function () {
        curNumber = (curNumber + everyD).toFixed(decimalLength) - 0;
        if (Math.abs(curNumber - targetNum) < Math.abs(everyD)) {
          _this.el.innerText = targetNum;
          _this.onEnd();
        }
        _this.el.innerText = curNumber;
      }, time / this.changeCount);
    }

    // 文本动画

  }, {
    key: 'textAnimateion',
    value: function textAnimateion() {
      var _this2 = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.time;

      var textArr = [].concat(this.textArr),
          curTextArr = [];
      this.tid = setInterval(function () {
        var word = textArr.shift();
        if (!word) {
          _this2.onEnd();
        }
        curTextArr.push(word);
        _this2.el.innerText = curTextArr.join('');
      }, time / this.textArr.length);
    }

    // 结束函数

  }, {
    key: 'onEnd',
    value: function onEnd() {
      var _this3 = this;

      clearInterval(this.tid);
      if (typeof this.onAnimated !== 'function') return;
      setTimeout(function () {
        _this3.onAnimated();
      }, 0);
    }

    // 返回小数点长度

  }, {
    key: 'getDecimaLen',
    value: function getDecimaLen() {
      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';

      var numberStr = number + '';
      return numberStr.split('.')[1] && numberStr.split('.')[1].length || 0;
    }
  }, {
    key: 'play',
    value: function play() {
      clearInterval(this.tid);
      this.isNumber ? this.numberAnimation(this.time) : this.textAnimateion(this.time);
    }
  }]);

  return AnimateText;
}();

module.exports = AnimateText;

/***/ })
/******/ ]);
});