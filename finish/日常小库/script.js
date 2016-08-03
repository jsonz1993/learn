var addLoad = function(fn){
    var oldL = window.onload();
    if(typeof oldL != 'function'){
        window.onload = fn();
    }else{
        window.onload = function(){
            oldL();
            fn();
        }
    }
}

var addEvent = function(obj,event,fn){
    if(obj.addEventListener){
        obj.addEventListener(event,fn);
    }else if(obj.attachEvent){
        obj.attachEvent('on' + event,fn);
    }
}

var stopDefault = function(event){
    if(event && event.preventDefault){
        event.preventDefault();
    }else{
        window.event.returnValue = false;
    }
    return false;
}
