/**
 * Created by Administrator on 2016/9/11.
 */

// 面向对象

/**
 * 封装
 */
// 创建一个类，添加变量属性或方法
var Book = function (id, bookname, price){
    this.id = id;
    this.bookname = bookname;
    this.price = price;
};
Book.prototype.display = function (){
};
var book = new Book(10, 'javaScript设计模式', 50);
console.log(book.bookname, 18); // javaScript设计模式
// 通过this 添加方法、属性是在当前对象上添加，所以每创建一次就会复制一份。原型可以共享。
// 创建一个函数或对象时会为其创建一个原型对象prototype,在prototype对象有一个constructor属性，指向拥有这个原型对象的函数或对象。

//属性和方法的封装
var Book = function (id, name, price){
    // 私有属性
    var num = 1;

    function checkId(){
    }

    // 特权方法
    this.getName = function (){
    };
    this.getPrice = function (){
    };
    this.setName = function (){
    };
    this.setPrice = function (){
    };
    // 对象公有属性
    this.id = id;
    // 对象公有方法
    this.copy = function (){
    };
    // 构造器
    this.setName(name);
    this.setPrice(price);
    console.log(Book.isChinese, 39); // true
};
// 类静态公有属性（对象不能访问） 可以通过 Book.isChinese 访问
Book.isChinese = true;
Book.resetTime = function (){
    console.log('new Tiem');
};
Book.prototype = {
    // 公有属性
    isJSBook: false,
    // 公有方法
    display: function (){
    }
};

var b = new Book(11, 'JavaScript 设计模式', 50);
console.log(b.num, 54); // undefined
console.log(b.id, 55); // 11

// 闭包实现
var Book = (function (){
    // 静态私有变量
    var bookNum = 0;
    // 静态私有方法
    function checkBook(name){
    }

    // 返回构造函数
    return function (newId, newName, newPrice){
        // 私有变量
        var name, price;
        // 私有方法
        function checkId(id){
        }

        // 特权方法
        this.getName = function (){
        };
        // 公有方法
        this.copy = function (){
        };
        // 公有属性
        this.id = newId;
        if (bookNum > 100) throw new Error('我们只出版100书');
        // 构造器
        this.setName(name);
    }
})();
Book.prototype = {
    // 静态公有属性
    isJsBook: true,
    // 静态公有方法
    display: function (){
    }
};

// 但是一般闭包实现，直接在函数内创建整个类再返回，增加可读性
var Book = (function (){
    // 静态私有变量
    var bookNum = 0;
    // 静态私有方法
    function checkBook(name){
    }

    // 返回构造函数
    function _book(newId, newName, newPrice){
        // 私有变量
        var name, price;
        // 私有方法
        function checkId(id){
        }

        // 特权方法
        this.getName = function (){
        };
        // 公有方法
        this.copy = function (){
        };
        // 公有属性
        this.id = newId;
        if (bookNum > 100) throw new Error('我们只出版100书');
        // 构造器
        this.setName(name);
    }

    _book.prototype = {
        // 静态公有属性
        isJsBook: true,
        // 静态公有方法
        display: function (){
        }
    };

    return _book;
})();

// 创建对象的安全模式， 加个是否有使用new的判断
var Book = function (title, time, type){
    // 判断执行过程中 this 是否是当前这个对象（如果是，说明用new 创建的）
    if (this instanceof Book) {
        this.title = title;
    } else {
        return new Book(title, time, type);
    }
};
var b = new Book('Javascript'),
    c = Book('Javascript');

/**
 * 继承
 *
 * 类式继承 缺点：引用属性会共用，如 this.arr = [1]; instance1.arr.push(2); instance2.arr // [1,2]
 *
 * 构造函数继承 缺点：代码得不到复用
 *
 * 组合继承 组合原型prototype 与构造函数继承结合。 SuperClass.call(); SubClass.prototype = new SuperClass(); 缺点： 实例化两次SuperClass
 *
 * 原型继承 开销比类式继承小点点，但是缺点一样
 *
 * 寄生式继承 只是在原型继承的基础上加了自己的方法，没什么其他特别
 *
 * 寄生组合式继承 一般用该方法实现继承
 * 利用 构造函数式继承继承属性 SuperClass.call(this)
 * 利用原型继承方法 subClass.prototype = superClass.prototype
 *
 * 多继承 extend 遍历继承
 *
 * 多态 argument 长度判断
 */

// 类式继承
// 父类
function SuperClass(){
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function (){
    return this.superValue;
};

// 子类
function SubClass(){
    this.subValue = false;
}
//继承父类
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function (){
    return this.subValue;
};
var instance = new SubClass();
console.log(instance.getSuperValue(), '类式继承');
console.log(instance.getSubValue(), '类式继承');
// instanceof 判断前面对象是否是后面对象的实例。
console.log(instance instanceof SuperClass, '类式继承');
console.log(instance instanceof SubClass, '类式继承');
console.log(SubClass instanceof SuperClass, '类式继承');
console.log(SubClass.prototype instanceof SuperClass, '类式继承');
//类式继承缺点
function SuperClass(){
    this.books = ['javascript'];
}
function SubClass(){
}
SubClass.prototype = new SuperClass();
var instance1 = new SubClass(),
    instance2 = new SubClass();
console.log(instance2.books, '类式继承');
instance1.books.push('html');
console.log(instance2.books, '类式继承');


// 构造函数继承
// 父类
function SuperClass(id){
    this.books = ['javascript', 'html'];
    this.id = id;
}
SuperClass.prototype.showBooks = function (){
    console.log(this.books);
};

// 子类
function SubClass(id){
    SuperClass.call(this, id);
}
var instance1 = new SubClass(10),
    instance2 = new SubClass(20);
instance1.books.push('设计模式');
console.log(instance1.books, '构造函数继承');
console.log(instance2.books, '构造函数继承');
console.log(instance1.id, '构造函数继承');
console.log(instance2.id, '构造函数继承');


// 组合继承
// 父类
function SuperClass(name){
    this.name = name;
    this.books = ['html', 'css'];
}
SuperClass.prototype.getName = function (){
    console.log(this.name);
};

// 子类
function SubClass(name, time){
    SuperClass.call(this, name);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function (){
    console.log(this.time);
};


// 原型继承
function inheritObject(o){
    // 下面代码 F 等于类式继承中的子类。但是过渡对象的构造函数没有内容，所以开销会比较小，使用比较方便
    // 过渡函数对象
    function F(){
    }

    // 过渡对象的原型继承扶对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

var book = {
        name: 'js book',
        alikeBook: ['css book', 'html book']
    },
    newBook = inheritObject(book); // newBook上没有属性，属性绑定在newBook.prototype上
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');

var otherBook = inheritObject(book);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');

console.log(newBook.name, '原型继承'); // ajax book
console.log(newBook.alikeBook, '原型继承'); // [css, html, xml. as]
console.log(otherBook.name, '原型继承'); // flash
console.log(otherBook.alikeBook, '原型继承'); // [css, html, as, xml]
console.log(book.name, '原型继承'); // js
console.log(book.alikeBook, '原型继承'); // [css, html, as, xml]

// 寄生式继承
var book = {
    name: 'js book',
    alikeBook: ['css', 'html']
};
function createBook(obj){
    // 通过原型继承方法创建新对象
    var o = new inheritObject(obj);
    // 拓展新对象
    o.getName = function (){
        console.log(name);
    };
    // 返回拖长后的对象
    return o;
}
var a = createBook(book),
    b = createBook(book);
a.alikeBook.push('js');
console.log(b.alikeBook, '寄生式继承');


;(function (){

    // 寄生组合式继承
    // 利用 构造函数式继承继承属性 SuperClass.call(this)
    // 利用原型继承方法 subClass.prototype = superClass.prototype

    /**
     * 寄生式继承 继承原型
     * 传递参数 subClass 子类
     * 传递参数 superClass 父类
     */
    function inheritPrototype(subClass, superClass){
        // 复制一份父类的原型副本保存在变量中
        var p = inheritObject(superClass.prototype);
        // 修正重写子类原型导致字类的constructor属性被修改
        p.constructor = subClass;
        // 设置子类
        subClass.prototype = p;
    }

// 父类
    function SuperClass(name){
        this.name = name;
        this.colors = ['red'];
    }

    SuperClass.prototype.getName = function (){
        console.log(this.name);
    };
// 子类
    function SubClass(name, time){
        SuperClass.call(this, name);
        this.time = time;
    }

// 寄生式继承父类原型
    inheritPrototype(SubClass, SuperClass);
    SubClass.prototype.getTime = function (){
        console.log(this.time);
    };
    var instance1 = new SubClass('js book', 2014),
        instance2 = new SubClass('css book', 2013);

    instance1.colors.push('black');
    console.log(instance1.colors, '寄生组合式继承');
    console.log(instance2.colors, '寄生组合式继承');
})();

(function (){
    // 单继承
    // 属性复制
    var extend = function (target, source){
        for (var property in source) {
            target[property] = source[property];
        }
        return target;
    };

    var book = {
            name: 'javascript',
            alink: ['css']
        },
        anotherBook = {
            color: 'blue'
        };
    extend(anotherBook, book);
    console.log(anotherBook.name, '多继承');
    console.log(anotherBook.alink, '多继承');

    anotherBook.alink.push('ajax');
    anotherBook.name = '设计模式';
    console.log(anotherBook.name, '多继承');
    console.log(anotherBook.alink, '多继承');
    console.log(book.name, '多继承');
    console.log(book.alink, '多继承');

    // 多继承
    var mix = function (){
        var i = 1,
            len = arguments.length,
            target = arguments[0],
            arg;
        for (; i < len; i++) {
            arg = arguments[i];
            for (var property in arg) {
                target[property] = arg[property];
            }
        }
        return target;
    };
    // 也可以直接绑定在Object上，这样所有对象都拥有该方法
    Object.prototype.mix = function (){
        var i = 0,
            len = arguments.length,
            arg;
        for (; i < len; i++) {
            arg = arguments[i];
            for (var property in arg) {
                this[property] = arg[property];
            }
        }
        return this;
    };
    var book1 = {
            age: '1'
        },
        book2 = {
            author: 'Jsonz'
        },
        otherBook = {};
    otherBook.mix(book1, book2);
    console.log(otherBook, '多继承');


})();