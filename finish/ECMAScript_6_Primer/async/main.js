// JS 中的异步
// 回调
fs.readFile('/etc/passwd', function(err, data) {
    if (err) throw err;
    console.log(data);
});

//Promise
var readFile = require('fs-readfile-promise');
readFile(fileA)
    .then(function(data) {
        console.log(data.toString());
    })
    .then(function() {
        return readFile(fileB);
    })
    .then(function(data) {
        console.log(data.toString());
    })
    .catch(function(err) {
        console.log(err);
    });

// Generator函数
function* asyncJob() {
    // ...其他代码
    var f = yield readFile(fileA);
    // ...其他代码
}

function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }

// 异步任务的封装
var fetch = require('node-fetch');

function* gen() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}
var g = gen();
var result = g.next();

result.value.then(function(data) {
    return data.json();
}).then(function(data) {
    g.next(data);
});
// 首先执行 Generator函数，获取遍历器对象，然后使用next方法，执行异步任务的第一阶段。
// 由于 Fetch模块返回的是一个 Promise对象，因此要用then方法调用下一个next方法

// co模块
var coGen = function*() {
    var f1 = yield readFile('/etc/fstab');
    var f2 = yield readFile('/etc/shells');
    console.log(f1.toString());
    console.log(f2.toString());
}
// co 模块可以不用编写 Genera
var co = require('co');
// 自定执行coGen
co(coGen).then(function() {
	console.log(' 函数执行完毕');
})























