/**
 * Created by Jsonz on 2016/3/2.
 */

var a = 10; // ȫ���������еı���

(function(){
    var b = 20;
})();

alert(a); // 10;
alert(b); // b is undefined

for (var k in {a : 1,b : 2}) {
    alert(k);
}
alert(k);
/*
 global = {
 Math: <...>,
 String: <...>
 ...
 ...
 window: global //��������
 };
 */

/*
 ��������(��дΪVO)��һ����ִ����������ص�����������洢�������������������������ݣ�
 ���� (var, ��������);
 �������� (FunctionDeclaration, ��дΪFD);
 �������β�

 */

var a = 10;

function test(x) {
    var b = 20;
}

test(30);

/*
 // ȫ�������ĵı�������
 VO(globalContext) = {
 a: 10,
 test: <reference to function>
 };

 // test���������ĵı�������
 VO(test functionContext) = {
 x: 30,
 b: 20
 };



 ȫ�ֶ���(Global object) ���ڽ����κ�ִ��������֮ǰ���Ѿ������˵Ķ���
 �������ֻ����һ�ݣ����������ڳ������κεط������Է��ʣ�ȫ�ֶ��������������ֹ�ڳ����˳���һ�̡�
 �����׶ν�Math��String��Date��parseInt����Ϊ��������
 */

/*
 ��������ڽ��뺯��������ʱ�̱������ģ���ͨ��������arguments���Գ�ʼ����
 arguments ���Ե�ֵ��Arguments����
 Argument������� 1.callee ָ��ǰ���������á� 2.length �������ݵĲ���������3. properties-indexes ��֪����ɶ��ChromeҲ������
 */

function foo(x, y, z){
    // �����ĺ����������� arguments (x, y, z)
    console.log(foo.length); // 3

    //�����������Ĳ������� only x y
    console.log(arguments.length); // 2

    // ��������
    console.log(x === arguments[0]); // true
    console.log(x);  // 10

    arguments[0] = 20;
    console.log(x); // 20

    x = 30;
    console.log(arguments[0]); // 30

    // ������û�д������Ĳ���z�Ͳ����ĵ���������ֵ�ǲ����׵�

    z = 40;
    console.log(arguments[2]); // undefined �������ǲ���ͬ���ڴ� ֻ�ǹ�������

    arguments[2] = 50;
    console.log(z); // undefined;
}

foo(10,20);

// ����ִ��������
function test(a, b) {
    var c = 10;
    function d(){}

    var e = function _e() {};
    (function x(){});
}

test(10); // call
/*
 ����������ʱ��AO ����������
 AO(test) = {
    a : 10,
    b : undefined,
    c : undefined,
    d : <reference to FunctionDeclaration "d">,
    e : undefined
 };
 _e �� x û�б����� ��Ϊ�����Ǻ������ʽ���Ǻ�������
 ����֮�󣬽��봦�������Ĵ���ĵڶ����׶� -- ִ�д���
 �ڴ�������ڼ��Ѿ��� a �� d ����
 ��Ϊ _e ������e ��,��������Ȼ���ڴ��С��� x ��û������ĺ������ʽ������ֻ�����Լ��Ķ����ݹ��вſ��Ե���
 */

(function(){

    alert(x); // function

    var x = 10;
    alert(x); // 10

    x = 20;

    function x() {};

    alert(x); // 20
/*
����x �� function ����Ϊ �����������ڽ��������ĵ�ʱ�������ġ�
��Ȼ��������x�����б���x�����Ǳ���������˳�����ں�����������ʽ��������֮���
 */

    if (true) {
        var a = 1;
    } else {
        var b = 2;
    }
    // ��Ȼb = 2���ᱻִ�У�����b �Ѿ�����VO�У�ֵ��undefined
}());


// ������һ����Ҫ��ֻ�ǵ㣬����һ��attribute : {DontDelete}
a = 10;
alert(window.a); // 10
alert(delete a); // true
alert(window.a); // undefined

var b = 10;
alert(window.b); // 10
alert(delete b); // false
alert(window.b); // 10;

// ��Ϊ������ DontDelete,����eval�����ĵı���û��{DontDelete}���ԡ���������chrome���Է���Ҳ���� DontDelete
eval('val c = 10;');
alert(window.c); // 10
alert(delete c); // true
alert(window.c); // undefined

// __parent__ ��Chrome��û�з���

// ������������һ���ɻ�
var aaa = 10;
var date1 = new Date();
for (var i = 0; i < 10000000; i++) {
    aaa;
}
console.log(new Date() - date1);
var date2 = new Date();
for (i = 0; i < 10000000; i++) {
    window.aaa;
}
console.log(new Date() - date2);
var date3 = new Date();
for (i = 0; i < 10000000; i++) {
    window.window.window.window.window.window.window.aaa;
}
console.log(new Date() - date3);
// �ھ�FF IE�Ȳ��ͦ��ġ���Ϊ�����a�Ļ�����ȫ��.a;�����window.a�Ļ�����ȫ��.window.a�������window.window.window.window.a�Ļ����� ԭ��ͬ�ϡ�



































