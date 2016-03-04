/**
 * Created by Jsonz on 2016/3/4.
 */

// this 是执行上下文中的一个属性
/*
 activeExecutionContext = {
    VO : {...},
    this : thissValue
 }
 */

/*
 全局代码中的this
*/

// 显示定义全局对象的属性
this.a = 10; // global.a = 10;
alert(a); // 10;

// 通过赋值给一个无标示符隐式
b = 20;
alert(this.b); // 20;

// 通过变量声明隐式声明
// 因为全库上下文的年辆对象是全局对象自身
var c = 30;
alert(this.c); // 30

/*
 函数代码中的this
 */

var foo = {x : 10};

var bar = {
    x : 20,
    test : function(){
        alert(this === bar); // true
        alert(this.x); // 20

        // this = foo; // 报错，不能修改this的值

        alert(this.x); // 如果不出错，应该是10，而不是20
    }
};

// 在进入上下文的时候
// this 被当成 bar对象

bar.test(); // true 20


foo.test = bar.test;

foo.test(); // false 10

// this
function fooThis(){
    alert(this);
}

fooThis(); // global

alert(fooThis === foo.prototype.constructor); // true

// 但是同一个function 的不同的调用表达式，this是不同的
fooThis.prototype.constructor(); // 不解

var foo = {
    bar : function(){
        alert(this);
        alert(this === foo);
    }
};
foo.bar(); // foo true

var exampleFunc = foo.bar;
alert(exampleFunc === foo.bar); // true
exampleFunc(); // global false

/*
 引用类型
 使用伪代码我们可以将引用类型的值可以表示为拥有两个属性的对象——base（即拥有属性的那个对象），和base中的propertyName 。  ???  不懂

 var valueOfReferenceType = {
    base : <base object>,
    propertyName : <property name>
 }
 引用类型的值只有两种情况  不懂
    1. 我们处理一个标示符
    2. 一个属性访问其
 */

/* 不知道写的啥

(function(){
    var foo = 10;
    function bar() {}

    var fooReference = {
        base : global,
        propertyName : 'foo'
    };

    var varReference = {
        base : global,
        propertyName : 'bar'
    }

    function GetValue(val) {
        if (Type(value) != Reference) {
            return value;
        }

        var base = GetBase(value);

        if (base === null) {
            throw new ReferenceError;
        }

        return base.[[Get]](GetPropertyName(value));
    }
}());

*/

(function () {
    alert(this); // null => global
})();

(function(){
    var foo = {
        bar: function () {
            alert(this);
        }
    };

    foo.bar() // foo
    (foo.bar)(); // foo

    (foo.bar = foo.bar)(); // global 赋值运算调用的是GetValue方法。返回的结果是函数对象，而不是引用类型，所以this = null; 返回的是函数，而不是引用
    (false || foo.bar)(); // global 和下面例子一样，逗号运算符和逻辑运算负调用了GetValue方法，失去了引用而而得到了函数
    (foo.bar,foo.bar); // global
})();





























