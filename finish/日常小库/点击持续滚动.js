window.onload = function (){
    gundong();
}
function gundong(){
    var od = document.getElementById('miaovSlide');
    var oDiv = 获取UL外边框
    var oUl = 获取UL
        oLi = 获取LI
        oBtn = 获取BTN
    var ox = 0;//开始是停止的
    var timer = null;
    oUl.innerHTML += oUl.innerHTML;
    oBtn[0].onmousedown = function(){
        ox = -5;
        remove();
    }//持续点击，向上滚动
    oBtn[2].onmousedown = function(){
        ox = 5;
        remove();
    }//持续点击，向下滚动
    oBtn[2].onmouseup = oBtn[0].onmouseup = function(){
        clearInterval(timer);
    }//鼠标松开，停止滚动
    function remove(){
        timer = setInterval(function(){
            oUl.style.top = oUl.offsetTop+ox+'px';
            if (oUl.offsetTop > 0 ) {//判断
                oUl.style.top = -oUl.offsetHeight/2 +'px';
            }else if(oUl.offsetTop < -oUl.offsetHeight/2 ){//判断
                oUl.style.top = 0;
            }
        },10)
    }

}
