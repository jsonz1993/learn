[http://www.imooc.com/video/9274](http://www.imooc.com/video/9274)

###### drawImage

	从dx,dy绘制，共绘制dw 宽，dh高
	drawImage(img, dx, dy, dw, dh)

	图片的sx,sy轴开始截取sw,sh宽高
	绘制在dx,dy轴上占比dw,dh宽高
	drawImage(img,
			  sx, sy, sw, sh,
			  dx, dy, dw, dh)

跟慕课敲了一边，有挺多待优化的地方，等看完canvas绘图详解后全过。自定义放大镜颜色，大小，形状，放大倍数

context.getImageData(x,y,w,h) => width, height, data
context.putImageData(imgData, dx, dy, dirtyX, dirtyY, dirtyW, dirtyH)

###### getImageData

	Array 
	对应 
	0,1,2,3 第一个像素 rgba
	4,5,6,7 第二个像素rgba  
	r - pixelData[4 * i + 0]
	g - pixelData[4 * i + 1]
	b - pixelData[4 * i + 2]
	a - pixelData[4 * i + 3]

###### 回家看代码，全部撸一遍收工走人