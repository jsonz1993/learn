[CSS动画技巧](http://www.imooc.com/video/6864)

###### transition

transition: property duration timing-function delay;

	.change img{
		opacity: 0;
		width:300px;
		height:284px;
		transition: opacity 1s ease-in-out .5s, transform 1s ease-out;
		transform: translate(-100px, -100px);
	}
	
	.change:hover img {
		opacity: 1;
		transform: translate(0, 0);
		transition: opacity 1s ease-in-out, transform 1s ease-out .1s;
	}

###### animation

抖m网站
[csshake](http://elrumordelaluz.github.io/csshake/)

简单的loading

![](https://raw.githubusercontent.com/zhangxinxinWTB/learn/master/imooc/CSS%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/images/load.gif)
	.spinner {
		width: 40px;
		height: 40px;
		background: green;
		border-radius: 100%;
		margin: 100px auto;
		animation: fadeOut 1s infinite ease-in-out;
		opacity: 0;
	}
	
	@keyframes fadeOut {
		from {transform: scale(0);opacity: .8}
		to {transform: scale(1); opacity: 0;}
	}


###### transform

translate 位置变换

rotate 旋转

scale 缩放

skew 倾斜

matrix 矩阵(可以实现其他所有效果)

![原点transform-origin](https://raw.githubusercontent.com/zhangxinxinWTB/learn/master/imooc/CSS%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/images/transform-origin.png)



#### 动画技巧

###### 1. animation-delay 定义动画何时开始

	默认 0 立即执行动画
	正值 延时指定时间后，开始执行动画
	负值 立即执行，但跳过指定时间后进入动画

	#load2 {
	    margin: 200px auto;
	    width: 62px;
	    height: 50px;
	}
	
	#load2 div {
	    display: inline-block;
	    width: 6px;
	    height: 100%;
	    margin-left: 4px;
	    background: green;
	    animation: strechdelay 1.2s infinite ease-in-out;
	}
	
	#load2 .line2 {
	    animation-delay: -1.1s;
	}
	
	#load2 .line3 {
	    animation-delay: -1.0s;
	}
	
	#load2 .line4 {
	    animation-delay: -.9s;
	}
	
	#load2 .line5 {
	    animation-delay: -.8s;
	}
	
	@keyframes strechdelay {
	    0%,
	    40%,
	    100% {
	        transform: scaleY(.4);
	    }
	    20% {
	        transform: scaleY(1);
	    }
	}

![](https://raw.githubusercontent.com/zhangxinxinWTB/learn/master/imooc/CSS%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/images/load1.gif)
![](https://raw.githubusercontent.com/zhangxinxinWTB/learn/master/imooc/CSS%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/images/load2.gif)

	#load3 {
	    position: relative;
	    width: 40px;
	    height: 40px;
	    margin: -50px auto;
	}
	
	#load3 div {
	    position: absolute;
	    width: 100%;
	    height: 100%;
	    left: 0;
	    top: 0;
	    border-radius: 100%;
	    background: green;
	    animation: loadThree 2s infinite ease-in-out;
	    opacity: .3;
	}
	
	#load3 .double-bounce2 {
		animation-delay: -1s;
	}
	
	@keyframes loadThree {
		0%,100% {
			transform: scale(0);
		}
	
		50% {
			transform: scale(1);	
		}
	}


###### 2. 利用border颜色

很简单的一个demo很好玩
	
	#load4 div {
		width: 10em;
		height: 10em;
		margin: 0 auto;
		border: 1em solid rgba(255, 255, 255, .2);
		border-left-color: #fff;
		border-radius: 100%;
		animation: load4 1.2s infinite linear;
	}
	
	@keyframes load4 {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}


###### 3.利用border-width

简直是奇淫技巧

利用遮挡两边边框达到翻页效果

![](https://github.com/zhangxinxinWTB/learn/blob/master/imooc/CSS%E5%8A%A8%E7%94%BB%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/images/border.png?raw=true)

	<div id="poper-flip">
		<div id="image-layer">
			<span></span>
		</div>
	</div>

	#poper-flip {
		margin: 100px auto;
		background-color: #fff;
	}
	
	#image-layer{
		width: 200px;
		height: 100px;
		margin: 0 auto;
		position: relative;
	}
	
	#image-layer span {
		background-color: yellow;
		opacity: .3;
		display: block;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	#image-layer span:before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		border-style: solid;
		border-width: 0;
		border-color: rgba(0, 0, 0, .2) #fff;
		border-radius: 0 0 0 4px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .3), -1px 1px 1px rgba(0, 0, 0, .2);
		transition: all .4s ease-out;
	}
	
	#image-layer span:hover:before {
		border-right-width: 20px;
		border-bottom-width: 20px;
	}
	
	#image-layer span.click:before {
		border-right-width: 400px;
		border-bottom-width: 200px;
	}