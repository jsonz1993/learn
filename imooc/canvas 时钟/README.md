[http://www.imooc.com/video/2434](http://www.imooc.com/video/2434)

	Draw a line
	context.beginPath()
	context.moveTo(100, 100);
	context.lineTo(700, 700);
	context.closePath()
	context.stroke();

	Draw an arc
 	
	圆心x坐标 圆心y坐标 半径 开始弧度 结束弧度 是否逆时针
	context.arc( centerx, centery, radius, startingAngle, endingAngle, anticlockwise = false)
	ctx.beginPath();
	context.arc( centerx, centery, radius, startingAngle, endingAngle, anticlockwise = false);
	ctx.closePath();
	ctx.stroke();

	用closePath() 会自动首尾相连

###### 画时钟圆

1. 绘制静态时间
2. 刷新50ms 更新时间
3. 判断时间改变，哪个位置改变时间
4. 添加小球函数
5. 小球运动函数