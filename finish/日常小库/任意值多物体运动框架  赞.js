//封装getStyle
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
//封装设置css与getcss
function css(obj,attr,value)
{
	if(arguments.length == 2 )
	{
		return getStyle(obj,attr);
	}else if(arguments.length == 3 )
	{
		return obj.style[attr] = value;
	}
}
//封装getByClass
function getByClass(oParent,classN){
	var aElm = oParent.getElementsByTagName('*');
	var aArr = [];
	for(var i =0;i<aElm.length;i++){
		if(aElm[i].className == classN){
			aArr.push(aElm[i]);
		}
	}
	return aArr;
}
//封装多物体任意值回调函数运动框架
function startMove(obj,attr,iTarget,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iCur = 0;
		if(attr == 'opacity'){
			iCur=parseInt(parseFloat(getStyle(obj, attr))*100);
		}else{
			iCur = parseInt(getStyle(obj,attr));
		}
		var iSpeed = (iTarget - iCur)/8
		iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		if(iCur == iTarget){
			clearInterval(obj.timer);
			if(fn){
				fn()
			}
		}else{
			if(attr == 'opacity'){
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}else{
				obj.style[attr]= iCur + iSpeed +'px';
			}
		}
	},30)
}