/**
 * 汤姆大叔的博客地址 http://www.cnblogs.com/TomXu/archive/2011/12/29/2290308.html
 * 很多没有真正的理解
 */



//跨浏览器

// 1) 独立作用域包含声明

var addEvent = (function(){
    var docEl = document.documentElement;

    // 2) 声明要引用的函数的变量
    var fn;

    if (docEl.addEventListener) {

        // 3) 有意给函数一个描述性的标识符
        fn = function addEvent(element, eventName, callback) {
            element.addEventListener(eventName, callback, false);
        }

    } else if (docEl.attachEvent) {
        fn = function addEvent(element, eventName, callback) {
            element.attachEvent('on' + eventName, callback);
        }
    } else {
        fn = function addEvent(element, eventName, callback) {
            element['on' +eventName] = callback;
        }
    }

    // 4) 清除由jScript 创建的addEvent 函数。 清除的时候一定要加上 var 关键字
    var addEvent = null;

    // 5) 最后返回由fn引用的函数
    return fn;

})();

//var addEvent = (function(){
//    var docEl = document.documentElement;
//
//    function addEventLitener() {
//
//    }
//
//    function attachEvent() {
//
//    }
//
//    function addEventAsProperty() {
//
//    }
//
//    if (typeof docEl.addEventListener != 'undefined') {
//        return addEventListener;
//    } else if (typeof docEl.attachEvent != 'undefined') {
//        return attachEvent;
//    }
//
//    return addEventAsProperty;
//
//})();


// ECMAScript 5引入的严格模式 strict mode 会禁止 arguments.callee
// 此前，你可能会使用arguments.callee
(function(x) {
    // 以前可以这样用
    if (x <= 1) return 1;
    return x * arguments.callee(x - 1);
})(10);

// 但在严格模式下，有可能就要使用命名函数表达式
(function factorial(x) {
    // 现在只能这样
    if (x <= 1) return 1;
    return x * factorial(x - 1);
})(10);

// 要么就退一步，使用没有那么灵活的函数声明
function factorial(x) {
    // 或者这样
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}
factorial(10);

















































