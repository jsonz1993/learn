/**
 * Created by Jsonz on 16/10/2.
 */
function inheritObject(o){
    // 下面代码 F 等于类式继承中的子类。但是过渡对象的构造函数没有内容，所以开销会比较小，使用比较方便
    // 过渡函数对象
    function F(){
    }

    // 过渡对象的原型继承扶对象
    F.prototype = o;
    // 返回过渡对象的一个实例，该实例的原型继承了父对象
    return new F();
}

function inheritPrototype(subClass, superClass){
    // 复制一份父类的原型副本保存在变量中
    var p = inheritObject(superClass.prototype);
    // 修正重写子类原型导致字类的constructor属性被修改
    p.constructor = subClass;
    // 设置子类
    subClass.prototype = p;
}