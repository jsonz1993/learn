// Set 类似数组，但是成员值是唯一的
var s = new Set();
[...'245643221'].map(x => s.add(x));
for (let i of s) {console.log(i)}; // 2 3 4 5

// 例一
var set = new Set([1, 2, 3, 4, 4]);
console.log([...set]); // [1,2,3,4]
console.log(set); // {1, 2, 3, 4}
set.size; // 5

