(function(){
    //ԭ����
    function getHugeList() {
        var arr = [];
        for (var i = 0;i < 10000000; i++) {
            arr[i] = i;
        }
        return arr;
    }

    var list = getHugeList();

    var nextListItem = function(){
        var item = list.pop();

        if (item) {
            nextListItem();
        }
    };

    //�հ���ݹ�.js:13 Uncaught RangeError: Maximum call stack size exceeded
    //nextListItem();
}());


//��һ�ַ���
// setTimeout �첽����
function getHugeList() {
    var arr = [];
    for (var i = 0;i < 10000; i++) {
        arr[i] = i;
    }
    return arr;
}

var list = getHugeList();

var nextListItem = function(){
   setTimeout(function(){
       var item = list.pop();

       console.log(item);

       if (item) {
           nextListItem();
       }
   },1);
};

// �ڶ��ַ���
//�հ�
//console.time('test');
var nextListItem2 = function(){
    var foo = function closer() {
        var item = list.pop();

        console.log(item);
        if(item) {
            closer();
        }
    };
    return foo;
}();
//nextListItem2();
//console.timeEnd('test');


//�����ַ���
function isEvent(num) {
    if (num === 0) {
        return true;
    }

    if (num === 1) {
        return false;
    }

    return isEvent(Math.abs(num) - 2);
}

isEvent(100);

// ���� �����度
function trampoline(func,arg) {
    var value = func(arg);

    while (typeof value === 'function') {
        value = value();
    }

    return value;
}

trampoline(isEvent,100);