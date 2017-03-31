// Set 类似数组，但是成员值是唯一的
var s = new Set();
[...'245643221'].map(x => s.add(x));
for (let i of s) {console.log(i)}; // 2 3 4 5

// 例一
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]); // [1,2,3,4]
console.log(set); // {1, 2, 3, 4}
set.size; // 5

// 去除数组的重复成员
[...new Set(...'123123123')];

// Set 中，NaN不相等，对象总是相等的
let set1 = new Set();
set1.add({});
set1.size; // 1
set1.add({});
set1.size; // 2

s.add(1).add(2).add(2);
s.size; // 2
s.has(1); // true
s.has(3); // false
s.delete(2);
s.has(2);  // false

// 数组去重函数封装
function dedupe(array) {
	return Array.from(new Set(array));
}

// 遍历方法 keys values entries forEach

// WeakSet
// 与 Set类似，也是不能重复的集合，但是WeakSet成员只能是对象
var a = [[1, 2], [3, 4]],
	b = {},
	c = {};
var ws = new WeakSet(a);
ws.add(a);
ws.add(window);
ws.has(window); // 
true
ws.delete(window);
ws.has(window); // fasle

// Map
var data = new Map();
var o = {
	p: 'Hello World'
}
m.set(o, 'content');
m.get(o); // content
m.has(o); // true
m.delete(o); // true
m.has(o); // false

var map = new Map([
		['name', '张三'],
		['title', 'Author']
	]);

map.size; // 2
map.has('name'); // true
map.get('name'); // 张三
map.has('title'); // true
map.get('title'); // Author

// 遍历方法 keys() values() entries() forEach()

// Map 转数组
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
[...myMap]; // [ [true, 7], [{foo:3}, ['abc']]];

// WeakMap。 类似于Set和 WeakSet， 相当于只能用Object做key的map





































