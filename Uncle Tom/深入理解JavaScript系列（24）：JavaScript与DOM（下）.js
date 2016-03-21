/**
 * Created by Jsonz on 2016/3/21.
 */

// 操作元素

var idStyle = document.getElementById('id').style;
idStyle.color = '#FFFFFF';
idStyle.padding = '2px 3px 0 3px';

// 封装
function changeStyle(elem, property, val) {
    elem.style[property] = val;
}

//TODO Event事件
function addEvent(elem, type, fn) {
    if (elem.attachEvent) {
        elem.attachEvent('on' + type, fn);
    } else if (elem.addEventListener){
        elem.addEventListener(type, fn, false);
    } else {
        elem['on' + type] = fn;
    }
}

//Event 对象
function myEventHandler(e) {
    // 兼容window
    e = e || window.event;

    // 防止默认行为
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    // 停止向上冒泡
    if (e.stopPropagation) {
        // W3C实现
        e.stopPropagation();
    } else {
        // IE实现
        e.cancelBubble = true;
    }

    // targetNode 兼容IE
    var targetNode = e.target || e.srcElement;

    // 测试如果点击的是TR就触发
    if (targetNode.nodeName.toLowerCase() === 'tr') {
        alert('You clicked a table row!');
    }


}















