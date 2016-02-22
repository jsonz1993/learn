/**
 * Created by Administrator on 2016/2/21.
 */

/**
 * �����ӿڶ���
 * @param name �ӿ���
 * @param methods �ӿڷ���
 * @constructor
 */
var Interface = function (name, methods) {
    if (arguments.length !== 2) {
        throw new Error('��������������������ǰ����Ϊ' + arguments.length);
    }

    this.name = name;
    this.methods = [];

    for (var i = 0,len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('������������string');
        }

        this.methods.push(methods[i]);
    }
};


/**
 * �ӿ�ʵ��
 * @param object ʵ�ֽӿڶ���
 * @param object2 ��Ӧ�ӿ�
 */

Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw  new Error('������������������ǰ����Ϊ' + arguments.length);
    }

    for (var i = 1,len = arguments.length; i < len; i++) {
        var interface = arguments[i];

        if (interface.constructor != Interface) {
            throw new Error('��ʵ�ֽӿ�');
        }

        for (var j = 0,methodsLen = interface.length; j < methodsLen; j++) {
            var method = interface.methods[j];

            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error('�ӿ��� ' + interface.name + '������' + method + 'û�ҵ�');
            }
        }

    }
};

var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);









