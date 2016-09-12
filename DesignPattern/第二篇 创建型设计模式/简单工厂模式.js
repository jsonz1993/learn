/**
 * Created by Administrator on 2016/9/12.
 */

/**
 * 警示框
 * 明显的问题就是类太过多，功能类似，全局变量过多
 * 第一种通过类实例化对象创建，第二种通过创建一个新对象然后包装增强其属性、功能和差异化实现。
 */
//
// 用户名不能多余16个字母或数字
var LoginAlert = function (text){
    this.content = text;
};
LoginAlert.prototype.show = function (){
    // 显示警示框
};
var userNameAlert = new LoginAlert('用户名不能多余16个字母或数字');
userNameAlert.show();
// 输入的密码不正确
var passwordAlert = new LoginAlert('输入的密码不正确');
passwordAlert.show();
// 用户名不存在，请重新输入 + 加多个注册按钮
var LoginConfirm = function(text) {
    this.content = text;
};
LoginConfirm.prototype.show = function(){
    // 显示确认框
};
var loginConfirm = new LoginConfirm('用户名不存在，请重新输入');
loginConfirm.show();
// 自定义提示框，有确定取消按钮，提示语'欢迎回来，请输入您的心情'
var LoginPrompt = function(text) {
    this.content = text;
};
LoginPrompt.prototype.show = function(){
    // 显示提示框
};

// 简单工厂 一个类代替多个类
var PopFactory = function(name) {
    switch(name) {
        case 'alert':
            return new LoginAlert();
        case 'confirm':
            return new LoginConfirm();
        case 'prompt':
            return new LoginPrompt();
    }
};

// 一个对象代替多个类
// 工厂模式
function createBook(name, time, type) {
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function(){
        console.log(this.name);
    };
    return o;
}
var book1 = createBook('js book', 2014, 'js'),
    book2 = createBook('css book', 2013, 'css');

book1.getName();
book2.getName();

// 抽出公共部分
function createPop(type, text) {
    var o = {};
    o.content = text;
    o.show = function(){

    };
    if (type == 'alert') {
        // 警示框差异部分
    }
    if (type == 'prompt') {
        // 提示框差异部分
    }
    if (type == 'confirm') {
        // 确认框差异部分
    }
    return o;
}
var userNameAlertCreate = createPop('alert', '用户名只能是26个字母');
userNameAlertCreate.show();