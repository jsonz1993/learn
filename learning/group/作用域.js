/**
 * Created by Jsonz on 2016/3/21.
 */

var a = 10;

function test (){
    console.log(a); // fn
    a = 10;
    console.log(a); // 10
    function a(){};
    console.log(a); // 10
    var a;
    console.log(a); // 10
}

test();
console.log(a); // 10
