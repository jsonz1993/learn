// ES6 新增了 let 命令，用于声明变量。 类似于 var ，但声明的变量只在 let 所在的代码块内有效

{
	let a = 10;
	var arr = [1];
}

a;// a is not defined
arr;// 1

for (let i = 0; i < arr.length; i++) {}

var c = [],
	d  = [];

for (var i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}
a[6](); // 10;

for (let i = 0; i < 10; i++) {
	b[i] = function() {
		console.log(i);
	}
}
b[6](); // 6;
