/**
 * Created by Administrator on 2016/9/18.
 */

/**
 * 单例模式，只允许实例化一次的对象类。
 *
 */

// 最简单的单例模式，只实例化一次的对象类
var Jsonz = {
    g: function(id){
        return document.getElementById(id);
    },
    css: function(id, key, value) {
        return this.g(id).style[key] = value;
    }
};

// 无法修改的静态变量
var Conf = (function(){
    var conf = {
        MAX_NUM: 100
    };
    return {
        get: function(name) {
            return conf[name] ? conf[name] : null;
        }
    }
})();


// 惰性单例，既对单例对象延迟创建。
var LazySingle = (function(){
    // 单例实例引用
    var _instance = null;
    function Single() {
        return {
            publicMethod: function() {},
            publicProperty: '1.0'
        }
    }
    return function (){
        if (!_instance) _instance = Single();
        return _instance;
    }
})();