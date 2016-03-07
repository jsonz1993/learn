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
}());

































