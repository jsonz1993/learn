(function(){
    //原函数
    function getHugeList() {
        var arr = [];
        for (var i = 0;i < 10000000; i++) {
            arr[i] = i;
        }
        return arr;
    }

    var list = getHugeList();

    var nextListItem = function(){
        var item = list.pop();

        if (item) {
            nextListItem();
        }
    };

    //闭包与递归.js:13 Uncaught RangeError: Maximum call stack size exceeded
    //nextListItem();
}());


//第一种方法
// setTimeout 异步机制
function getHugeList() {
    var arr = [];
    for (var i = 0;i < 10000; i++) {
        arr[i] = i;
    }
    return arr;
}

var list = getHugeList();

var nextListItem = function(){
   setTimeout(function(){
       var item = list.pop();

       console.log(item);

       if (item) {
           nextListItem();
       }
   },1);
};

// 第二种方法
//闭包
//console.time('test');
var nextListItem2 = function(){
    var foo = function closer() {
        var item = list.pop();

        console.log(item);
        if(item) {
            closer();
        }
    };
    return foo;
}();
//nextListItem2();
//console.timeEnd('test');


//第三种方法
function isEvent(num) {
    if (num === 0) {
        return true;
    }

    if (num === 1) {
        return false;
    }

    return isEvent(Math.abs(num) - 2);
}

isEvent(100);

// 延伸 五哥好腻害
function trampoline(func,arg) {
    var value = func(arg);

    while (typeof value === 'function') {
        value = value();
    }

    return value;
}

trampoline(isEvent,100);