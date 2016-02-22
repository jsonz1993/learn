/**
 * Created by Administrator on 2016/2/21.
 */
/**
 * �����ӿڶ���
 * @param name �ӿ���
 * @param methods �ӿڷ���
 */
var Interface = function(name,methods){
    if(arguments.length != 2){
        throw new Error('����������������,��ǰ����'+arguments.length);
    }

    this.name=name;
    this.methods=[];
    for(var i=0, len=methods.length; i<len; i++){
        if(typeof methods[i] !== 'string'){
            throw new Error('��������������Ϊstring');
        }
        this.methods.push(methods[i]);
    }
};
/**
 * �ӿ�ʵ��
 * @param  object1 ʵ�ֽӿڶ���
 * @param  object2 ��Ӧ�ӿ�
 * @return ʵ�ִ����׳��쳣
 */
Interface.ensureImplements = function(object){
    if(arguments.length < 2){
        throw new Error('����������������,��ǰ����' + arguments.length);
    }
    for(var i=1, len=arguments.length; i < len; i++){
        var interface = arguments[i];
        if(interface.constructor != Interface){
            throw new Error("��ʵ�ֽӿ�");
        }

        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++){
            var method = interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function'){
                throw new Error("�ӿ���:"+interface.name+"��������"+method+"û�ҵ�");
            }
        }
    }
};


var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);

/**
 * ִ�з���
 * @param  ��������
 * @return ִ�н��
 */
function displayRoute(mapInstance){
    Interface.ensureImplements(mapInstance,DynamicMap);//ʵ�ֽӿ�

    /**
     * ����
     */
    mapInstance.centerOnPoint(12,34);
    mapInstance.zoom(5);
    mapInstance.draw();
}
/**
 * ��������
 * @type ʵ�ֽӿڷ���
 */
var a={
    centerOnPoint:function(x,y){
        console.log(x*y);
    },
    zoom:function(x){
        console.log(x);
    },
    draw:function(){
        console.log("x*y");
    }
}
displayRoute(a);