function startMove(obj,attr,iTarget,fn){//不支持透明度，不实用
	var iSpeed = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		//取值
		var iCur = parseInt(getStyle(obj,attr));
		
		
		//两个速度，变值
		iSpeed += (iTarget - iCur)/5;
		iSpeed *= 0.7;

		//变化（一般停止条件在这里修改）

		if(Math.abs(iSpeed)<1 && Math.abs(iCur-iTarget)<1)
		{
			clearInterval(obj.timer);
			obj.style[attr]=iTarget+'px';
			
			if(fn){
				fn()
			}
		}
		else{
			obj.style[attr] = iSpeed +iCur +'px';
		}	
	},30)
}
function getStyle(obj, attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj, false)[attr];
	}
}