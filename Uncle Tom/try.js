/**
 * Created by Administrator on 2016/2/21.
 */

/**
 * 创建接口对象
 * @param name 接口名
 * @param methods 接口方法
 * @constructor
 */
var Interface = function (name, methods) {
    if (arguments.length !== 2) {
        throw new Error('必须输入两个参数，当前个数为' + arguments.length);
    }

    this.name = name;
    this.methods = [];

    for (var i = 0,len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('方法名必须是string');
        }

        this.methods.push(methods[i]);
    }
};


/**
 * 接口实现
 * @param object 实现接口对象
 * @param object2 对应接口
 */

Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw  new Error('必须是两个参数，当前个数为' + arguments.length);
    }

    for (var i = 1,len = arguments.length; i < len; i++) {
        var interface = arguments[i];

        if (interface.constructor != Interface) {
            throw new Error('请实现接口');
        }

        for (var j = 0,methodsLen = interface.length; j < methodsLen; j++) {
            var method = interface.methods[j];

            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error('接口名 ' + interface.name + '方法名' + method + '没找到');
            }
        }

    }
};

var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);









