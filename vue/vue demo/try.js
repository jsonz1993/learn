///**
// * Created by Jsonz on 2016/3/22.
// */
//
//var active = 'active',
//    $div = $('#div').find('.div');
//
//var i = 0;
//var arr = [1,2,3,6,9,8,7,4];
//var list = [];
//var timer = null;
//var time = 50;
//
//function demo() {
//    timer = setTimeout(function(){
//
//        console.log(time);
//        if (time > 400) {
//            clearTimeout(timer);
//            return;
//        }
//
//        if (i >= arr.length) {
//            i = 0;
//        } else if (i < 0) {
//            i = arr.length;
//        }
//        list.push((arr[i] -1));
//
//        $div.eq(list[list.length - 1]).addClass(active)
//            .end()
//            .eq(list[list.length - 2]).removeClass(active);
//
//        i++;
//        time *= 1.05;
//        demo();
//    },time)
//}
//
//
//demo();
//
//document.querySelector('#btn').addEventListener('click',function(){
//    clearInterval(timer);
//    list = [];
//},false);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
function fibonacci(n) {
    console.log(n);
    if (n < 2) {
        return 1;
    }

    return fibonacci(n - 2) + fibonacci(n - 1);
}

var a = fibonacci(10);
console.log(a);
