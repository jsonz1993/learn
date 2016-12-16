// ES5 RegExp构造函数的参数有两种
var regexp = new RegExp('xyz', 'i');
regexp = new RegExp(/xyz/i);
// ES6 
regexp = new RegExp(/xyz/ig, 'i').flags;
// 都等价于
var regexp = /xyz/i;

// 字符串的 match(), replace(), search(), split() 都在内部调用了 RegExp实例。所以都支持正则




