/**
 * Created by Jsonz on 2016/3/16.
 */

var a = undefined,
    b = null,
    c = true,
    d = 'test',
    e = 10;

if (typeof  b === 'object') {
    console.log('null �� type �� object');
}

// ��̬��������չ�����ԡ�����ͨ�� Object.freeze()�������
(function(){
    var foo = {
        x : 10
    };

    Object.freeze(foo); // �������
    console.log(Object.isFrozen(foo)); // ��鶳��״̬

    foo.x = 1000; // �����޸�
    foo.y = 200; // ������չ

    delete foo.x;
    console.log(foo);
}());

// ʹ�� Object.preventExtensions(o) ������ֹ��չ��ʹ��Object.defineProperty(o)��������

(function(){
    var foo = {
        x : 10
    };

    Object.defineProperty(foo, 'y', {
        value : 20,
        writable : false, // ֻ��
        configurable : false // ��������
    });

    foo.y = 200; // �����޸�

    delete foo.y; // false ����ɾ��

    Object.preventExtensions(foo); // ��ֹ��չ ������ӣ����ǿ����޸���������

    foo.z = 30;
    foo.x = 20;
    delete foo.x;

    console.log(foo);

}());


(function(){
    // ƽʱ���鲻Ҫ�ã����׳�����û���á� new Boolean(false) // typeof === 'object' �����жϵ�ʱ����true

    // ����
    var c = new Boolean(true);
    var d = new String('test');
    var e = new Number(10);

    // ת�ػ�������
    c = Boolean(c);
    d = String(d);
    e = Number(e);

}());

// ������Literal
(function(){
    var getClass = Object.prototype.toString;
    Object = Number;

    var foo = new Object;
    alert([foo,getClass.call(foo)]);
}());

// ����ת��
(function(){
    var a = new Number(1);
    var primitiveA = Number(a); // ��ʽ���� valueOf
    var alsoPrimitiveA = a.valueOf(); // ��ʾ����

    console.log(a, primitiveA, alsoPrimitiveA); // obj num num

    // valueOf() ����᷵��this; ���ڶ���᷵�� .getTime()

    var b = {
        valueOf : function(){
            return 100;
        },
        toString : function(){
            return '__test';
        }
    };

    alert(b); // ���õ��� toString
    alert(b + 10); // ���õ���valueOf

    // valueOfɾ���Ժ�toString �ֻ��Զ�����
    delete a.valueOf;
    alert(a + 10); // ���� toString
    // TODO �� ����ֵ���������޵��� valueOf() ���ַ������������ȵ��� toString()

}());

(function(){
    var a = 1,
        b = 2;

    // ��ʽ
    var c = a + b, // 3 number
        d = a + b + '5'; // 35 string

    // ��ʽ
    var e = '10', // 10 string
        f = +e, // 10 number �е㲻�� TODO �� ������
        g = parseInt(e,10); // 10 number
}());

(function(){
    /**
     * {ReadOnly}�������������Ը�ֵ��д����������ֻ�����Կ���������������Ϊ�ı䡪��Ҳ����˵���ǡ��㶨ֵ�� ;
     * {DontEnum}�������Բ��ܱ�for..inѭ��ö��
     * {DontDelete}��������delete����������Ϊ�����ԣ���ɾ������;
     * {Internal}�����ڲ����ԣ�û�����֣�����ʵ�ֲ���ʹ�ã���ECMAScript���޷��������������ԡ�
     */

    var foo = {};

    Object.defineProperty(foo, "x", {
        value: 10,
        writable : true, // ReadOnly = false
        enumerable : false, // DontEnum = true
        configurable : true // DontDelete = false
    });

    console.log(foo.x); // 10

    // ͨ�� descriptor ��ȡ���Լ� attributes
    var desc = Object.getOwnPropertyDescriptor(foo,'x'); // Object {value: 10, writable: true, enumerable: false, configurable: true}
}());

// �ڲ����Ժͷ���
(function(){
    /*
     * [[Prototype]] �����ԭ��
     * [[Class]] �ַ�������ı�ʾArray, Function ��      Object.prototype.toString()
     * [[Get]] ��ȡ����ֵ�ķ���
     * [[Put]] ��������ֵ�ķ���
     * [[CanPut]] ��������Ƿ��д
     * [[HasProperty]] �������Ƿ�ӵ�и�����
     * [[Delete]] �Ӷ���ɾ��������
     * [[DefaultValue]] ���ض����Ӧ��ԭʼֵ�������valueOf������
     */

    var getClass = Object.prototype.toString;

    getClass.call({}); // [object Object]
    getClass.call([]); // [object Array]
    getClass.call(1); // [object Number]
}());

// ���캯��
// ���󴴽����ڴ���䣩���ɹ��캯�����ڲ�����[[Construct]]����ġ����ڲ���������Ϊ�Ƕ���õģ����еĹ��캯������ʹ�ø÷�����Ϊ�¶�������ڴ�ġ�
(function(){
    function A(){

        // ���´����Ķ���
        this.x = 10;

        // ���ص��ǲ�ͬ�Ķ���
        return [1,2,3];
    }

    var a = new A();

    console.log(a.x, a); // undefined [1,2,3]
}());

// ���Թ��캯��
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

    // ����A.prototype֮��ǰ�����еĹ������ж���
    alert(a.x); // 10
    alert(a.y); // undefined

    var b = new A();

    // �¶����Ǵ���ԭ�ͻ�ȡ
    alert(b.x); // 20
    alert(b.y); // 30
}());

// �Ǳ�׼��__proto__����
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

    // a �����ǰ󶨾ɵ�ԭ��
    alert(a.x); // 10
    alert(a.y); // undefined

    // ��ʾ�󶨵��µ�ԭ��
    a.__proto__ = __newPrototype; // �� a.prototype = __newPrototype ����Ч
    alert(a.x); // 20;
    alert(a.y); // 30;
})();

// ��������ڹ��캯��
(function(){
    function A(){}
    A.prototype.x = 10;

    var a = new A();
    alert(a.x); // 10

    // ����AΪnull - ��ʾ���ù��캯��
    A = null;

    // �������ɿ����� .constructor ��������������
    var b = new a.constructor();
    alert(b.x); // 10;

    // ��ʽ������Ҳɾ����
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

    // �������ԭ��Ϊnull
    A.prototype = null;

    // 'a'��Ȼ����ͨ��a.[[Prototype]] ����ԭ��
    alert(a.x);

    alert(a instanceof A); // ���� A.prototype ��null instanceof �Ǵ� A��ԭ�Ϳ�ʼ����
}());

// instanceof ��������[[Prototype]]���Ժ͹��캯����prototype���Ե�ֵ���õ���һ���Ļ���instanceof����ʱ��᷵��true
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

// ԭ�Ϳ��Դ�ŷ�������������
(function(){
    function A(x) {
        this.x = x || 100;
    }

    A.prototype = (function(){
        // ��ʼ�������� ʹ�ö���Ķ���
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

        // ԭ��
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

// TODO ��д���� [[Get]] [[Put]]
(function(){
    var foo = {};
    foo.bar = 10; // ������ [[Put]]

    console.log(foo.bar); // ������ [[Get]]
    console.log(foo['bar']); // һ��

    // [[Get]] α����
    /*
      O.[[Get]](P):

     // ������Լ������ԣ��ͷ���
     if (O.hasOwnProperty(P)) {
        return O.P
     }

     //���򣬼�������ԭ��
     var __proto = O.[[Prototype]];

     // ���ԭ���� null, ���� undefined
     // ���Object.prototype.[[Prototype]] �� null

     if (__proto === null ) {
        return undefined
     }

     // ���򣬶�ԭ�����ݹ����[[Get]],�ڸ����ԭ���в������� ֱ��nullΪֹ
     return __proto.[[Get]](P)
    */

    // [[Put]] α����
    /*
     O.[[Put]](P, V);

     // ������ܸ�����дֵ�����˳�
     if (!O.[[CanPut]](P)){
        return;
     }

     // �������û����������ԣ��ʹ�����
     if (!O.hasOwnProperty(P)) {
        createNewProperty(O, P, attributes: {
           ReadOnly : false,
           DontEnum : false,
           DontDelete : false,
           Internal : false
        });
     }

     // ������Դ��ھ�����ֵ�������ı�attributes����
     O.P = V;
     */

    Object.prototype.x = 100;

    console.log(foo.x); // 100;

    foo.x = 10; // [[Put]]
    console.log(foo.x); // 10, д������

    delete foo.x;
    console.log(foo.x); // 100 �̳�����

    // ���ܸ���ԭ�����ֻ�����ԣ����ƽ���ᱻ���ԣ������ڲ���[[CanPut]]���Ƶ�

    // ���� ���� length ��ֻ���� �������ڸ�һ��length ����
    function SuperString(){}

    SuperString.prototype = new String('abc');

    foo = new SuperString();

    console.log(foo.length); // 3

    foo.length = 5; // ���� [[Put]] ����˵����д�����ԣ�return���������忴 Put α����

    console.log(foo.length); // ������ 3

}());

// ���Է�����
// �ڲ���[[Get]] �� [[Put]] ͨ������Ż�������������ġ�

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
    // ��ʹ�����Է�����ʱ������� new Number() ��ʹ�ú�ͻ��Զ���� 10

    alert(a.test); // undefined

    // ִ�� a.toString()��ʱ��
    // 1. new Number(a);
    // 2. newNumber(a).toString();
    // 3. delete new Number(a)

    // ִ�� a.test = 100;
    // 1. new Number(a);
    // 2. new Number(a).test = 100;
    // 3. delete new Number(a);

    // �ڿƼ� 1..toString()

    // ��1. ������ 1.0 1..toString() == 1.['String']
    // 1.toString() �﷨����
    // (1).toString() OK
    // 1..toString() OK
    // 1['toString']() OK
}());

// ԭ����
(function(){
    function A() {
        alert('a.[[Call]] activated');
        this.x = 10;
    }
    A.prototype.y = 20;

    var a = new A();
    alert([a.x, a.y]); // 10 20

    function B() {}

    // �����ԭ���������������ö����ԭ��Ϊ����һ���¶���
    B.prototype = new A();

    // �޸�ԭ�͵� constructor ���ԣ�����Ļ�����A��
    B.prototype.constructor = B;

    var b = new B();
    alert([b.x, b.y]); // 10 20 �������Ǽ̳�

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
    B.prototype = new A(); // Error �ڸ������˴����жϣ�����̳�Ҳ�ᱨ��
    // TODO �о�ûʲô�ɻ�
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
        // ����ʹ�� A.apply(this, arguments)
        B.superclass.constructor.apply(this, arguments);
        // ���ø����캯���������´��������������
    }

    // �̳У� ͨ���յ��м乹�캯����ԭ������һ��
    var F = function(){};
    F.prototype = A.prototype; // ����
    B.prototype = new F();
    // superproto ���Զ������� �����ʶ����
    B.superproto = A.prototype; // ��ʽ���õ�����һ��ԭ���ϣ� 'sugar'

    // �޸�ԭ�͵� constructor ���ԣ��������A��
    B.prototype.constructor = B;

    var b = new B();
    alert([b.x, b.y]); // 10 20
}());

// TODO ����дһ���������̳�
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

// ���� �﷨��û��� ��
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

    // ʹ�� superproto �﷨��
    C.prototype.foo = function(){
        C.superproto.foo.call(this);
        alert('C#Foo');
    };

    var c = new C();
    alert([c.x, c.y]);

    c.foo();
})();

// TODO �� ES5Ϊԭ������׼����������ߺ��� Object.create
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

    // �÷�
    var foo = {x : 10};
    var bar = Object.create(foo, {y : {value : 20}});
    console.log(bar.x, bar.y);
})();

























