/**
 * Created by Jsonz on 2016/3/17.
 */

(function(){
//    // TODO 1
    if (!('a' in window)) {
        var a = 1;
    }
    alert(a); // undefined
//
//// 等价于
//    var a;
//    if (!('a') in window) {
//        var a = 1;
//    }
//    alert(a);
//
//    /*
//     * var a = 1 --> window.a = 1;
//     * 类似 alert( 'a' in window);
//     * var a;
//     */
}());

// TODO 2
(function(){
    var a = 1,
        b = function a(x) {
            x && a(--x);
        };

    console.log(a); // 1

    /*
     * 1. 声明变量在进入执行上下文就完成了
     * 2. 函数声明也在入执行上下文就完成了
     * 3. 函数表达式不会被提前赋值
     * 4. 函数声明会覆盖变量声明，不会覆盖变量赋值
             function value() {
                return 1;
             }
             var value;
             alert(typeof value); // 'function'
     * function value() { return 1};
     * var value = 1; typeof value ; // number
     *
     * 出现名字一样的情况，一个是函数声明，一个是变量声明。
     * VO顺序为 函数形参 -> 函数声明 -> 变量声明
     */
}());

// TODO 3
(function(){
    function a(x) {
        return x * 2;
    }
    var a;
    console.log(a); // function

    // 遇到同名的函数声明，VO不会重新定义。
    /*
    VO(global) = {
        a : 引用了函数声明 'a'
    }
     */
}());

//TODO 3 个人理解 虽然形参和实参不在同个内存，但是会共享。
(function(){
    function b(x, y, a) {
        arguments[2] = 10;
        alert(a);
    }

    b(1, 2, 3); // 10;
    // 活动对象在进入函数上下文时刻被创建，他通过函数的arguments属性初始化，
    /*
    AO = { arguments : <ArgO> }
    arguments.length.properties-indexes 的值和实际传递进来的参数之间是共享的
    前提是索引值小于你传入的参数个数，也就是说如果你传入2个参数，还继续使用 arguments[2] 赋值，就会不一致
     */

    function c(x, y, z) {
        arguments[2] = 10;
        alert(z);
        alert(arguments[2]);
    }
    c(1, 2); // undefined 10; 没传实参进来，所以List该位置为undefined 没有对应共享

}());

// TODO 5
(function(){
    function a() {
        alert(this);
    }

    a.call(null); // window



    /*
     * this 定义。当一个方法在对象上调用的时候，thiss 指向该对象上
     var Object = {
         method : function(){
            alert(this === Object); // true
         }
     };

     Object.method();

     * call 座位一个 function执行 代表该方法可以让另一个对象作为调用者来调用
     * call 方法的第一个参数是对象调用者 岁后其他参数是传给 method 的参数
     */

    function method (){
        alert(this === window);
    }
    method(); // true
    method.call(document); // false
})();

// TODO 汤姆大叔留下的更多的题目。但是没有答案
// 说答对4题以上想拿高工资的找他= =

// TODO 1. 找出数字数组中最大的元素（使用Match.max函数） 考点 回调
(function(){
    var arr = [1,2,3,4,5,6,7,8,90];
    Math.max.apply(null,arr);
})();

// TODO 2.转化一个数字数组为function数组（每个function都弹出相应的数字）考点 闭包 for 作用域
(function() {
    var arr = [1,2,3,4,5,6],
        arrFn = [];

    for (var i = 0,len = arr.length; i < len; i++) {
        arrFn[i] = (function(x){
            return function(){
                return x;
            }
        })(i)
    }
})();

// TODO 3.给object数组进行排序（排序条件是每个元素对象的属性个数） 做不出（1.不知道 getOwnPropertyNames 用法，2.不懂去用数组sort方法）
// 自己再手撸了一遍
(function(){
    var object = {
        a : {
            a1 : 1,
            a2 : 2
        },
        b : {
            b1 : 1,
            b2 : 2,
            b3 : 3
        },
        c : {
            c1 : 1
        }
    };

    function method(obj) {
        var objArr = [];

        for (var k in obj) {
            objArr[objArr.length] = obj[k];
        }


        objArr.sort(function(){
            for (var i = 0; i < 2; i++) {
                arguments[i].length = Object.getOwnPropertyNames(arguments[i]).length;
            }

            return arguments[0].length - arguments[1].length;
        });

        return objArr;
    }
    method(object);
})();

// TODO 4.利用JavaScript打印出Fibonacci数（不使用全局变量） 好厉害的写法 完全愣比
// TODO 这才是真大神！
(function(){

    function fibonacci(n) {
        if (n < 2) {
            return 1;
        }

        return fibonacci(n - 2) + fibonacci(n - 1);
    }

    fibonacci(1);
})();

// TODO 5.实现如下语法的功能：var a = (5).plus(3).minus(6); //2

(function(){

    Number.prototype.plus = function(num){
        return this.valueOf() + num;
    };

    Number.prototype.minus = function(num) {
        return this.valueOf() - num;
    };

    (5).plus(3).minus(6);

})();

// TODO 6. 实现如下语法的功能：var a = add(2)(3)(4); //9 也不会。6道题只会做 3道。
// 重写 valueOf/ toString 实在是巧妙
(function(){
    function add(x) {

        var sum = x;
        var temp = function(y) {
            sum += y;
            return temp;
        };

        temp.toString = function(){
            return sum;
        };

        return temp;
    }

})();














































