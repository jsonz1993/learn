function getStyle(obj,attr)
//封装getStyle函数，类似Jq的css(1,2);并用if else if 来处理IE与FF的兼容性问题
{
    if(obj.currentStyle)
    {
    	return obj.currentStyle[attr];
    }else if(getComputedStyle(obj,false))
    {
    	return getComputedStyle(obj,false)[attr];
    }
}
function css(obj,attr,value)
//封装CSS函数，类似JQ的css(1,2,3);并用arguments.length来判断传入多少参数，若两个，则调用getStyle；若三个，则直接返回值
{
	if(arguments.length == 2 )
	{
		return getStyle(obj,attr);
	}else if(arguments.length == 3 )
	{
		return obj.style[attr] = value;
	}
}
