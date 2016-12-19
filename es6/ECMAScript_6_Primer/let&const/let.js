// ES6 新增了 let 命令，用于声明变量。 类似于 var ，但声明的变量只在 let 所在的代码块内有效

{
    let a = 10;
    var arr = [1];
}

try {
    a; // a is not defined
} catch (e) {}
arr; // 1

for (let i = 0; i < arr.length; i++) {}

var c = [],
    d = [];

for (var i = 0; i < 10; i++) {
    c[i] = function() {
        console.log(i);
    }
}
c[6](); // 10;

for (let i = 0; i < 10; i++) {
    d[i] = function() {
        console.log(i);
    }
}
d[6](); // 6;

// 不存在变量提升
var aa;
typeof aa; // undefined
if (aa == 10) { console.log(10) };
aa = 20;

try {
    let bb;
    typeof bb /*Error*/;
    if (bb) { true };
    bb = 2 } catch (e) { /* 报错 */ }


// 暂时性死区
// 只要块级作用域内存存在let命令，它所声明的变量就'绑定'这个区域，不再受外部影响。
var tmp = 123;

try {
	if (true) {
		tmp = 'abc'; // Error
		let tmp;
	}
} catch(e) {console.log(e)}

// let 不允许重复声明


















