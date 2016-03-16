/**
 * Created by Jsonz on 2016/3/16.
 */

var a = undefined,
    b = null,
    c = true,
    d = 'test',
    e = 10;

if (typeof  b === 'object') {
    console.log('null 的 type 是 object');
}

// 静态对象不能拓展新属性。可以通过 Object.freeze()冻结对象
(function(){
    var foo = {
        x : 10
    };

    Object.freeze(foo); // 冻结对象
    console.log(Object.isFrozen(foo)); // 检查冻结状态

    foo.x = 1000; // 不能修改
    foo.y = 200; // 不能拓展

    delete foo.x;
    console.log(foo);
}());

// 使用 Object.preventExtensions(o) 方法防止扩展，使用Object.defineProperty(o)定义属性

(function(){
    var foo = {
        x : 10
    };

    Object.defineProperty(foo, 'y', {
        value : 20,
        writable : false, // 只读
        configurable : false // 不可配置
    });

    foo.y = 200; // 不可修改

    delete foo.y; // false 不能删除

    Object.preventExtensions(foo); // 防止扩展 不可添加，但是可以修改其他属性

    foo.z = 30;
    foo.x = 20;
    delete foo.x;

    console.log(foo);

}());


(function(){
    // 平时建议不要用，容易出错又没卵用。 new Boolean(false) // typeof === 'object' 所以判断的时候是true

    // 对象
    var c = new Boolean(true);
    var d = new String('test');
    var e = new Number(10);

    // 转回基本类型
    c = Boolean(c);
    d = String(d);
    e = Number(e);

}());

// 字面量Literal
(function(){
    var getClass = Object.prototype.toString;
    Object = Number;

    var foo = new Object;
    alert([foo,getClass.call(foo)]);
}());

// 对象转换
(function(){
    var a = new Number(1);
    var primitiveA = Number(a); // 隐式调用 valueOf
    var alsoPrimitiveA = a.valueOf(); // 显示调用

    console.log(a, primitiveA, alsoPrimitiveA); // obj num num

    // valueOf() 对象会返回this; 日期对象会返回 .getTime()

    var b = {
        valueOf : function(){
            return 100;
        },
        toString : function(){
            return '__test';
        }
    };

    alert(b); // 调用的是 toString
    alert(b + 10); // 调用的是valueOf

    // valueOf删除以后，toString 又会自动调用
    delete a.valueOf;
    alert(a + 10); // 调用 toString
    // TODO ① 在数值运算中有限调用 valueOf() ，字符串运算中优先调用 toString()

}());

(function(){
    var a = 1,
        b = 2;

    // 隐式
    var c = a + b, // 3 number
        d = a + b + '5'; // 35 string

    // 显式
    var e = '10', // 10 string
        f = +e, // 10 number 有点不解 TODO ② ？？？
        g = parseInt(e,10); // 10 number
}());

(function(){
    /**
     * {ReadOnly}——忽略向属性赋值的写操作尝，但只读属性可以由宿主环境行为改变——也就是说不是“恒定值” ;
     * {DontEnum}——属性不能被for..in循环枚举
     * {DontDelete}——糊了delete操作符的行为被忽略（即删不掉）;
     * {Internal}——内部属性，没有名字（仅在实现层面使用），ECMAScript里无法访问这样的属性。
     */

    var foo = {};

    Object.defineProperty(foo, "x", {
        value: 10,
        writable : true, // ReadOnly = false
        enumerable : false, // DontEnum = true
        configurable : true // DontDelete = false
    });

    console.log(foo.x); // 10

    // 通过 descriptor 获取特性集 attributes
    var desc = Object.getOwnPropertyDescriptor(foo,'x'); // Object {value: 10, writable: true, enumerable: false, configurable: true}
}());

// 内部属性和方法
(function(){
    /*
     * [[Prototype]] 对象的原型
     * [[Class]] 字符串对象的表示Array, Function 等      Object.prototype.toString()
     * [[Get]] 获取属性值的方法
     * [[Put]] 设置属性值的方法
     * [[CanPut]] 检查属性是否可写
     * [[HasProperty]] 检查对象是否拥有该属性
     * [[Delete]] 从对象删除该属性
     * [[DefaultValue]] 返回对象对应的原始值（会调用valueOf方法）
     */

    var getClass = Object.prototype.toString;

    getClass.call({}); // [object Object]
    getClass.call([]); // [object Array]
    getClass.call(1); // [object Number]
}());

// 构造函数
// 对象创建（内存分配）是由构造函数的内部方法[[Construct]]负责的。该内部方法的行为是定义好的，所有的构造函数都是使用该方法来为新对象分配内存的。
(function(){
    function A(){

        // 更新创建的对象
        this.x = 10;

        // 返回的是不同的对象
        return [1,2,3];
    }

    var a = new A();

    console.log(a.x, a); // undefined [1,2,3]
}());

// 属性构造函数
(function (){
    function A() {}
    var a = new A();
    alert(a.constructor); // function A() {}
    alert(a.constructor === A); // true
}());

(function(){
    function A() {}

    A.prototype.x = new Number(10);

    var a = new A();
    alert(a.constructor.prototype); // [object Object]

    alert(a.x); // 10

    alert(a.constructor.prototype.x === a.x); // true

})();

(function(){
    var foo = {x : 10};

    Object.defineProperty(foo,'y',{
        value : 20,
        enumerable : false // {DontEnum} = true
    });

    console.log(foo.x, foo.y); // 10, 20

    for (var k in foo) {
        console.log(k); // only xx
    }

    var xDesc = Object.getOwnPropertyDescriptor(foo, 'x');
    var yDesc = Object.getOwnPropertyDescriptor(foo, 'y');

    console.log(
        xDesc.enumerable, // true
        yDesc.enumerable // false
    )
}());

(function(){
    function A() {}
    A.prototype.x = 10;

    var a = new A();
    alert(a.x); // 10

    A.prototype = {
        constructor : A,
        x : 20,
        y : 30
    };

    // 重置A.prototype之后，前面所有的关联都切断了
    alert(a.x); // 10
    alert(a.y); // undefined

    var b = new A();

    // 新对象是从新原型获取
    alert(b.x); // 20
    alert(b.y); // 30
}());

// 非标准的__proto__属性
(function (){
    function A(){}
    A.prototype.x = 10;

    var a = new A();
    alert(a.x); // 10

    var __newPrototype = {
        constructor : A,
        x : 20,
        y : 30
    };

    A.prototype = __newPrototype;

    var b = new A();
    alert(b.x); // 20;
    alert(b.y); // 30;

    // a 依旧是绑定旧的原型
    alert(a.x); // 10
    alert(a.y); // undefined

    // 显示绑定到新的原型
    a.__proto__ = __newPrototype; // 用 a.prototype = __newPrototype 不生效
    alert(a.x); // 20;
    alert(a.y); // 30;
})();

// 对象独立于构造函数
(function(){
    function A(){}
    A.prototype.x = 10;

    var a = new A();
    alert(a.x); // 10

    // 设置A为null - 显示引用构造函数
    A = null;

    // 但是依旧可以用 .constructor 属性来创建对象
    var b = new a.constructor();
    alert(b.x); // 10;

    // 隐式的引用也删除掉
    delete a.constructor.prototype.constructor;
    delete b.constructor.prototype.constructor;

    alert(a.x); // 10
    alert(b.x); // 10

}());

























