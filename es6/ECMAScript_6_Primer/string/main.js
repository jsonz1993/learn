// 1. Unicode 表示法  ....没什么卵用暂时 编码
// 2.codePointAt() ....没什么卵用暂时 编码
// 3. String.fromCodePoint() .... 没什么卵用 编码
// 4. 字符串的遍历器接口 比 for准确，因为可以识别一堆什么鬼编码
for (let codePoint of 'foo') {
	console.log(codePoint);
}
// 5.at 比 charAt 准确 因为可以识别一堆鬼编码 但是好像还没支持
// 6. normalize()   // ... 没什么卵用 编码

// 7. 索引方法 includes(), startsWith(), endsWith(); 都返回布尔值

// includes() 是否找到参数字符串
// startsWith() 是否在字符串头部
// endsWith() 是否在字符串尾部
let s = 'Hello world!';
s.startsWith('world', 6); // true 从第六位开始搜索
s.endsWith('Hello', 5); // True 对前 5个字符进行搜索
s.includes('Hello', 6); // false

// 8. repeat() 将原字符重复n遍  参数是小数会被向下取整,负数等会报错,字符串会转数字，NaN为0；
'x'.repeat(3); // xxx
'hello'.repeat(2); // hellohello
'na'.repeat(0); // '';

// 9. padStart(), padEnd() ES7

// [[[[[[[[[[[[10. 模版字符串]]]]]]]]]]]]
var basket = {};
// 传统模版
var str = 'There are <b>' + basket.count + '</b>' +
	'items in your basket,' +
	'<em>' basket.onSale +
	'</em> are on sale!';
// ES6
var strEs6 = `There are <b>${basket.count}</b> items
	in your basket, <em> ${basket.onSale}</em>
	are on sale!`;

// 模版字符串，用 ` 标识，也可以当多行字符串，和普通字符串
// 单行
`In Javascript '\n' is a line-feed.`
// 多行
` In Javascript this is
	not legal.`
// 字符串变量
var name = "bob", time = 'today';
`hello ${name}, how are you ${time}?`;

// 用模板字符串，多行字符串里宿友的缩进和空格都会保留，如果想消除可以用 trim
var str = `
	<ul>
		<li> first</li>
		<li> second</li>
	<ul>
`.trim();

// 大括号内可以放javacript 表达式
var x1 = 1, y1 = 2, fn1 = function() { return 'hello world'};
`${x} + ${y} = ${x + y + fn()}`;

// 如果字符串内的变量没有声明 会报错
try { var msg = `hello, ${place}`} catch(e) { console.log('如果字符串内的变量没有声明 会报错')}

// 模板字符串支持嵌套
const temp = addrs => ` 
	<table> 
	${ addrs.map(addr => ` 
		<tr><td> ${addr.first}</td></tr>
		<tr><td> ${addr.last}</td></tr>
	`).join('')}
	</table>
`; // 可读性很差


// 11. 模板编译 .... 暂时用不上，平时都是用框架模板 可读性一般
// 标签模板 

// 未完待续 [http://es6.ruanyifeng.com/#docs/string#标签模板]
















