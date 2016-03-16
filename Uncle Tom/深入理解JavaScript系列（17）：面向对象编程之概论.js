/**
 * Created by Jsonz on 2016/3/15.
 */

// 作用域是静态的，原型是动态的

Object = {
    a : 10,
    b : 20,
    c : 30,
    method : fn
};
Object.method = function(){
    return this.a;
};

Object.d = 40; // 添加
delete Object.c; // 删除
Object.a = 100; // 修改

// 基于委托。 (伪代码

x = {
    a : 10,
    b : 20
};

y = {
    a : 40,
    c : 50
};

y.__proto__ = x; // x 是 y 的原型

y.a; // 40
y.c; // 50
y.b; // 20

delete y.a; // 删除自身的 a
y.a; // 10

z = {
    a : 100,
    e : 540
};

y.__proto__ = z;
y.a;  // 100
y.e; // 50

z.q = 290;
y.q; // 290

//原型理解so easy


/**
 * OOP 特性
 */
// 多态
(function(){
    function test() {
        alert([this.a,this.b]);
    }

    test.call({a:10,b:20}); // 10, 20
    test.call({a:100, b:200});// 100, 200

    var a = 1, b = 2;
    test(); // 1, 2
}());

// 封装
// OOP语法糖--修饰符 ？
(function(){
    function A(){
        var _a;

        this.getA = function _getA(){
            return _a;
        };

        this.setA = function _setA(a){
            _a = a;
        };
    }

    var a = new A();

    a.setA(10);
    alert(a._a); // undefined
    alert(a.getA());
}());

(function(){
    var foo = (function(){
        var x = 10; // private

        return function(){
            alert(x);
        }
    })();

    foo(); // 10;
    // foo.__parent__.x = 20; 抽象的概念 __parent__
    // foo() 20
}());

// Mixins
(function(){

    // 浅复制
    Object.extend = function(destination, source){
        for (property in source) {
            if (source.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }
        return destination;
    };

    var x = {a : 10, b : 20};
    var y = {c : 30, d : 40};

    Object.extend(x,y); // mix Y into X
    alert([x.a, x.b, x.c, x.d]);

}());

// 对象组合
var _delegate = {
    foo : function(){
        alert('_delegate');
    }
};

var agregate = {
    delegate : _delegate,

    foo : function(){
        return this.delegate.foo.call(this);
    }
};

agregate.foo(); // delegate.foo _delegate

agregate.delegate = {
    foo : function() {
        alert('foo from new delegate');
    }
};

agregate.foo(); // foo from new delegate;

// AOP 特性
// ②说是装饰着模式，不懂什么模式。后面有模式讲解
function checkDecorator(originalFunction) {
    return function() {
        if (fooBar != 'test') {
            alert('wrong parameter');
            return false;
        }

        return originalFunction();
    };
}

function test() {
    alert('test function');
}

var testWithCheck = checkDecorator(test);
var fooBar = false;

test(); // test function
testWithCheck(); // wrong parameter

fooBar = 'test';
test(); // test function
testWithCheck(); // test function



























