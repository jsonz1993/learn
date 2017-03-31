/* 块级作用域 */


// 为什么需要块级作用域
// 1.
(function() {
	var tmp = new Date();

	function f() {
		console.log(tmp);

		if (false) {
			var tmp = 'hello world'
		}
	}
	f(); //undefined
})();

//2.
(function() {
	var s = 'hello';
	for (var i = 0; i < s.length; i++) {
		// console.log(s[i]);
	}
	console.log(i); // 5
})();

(function() {
	let n = 5;
	if (true) {
		let n = 10;
	}

	console.log(n); // 5

	let b = 10;
	b = 20;
	console.log(b);
})();


// 有了 let，可以使用块级作用域来代替 IIFE（立即执行匿名函数)
{
	let a = 10;
}





