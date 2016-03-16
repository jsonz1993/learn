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

























