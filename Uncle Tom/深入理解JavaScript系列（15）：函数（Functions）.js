/**
 * Created by Jsonz on 2016/3/6.
 */

// 函数声明 缩写为FD
foo();
function foo(){
    /*
     * 有一个特定的名称
     * 在进入上下文阶段创建
     * 影响到变量对象
     */
}

// 函数表达式 FE 表达式立刻调用中必须用圆括号包围

var foo2 = function foo_2(){
    /*
     * 在源码中必须出现表达式的位置
     * 有可选的名称 在外面调用的话使用 foo ,函数内部如递归可以使用 foo_2
     * 不会影响变量对象
     * 在执行代码时候创建
     */
    (function(){});
    [function(){}];
    1,function baz(){};

};

(function(){
    alert(fooFE); // fooFE 未定义

    (function fooFE(){});

    // 定义阶段之后也不可以用 因为不在变量对象 VO 中。 = =平时一直都知道 只是把他理解成括号是一个匿名函数
    alert(fooFE);


    // 在表达式中使用它们，”不会污染”变量对象。最简单的例子是将一个函数作为参数传递给其它函数。
    function foo(callback) {
        callback();
    }

    foo(function bar(){
        alert('foo.bar');
    });

    foo(function baz(){
        alert('foo.baz');
    })
}());

(function(){
    var foo = 10;
    var bar = (foo % 2 === 0
        ? function () {alert(0); }
        : function () {alert(1); }
    );

    //if (foo % 2 === 0 ) { function bar () {alert(0) } } else { function bar () { alert(1 ) } } 会挂掉
    bar();
})();






















