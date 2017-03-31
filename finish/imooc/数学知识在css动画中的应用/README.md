[数学知识在CSS动画中的应用](http://www.imooc.com/view/362)

##### 径向菜单展开效果
	一个点的弧度 = (结束角度 - 开始角度) / 个数
	x : r + r * Math.sin(弧度);
	y : r + r * Math.cos(弧度);

##### 水平垂直居中
	left : 50%;
	top : 50%;
	transform : translate(-50%, -50%);

#### css动态时钟

1. 绝对定位，圆的坐标： 绘制表盘数字（径向菜单）
2. transition, rotate：绘制表盘的刻度和指针
3. 计时器实现转动

__css比js部分精妙得多__