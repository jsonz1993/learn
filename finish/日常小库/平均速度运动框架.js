var timer = null;
function startMove(obj,iTarget){
	clearInterval(timer);
	timer = setInterval(function(){
		var iSpeed = 0;//初始化速度
		if(obj.offsetLeft >iTarget){
			iSpeed = -5;//向左移动的速度
		}else {
			iSpeed = 5;//向右移动的速度
		}
		if(Math.abs(obj.offsetLeft - iTarget)<iSpeed){//消除平均运动最后的像素差
			clearInterval(timer);
			obj.style.left = iTarget +'px';
		}else{
			obj.style.left = obj.offsetLeft +iSpeed +'px';
		}
	},30)
}