const [a, b, c, d, e] = 'hello';
a; // h
b; // e

let {length: len} = 'hello'
len; // 5

let {toString: s} = 123;
s === Number.prototype.toString; // true

let { toString: toS} = true;
toS === Boolean.prototype.toString; // true


// 函数的参数
function add([x, y]) {
	return x + y;
}
add([1,2]); // 3

[[1,2], [3,4]].map(([a,b]) => a + b); // [3, 7]

// 指定了默认值
function move({x = 0, y = 0} = {}) {
	return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

// 先解构默认参数，再传了其他参数
function move({x, y} = {x: 0, y: 0}) {
	return [x, y];
}

move({x: 3, y: 8}); // [3, 8];
move({x: 3}); // [3, undefined];
move({}); // [undefined, undefined];
move(); // [0, 0];



[1, undefined, 3].map((x = 'yex') => x);
// [1, 'yes', 3];


// 用途
// 交换变量
var x = 1, y = 2;
[x, y] = [y, x];

// 从函数返回多个值
// 返回一个数组
function example() {
	return [1,2,3];
}
var [a1,b1,c1] = example();

// 返回一个对象
function example1() {
	return {
		foo: 1,
		bar: 2
	};
}
var {foo, bar} = example1();

// 参数的定义
// 有序
function f([x, y, z]) {}
f([1,2,3]);
// 无序
function f({x, y, z}) {}
f({z: 3, y: 2, x: 1})

// 提取Json数据
var jsonData = {
	id: 42,
	status: 'ok',
	data: [868, 5309]
};
let {id, status, data: number} = jsonData;
(id, status, number); // 42 OK [867, 5309]


// 函数参数的默认值
var jQuery = {};
jQuery.ajax = function(url, {
	async = true,
	beforeSend = function() {},
	cache = true,
	complete = function() {},
	crossDomain = false,
	global = true
}) {
	// ...
};


// 遍历Map解构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');
for (let [key, value] of map) {
	console.log(key + ' is ' + value);
}
for (let [key] of map) {}
for (let [, value] of map) {}

// 输入模块的指定方法
// const { SourceMapConsumer, SourceNode} = require('source-map');










