/**
 * Created by Administrator on 2016/2/21.
 */
/**
 * 创建接口对象
 * @param name 接口名
 * @param methods 接口方法
 */
var Interface = function(name,methods){
    if(arguments.length != 2){
        throw new Error('必须输入两个参数,当前个数'+arguments.length);
    }

    this.name=name;
    this.methods=[];
    for(var i=0, len=methods.length; i<len; i++){
        if(typeof methods[i] !== 'string'){
            throw new Error('方法名参数必须为string');
        }
        this.methods.push(methods[i]);
    }
};
/**
 * 接口实现
 * @param  object1 实现接口对象
 * @param  object2 对应接口
 * @return 实现错误抛出异常
 */
Interface.ensureImplements = function(object){
    if(arguments.length < 2){
        throw new Error('必须输入两个参数,当前个数' + arguments.length);
    }
    for(var i=1, len=arguments.length; i < len; i++){
        var interface = arguments[i];
        if(interface.constructor != Interface){
            throw new Error("请实现接口");
        }

        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++){
            var method = interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function'){
                throw new Error("接口名:"+interface.name+"方法名："+method+"没找到");
            }
        }
    }
};


var DynamicMap = new Interface('DynamicMap',['centerOnPoint','zoom','draw']);

/**
 * 执行方法
 * @param  函数方法
 * @return 执行结果
 */
function displayRoute(mapInstance){
    Interface.ensureImplements(mapInstance,DynamicMap);//实现接口

    /**
     * 调用
     */
    mapInstance.centerOnPoint(12,34);
    mapInstance.zoom(5);
    mapInstance.draw();
}
/**
 * 函数方法
 * @type 实现接口方法
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