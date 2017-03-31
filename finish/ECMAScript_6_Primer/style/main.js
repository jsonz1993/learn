// http://es6.ruanyifeng.com/#docs/style

// 1.块级作用域
// （1）let 取代 var
// ES6提出了两个新的声明变量的命令：let和const。其中，let完全可以取代var，因为两者语义相同，而且let没有副作用。
// (2) 全局常量和线程安全
// const声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。
// 所有的函数都应该设置为常量。

// 2. 字符串
// 静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

// 3. 解构赋值
// 使用数组成员对变量赋值时，优先使用解构赋值。
// 函数的参数如果是对象的成员，优先使用解构赋值。
// 如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

// 4. 对象
// 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
// 对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
// bad
// const a = {};
// a.x = 3;
// if reshape unavoidable
// const a = {};
// Object.assign(a, { x: 3 });
// good
// const a = { x: null };
// a.x = 3;
// 对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。
// var ref = 'some value';
// bad
// const atom = {
//   ref: ref,
//   value: 1,
//   addValue: function (value) {
//     return atom.value + value;
//   },
// };
// good
// const atom = {
//   ref,
//   value: 1,
//   addValue(value) {
//     return atom.value + value;
//   },
// };

// 5. 数组
// 使用 `...` 拷贝数组
// 使用 Array.from将类数组转为数组

// 6. 函数
// 立即执行函数可以写成箭头函数的形式。
(() => {
    console.log('yoyo');
});
// 那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了this。
// bad
[1, 2, 3].map(function(x) {
    return x * x;
});
// good
[1, 2, 3].map((x) => {
    return x * x;
});
// best
[1, 2, 3].map(x => x * x);
// 箭头函数取代Function.prototype.bind，不应再用self/_this/that绑定 this。
// bad
// const self = this;
// const boundMethod = function(...params) {
// return method.apply(self, params);
// }
// acceptable
// const boundMethod = method.bind(this);
// best
// const boundMethod = (...params) => method.apply(this, params);
// 简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。

// 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。
// bad
function divide(a, b, option = false) {}
// good
function divide(a, b, { option = false } = {}) {}
// 不要在函数体内使用arguments变量，使用rest运算符（...）代替。因为rest运算符显式表明你想要获取参数，而且arguments是一个类似数组的对象，而rest运算符可以提供一个真正的数组。
// bad
function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}
// good
function concatenateAll(...args) {
    return args.join('');
}

// 使用默认值语法设置函数参数的默认值。
// bad
function handleThings(opts) {
    opts = opts || {};
}
// good
function handleThings(opts = {}) {
    // ...
}

// 7. Map结构
// 注意区分Object和Map，只有模拟现实世界的实体对象时，才使用Object。如果只是需要key: value的数据结构，使用Map结构。因为Map有内建的遍历机制。
// let map = new Map(arr);
// for (let key of map.keys()) {
// console.log(key);
// }
// for (let value of map.values()) {
// console.log(value);
// }
// for (let item of map.entries()) {
// console.log(item[0], item[1]);
// }

// 8. Class
// 总是用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解。
// bad
// function Queue(contents = []) {
//   this._queue = [...contents];
// }
// Queue.prototype.pop = function() {
//   const value = this._queue[0];
//   this._queue.splice(0, 1);
//   return value;
// }

// // good
// class Queue {
//   constructor(contents = []) {
//     this._queue = [...contents];
//   }
//   pop() {
//     const value = this._queue[0];
//     this._queue.splice(0, 1);
//     return value;
//   }
// }

// 使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。

// // bad
// const inherits = require('inherits');
// function PeekableQueue(contents) {
//   Queue.apply(this, contents);
// }
// inherits(PeekableQueue, Queue);
// PeekableQueue.prototype.peek = function() {
//   return this._queue[0];
// }

// // good
// class PeekableQueue extends Queue {
//   peek() {
//     return this._queue[0];
//   }
// }

// 9. 模块 
// 首先，Module语法是JavaScript模块的标准写法，坚持使用这种写法。使用import取代require。

// // bad
// const moduleA = require('moduleA');
// const func1 = moduleA.func1;
// const func2 = moduleA.func2;

// // good
// import { func1, func2 } from 'moduleA';
// 使用export取代module.exports。
// // commonJS的写法
// var React = require('react');
// var Breadcrumbs = React.createClass({
//   render() {
//     return <nav />;
//   }
// });
// module.exports = Breadcrumbs;
// // ES6的写法
// import React from 'react';
// const Breadcrumbs = React.createClass({
//   render() {
//     return <nav />;
//   }
// });
// export default Breadcrumbs

// 如果模块只有一个输出值，就使用export default，如果模块有多个输出值，就不使用export default，不要export default与普通的export同时使用。

// 不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。

// // bad
// import * as myObject './importModule';

// // good
// import myObject from './importModule';
// 如果模块默认输出一个函数，函数名的首字母应该小写。

// function makeStyleGuide() {
// }

// export default makeStyleGuide;
// 如果模块默认输出一个对象，对象名的首字母应该大写。

// const StyleGuide = {
//   es6: {
//   }
// };

// export default StyleGuide;

// 10. ESLint的使用
// ESLint是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

// 首先，安装ESLint。

// $ npm i -g eslint
// 然后，安装Airbnb语法规则。

// $ npm i -g eslint-config-airbnb
// 最后，在项目的根目录下新建一个.eslintrc文件，配置ESLint。

// {
//   "extends": "eslint-config-airbnb"
// }
// 现在就可以检查，当前项目的代码是否符合预设的规则。

// index.js文件的代码如下。

// var unusued = 'I have no purpose!';

// function greet() {
//     var message = 'Hello, World!';
//     alert(message);
// }

// greet();
// 使用ESLint检查这个文件。

// $ eslint index.js
// index.js
//   1:5  error  unusued is defined but never used                 no-unused-vars
//   4:5  error  Expected indentation of 2 characters but found 4  indent
//   5:5  error  Expected indentation of 2 characters but found 4  indent

// ✖ 3 problems (3 errors, 0 warnings)
// 上面代码说明，原文件有三个错误，一个是定义了变量，却没有使用，另外两个是行首缩进为4个空格，而不是规定的2个空格。












