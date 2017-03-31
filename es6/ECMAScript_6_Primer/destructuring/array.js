// 以前
var a = 1,
	b = 2,
	c = 3;
// ES6
var [a, b, c] = [1, 2, 3];
let [foo, [[bar], baz]] = [1, [[2], 3]];

foo; //1
bar; // 2
baz; // 3

let [, , thrid] = ['foo', 'bar', 'baz'];
third; // baz

let [x, , y] = [1, 2, 3];
x; // 1,
y; //3

let [head, ...tail] = [1, 2, 3, 4];
head; // 1
tail; // [2, 3, 4]

let [d, e, ...f] = ['a'];
d; // a
e; // undefined
f; // []

// 如果解构不成功，会变成 undefined
let [foo1] = [];
foo1; // undefined

let [a1, [b1], c1] = [1, [2, 3], 4];

// 如果等号右边不是可以遍历的解构，则会报错
// let [foo2] = {}

// 默认值
var [foo2 = true] = [];
// ES6 内部会使用 === 严格等于来判断是否是 undefined，如果不是，就赋值给前面变量