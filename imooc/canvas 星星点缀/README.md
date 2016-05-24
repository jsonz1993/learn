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



#### 总结
_____

1. 如何轮播序列帧
	1. setTimeout
	2. setInterval
	3. requestAnimationFrame(需要做兼容处理) 

2. canvas API
	1. drawImage(img, sX, sY, sWidth, sHeight, x, y, width, height)
	2. globalAlpha
	3. Save
	4. Restore
3. 为canvas内部添加鼠标事件
 

### 思路
____

1. 搭建网页结构
2. 绘制背景
3. 绘制女孩图片
4. 画星星
	1. 在画布上绘制一个星星
	2. 绘制n个星星
	3. 序列帧动起来
		1. 星星随机展示 
		2. 星星随机位置
		3. 星星闪烁
		4. 星星移动
	4. 鼠标与星星互动