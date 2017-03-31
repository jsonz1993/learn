// 以前做法
// function A() {
// 	this.foo = 'hello';
// }
// if (!global._foo) global._foo = new A();
// module.exports = global._foo;

const FOO_KEY = Symbol('foo');
function A() {
	this.foo = 'hello';
}
if (!global[FOO_KEY]) global[FOO_KEY] = new A();
module.exports = global[FOO_KEY];