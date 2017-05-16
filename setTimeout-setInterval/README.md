---
title: setTimeout && setInterval 学习
tags:
  - github
  - JavaScript
  - learn
categories:
  - technology
date: 2017-05-16 23:06:32
---

定时器大家平时做js开发都不陌生了 最常见的应用应该就是验证码的倒计时 或 某段函数的异步执行了。

## 概述
js的定时器主要有 `setTimeout` 和 `setInterval`.

这两个函数执行后，都会返回一个整数，表示定时器的编号，后面可以通过`clearTimeout` 或 `clearInterval`来清除该定时器。

`setTimeout`和`setInterval`的运行机制都是 将代码移除本次执行，等待下一轮的 Event Loop再检查是否到执行的时间。
所以可以用 `setTimeout(()=> {}, 0)` 来模拟执行异步操作。

## setTimeout

### 执行函数
setTimeout 是用来制定某段函数或代码，在多少毫秒延迟后执行。
如果传入的是一段代码，必须是字符串类型的。这时候js会调用`eval`来执行该代码， 出于安全与性能考虑 建议直接传入一个函数的形式来执行。
delay 为延迟的时间，单位是`ms`
```JavaScript
	var timerId = setTimeout(func|code, delay);
```

### 参数
setTimeout可以有多个参数，第三个参数开始为传入运行方法的参数。
很经典的闭包面试题就可以用setTimeout传参来解决
```JavaScript
for (var i = 0; i< 10; i++) { setTimeout(function() { console.log(i)} ,0) } // 运行结果是输出10个10
for (var i = 0; i< 10; i++) { setTimeout(function(i) { console.log(i)} ,0, i) } // 运行结果是输出0-9
```

### 运行环境
setTimeout的运行环境是全局(eval)。
```JavaScript demo1
var x = 1;
var o = {
	x: 2,
	y: function() {
		console.log(this.x);
	}
}

setTimeout(o.y, 0); // 此时输出的是1，因为全局(window)上的x属性是1
```

```JavaScript demo2
function User(login) {
	this.login = login;
	this.sayHi = function() {
		console.log(this.login);
	}
}

var user = new User('John');
setTimeout(user.sayHi, 0); // undefined 因为执行的时候 全局对象没有 login这个属性
```

解决方法一： 放到一个匿名函数里面执行
```JavaScript 方法1
setTimeout(function() {
	user.sayHi();
});
```

解决方法二： 缓存当前的this变量
```JavaScript 方法2
document.body.addEventListener('click', function() {
	var _this = this;
	setTimeout(function() {
		_this.value = 'ok';
	})
}, false);
```

解决方法三： 目前项目中最常用， 用`es6`的`箭头函数`
```JavaScript 方法3
setTimeout(()=> user.sayHi(), 0);
```

## setInterval

`setInterval`的使用方法与参数和`setTimeout`一致。 不过`setInterval`是间隔 Xms 执行一次该函数。
但实际上 函数执行需要时间，所以两次执行函数之间的间隔会小于 `setInterval`指定的时间.

### setInterval 执行时间

假定`setInterval`指定每100ms执行一次，每次执行的函数耗时为 5ms, 那么第一次执行结束后的 95ms 后会执行第二段函数。
如果某次执行特别耗时 如 105ms, 那么 当它结束后，会立即执行下一次的函数。 __此段为某博客看到的，个人实践得出执行时间有快与慢的偏差没有绝对提前执行__

下面看代码例子
```JavaScript demo3
function init() {
	// 耗时 5ms 的某个操作
	handleMouseClick();
	// 耗时 5ms 的某个操作
	setInterval(timerTask, 10);
	// 耗时 5ms 的某个操作
}

function handleMouseClick() {
	// 耗时 8ms 的某个操作
}

function timerTask() {
	// 耗时 2ms 的某个操作
}

init();
```
网上博客说法（此处保留意见）：
0-15ms: 运行init
15-23ms: 运行handleMouseClick函数。请注意，这个函数是在5ms时触发的，应该在那个时候就立即运行，但是由于单线程的关系，必须等到init函数完成之后再运行。
23-25ms: 运行timerTask函数。 规定每10ms运行一次，既在20ms， 30ms， 40ms会运行。但是由于当前还有任务在运行，因此必须延迟到前面任务完成后再运行
30-32ms: 运行timerTask
40-42ms: 运行timerTask

由于平时debug调试时，在`handleMouseClick`应该不会等到`init`运行后再执行。于是抱着学习的态度自己写了一段代码
```JavaScript demo4
function _init() { demo(10);console.log(1); demo(10); handle(); demo(10);console.log(2); setInterval(()=> console.log('setInterval'), 1000); console.log(3) }; function handle() {demo(15); console.log('handle')};function demo(i) {var sum = 0; for (var j = 0; j < i * 1000000; j++) {sum += j;}};
_init();
```
利用for循环来造成运行实践的延长
运行 `_init()` 结果是：
① 输出`1` 隔26ms后 输出`handle` 隔10ms后 输出`2` 同一时间输出`3`(此处可以理解成执行的时间小于1ms)。此时 _init()执行结束 由于没有返回值，所以会默认返回 `undefined`
② `_init()`执行结束之后 再去跑 `setInterval定时器` 所以 隔 1000ms(实际是1005ms) 后输出第一个`setInterval`。间隔 999ms后输出第二个`setInterval` 间隔 997ms后输出第三个 `setInterval`
所以觉得说`setInterval`是当前所有函数运行后才开启定时的，而不是执行到`setInterval`的时候开始计时。
而且运行的间隔不是固定偏多或偏少
```

最后再给出一个例子理解`setTimeout`的异步执行机制
```JavaScript demo5
setTimeout(function() { 
  console.log("Timeout");
}, 0);

function a(x) { 
    console.log("a() 开始运行");
    b(x);
    console.log("a() 结束运行");
}

function b(y) { 
    console.log("b() 开始运行");
    console.log("传入的值为" + y);
    console.log("b() 结束运行");
}

console.log("当前任务开始");
a(42);
console.log("当前任务结束");
```
运行结果为
当前任务开始
a() 开始运行
b() 开始运行
传入的值是 42
b() 运行结束
a() 运行结束
当前任务结束
timeout


## 后记

无。