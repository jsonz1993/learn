/**
 * Created by Jsonz on 2016/3/4.
 */


(function(){
    var x = 10;

    function foo() {
        var y = 20;
        function bar() {
            alert(x + y);
        }
        return bar;
    }

    foo()(); // 30 作用域链 AO(bar) AO(foo) VO(global)
}());

/*
 函数上下文的作用域链在函数调用时创建的，包括活动对象和这个函数内部的[[scope]]属性

 activeExecutionContext = {
    VO : {...}, // or AO
    this : thisValue,
    Scope : [
        ...
    ]
 }
 Scope = AO + [[Scope]]
 */

/*
 函数生命周期
 */

var x = 10;
function foo() {
    var y = 20;
    alert(x + y);
}
/*
 fooContext.AO = {
    y : undefined// 进入上下文的时候变 20
 }
  函数通过[[Scope]]去访问到x。 在函数创建的时候就被存储，直到函数摧毁都不会改变。即使不调用函数，[[Scope]]也会被写入属性
  在这里
  foo.[[Scope]] = [
    globalContext.VO // === Global
  ]
 */
foo(); // 30;

/*

 */

(function(){
    var x = 10;

    function foo() {
        var y = 20;

        function bar() {
            var z = 30;
            alert(x + y + z);
        }

        bar();
    }

    foo(); // 60

    /*
     全局上下文的变量
     globalContext.VO === Global = {
        x : 10,
        foo : <reference to function>
     }

     创建 foo 的时候 foo 的 [[scope]] 属性
     foo.[[Scope]] = {
        globalContext.VO
     }

     在 foo 激活（进入上下文）,foo 上下文的活动对象
     fooContext.AO = {
        y : 20,
        bar : <reference to function>
     };

     foo 上下文作用域链
     fooContext.Scope = fooContext.AO + foo.[[Scope]]
     fooContext.Scope = [
        fooContext.AO,
        globalContext.VO
     ];

     内部函数 bar 创建时 [[scope]]
     bar.[[Scope]] = [
        fooContext.A0,
        globalContext.VO
     ];

    在bar 激活，bar 上下文活动对象为
    barContext.AO = {
        z : 30
    };

    bar 上下文的作用域链为
    barContext.Scope = barContext.AO + bar.[[Scope]]
    barContext.Scope = [
        barContext.AO,
        fooContext.AO,
        globalContext.VO
    ]

    对 'x' 'y' 'z'的标识符解析如下
    - x
    -- barContext.AO // not found
    -- fooContext.AO // not found
    -- globalContext.VO // found - 10

    - y
    -- barContext.AO // not found
    -- fooContext.AO // found - 20

    - z
    -- barContext.AO // found - 30
     */

    //
}());

// 作用域特征 闭包
(function(){
    var x = 10;

    function foo(){
        alert(x); // 10
    }

    (function(){
        var x = 20;
        foo();
    }());
}());

// 作用域特征 通过构造函数创建的函数的[[scope]]
(function(){
    var x = 10;

    function foo(){
        var y = 20;

        function barFD(){
            alert(x); // 10;
            alert(y); // 20
        }

        var barFE = function(){
            alert(x);
            alert(y);
        };

        var barFn = Function('alert(x);alert(y);');

        barFD(); // 10 20
        barFE(); // 10 20
        barFn(); // 10, y is not defined
    }

    foo();
}());

// 作用域特征 二维作用域链查找
(function(){

    function foo() {
        alert(x);
    }

    Object.prototype.x = 10;

    foo(); // 10;

    (function(){
        function foo() {
            var x = 20;

            function bar() {
                alert(x);
            }

            bar();
        }

        Object.prototype.x = 10;

        foo(); // 20;
    }())
}());

// 作用域特性 代码执行时对作用域链的影响 with 和 catch
// Scope = withObject | catchObject + AO|VO + [[Scope]]
(function(){
    var foo = {x : 10, y : 20};

    with (foo) {
        alert(x); // 10
        alert(y); // 20
    }
    // 此处作用域链变为 Scope = foo + AO|VO + [[Scope]]
}());

(function(){
    var x = 10, y = 10;
    with({x : 20}) {
        var x = 30, y = 30;
        alert(x); // 30;
        alert(y); // 30;
    }

    alert(x); // 10;
    alert(y); // 30
    /**
     *  在进入上下文的时候
     *  1. x = 10, y = 10;
     *  2.对象 {x : 20 } 添加到作用域的前端
     *  3.在with内部，遇到了var 声明，但是什么都没创建，因为进入上下文的时候，所有的变量都被解析添加了。
     *  4.在第二步的时候，仅修改变量x，实际上对象中的x现在正在被解析，并添加到作用域链的最前端，x 从20变成30.
     *  5. 同时也有变量对象 y 的修改，被解析后值由10 变成30
     *  6. 在声明with后，他的特定对象从作用域移除，（已改变的x 变为30也被移除）,既作用域回复到with 加强以前的状态。
     *  7. 在最后两个alert中，当前变量对象的x 保持同一，y等于现在的30。在with声明运行中已发生改变。
     */
}());

// catch
(function(){
    try {
        return 1;
    } catch(e) {
        alert(e);
    }
    // 在catch语句完成后，作用域恢复到以前的状态
}());




































