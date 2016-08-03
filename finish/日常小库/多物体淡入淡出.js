function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = (iTarget - obj.alpha)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if(obj.alpha == iTarget){
			clearInterval(obj.timer);
		}else{
			obj.alpha +=iSpeed;
			obj.style.opacity = obj.alpha/100;
			obj.style.filiter = "alpha(opacity:"+obj.alpha+")";
		}
	},30)
}
window.onload = function(){
	var aDiv = document.getElementsByTagName('div');
	for(var i = 0;i<aDiv.length;i++){
		aDiv[i].alpha=30;
		aDiv[i].onmouseover = function (){
			startMove(this,100)
		}
		aDiv[i].onmouseout = function(){
			startMove(this,30)
		}
	}
}