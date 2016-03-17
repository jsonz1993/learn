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

// instanceof
(function(){
    function A() {}
    A.prototype.x = 10;

    var a = new A();
    alert(a.x);

    alert(a instanceof A); // true

    // 如果设置原型为null
    A.prototype = null;

    // 'a'依然可以通过a.[[Prototype]] 访问原型
    alert(a.x);

    alert(a instanceof A); // 报错 A.prototype 是null instanceof 是从 A的原型开始查找
}());

// instanceof 如果对象的[[Prototype]]属性和构造函数的prototype属性的值设置的是一样的话，instanceof检查的时候会返回true
(function(){
    function B(){}
    var b = new B();

    alert(b instanceof B); // true

    function C() {}

    var __proto = {
        constructor : C
    };

    C.prototype = __proto;
    b.__proto__ = __proto;

    alert(b instanceof C); // true
    alert(b instanceof B); // false
}());

// 原型可以存放方法并共享属性
(function(){
    function A(x) {
        this.x = x || 100;
    }

    A.prototype = (function(){
        // 初始化上下文 使用额外的对象
        var _someShareVar = 550;

        function _someHelper() {
            alert('internal helper :' + _someShareVar);
        }

        function method1() {
            alert('method1 ' + this.x);
        }

        function method2() {
            alert('method2 ' + this.x);
        }

        // 原型
        return {
            constructor : A,
            method1 : method1,
            method2 : method2
        };
    })();

    var a = new A(10);
    var b = new A(20);

    a.method1(); // method1 : 10,
    a.method2(); // method2 : 10, internal helper : 520

    b.method1(); // method1 : 20
    b.method2(); // method2 : 20, internal helper: 520

    alert(a.method1 === b.method1);
    alert(b.method2 === a.method2);

}());

// TODO 读写属性 [[Get]] [[Put]]
(function(){
    var foo = {};
    foo.bar = 10; // 调用了 [[Put]]

    console.log(foo.bar); // 调用了 [[Get]]
    console.log(foo['bar']); // 一样

    // [[Get]] 伪代码
    /*
      O.[[Get]](P):

     // 如果是自己的属性，就返回
     if (O.hasOwnProperty(P)) {
        return O.P
     }

     //否则，继续分析原型
     var __proto = O.[[Prototype]];

     // 如果原型是 null, 返回 undefined
     // 最顶层Object.prototype.[[Prototype]] 是 null

     if (__proto === null ) {
        return undefined
     }

     // 否则，对原型链递归调用[[Get]],在各层的原型中查找属性 直到null为止
     return __proto.[[Get]](P)
    */

    // [[Put]] 伪代码
    /*
     O.[[Put]](P, V);

     // 如果不能给属性写值，就退出
     if (!O.[[CanPut]](P)){
        return;
     }

     // 如果对象没有自身的属性，就创建他
     if (!O.hasOwnProperty(P)) {
        createNewProperty(O, P, attributes: {
           ReadOnly : false,
           DontEnum : false,
           DontDelete : false,
           Internal : false
        });
     }

     // 如果属性存在就设置值，但不改变attributes特征
     O.P = V;
     */

    Object.prototype.x = 100;

    console.log(foo.x); // 100;

    foo.x = 10; // [[Put]]
    console.log(foo.x); // 10, 写在自身

    delete foo.x;
    console.log(foo.x); // 100 继承属性

    // 不能覆盖原型里的只读属性，复制结果会被忽略，这是内部的[[CanPut]]控制的

    // 例如 属性 length 是只读的 我们来掩盖一下length 试试
    function SuperString(){}

    SuperString.prototype = new String('abc');

    foo = new SuperString();

    console.log(foo.length); // 3

    foo.length = 5; // 调用 [[Put]] 发现说不可写入属性，return出来，具体看 Put 伪代码

    console.log(foo.length); // 依旧是 3

}());

// 属性访问器
// 内部的[[Get]] 和 [[Put]] 通过点符号或索引法来激活的。

(function(){
    var a = {
        testProperty : 10
    };

    alert(a.testProperty);
    alert(a['testProperty']);

    var propertyName = 'Property';
    alert(a['test'] + propertyName);

}());

(function(){
    var a = 10;

    alert(a.toString()); // 10;

    a.test = 100;
    // 在使用属性访问器时，他变成 new Number() 。使用后就会自动变成 10

    alert(a.test); // undefined

    // 执行 a.toString()的时候
    // 1. new Number(a);
    // 2. newNumber(a).toString();
    // 3. delete new Number(a)

    // 执行 a.test = 100;
    // 1. new Number(a);
    // 2. new Number(a).test = 100;
    // 3. delete new Number(a);

    // 黑科技 1..toString()

    // 他1. 解析成 1.0 1..toString() == 1.['String']
    // 1.toString() 语法报错
    // (1).toString() OK
    // 1..toString() OK
    // 1['toString']() OK
}());

// 原型链
(function(){
    function A() {
        alert('a.[[Call]] activated');
        this.x = 10;
    }
    A.prototype.y = 20;

    var a = new A();
    alert([a.x, a.y]); // 10 20

    function B() {}

    // 最近的原型链方法就是设置对象的原型为另外一个新对象
    B.prototype = new A();

    // 修复原型的 constructor 属性，否则的话就是A了
    B.prototype.constructor = B;

    var b = new B();
    alert([b.x, b.y]); // 10 20 两个都是继承

    // [[Get]] b.y
    // b.y (no) -->
    // b.[[Prototype]].y (no) -->
    // b.[[Prototype]].[[Prototype]].y (yes) - 20

    // where b.[[Prototype]] === B.prototype,
    // and b.[[Prototype]].[[Prototype]] === A.prototye

}());

(function(){
    function A(param) {
        if (!param) {
            throw 'Param required';
        }
        this.param = param;
    }

    A.prototype.x = 10;

    var a = new A(20);
    alert([a.x, a.param]); // 10,20

    function B() {}
    B.prototype = new A(); // Error 在父类做了错误判断，字类继承也会报错
    // TODO 感觉没什么干货
}());

(function(){
    function A() {
        alert('A.[[Call]] activated');
        this.x = 10;
    }
    A.prototype.y = 20;

    var a = new A();
    alert([a.x, a.y]); // 10 20

    function B() {
        // 或者使用 A.apply(this, arguments)
        B.superclass.constructor.apply(this, arguments);
        // 调用父构造函数来引用新创建对象的上下文
    }

    // 继承： 通过空的中间构造函数将原型连在一起
    var F = function(){};
    F.prototype = A.prototype; // 引用
    B.prototype = new F();
    // superproto 是自定义属性 方便标识而已
    B.superproto = A.prototype; // 显式引用到另外一个原型上， 'sugar'

    // 修复原型的 constructor 属性，否则就是A了
    B.prototype.constructor = B;

    var b = new B();
    alert([b.x, b.y]); // 10 20
}());

// TODO 可以写一个函数来继承
function inherit(child, parent) {
    var F = function() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.superproto = parent.prototype;
    return child;
}

(function(){
    function A() {}
    A.prototype.x = 10;

    function B() {}
    inherit(B, A);

    var b = new B();
    alert(b.x); // 10
}());

// 好难 语法糖没理解 ③
var inherit2 = (function(){
    function F(){}

    return function(child, parent) {
        F.prototype = parent.prototype;
        child.prototype = new F;
        child.prototype.constructor = child;
        child.superproto = parent.prototype;
        return child;
    }
})();

(function(){
    function A() {}
    A.prototype.x = 10;

    function B() {}
    inherit2(B, A);

    B.prototype.y = 20;
    B.prototype.foo = function(){
        alert('B#foo');
    };

    var b = new B();
    alert(b.x); // 10

    function C() {}
    inherit2(C, B);

    // 使用 superproto 语法糖
    C.prototype.foo = function(){
        C.superproto.foo.call(this);
        alert('C#Foo');
    };

    var c = new C();
    alert([c.x, c.y]);

    c.foo();
})();

// TODO ④ ES5为原型链标准化了这个工具函数 Object.create
(function(){
    if (!Object.create) {
        Object.create = function(parent, properties){
            function F() {}
            F.prototype = parent;
            var child = new F;
            for (var k in properties) {
                child[k] = properties[k].value;
            }
            return child;
        }
    }

    // 用法
    var foo = {x : 10};
    var bar = Object.create(foo, {y : {value : 20}});
    console.log(bar.x, bar.y);
})();

























