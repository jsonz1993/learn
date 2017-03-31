Array.from() 将类数组转为数组
// 一般可用在 NodeList && arguments
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
var arr1 = [].slice.call(arrayLike); //es5 [a,b,c]
let arr2 = Array.from(arrayLike); // es6

// Array.of() 将一组数值转为数组
Array.of(3, 11, 8); // [3, 11, 8]
Array.of(3).length; // 1


// [].find(); 找出第一个符合条件的成员 || undefined
// [].findIndex() 则是返回第一个符合条件的index || -1
[1,4,-5,10].find((n) => n < 0); // -5
[1, 5, 10, 15].find(funcion(value, index, arr) {
	return value > 9;
}); // 10

// [].fill() 用值填充数组
['a', 'b', 'c'].fill(7); // [7,7,7]
new Array(2).fill(7); // [7, 7]

// [].entries(), keys(), values()
for (let index of ['a', 'b'].keys()) {
	console.log(index); // 0, 1
}

for (let elem of ['a', 'b'].values()) {
	console.log(elem); // a, b
}

for (let [index,elem] of ['a', 'b'].entries()) {
	console(index, elem); // 0 'a', 1 'b'
}
