var timer = null;
function startMove(obj,iTarget){
	clearInterval(timer);
	timer = setInterval(function(){
		var iSpeed = (iTarget-obj.offsetLeft )/8;//速度一直在变慢
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);//通过判断iSpeed的正负来确定是向上还是向下取整
		if(Math.abs(obj.offsetLeft - iTarget)<iSpeed){
			clearInterval(timer);
			obj.style.left = iTarget +'px';
		}else{
			obj.style.left = obj.offsetLeft +iSpeed +'px';
		}
	},30)
}