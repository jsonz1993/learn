/**
 * Created by Jsonz on 2016/3/2.
 */

var a = 10; // 全局上下文中的变量

(function(){
    var b = 20;
})();

alert(a); // 10;
alert(b); // b is undefined

for (var k in {a : 1,b : 2}) {
    alert(k);
}
alert(k);
/*
 global = {
 Math: <...>,
 String: <...>
 ...
 ...
 window: global //引用自身
 };
 */

/*
 变量对象(缩写为VO)是一个与执行上下文相关的特殊对象，它存储着在上下文中声明的以下内容：
 变量 (var, 变量声明);
 函数声明 (FunctionDeclaration, 缩写为FD);
 函数的形参

 */

var a = 10;

function test(x) {
    var b = 20;
}

test(30);

/*
 // 全局上下文的变量对象
 VO(globalContext) = {
 a: 10,
 test: <reference to function>
 };

 // test函数上下文的变量对象
 VO(test functionContext) = {
 x: 30,
 b: 20
 };



 全局对象(Global object) 是在进入任何执行上下文之前就已经创建了的对象；
 这个对象只存在一份，它的属性在程序中任何地方都可以访问，全局对象的生命周期终止于程序退出那一刻。
 创建阶段将Math、String、Date、parseInt等作为自身属性
 */

/*
 活动对象是在进入函数上下文时刻被创建的，它通过函数的arguments属性初始化。
 arguments 属性的值是Arguments对象：
 Argument对象包括 1.callee 指向当前函数的引用。 2.length 真正传递的参数个数。3. properties-indexes 不知道是啥。Chrome也弹不出
 */

function foo(x, y, z){
    // 声明的函数参数数量 arguments (x, y, z)
    console.log(foo.length); // 3

    //真正传进来的参数个数 only x y
    console.log(arguments.length); // 2

    // 参数共享
    console.log(x === arguments[0]); // true
    console.log(x);  // 10

    arguments[0] = 20;
    console.log(x); // 20

    x = 30;
    console.log(arguments[0]); // 30

    // 不过，没有传进来的参数z和参数的第三个索引值是不贡献的

    z = 40;
    console.log(arguments[2]); // undefined 代表他们不是同个内存 只是共享数据

    arguments[2] = 50;
    console.log(z); // undefined;
}

foo(10,20);

// 进入执行上下文
function test(a, b) {
    var c = 10;
    function d(){}

    var e = function _e() {};
    (function x(){});
}

test(10); // call
/*
 进入上下文时：AO 有以下属性
 AO(test) = {
    a : 10,
    b : undefined,
    c : undefined,
    d : <reference to FunctionDeclaration "d">,
    e : undefined
 };
 _e 和 x 没有被分配 因为他们是函数表达式不是函数声明
 在这之后，进入处理上下文代码的第二个阶段 -- 执行代码
 在代码解释期间已经有 a 和 d 存在
 因为 _e 保存在e 上,所以他仍然在内存中。而 x 是没被保存的函数表达式，所以只有他自己的定义或递归中才可以调用
 */

(function(){

    alert(x); // function

    var x = 10;
    alert(x); // 10

    x = 20;

    function x() {};

    alert(x); // 20
/*
这里x 是 function 是因为 函数声明是在进入上下文的时候就填入的。
虽然函数声明x上面有变量x。但是变量声明的顺序是在函数声明和形式参数声明之后的
 */

    if (true) {
        var a = 1;
    } else {
        var b = 2;
    }
    // 虽然b = 2不会被执行，但是b 已经存在VO中，值是undefined
}());


// 变量有一个重要的只是点，他有一个attribute : {DontDelete}
a = 10;
alert(window.a); // 10
alert(delete a); // true
alert(window.a); // undefined

var b = 10;
alert(window.b); // 10
alert(delete b); // false
alert(window.b); // 10;

// 因为变量有 DontDelete,但是eval上下文的变量没有{DontDelete}特性。但是我在chrome调试发现也是有 DontDelete
eval('val c = 10;');
alert(window.c); // 10
alert(delete c); // true
alert(window.c); // undefined

// __parent__ 在Chrome中没有返回

// 在评论区看到一个干货
var aaa = 10;
var date1 = new Date();
for (var i = 0; i < 10000000; i++) {
    aaa;
}
console.log(new Date() - date1);
var date2 = new Date();
for (i = 0; i < 10000000; i++) {
    window.aaa;
}
console.log(new Date() - date2);
var date3 = new Date();
for (i = 0; i < 10000000; i++) {
    window.window.window.window.window.window.window.aaa;
}
console.log(new Date() - date3);
// 在旧FF IE等差距挺大的。因为如果是a的话，是全局.a;如果是window.a的话，是全局.window.a。如果是window.window.window.window.a的话更慢 原因同上。



































