// 2进制(0b) 8进制(0o)
0b111110111 === 503;
0o767 === 503;
// 转十进制
Number('0b111'); // 7
Number('0o10'); // 8

// isFinite,isNaN对非数值一律返回 `false`, Number 新增 parseInt,parseFloat
Number.isFinite(Infinity); // false
Number.isNaN(NaN); // true
// js 内部。 25.0 与 25是同个值，所以也是整数
Number.isInteger(25.1); // false

// Math对象扩展
Math.trunc(); // 去除小数，返回整数。直接舍去 没有四舍五入
Math.sign(); // 判断正数负数还是零。 返回: +1, -1, 0, -0, NaN
Math.cbrt(); // 计算一个数的立方根





