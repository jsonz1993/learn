function setCookie(name, value, iDay) { //设置cookie
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay); //设置时间
	document.cookie = name + "=" + value + ";expires=" + oDate; //设置cookie
}

function getCookie(name) { //获取cookie
	//document.cookie = "aaa=111; bbb=222; ccc=333"
	var aArr1 = document.cookie.split('; '); //靠分号和空格把每个项目分开，可用split切成数组;
	//aArr1 = ["aaa=111","bbb=222","ccc=333"];
	for (var i = 0; i < aArr1.length; i++) {
		var aArr2 = aArr1[i].split('=');
		//aArr2 = ['aaa','111'];
		//aArr2 = ['bbb','222']; ... 
		if (aArr2[0] == name) {
			return aArr2[1];
		}
	}
	return " ";
}

function removeCookie(name) { //删除cookie
	setCookie(name, '0', -1); //借用setCookie。 将要删除的cookie的日期设置为昨天。既过期了
}

