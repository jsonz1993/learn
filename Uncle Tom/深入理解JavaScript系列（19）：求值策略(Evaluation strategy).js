/**
 * Created by Jsonz on 2016/3/17.
 * 赋值理论有两种，一种是进入程序之前计算的（严格），另一种是根据需求才计算（非严格）
 *
 */

(function(){

    var foo = {x : 10, y : 20};
    var bar = foo;

    alert(bar === foo); // true

    bar.x = 100;
    bar.y = 200;

    alert([foo.x, foo.y]);// 100 200

    bar = {z : 1, q : 2}; // 重新赋值 切断关系
    alert([foo.x, foo.y]); // 100 200
    alert([bar.z, bar.q]); // 1 2
}());







































