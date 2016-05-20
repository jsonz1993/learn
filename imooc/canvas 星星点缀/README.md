[http://www.imooc.com/learn/338](http://www.imooc.com/learn/338)

#### 复习canvas基本api


	var ctx = canvas.getContext('2d'),
		canvasW = canvas.width,
		canvasH = canvas.height;
	ctx.fillStyle = 'color';
	ctx.fillRect(x, y, w, h);


__window 循环__

1. requestAnimFrame(function(){})

	最优 会根据电脑性能自动调用函数,有兼容性问题

2. setTimeoit(function(){}, time)
	
	性能比setInterval差

3. setInterval(function(){}, time)
	
	老浏览器实现方法


###### 绘制图片 兼容chrome
	function preImage(url,callback){  
	     var img = new Image(); //创建一个Image对象，实现图片的预下载  
	     img.src = url;  
	     
	    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
	         callback.call(img);  
	        return; // 直接返回，不用再处理onload事件  
	     }  
	  
	     img.onload = function () { //图片下载完毕时异步调用callback函数。  
	         callback.call(img);//将回调函数的this替换为Image对象  
	     };  
	}  

###### requestAnimFrame 兼容
	
	window.requestAnimFrame = (function(){
	  return  window.requestAnimationFrame       ||
	          window.webkitRequestAnimationFrame ||
	          window.mozRequestAnimationFrame    ||
	          function( callback ){
	            window.setTimeout(callback, 1000 / 60);
	          };
	})();


`img.complete`  返回浏览器是否已经加载完成

