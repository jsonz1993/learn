// Generator 函数是一个状态机，封装了多个内部状态， 会返回一个可遍历对象
// function 关键字和函数名之间有星号， 内部使用yield
// 要跑需要加额外的babel包，目前安装的不是全部

function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}
var hw = helloWorldGenerator(); // 此时并不执行，而是返回一个指向内部状态的指针对象

// 下一步开始调用遍历器的next方法，使指针指向下个状态。也就是说每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。
hw.next(); // {value: 'hello', done: false}
hw.next(); // {value: 'world', done: false}
hw.next(); // {value: 'ending', done: true}
hw.next(); // {value: 'undefined', done: true}

// 由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield语句就是暂停标志。
// 遍历器对象的next方法的运行逻辑如下。
// （1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
// （3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。


// next 参数
function* f() {
	for (var i = 0; true; i ++) {
		var reset = yield i;
		if (reset) { i = -1;}
	}
}
var g = f();
g.next(); // {value: 0, done: false}
g.next(); // {value: 1, done: false}
g.next(true); // {value: 0, done: false}

// Generator函数从暂停到恢复，上下文状态不变。通过next方法的参数，就有办法在Generator函数开始运行之后，继续向函数体内部注入值。也就是说，可以在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
function* foo(x) {
	var y = 2 * (yield ( x + 1)),
		z = yield( y/ 3);
	return ( x+ y+ z);
}
var a = foo(5);
a.next() // Object{value:6, done:false}
a.next() // Object{value:NaN, done:false}
a.next() // Object{value:NaN, done:true}

var b = foo(5);
b.next() // { value:6, done:false }
b.next(12) // { value:8, done:false }
b.next(13) // { value:42, done:true }

// 由于next方法的参数表示上一个yield语句的返回，所以第一次调用不能带参数，v8会直接忽略。

// for...of 可以遍历 Generator生成的 Iterator对象
function* foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	yield 6;
	return 7;
}
for (let v of foo()) {
	console.log(v); // 1 2 3 4 5 6
}

// 菲波那切数列
function* fibonacci() {
	let [prev, curr] = [0, 1];
	for (;;) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}
for (let n of fibonacci()) {
	if (n > 100) break;
	console.log(n);
}

// 利用Generator函数给对象加遍历接口
function* objectEntries(obj) {
	let propKeys = Reflect.ownKeys(obj);

	for (let propKey of propKeys) {
		yield [propKey, obj[propKey]];
	}
}
let jane = {first: 'Jane', last: 'Doe'};
for (let [key, value] of objectEntries(jane)) {
	console.log(`${key}: ${value}`);
}

// 错误捕获
var g = function* () {
	try {
		yield;
	} catch(e) {
		console.log('内部捕获', e);
	}
};

var i = g;
i.next();
try {
	i.throw('a');
	i.throw('b');
} catch (e) {
	console.log('外部捕获', e);
}
// 内部 a
// 外部 b

// Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数。
function* gen() {
	yield 1;
	yield 2;
	yield 3;
}
var g = gen();
g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
























