// const 用来声明常量，一旦声明，不能改变

const PI = 3.1415;

// 使用 const 初始化时就必须赋值

// 与 let 一样， const的作用域只在声明所在的块作用域内有效
if (true) {
	const MAX = 5;
}
try {
	MAX;
} catch(e) {console.log(e)}

// const 常量也不提升，存在暂时性死区。
// 与let一样，const不可以被重复声明。

// const 声明符合类型的变量，变量名不指向数据，而是指向地址。
const a = [];
a.push('hello'); 
a.length = 0;
// a = ['b']; 报错
// 如果要冻结 const, 使用 object.freeze方法
const obj = Object.freeze({});
// obj.a = 123; // 不起作用 还会报错
console.log(obj);

// 跨模块常量
// const 声明 只在当前代码有效 跨模块写法：
// 查看constants.js test1.js test2.js

// 全局对象属性
// 浏览器指的是 window，  nodeJs 指的是 global对象
// 在ES5中全局对象的属性和全局变量是等价的
window.a = 1;
a; // 1
a = 2;
window.a; // 2

var a = 1;
// 如果在Node.js 的 REPL 环境，可以写成 global.a
// 或者采用通用的方法，写成 this.a
window.a // 1
let b = 1;
window.b; // undefined





