/**
 * Created by Jsonz on 2016/2/27.
 * ��ʵ���Ǻܶ����о�������ڽ��ĺ�ǳ���Ǻܼ��
 */

//  ��ʵ�������Ǳհ���
function makeCounter() {
    var i = 0;

    return function() {
        console.log(i++);
    };
}



var counter= makeCounter();
counter();
counter();

var counter2 = makeCounter();
counter2();
counter2();

var fun = function(){
    console.log('aaaaaaaa');
}(); // ����ִ��

var fun2 = (function(){
    console.log('bbbbb')
}()); // ���㿪����Աһ��ʼ��֪������һ����ִ�д���



// ��������������״̬
var elems = document.getElementsByTagName('a');
for (var i = 0; i < elems.length; i++) {

    // ʧ��
    elems[i].addEventListener('click',function(e){
        e.preventDefault();
        alert('I am link #' + i);
    },false);

    // �ɹ�
    (function(lockedInIndex){
        elems[i].addEventListener('click',function(e){
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
        },false);

    })(i);

    // �ɹ�
    elems[i].addEventListener('click',(function(lockedInIndex){
        return function(e){
            e.preventDefault();
            alert('I am link #' + lockedInIndex);
        }
    })(i))
}


(function(){

    // ��ִ����������������ִ�еĺ������ʽ
    // �Լ��������
    // ��ִ��
    (function(){}());
    // ����ִ�еĺ������ʽ
    var a = (function(){}());

    // ��ִ�еĺ����������ڲ�ִ�������ݹ�
    function foo() { foo(); }

    // ����һ����ִ�е�������������Ϊû�б�ʶ����
    // ����ʹ��arguments.callee������ִ���Լ�
    var foo = function(){ arguments.callee(); };

    // �����Ҳ��һ����ִ�е�����������������foo��ʾ��������������
    var foo = function(){foo() };

    // ��Щ�˽��������ִ�е�������������Ϊ��û�е��������أ�ֻ��ִ�ж���
    (function (){}());

    // Ϊ�������ʽ���һ����ʾ���ƣ����Է���Debug
    // ��һ�������ˣ���������Ͳ������������ˣ�
    (function foo(){ /* code */}());

    // �������õĺ������ʽҲ������ִ�У����������ö���
    (function() {arguments.callee(); }());
    (function foo(){ foo(); }());

}());

// �õĺܶ�� Moduleģʽ
var counter = (function(){
    var i = 0;

    return {
        get : function(){
            return i ;
        },
        set : function(val){
            i = val;
        },
        increment : function(){
            return ++i;
        }
    }
}());

// counter ��һ�����ж�����ԵĶ�������Ĵ���������Ե�������ʵ�Ƿ���

counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5

counter.i; // undefined
i; // ���ô���


















