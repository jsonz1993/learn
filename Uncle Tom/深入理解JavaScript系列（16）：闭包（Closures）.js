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














