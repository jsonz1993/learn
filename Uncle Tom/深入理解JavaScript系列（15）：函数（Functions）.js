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
    bar();
})();

(function(){
    // foo 是一个函数声明，坐在进入上下文的时候创建
    alert(foo);

    function foo(x) {
        alert(x);
    }(1); // 这里是一个分组操作符，不是函数调用。

    foo(10);
}());

(function(){
   var foo = {
       bar : function(x){
           return x % 2 != 0 ? 'yes' : 'no';
       }
   };

    alert(foo.bar()); // yes
}());

//
// 命名函数表达式的特性
(function foo(bar){
    if (bar) {
        alert(bar);
        return;
    }

    foo(1);
}());

(function(){
    Object.prototype.x = 10;

    function foo(){
        var x = 20;

        function bar() {
            alert(x);
        }

        bar(); // 20; 从 foo的变量对象AO中查询

        // 匿名函数表达式也是一样
        (function(){
            alert(x); // 20
        }());
    }

    foo();
}());


















