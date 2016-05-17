[回到顶部](http://www.imooc.com/view/65)

比较简单

`可视区高度`
 
	document.documentElement.clientHeight;

`滚动高度`
 
	document.body.scrollTop/*Chrome*/ || document.documentElement.scrollTop /*其他*/

写个标识滚动的时候判断是否是用户触发.
	
	...

	setInterval(function(){ stopScroll = false },time)
	
	...

	window.addEventListener('scroll',function(){
		if (stopScroll) clearInterval(timer);
    	stopScroll = true;
	}, false)