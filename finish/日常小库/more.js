//封装Ajax
function Ajax(type,url,fnSucc,fnFaild){
	var oAjax = null;
	//1.创建Ajax;2.链接服务器；3.发送请求；4.接收返回。
	if(window.XMLHttpRequest){//1.创建Ajax;兼容性问题，第一个在FF和高版本IE，第二个在IE6
		oAjax = new XMLHttpRequest();
	}else{
		oAjax = ActiveXObject("Microsoft.XMLHTTP");
	}
	oAjax.open(type,url,true)//2.连接服务器open(方法，url，是否异步);方法有GET 和POST
	oAjax.send();//3.发送请求
	oAjax.onreadystatechange = function(str){//4.请求接受到后执行
	//oAjax.readyState请求状态
		if(oAjax.readyState == 4){//服务器返回，不代表成功。
			if(oAjax.status == 200){//代表是否成功。404代表文件不存在
									//oAjax.responseText返回回来的值
				fnSucc(oAjax.responseText)//执行成功的函数
			}else{
				if(fnFaild){//如果有失败函数，调用失败函数
					fnFaild(oAjax.status)
				}
			}
		}
	}
}



//封装 Cookie 相关
function setCookie(name,value,iDay){//设置cookie
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+iDay);//设置时间
	document.cookie = name+"="+value+";expires="+oDate;//设置cookie
}
function getCookie(name){//获取cookie
	//document.cookie = "aaa=111; bbb=222; ccc=333"
	var aArr1 = document.cookie.split('; ');//靠分号和空格把每个项目分开，可用split切成数组;
	//aArr1 = ["aaa=111","bbb=222","ccc=333"];
	for (var i =0;i<aArr1.length;i++){
		var aArr2 = aArr1[i].split('=');
		//aArr2 = ['aaa','111'];
		//aArr2 = ['bbb','222']; ... 
		if(aArr2[0] == name){
			return aArr2[1];
		}
	}
	return " ";
}
function removeCookie(name){//删除cookie
	setCookie(name,'0',-1);//借用setCookie。 将要删除的cookie的日期设置为昨天。既过期了
}


//封装 style相关函数
//json设置样式
function setStyle(obj,json){
	var attr = '';
	for(attr in json){
		obj.style[attr] = json[attr];
	}
}
//封装getStyle函数，类似Jq的css(1,2);并用if else if 来处理IE与FF的兼容性问题
function getStyle(obj,attr)
{
    if(obj.currentStyle)
    {
    	return obj.currentStyle[attr];
    }else if(getComputedStyle(obj,false))
    {
    	return getComputedStyle(obj,false)[attr];
    }
}
//封装CSS函数，类似JQ的css(1,2,3);并用arguments.length来判断传入多少参数，若两个，则调用getStyle；若三个，则直接返回值
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


//封装获取class 函数
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


//封装 运动 相关 函数

//弹性+摩擦
function elasticMove(obj,attr,iTarget,fn){//不支持透明度，不实用
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

//完美运动框架
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer =setInterval(function(){
		var attr = '';
		var bStop = true;
		for(attr in json){
			var iCur = 0;
			if(attr == 'opacity'){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			var iSpeed = (json[attr] - iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

			if(iCur != json[attr]){
				bStop = false;
			}
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity:'+(iSpeed+iCur)+')'
				obj.style.opacity = (iSpeed+iCur)/100;
			}else{
				obj.style[attr] = iSpeed+iCur +'px';
			}
			if(bStop){
				clearInterval(obj.timer);
				if(fn){
					fn()
				}
			}

		}
	},30)
}


//模拟window.onload 
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload !='function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}