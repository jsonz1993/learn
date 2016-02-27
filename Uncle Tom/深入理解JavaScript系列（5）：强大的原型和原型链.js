/**
 * Created by Jsonz on 2016/2/27.
 * �о���ԭ���������Ƚ�͸��������ڸ̺߳����������ָ��
 * ���Ŵ��������̳̣�����ѹ��= =��
 */

// һ��д��
var decimalDigits = 2,
    tax = 5;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

var Calcuator = function(decimalDigits, tax) {
    this.decimalDigits = decimalDigits;
    this.tax = tax;
};

Calcuator.prototype = {
    add : function(x, y){
        return x + y;
    },

    subtract : function(x, y){
        return x - y;
    }
};

Calcuator.prototype = function(){
    var add = function(x, y){
            return x + y;
        },

        subtract = function(x, y){
            return x - y;
        };

    return {
        add : add,
        subtract : subtract
    }
}();


var BaseCalculator = function(){
    // Ϊÿ��ʵ��������һ��Сλ��
    this.decimalDigits = 2;
};

BaseCalculator.prototype.add = function(x, y) {
    return x + y;
};

BaseCalculator.prototype.subtract = function(x, y) {
    return x - y;
};

// �̳�
var Calculator = function(){
    this.tax = 5;
};

// ���ܴ������ٸ� new BaseCalculator�� ����ָ��ԭ������
Calculator.prototype = new BaseCalculator();


// ԭ����
function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method : function(){

    }
};

function Bar() {}

// ����Bar��prototype����ΪFoo����
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// ����Bar.prototype.constructor Ϊ Bar ����
Bar.prototype.constructor = Bar;

var test = new Bar();

// ԭ����
/*
 test [Bar ��ʵ��]
    Bar.prototype [Foo ��ʵ��]
        { foo : 'Hello World'}
        Foo.prototype
            {method : .. }
            Object.prototype
                {toString : .. };
 */

// hasOwnPrototype �ж��Զ������㻹��ԭ�����ϵ�
Object.prototype.bar = 1;
var foo = {
    goo : undefined,
    hasOwnProperty : function(){
        return false;
    }
};

foo.bar; // 1
'bar' in foo; // true

foo.hasOwnProperty('bar'); // false;
foo.hasOwnProperty('goo'); // ������true�����Ƿ�������д ����false

// ����ղŵ�����
new Object().hasOwnProperty.call(foo, 'bar');

Object.prototype.bar = 1;

var foo = {moo : 2};

for (var i in foo) {
    console.log(i); // �����������
}

// foo �����������е�
for (var i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i); // ���һ��
    }
}
































