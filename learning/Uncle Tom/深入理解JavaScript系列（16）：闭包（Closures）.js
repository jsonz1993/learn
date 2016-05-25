/**
 * Created by Jsonz on 2016/3/7.
 */

// 函数式编程。接受函数式参数的函数成为高阶函数。
function exampleFunc(funArg) {
    funArg();
}

exampleFunc(function(){
    return 'funArg';
});

(function functionValued(){
    return function(){
        console.log('returned function is called');
    }
})()();

// 接受自己作为参数的函数，称为自应用函数。
(function selfApplicative(funArg){
    if (funArg && funArg === selfApplicative) {
        console.log('self-applicative');
        return;
    }
    selfApplicative(selfApplicative);
})();

// 以自己为返回值的函数成为自复制函数
(function selfReplicative(){
    return selfReplicative;
}());

// 比较有意思的是让仅接受集合的一个项作为参数来接受从而接受集合本身
// 接受集合的函数
function registerModes(modes) {
    modes.forEach(registerMode, modes);
}
// 用法
registerModes(['roster','accounts','groups']);

// 自复制函数声明
function modes(mode){
    registerMode(mode); // 注册一个mode
    return modes; // 返回函数本身
}

modes('roster')('accounts')('groups');
// 有点类似 jQueryObject.addClass('a').toggle().removeClass('a');
function registerMode(a){
    console.log(a);
}

// 在函数式参数中定义的变量，在“funarg”激活时就能够访问了（因为存储上下文数据的变量对象每次在进入上下文的时候就创建出来了）
function testFn(funArg) {
    // funArg激活时，局部变量localVal可以访问了
    funArg(10); // 20
    funArg(20); // 30
}

testFn(function (arg){
    var localVar = 10;
    console.log(arg + localVar);
});


/** Funarg问题 */
(function(){
    function testFn(){
        var localVal = 10;

        function innerFn(innerParam) {
            alert(innerParam + localVal);
        }

        return innerFn;
    }

    var someFn = testFn();
    someFn(20); // 30;
}());

// 静态作用域
(function(){
    var z = 10;
    function foo(){
        alert(z);
    }

    foo();  // 10;

    (function(){
        var z = 20;
        foo(); // 10;
    }());

    // 将foo座位参数
    (function(funArg){
        var z  = 30;
        foo(); // 20
    })(foo);

}());

(function(){
    var x = 10;

    function foo(){
        alert(x);
    }

    var foozClosure = {
        call : foo, //
        lexicalEnvironment : {x : 20}, // 提供作用域搜索
        x : 30
    };

    foozClosure.call();
}());

(function(){

    // ① __parent__ 指的是 foo 执行前的作用域。 __parent__.__parent__是当前的执行环境 抽象出来的一个概念
    //var global = this;
    //var x = 10;
    //
    //var foo = (function(){
    //
    //    var y = 20;
    //
    //    return function(){
    //        alert(y);
    //    };
    //
    //})();
    //
    //foo(); // 20;
    //
    //alert(foo.__parent__.y); // 20;
    //
    //foo.__parent__.y = 30;
    //foo(); // 30
    //
    //alert(foo.__parent__.__parent__ === global);
    //alert(foo.__parent__.__parent__.x);
}());


// 闭包用法实战
(function(){
    [1,2,3].sort(function(a,b){
        // 排序条件
    });

    [1,2,33].map(function(el){
        return el * 2;
    }); // 2,4,66

    // 函数式参数，可以方便的实现一个搜索方法，并且可以支持无限制的搜索条件
    /*
    someCollection.find(function(el){
        return element.someProperty == 'se';
    })
     */

    // 使用apply方法
    (function(){
        alert([].join.call(arguments,';')); // '1;2;3'
    }).apply(this,[1,2,3]);

    // TODO 闭包有个重要的应用 延迟调用
    var a = 10;
    setTimeout((function(x){
        return function(){
            alert(x);
        }
    })(a),1000);
    a = 20;

}());

(function(){
    var x = 10;

    xmlHttpRequestObject.onreadystatechange = function(){
        // 只有在数据就绪的时候才会调用 此时的x依旧是10
        alert(x); // 10;
    }
}());

// 创建封装的作用域来隐藏辅助对象
(function(){
    var foo = {};

    // 初始化
    (function(object){
        var x = 10;

        object.getX = function _getX() {
            return x;
        }
    }(foo));

    alert(foo.getX()); // 10

}());

// ② 实现继承
(function(){
    function Animal(name){
        this.name = name;
        this.showName = function(){
            alert(this.name);
        }
    }

    function Cat(name){
        Animal.call(this, name);
        this.getName = function(){
            return 'yoyo';
        }
    }

    var cat = new Cat("Black Cat");
    cat.showName();
    cat.getName();
}());










