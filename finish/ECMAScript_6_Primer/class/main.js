// 传统
function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
};
var p = new Point(1, 2);

// 定义类
class PointClass {
    // 构造函数 constructor
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // 原型方法
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
typeof PointClass; // function
PointClass === PointClass.prototype.constructor; // true
var b = new PointClass();
// class 定义的一定要加个new
// class 不存在变量提升
try {
    new Foo(); // 报错
    class Foo {};
}
// 集成
// class 的另一种写法
const MyClass = class Me {
        getClassName() {
            return Me.name;
        }
    }
    // 立即执行
let person = new class {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName(); // '张三'

// this
// class 含的this 指向类的实例

// Class 之间用 extends 关键字实现继承
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}

// super当函数调用，代表父类的构造函数。ES6要求，自雷的构造函数必须执行一次super函数
// super当对象用，指向父类的原型对象.调用时，super会绑定子类的this


// Class的静态方法
// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Foo {
	static classMethod() {
		return 'hello';
	}
}
Foo.classMethod(); // hello
var foo = new Foo();
foo.classMethod(); // 报错
// 但是静态方法可以被子类继承

// class 的静态属性和实例属性
class Foo {}
Foo.prop = 1;
Foo.prop; // 1











