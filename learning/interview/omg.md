# 面试经历
___

## 不知名创业公司

凤轶推荐过去的，目标9-11k（10k）。本来以为十拿九稳...因为用的技术和现在公司的基本一样，架构也差不多

创业公司，做自己的app。

技术面问的全是基础的css：

####### 1.css动画和dom操作动画 选那个，为什么？

		如果有css动画，则用css，不行再raf(requestAnimationFrame) dom操作。
		css动画现在很多机器都是用硬件加速，所以性能比dom操作高，但存在兼容性。
		
补知识：
[高性能css3动画](https://www.qianduan.net/high-performance-css3-animations/)

		1. js动画在pc兼容性有一定优势
		2. 尽可能多的利用硬件能力，如使用3D变形来开启GPU加速
		-webkit-transform: translate3d(0, 0, 0);
		-moz-transform: translate3d(0, 0, 0);
		-ms-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);  
		ps: 在移动端就是启用硬件加速的。translateX 和 translate3d（x,0,0）没区别。
	
		3. 如动画过程有闪烁（通常发生在动画开始的时候），可以尝试下面的Hack：
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;
		
		-webkit-perspective: 1000;
		-moz-perspective: 1000;
		-ms-perspective: 1000;
		perspective: 1000;

		4. 尽量用 translate3d 来右移而不是用 lest，流畅度会更高
		5. 尽可能少用box-shadows,性能杀手
		6. 尽可能让动画元素不在文档流中，已减少重排。
			pos-f; pos-a
		7.
			触发两次 layout
		   var newWidth = aDiv.offsetWidth + 10; //read
			aDiv.style.width = newWidth + 'px'; // write
		   var newHeight = aDiv.offsetHeight + 10; // read
			aDiv.style.height = newHeigit + 'px'; // write
		 
			触发一次layout
			var newWidth = aDiv.offsetWidth + 10;
			var newHeight = aDiv.offsetHeight + 10
			aDiv.style.width = newWidth + 'px';
			aDiv.style.height = newHeigit + 'px';


		关于transform的动画（transition或者animation），在移动端就是启用硬件加速的。translateX 和 translate3d（x,0,0）没区别。
		用position把元素脱离文档流，再配上transform3d，能让left，margin这些属性的动画获得硬件加速。不过这样还不如直接用transform。
		javascript动画的问题不是layout，而是requestAnimationFrame的支持程度。用3d transform就不会产生layout。但是如果浏览器不支持RAF，那必然会丢帧。


群里解答：

	css3的缓动函数 bessel过程 是浏览器内部实现
	raf的话 如果你不用动画库 需要你自己写这些东西，中间的计算过程是js来执行的


###### 2.左边固定布局，右边自适应

基础题，太久没写这种布局

	答不出

	div {
        height: 400px;
    }
    .left {
        width: 300px;
        background-color: yellow;
        float: left;
    }

   .right {
        margin-left: 300px;
        background-color: red;
    }

###### 3.flexbox 兼容性

回答

	用flex 不行再转百分比

面试官

	可以用过渡属性....

###### 4.icon不兼容处理

回答

	判断，不兼容用雪碧图

###### 5. 看一段代码说布局问题

回答

	用的图片不是icon。用的from，用的input[submit]

面试官

	类名写的太多。 玛德我日你了
