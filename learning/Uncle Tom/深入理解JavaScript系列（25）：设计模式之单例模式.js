/**
 * Created by Jsonz on 2016/3/21.
 */

// 最简单的单例
var mySingleton = {
    property1 : 'something',
    property2 : 'something else',
    method1 : function(){
        console.log('hello World');
    }
};

// 闭包单例
var mySingleton2 = (function() {
    // 私有变量方法
    var privateVariable = 'something private';
    function showPrivate() {
        console.log(privateVariable);
    }

    // 公有变量方法
    return {
        publicMethod :function(){
            showPrivate();
        },
        publicVar : 'the public can see this!'
    }
})();

// 单例场景： 系统间各种模式的协调上
// TODO 第一种实现
var SingletonTester = (function(){
    // 参数 ： 传递给单例一个参数集合
    function Singleton(args) {
        // 设置args 为接受参数或者为空
        var args = args || {};

        // 设置name 的参数
        this.name = 'SingletonTester';

        // 从接受的参数取或者默认6
        this.pointX = args.pointX || 6;

        // 同理设置 pointY
        this.pointY = args.pointY || 10;
    }

    // 实例容器
    var instance;

    var _static = {
        name : 'SingletonTester',

        // 获取实例的方法
        // 返回 Singleton 的实例
        getInstance : function(args) {
            if (instance === undefined) {
                instance = new Singleton(args);
            }
            return instance;
        }
    };

    return _static;
})();

// TODO 第二种实现方法 也是用if 去判断是否存在该实例，存在就return
function Universe() {
    // 判断是否有实例
    if (typeof Universe.instance === 'object') {
        return Universe.instance;
    }

    // 其他内容
    this.start_time = 0;
    this.bang = "big";

    Universe.instance = this;
}
var un1 = new Universe();
var un2 = new Universe();
console.log(un1 === un2);

// TODO 方法3 执行一次之后就重写该方法，以后都只返回第一次new的实例

function Universe2() {
    var instance = this;

    this.bang = 'Big';

    // 第一次执行之后就重写，以后new 也是把这个返回回去
    Universe2 = function(){
        return instance;
    }
}

var un3 = new Universe2();
var un4 = new Universe2();
un3.bang = '123';
console.log(un4.bang);
console.log(un3 === un4);


// TODO 方法4 略复杂
function Universe3() {
    // 缓存实例
    var instance;

    // 重新构造函数
    Universe3 = function Universe3() {
        return instance;
    };

    // 后期处理原型属性
    Universe3.prototype = this;

    // 实例
    instance = new Universe3();

    // 重设构造函数指针
    instance.constructor = Universe3;

    // 其他功能
    instance.bang = 'big';

    return instance;
}

var un5 = new Universe3();
var un6 = new Universe3();
console.log(un5 === un6); // true

// 添加原型属性
Universe3.prototype.nothing = true;

var unT = new Universe3();

var un6 = new Universe3();
console.log(un5.nothing);
console.log(un6.nothing);
console.log(unT.nothing);
console.log(un5.constructor  === Universe3);


// TODO 方法5

var Universe4;

(function(){
    var instance;

    Universe4 = function Universe4(){
        if (instance) {
            return instance;
        }

        instance = this;

        // 其他内容
        this.bang = 'Big';
    }
}());

var un7 = new Universe4();
var un8 = new Universe4();
console.log(un7 === un8);
un7.bang = '123';
console.log(un8.bang);












