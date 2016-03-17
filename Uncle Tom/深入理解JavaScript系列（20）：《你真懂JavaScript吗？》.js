/**
 * Created by Jsonz on 2016/3/17.
 */

(function(){
    // TODO 1
    if (!('a' in window)) {
        var a = 1;
    }
    alert(a); // undefined

// 等价于
    var a;
    if (!('a') in window) {
        var a = 1;
    }
    alert(a);

    /*
     * var a = 1 --> window.a = 1;
     * 类似 alert( 'a' in window);
     * var a;
     */
}());

// TODO 2
(function(){
    var a = 1,
        b = function a(x) {
            x && a(--x);
        };

    alert(a); // 1
}());


















































