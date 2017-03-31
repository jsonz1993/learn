var {foo, bar} = {foo: 'aaa', bar: 'bbb'};
foo; // aaa
bar; // bbb
var {bar, foo} = {foo: 'aaa', bar: 'bbb'};
foo; // aaa
bar; // bbb

// 变量名不同的情况
var {foo: baz} = {foo: 'aaa', bar: 'bbb'};
baz; // aaa

let obj = {first: 'hello', last: 'world'};
let {first: f, last: l} = obj;
f; // hello
l; // world

// 嵌套例子
let object = {};
let arr = [];
({foo: object.prop, bar: arr[0]} = {foo: 123, bar: true});

console.log(object);
console.log(arr);
