/**
 * Created by Administrator on 2016/9/19.
 */

/**
 * 在不改变原对象的基础上，通过对齐惊醒包装扩展（添加属性或方法），使原有对象可以满足用户更复杂需求
 * 比如点击功能，可以将原来的dom0级方法缓存起来，后面再添加
 * 如window.onload 方法的添加
 */

// 为输入框的新需求，点击输入框显示限制文案。新增需求：此时隐藏输入提示文案
// 旧代码
var telInput = document.getElementById('tel_input'),
    telWarnText = document.getElementById('tel_warn_text');
telInput.onclick = function(){
    telWarnText.style.display = 'inline-block';
};

// 新添加的代码
var telDemoText = document.getElementById('tel_demo_text');
telInput.onclick = function(){
    telWarnText.style.display = 'inline-block';
    telDemoText.style.display = 'none';
};
// 后面有姓名，地址等等，不可能一个一个去改


//装饰已有的功能对象
var decorator = function(input, fn) {
    // 获取事件源
    var input = document.getElementById(input);
    // 如果已经绑定事件，缓存起来，并添加新回调，否则直接添加
    if (typeof input.onclick == 'function') {
        var oldClickFn = input.onclick;
        input.onclick = function(){
            oldClickFn();
            fn();
        }
    } else {
        input.onclick = fn;
    }
    // do some thing
};