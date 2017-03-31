// 属性简洁表达法
var foo = 'bar',
    baz = { foo };
baz; // { foo: 'bar'}
const f = (x, y) => ({ x, y });
// 等于
function f1(x, y) {
    return { x: x, y: y }
};
var o = {
    method() {
        return 'Hello!';
    }
};
// 等于
var o = {
    method: function() {
        return 'hello'
    }
}
var birth = '2010/01/01',
    Person = {
        name: 'Jsonz',
        birth,
        hello() {
            return this.name
        }
    };
// CommonJs输出变量
var ms = {};
const getItem = (key) => key in ms ? me[key] : null;
const setItem = (key, alue) => ms[key] = value;
const clear = () => ms = {};
module.exports = { getItem, setItem, clear };

// 新增对象定义方法
let proKey = 'foo';
let obj = {
    [proKey]: true,
    ['a' + 'b']: 123
}
let obj1 = {
    ['h' + 'ello']() {
        return 'hi';
    }
};
obj1.hello();

// Object.is() 基本等于 ===
// 不同点 +0 === -0; false ;NaN === NaN; false; Object.is(+0, -0); true

// Object.assign()
var obj4 = { a: 1 };
var obj2 = { b: { name: 1 } }
var obj3 = { b: { c: 3 } };
Object.assign(obj4, obj2, obj3); // 实现的是浅拷贝。
console.log(obj4); // { a: 1, b: { c: 3 } }

// 属性遍历
// for...in 自身继承和可枚举 不含Symbol
// Objest.keys(obj) 自身所有可枚举 不包括继承Symbol
// Object.getOwnPropertyNames(obj) 自身，包括不可枚举 不包括继承Symbol
// Object.getOwnPropertySymbols(obj) 自身所有 不包括继承Symbol
// Refect.ownKeys(obj) 包括所有自身属性 包括不可枚举 包括Symbol

// Object.keys(obj)
var objj = { foo: 'bar', baz: 42 };
Object.keys(objj)
    // ['foo', 'baz']
let { keys, values, entries } = Object;
for (let key of keys(objj)) { console.log(key) }; // foo, baz
for (let value of values(objj)) { console.log(value) }; // bar, 42
for (let [key, value] of entries(objj)) { console.log([key, value]) }; // [foo,bar],[baz,42]




