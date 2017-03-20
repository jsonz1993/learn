// 可以遍历的对象 Array Object Map Set
// 模拟遍历器
var it = makeIterator(['a', 'b']);
it.next(); // { value: 'a', done: false}
it.next(); // { value: 'b', done: false}
it.next(); // { value: undefined, done: true}

function makeIterator(array) {
	var nextIndex = 0;
	return {
		next: function() {
			return nextIndex < array.length ?
				{value: array[nextIndex++], done: false}:
				{value: undefined, done: true};
		}
	};
}