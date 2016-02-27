/**
 * Created by Jsonz on 2016/2/27.
 * 其实不是很懂。感觉大叔这节讲的很浅还是很简洁
 */

//  其实可以算是闭包吧
function makeCounter() {
    var i = 0;

    return function() {
        console.log(i++);
    };
}



var counter= makeCounter();
counter();
counter();

var counter2 = makeCounter();
counter2();
counter2();

var fun = function(){
    console.log('aaaaaaaa');
}(); // 可以执行

var fun2 = (function(){
    console.log('bbbbb')
}()); // 方便开发人员一开始就知道这是一个自执行代码



// 用匿名函数保存状态
var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++) {

    // 失败
    elems[i].addEventListener('click',function(e){
        e.preventDefault();
        alert('I am link #' + i);
    },false);

    // 成功
    (function(lockedInIndex){
        elems[i].addEventListener('click',function(e){
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
        },false);

    })(i);

    // 成功
    elems[i].addEventListener('click',(function(lockedInIndex){
        return function(e){
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
        }
    })(i))
}


(function(){

    // 自执行匿名函数和立即执行的函数表达式
    // 自己的理解是
    // 自执行
    (function(){}());
    // 立刻执行的函数表达式
    var a = (function(){}());

    // 自执行的函数，函数内部执行自身，递归
    function foo() { foo(); }

    // 这是一个自执行的匿名函数，因为没有标识名称
    // 必须使用arguments.callee属性来执行自己
    var foo = function(){ arguments.callee(); };

    // 这可能也是一个自执行的匿名函数，仅仅是foo标示名称引用他自身
    var foo = function(){foo() };

    // 有些人叫这个是自执行的匿名函数，因为他没有调用自身呢，只是执行而已
    (function (){}());

    // 为函数表达式添加一个标示名称，可以方便Debug
    // 但一定命名了，这个函数就不再是匿名的了；
    (function foo(){ /* code */}());

    // 立即调用的函数表达式也可以自执行，不过不常用而已
    (function() {arguments.callee(); }());
    (function foo(){ foo(); }());

}());

// 用的很多的 Module模式
var counter = (function(){
    var i = 0;

    return {
        get : function(){
            return i ;
        },
        set : function(val){
            i = val;
        },
        increment : function(){
            return ++i;
        }
    }
}());

// counter 是一个带有多个属性的对象，上面的代码对于属性的提现其实是方法

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5

counter.i; // undefined
i; // 引用错误


















