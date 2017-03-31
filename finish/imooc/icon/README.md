[font复习](http://www.imooc.com/video/5123)

[icon](https://icomoon.io)

[阿里字体库](http://www.iconfont.cn/)


###### 用图标的好处

1. 灵活性
2. 可扩展
3. 矢量
4. 兼容
5. 本地使用

###### 比较固定的格式
html

	<span class="icon lon-spinner10"></span>
	<span class="icon ali-daikuan"></span>

css

	@font-face {
	    font-family: 'lon-icon';
	    src: url('fonts/icomoon.eot');
	    src: url('fonts/icomoon.eot') format('embedded-opentype'), url('fonts/icomoon.ttf') format('truetype'), url('fonts/icomoon.woff') format('woff'), url('fonts/icomoon.svg') format('svg');
	    font-weight: normal;
	    font-style: normal;
	}

	[class*="lon"] {
	    font-family: 'lon-icon'!important;
	}

	.icon {
	    speak: none;
	    font-style: normal;
	    font-weight: normal;
	    font-variant: normal;
	    text-transform: none;
	    line-height: 1;
	    /* Better Font Rendering =========== */
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	
	.lon-spinner:before {
	    content: "\e97a";
	}