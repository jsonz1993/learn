var timer = null;
function startMove(obj,iTarget){//传入变量
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){//每个元素都创建一个定时器
		var iSpeed = (iTarget - obj.offsetWidth)/8;
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			if(obj.offsetWidth == iTarget){
				clearInterval(obj.timer);//关闭该元素定时器
			}else{
				obj.style.width = iSpeed +obj.offsetWidth +'px';
			}
	},30)
}
window.onload=function ()
{
	var aDiv=document.getElementsByTagName('div');
	
	var i=0;
	
	for(i=0;i<aDiv.length;i++)
	{
		aDiv[i].timer=null;
		aDiv[i].onmouseover=function ()
		{
			startMove(this, 300);
		}
		
		aDiv[i].onmouseout=function ()
		{
			startMove(this, 100);
		}
	}
}
