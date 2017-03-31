// 参数设置默认值
function log(x, y = 'World') {
    console.log(x, y);
}
log('Hello', ''); // Hello
log('Hello'); // Hello World
log('hello', ); // hello World

function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

function foo({ x, y = 5 }) {
    console.log(x, y);
}
foo({}); // undefined, 5
foo({ x: 1 }); // 1, 5
foo({ x: 1, y: 2 }); //1, 2
// foo(); // cannot read property 'x' of undefined

function fetch(url, { body = '', method = 'GET', headers = {} }) {
    console.log(method);
}
fetch('http://example.com', {});
// fetch('http://example.com'); // 同样报错
// 可以这样避免
function fetch(url, { method = 'GET' } = {}) {
    console.log(method);
}
fetch('http://example.com');
// 一般默认值的参数写在最后否则调用的时候要手动写 fn(1, undefined, 2);
// length 设置了默认值之后 length会忽略有默认值的函数, 而且从有默认值之后的参数都会忽略
// 作用域 默认值的作用域与函数内一致
var x = 1;

function f(x, y = x) {
    console.log(y);
}
f(2); // 2

function f1(y = x) {
    let x = 2;
    console.log(y);
}
f1(); // 1

console.log('test');

function foo(x, y = function() { x = 2; }) {
    var x = 3;
    console.log(x);
    y();
    console.log(x);
}
foo();
console.log(x);

// rest 参数。 ...变量名 获取函数的多余参数 只能写在函数的最后
function add(...values) {
    let sum = 0;
    // 此时 values 是一个数组
    for (var val of values) {
        sum += val;
    }
    return sum;
}
add(2, 5, 3); // 10

function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}
push([], 1, 2, 34);

// 扩展运算符
// ...
console.log(...[1, 2, 3]); // 1 2 3
console.log(1, ...[2, 3, 4], 5); // 1 2 3 4 5
function push(array, ...items) {
    array.push(...items);
}
push([], 1, 2, 3);
// 合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
// ES5的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]
// ES6的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
[...
    'hello'
] // ['h', 'e', 'l', 'l', 'o']

// name
var func1 = function() {};
func1.name; // func1
function func1 = function() {}
func1.name; // func1

// 箭头函数
var f = v => v;
// 等于
var f = function(v) {
    return v; };
var f = () => 5;
// 等于
var f = function() {
    return 5 };
var sum = (num1, num2) => num1 + num2;
// 如果箭头函数的代码多于一条语句，用大括号括起来并return 返回
var sum = (num1, num2) => {
    return nunm1 + num2 };
// 如果返回一个对象，必须在外面加个括号
var getTempItem = id => ({ id: id, name: 'Temp' });
// 箭头函数和变量解构结合使用
const full = ({ first, last }) => first + ' ' + last;

function full(person) {
    return person.first + ' ' + person.last };
const isEvent = n => n % 2 == 0;
const square = n => n * n;
// 箭头函数的一个用处是简化回调函数
[1, 2, 3].map(function(x) {
    return x * x; });
[1, 2, 3].map(x => x * x);
var result = [].sort(function(a, b) {
    return a - b });
var result = [].sort((a, b) => a - b);
const numbers = (...nums) => nums;
numbers(1, 2, 3, 4, 7, 5, 6); // [1, 2, 3, 4, 5, 6, 7]

// 嵌套的箭头函数
function insert(value) {
    return {
        into: function(array) {
            return {
                after: function(afterValue) {
                    array.splic(array.indexOf(afterValue) + 1, 0, value);
                    return array;
                };
            };
        }
    }
}

let insert = (value) => ({into: (array) => ({after: (afterValue) => {
	array.splice(array.indexOf(afterValue) + 1, 0, value);
	return array;
}})});
// 部署管道机制例子， 既前一个函数的输出是后一个函数的输入
const pipeline = (...funcs) =>
	val => funcs.reduce((a, b) => b(a), val);
const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
addThenMult(5);

var pipeline = function(a, b, c) {
	return 
}




















