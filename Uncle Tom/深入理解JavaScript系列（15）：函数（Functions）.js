/**
 * Created by Jsonz on 2016/3/6.
 */

// �������� ��дΪFD
foo();
function foo(){
    /*
     * ��һ���ض�������
     * �ڽ��������Ľ׶δ���
     * Ӱ�쵽��������
     */
}

// �������ʽ FE ���ʽ���̵����б�����Բ���Ű�Χ

var foo2 = function foo_2(){
    /*
     * ��Դ���б�����ֱ��ʽ��λ��
     * �п�ѡ������ ��������õĻ�ʹ�� foo ,�����ڲ���ݹ����ʹ�� foo_2
     * ����Ӱ���������
     * ��ִ�д���ʱ�򴴽�
     */
    (function(){});
    [function(){}];
    1,function baz(){};

};

(function(){
    alert(fooFE); // fooFE δ����

    (function fooFE(){});

    // ����׶�֮��Ҳ�������� ��Ϊ���ڱ������� VO �С� = =ƽʱһֱ��֪�� ֻ�ǰ�������������һ����������
    alert(fooFE);


    // �ڱ��ʽ��ʹ�����ǣ���������Ⱦ������������򵥵������ǽ�һ��������Ϊ�������ݸ�����������
    function foo(callback) {
        callback();
    }

    foo(function bar(){
        alert('foo.bar');
    });

    foo(function baz(){
        alert('foo.baz');
    })
}());

(function(){
    var foo = 10;
    var bar = (foo % 2 === 0
        ? function () {alert(0); }
        : function () {alert(1); }
    );
    bar();
})();

(function(){
    // foo ��һ���������������ڽ��������ĵ�ʱ�򴴽�
    alert(foo);

    function foo(x) {
        alert(x);
    }(1); // ������һ����������������Ǻ������á�

    foo(10);
}());

(function(){
   var foo = {
       bar : function(x){
           return x % 2 != 0 ? 'yes' : 'no';
       }
   };

    alert(foo.bar()); // yes
}());

//
// �����������ʽ������
(function foo(bar){
    if (bar) {
        alert(bar);
        return;
    }

    foo(1);
}());

(function(){
    Object.prototype.x = 10;

    function foo(){
        var x = 20;

        function bar() {
            alert(x);
        }

        bar(); // 20; �� foo�ı�������AO�в�ѯ

        // �����������ʽҲ��һ��
        (function(){
            alert(x); // 20
        }());
    }

    foo();
}());


















