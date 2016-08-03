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