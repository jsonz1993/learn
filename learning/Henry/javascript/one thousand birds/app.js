/**
 * Created by Administrator on 2016/2/20.
 */

/**
 *  一千只鸟。
 *  会飞 会死掉
 *  像java一样，继承birds这个工厂的类，在他基础上加特别的东西
 *  方便以后增加鸟的动作和鸟的和类
 *  几类鸟里面实现死的方式
 */

/**
 * 创建接口对象
 * @param name 接口名
 * @param methods 接口的方法
 * @constructor
 */
var Interface = function (name, methods) {
    if (arguments.length !== 2) {
        throw new Error('请传入两个参数，当前参数为' + arguments.length);
    }

    this.name = name;
    this.methods = [];

    for (var i = 0,len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('接口方法名必须是string');
        }

        this.methods.push(methods[i]);
    }
};


/**
 * 接口的实现
 * @param object 实现接口对象
 * @param other 定义的接口
 */
Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error('请传入两个以上的参数,当前参数个数为' + arguments.length);
    }

    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];

        if (interface.constructor !== Interface) {
            throw new Error('请定义接口');
        }

        for (var j = 0,interfaceLen = interface.methods.length; j < interfaceLen; j++) {
            var method = interface.methods[j];

            if (!object[method] || (typeof object[method] !== 'function')) {
                throw new Error('接口名' + interface.name + ' ，方法名 ' + method + ' 未找到');
            }
        }
    }
};

//鸟的基类
function Birds(name) {
    this.name = name;

    //定义接口
    this.birdInterface = new Interface('bird',['die']);
}

Birds.prototype = {
    sayName : function(){
        return this.name;
    },
    getInterface : function(){
        return this.birdInterface;
    }
};


//第一种特殊的鸟
function Birds_first() {
    var bird = new Birds('第一种鸟');

    var methods = Birds_first.methods;

    //实现接口
    Interface.ensureImplements(methods,bird.birdInterface);

    for (var i in methods) {
        bird[i] = methods[i];
    }

    return bird;
}

Birds_first.methods = {
    die : function(){
        return '死掉';
    }
};




var bird1 = Birds_first();
var bird2 = Birds_first();

console.log(bird1.sayName() + ' ' + bird1.die());

















