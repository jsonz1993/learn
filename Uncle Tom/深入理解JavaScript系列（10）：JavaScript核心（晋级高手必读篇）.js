/**
 * Created by Jsonz on 2016/2/29.
 */

/*
 * 原型链
 */
var foo = {
    x : 10,
    y : 20
};
// 上述代码 foo 对象有两个显式的属性[explicit own properties]和一个自带隐式的__proto__属性[implicit __proto__ property],指向 foo 原型

// b 和 c 大部分东西相同，一般都会去写一个a的类去继承，在js里是原型和原型链。

var a = {
    x : 10,
    calculate : function(z){
        return this.x + this.y + z;
    }
};

var b = {
    y : 20,
    __proto__ : a
};

var c = {
    y : 30,
    __proto__ : a
};

b.calculate(30); // 60
c.calculate(60); // 80

// 原理很简单，b和c可以使用a中定义的calculate 方法，这就是有原型链来[prototype chain]实现的。

// 如果一个对象的prototype 没有显示的声明过或定义过，那个__prototype__的默认值就是object.prototype,而object.prototype也有一个__prototype__，这个就是原型链的终点，被设置为null


/*
 * 构造函数
 */

function Foo(y) {
    // 构造函数将会以特定模式创建对象：被创建的对象都会有"Y'属性
    this.y = y;
}

// "Foo.prototype" 存放了新建对象的原型引用
// 所以我们可以将之用于定义继承和共享属性或方法
// 所以，和上例一样，我们有了如下代码

// 继承属性x
Foo.prototype.x = 10;

// 继承方法 calculate
Foo.prototype.calculate = function(z) {
    return this.x + this.y + z;
};

// 使用foo模式创建'b' and 'c'
var bFoo = new Foo(20);
var cFoo = new Foo(30);

bFoo.calculate(30); // 60
cFoo.calculate(40); // 60;


console.log(
    bFoo.__proto__ === Foo.prototype, // true
    cFoo.__proto__ === Foo.prototype, // true

    // 'Foo.prototype' 自动创建了一个特殊的属性 constructor
    // 指向a的构造函数本身
    // 实例 b 和 c 可以通过授权找到他并用于检测自己的构造函数

    bFoo.constructor === Foo, // true
    cFoo.constructor === Foo, // true

    bFoo.calculate === bFoo.__proto__.calculate, // true
    bFoo.__proto__.calculate === Foo.prototype.calculate // true
);

// 每一个object 都有一个prototype 构造函数Foo也拥有自己的__proto__，也就是Function.prototype,
// 而Function.prototype 的 __proto__ 指向了 Object.prototype。
// Foo.prototype只是一个显式的属性，也就是b 和 c 的__proto__属性

/*
 * 执行上下文栈
 * 在ECMAScript 中代码有三种类型 ： global function eval
 * 每一种代码都需要依赖自身的上下文。 global的上下文可能涵盖了很多的function 和eval的实例。
 * 函数的每一次调用都会进入函数执行中的上下文，并且来计算函数中变量等的值。
 * eval 的函数每一次执行，也会进入eval执行中的上下文，判断应该从何处获取变量的值
 * 一个 function 可能产生无限的上下文环境（递归）;
 */

function fooA(bar) {};
// 调用相同的function 每次都会产生3个不同的上下文
// 包含不同的状态，例如参数bar的值
fooA(10);
fooA(20);
fooA(30);

// 激活其他上下文的某个上下文被成为 调用者caller。 被激活的上下文叫 被调用者callee。
// 当一个caller激活了一个callee，这个caller会暂停他自身的执行，然后将控制权交给callee。
// 于是这个 callee 被放入堆栈，成为进行中的上下文，当这个callee上下文结束后，会把这个控制权再次交给他的 caller
// 一个 callee 可以用 return 或者抛出异常来结束自身的上下文

/*
 * 上下文可以抽象理解成Object
 * 上下文有三个必须属性， 变量对象，this指针,作用域链
 */

// 变量对象  用于存储被定义在上下文的 变量 和 函数声明

var fooV = 10;

function barV() {} // 函数声明
(function baz() {}); // 函数表达式

console.log(
    this.fooV === fooV,
    window.barV === barV
);

// Global VO;  foo : 10 , bar : <function>




















