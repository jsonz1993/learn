export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;

// 也可以
var a = 1,
	b = 2;

export {a, b};

// 输出重命名
function v1(argument) {
	// body...
}
export {
	v1 as profileV1
}

export default function() {
	console.log('foo');
}