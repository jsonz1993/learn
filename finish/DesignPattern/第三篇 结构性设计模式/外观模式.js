/**
 * Created by Administrator on 2016/9/18.
 */
/**
 * 外观模式
 * 为一组复杂的子系统接口提供一个更高级的统一接口，通过这个接口使得对子系统接口的访问更容易。
 * 在Javascript中有时也会用于对底层结构兼容性做统一封装来简化用户使用。
 * 常见的有 touch && click封装， addEventListener && attachEvent 封装
 */

// 事件对象
function addEvent(dom, type, fn) {
    if (dom.addEventListener) dom.addEventListener(type, fn, false);
    else if (dom.attachEvent) dom.attachEvent('on' + type, fn);
    else dom['on' + type] = fn;
}

// 获取事件对象
var getEvent = function(event) {
    return event || window.event;
};

// 获取元素
var getTarget = function(event) {
    event = getEvent(event);
    return event.target || event.srcElement;
};

// 组织默认行为
var preventDefault = function(event) {
    if (event.preventDefault) event.preventDefault();
    else event.retureValue = false;
};

