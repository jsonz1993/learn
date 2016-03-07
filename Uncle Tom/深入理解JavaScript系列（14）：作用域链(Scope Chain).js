/**
 * Created by Jsonz on 2016/3/4.
 */


(function(){
    var x = 10;

    function foo() {
        var y = 20;
        function bar() {
            alert(x + y);
        }
        return bar;
    }

    foo()(); // 30 �������� AO(bar) AO(foo) VO(global)
}());

/*
 ���������ĵ����������ں�������ʱ�����ģ�������������������ڲ���[[scope]]����

 activeExecutionContext = {
    VO : {...}, // or AO
    this : thisValue,
    Scope : [
        ...
    ]
 }
 Scope = AO + [[Scope]]
 */

/*
 ������������
 */

var x = 10;
function foo() {
    var y = 20;
    alert(x + y);
}
/*
 fooContext.AO = {
    y : undefined// ���������ĵ�ʱ��� 20
 }
  ����ͨ��[[Scope]]ȥ���ʵ�x�� �ں���������ʱ��ͱ��洢��ֱ�������ݻٶ�����ı䡣��ʹ�����ú�����[[Scope]]Ҳ�ᱻд������
  ������
  foo.[[Scope]] = [
    globalContext.VO // === Global
  ]
 */
foo(); // 30;

/*

 */

(function(){
    var x = 10;

    function foo() {
        var y = 20;

        function bar() {
            var z = 30;
            alert(x + y + z);
        }

        bar();
    }

    foo(); // 60

    /*
     ȫ�������ĵı���
     globalContext.VO === Global = {
        x : 10,
        foo : <reference to function>
     }

     ���� foo ��ʱ�� foo �� [[scope]] ����
     foo.[[Scope]] = {
        globalContext.VO
     }

     �� foo ������������ģ�,foo �����ĵĻ����
     fooContext.AO = {
        y : 20,
        bar : <reference to function>
     };

     foo ��������������
     fooContext.Scope = fooContext.AO + foo.[[Scope]]
     fooContext.Scope = [
        fooContext.AO,
        globalContext.VO
     ];

     �ڲ����� bar ����ʱ [[scope]]
     bar.[[Scope]] = [
        fooContext.A0,
        globalContext.VO
     ];

    ��bar ���bar �����Ļ����Ϊ
    barContext.AO = {
        z : 30
    };

    bar �����ĵ���������Ϊ
    barContext.Scope = barContext.AO + bar.[[Scope]]
    barContext.Scope = [
        barContext.AO,
        fooContext.AO,
        globalContext.VO
    ]

    �� 'x' 'y' 'z'�ı�ʶ����������
    - x
    -- barContext.AO // not found
    -- fooContext.AO // not found
    -- globalContext.VO // found - 10

    - y
    -- barContext.AO // not found
    -- fooContext.AO // found - 20

    - z
    -- barContext.AO // found - 30
     */
}());

































