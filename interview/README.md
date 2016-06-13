> 不知道为什么，之前面试都是不准备直接去的。这次面试之前好方好紧张，

> 可能是因为觉得自己做了一年多还什么都不会
>逻辑算法玩不来呀~


- [搜狗2015前端笔试题](#sougou2015)
- [腾讯2017暑期实习生编程题](#tx2017sxs)


高程看到String部分




<h3 id="sougou2015">搜狗2015前端工程师面试题</h3>
___


>1.下列描述错误的是（4）
>
- HTTP状态码302表示暂时性转移 `不知道`
- domContentLoaded事件早于onload事件 `不知道`
- IE6/7/8不支持事件捕获 
- localStorage存储的数据，在刷新页面后会消失 `知道是错的`

	`onload` 页面上所有的DOM，样式表，脚本，图片，flash都已经加载完成了。
	`OMContentLoaded` 事件触发时，仅当DOM加载完成，不包括样式表，图片，flash。
	addEventListener第三个参数true / false。 在事件捕获/冒泡时触发



>2.

	var a="undefined";
	var b="false";
	var c="";
	function assert(aVar){
	    if(aVar)     
	        alert(true);
	    else  
	        alert(false);
	}
	assert(a);
	assert(b);
	assert(c);

	true true false


>3.正则表达式/^\d*\*[^\d]*[\w]{6}$/,下面的字符串中哪个能正确匹配？
>
- ***abcABCD_89
- abc*abcABCDEF
- 123*abcABCD_89
- 123*ABCabcd-89

	这是一道送命题 - -正则无解


>4.

	function Foo(){
	     var i=0;
	     return function(){
	         document.write(i++);
	     }
	}
	var f1=Foo(),
	f2=Foo();
	f1();
	f1();
	f2();

	0 1 0 闭包不回收变量


>5.以下哪个选项不是块级元素（）
>
- div
- span
- p
- h1

	span 送分题

>6.

	var elements=document.getElementsByTagName('li');
	    var length=elements.length;
	    for(var i=0;i<length;i++){
	        elements[i].onclick=function(){
	        alert(i);
	    }
	 }
	运行结果 4 4 4 4

	var elements = document.getElementsByTagName('li');
    var length = elements.length;
    for (var i = 0; i < length; i++) {
        elements[i].onclick = (function(i){
            return function(){
            	console.log(i);
            }
        })(i)s
    }
	修改后运行结果 0 1 2 3
	
> 7下面列出的浏览器，无webkit内核的是（）
>
- chrome
- safari
- 搜狗
- firefox

	chrome -webkit-
	safari -webkit-
	搜狗 -webkit-
	firefox -moz-



<h3 id="tx2017sxs">腾讯2017暑期实习生编程题</h3>