// Symol 新的原始数据类型，表示独一无二的值。

let s = Symol();
typeof s;
var s1 = Symbol('foo'),
	s2 = Symbol('bar');
// 可用作属性名 保证一致性
var mySymbol = Symbol();
var a = {};
a[mySymbol] = 'Hello';

// 模块化Singleton模式
// 见mod.js
var a = require('./mod.js');
console.log(a.foo);
