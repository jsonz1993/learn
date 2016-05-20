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
