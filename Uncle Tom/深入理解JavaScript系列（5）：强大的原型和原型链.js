/**
 * Created by Jsonz on 2016/2/27.
 * 感觉对原型链的理解比较透彻，归根于高程和面向对象编程指南
 * 看着大叔的这个教程，毫无压力= =；
 */

// 一般写法
var decimalDigits = 2,
    tax = 5;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

var Calcuator = function(decimalDigits, tax) {
    this.decimalDigits = decimalDigits;
    this.tax = tax;
};

Calcuator.prototype = {
    add : function(x, y){
        return x + y;
    },

    subtract : function(x, y){
        return x - y;
    }
};

Calcuator.prototype = function(){
    var add = function(x, y){
            return x + y;
        },

        subtract = function(x, y){
            return x - y;
        };

    return {
        add : add,
        subtract : subtract
    }
}();


var BaseCalculator = function(){
    // 为每个实例都声明一个小位数
    this.decimalDigits = 2;
};

BaseCalculator.prototype.add = function(x, y) {
    return x + y;
};

BaseCalculator.prototype.subtract = function(x, y) {
    return x - y;
};

// 继承
var Calculator = function(){
    this.tax = 5;
};

// 不管创建多少个 new BaseCalculator。 都是指向原型链上
Calculator.prototype = new BaseCalculator();


// 原型链
function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method : function(){

    }
};

function Bar() {}

// 设置Bar的prototype属性为Foo对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor 为 Bar 本身
Bar.prototype.constructor = Bar;

var test = new Bar();

// 原型链
/*
 test [Bar 的实例]
    Bar.prototype [Foo 的实例]
        { foo : 'Hello World'}
        Foo.prototype
            {method : .. }
            Object.prototype
                {toString : .. };
 */

// hasOwnPrototype 判断自定义书香还是原型链上的
Object.prototype.bar = 1;
var foo = {
    goo : undefined,
    hasOwnProperty : function(){
        return false;
    }
};

foo.bar; // 1
'bar' in foo; // true

foo.hasOwnProperty('bar'); // false;
foo.hasOwnProperty('goo'); // 本来是true，但是方法被重写 返回false

// 解决刚才的问题
new Object().hasOwnProperty.call(foo, 'bar');

Object.prototype.bar = 1;

var foo = {moo : 2};

for (var i in foo) {
    console.log(i); // 输出两个属性
}

// foo 变量是上例中的
for (var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i); // 输出一个
    }
}
































