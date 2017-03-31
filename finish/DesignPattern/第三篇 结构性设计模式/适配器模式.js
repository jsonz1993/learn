/**
 * Created by Administrator on 2016/9/18.
 */
/**
 * 适配器模式： 将一个类的接口转化成另外一个接口，以满足用户需求，使类之间接口的不兼容问题通过适配器得以解决
 */

// 参数适配器
function demo(obj) {
    var _conf = {
        name: 'Jsonz',
        age: 20
    };
    for (var i in _conf) {
        _conf[i] = obj[i] || _conf[i];
    }
}