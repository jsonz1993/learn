[Sass](http://www.imooc.com/learn/311)

##入门
------

###1 安装

[Ruby官网下载](http://rubyinstaller.org/downloads) 对应的Ruby版本

安装的时候记得勾选第二个选项，添加全局变量环境

![](http://img.mukewang.com/54f561190001531806350474.jpg)

安装后打开Command 输入 `gem install sass`来安装

__如果失败可以通过淘宝镜像安装__

第一步：移动默认的源

	gem sources --remove https://rubygems.org/

第二步：指定淘宝的源

	gem sources -a https://ruby.taobao.org/

第三步：查看指定的源是不是淘宝源

	gem sources -l

最后执行安装

	gem install sass

安装后查看是否成功

	sass -v

#### 2语法格式

文件夹以 `.scss` 为扩展名

使用CSS语法

	body {
		font : 100% Helvetica, sans-serif;
		color : #333;
	}

使用SCSS语法格式

	$font-stack : Helvetica, sans-serif;
	$primary-color : #333;
	body {
		font: 100% $font-stack;
		color: $primary-color;
	}


#### 3. 编译

1. GUI 编译 Koala ([http://koala-app.com/](http://koala-app.com/))
2. gulp

		var gulp = require('gulp');
		var sass = require('gulp-sass');
		
		gulp.task('sass', function () {
		    gulp.src('./scss/*.scss')
		        .pipe(sass())
		        .pipe(gulp.dest('./css'));
		});
		
		gulp.task('watch', function() {
		    gulp.watch('scss/*.scss', ['sass']);
		});
		
		gulp.task('default', ['sass','watch']);
3. 编译方式
	1. 嵌套输出方式 nested
	
		sass --watch test.scss:test.css --style nested
		![](http://img.mukewang.com/54f54dab00019a0504880296.jpg)
	
	2. 展开输出方式 expanded
		sass --watch test.scss:test.css --style expanded
		![](http://img.mukewang.com/54f54e2c0001c2c004850281.jpg)
	
	3. 紧凑输出方式 compact
		sass --watch test.scss:test.css --style compact
		![](http://img.mukewang.com/54f7b4bb00014f9908020299.jpg)

	4. 压缩输出方式 compressed
		sass --watch test.scss:test.css --style compressed
		![](http://img.mukewang.com/54f5511d0001b5c206660401.jpg)
	
#### sass基本特性

###### 声明变量

$width : 100px;`sass`
 
@widht:100px; `less`

###### 普通变量与默认变量

普通变量

	$fontSize : 12px;
	body {
		font-size : $fontSize;
	}

编译后

	body {
		font-size : 12px;
	} 
	

默认变量

	$baseLineHeight : 1.5 !default;
	
	body {
		line-height: $baseLineHeight;
	}


编译后
	
	body {
		line-height: 1.5;
	}


sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可。

	$baseLineHeight: 2;
	$baseLineHeight: 1.5 !default;
	body{
	    line-height: $baseLineHeight; 
	}
	

编译后的css代码

	body{
	    line-height:2;
	}

###### 全局变量与局部变量

	//SCSS
	$color: orange !default;//定义全局变量(在选择器、函数、混合宏...的外面定义的变量为全局变量)
	.block {
	  color: $color;//调用全局变量
	}
	em {
	  $color: red;//定义局部变量
	  a {
	    color: $color;//调用局部变量
	  }
	}
	span {
	  color: $color;//调用全局变量
	}

###### 嵌套-选择器嵌套

	nav {
		a {
			color : red;
	
			header & {
				color: green;
			}
		}
	}

	nav a { color: red; }
	header nav a { color: green; }

###### 嵌套-属性嵌套

	.box {
	    border: {
	        top: 1px solid red;
	        bottom: 1px solid green;
	    }
	}

	.box {
	  border-top: 1px solid red;
	  border-bottom: 1px solid blue;
	}


###### 嵌套-伪类嵌套

	.clearfix{
		&:before,
		&:after {
		    content:"";
		    display: table;
		  }
		&:after {
		    clear:both;
		    overflow: hidden;
		  }
	}

	clearfix:before, .clearfix:after {
	  content: "";
	  display: table;
	}
	.clearfix:after {
	  clear: both;
	  overflow: hidden;
	}

###### 混合宏-声明混合宏

不带参数混合宏

在sass中，用 `@mixin` 来声明一个混合宏

	@mixin border-radius {
		-webkit-border-radius : 5px;
		border-radius : 5px;
	}
	
	@mixin border-radius($radius: 5px) {
		-webkit-border-radius : $radius;
		border-radius : $radius;
	}
	
	@mixin box-shadow($shadow...) {
		@if length($shadow) >= 1 {
			@include prefixer(box-shadow, $shadow);
		} @else {
			$shadow: 0 0 4px rgba(0, 0, 0, .3);
			@include prefixer(box-shadow, $shadow)
		}
	}

###### 混合宏-调用混合宏

	@mixin border-radius{
	    -webkit-border-radius: 3px;
	    border-radius: 3px;
	}

	button {
	    @include border-radius;
	}

	button {
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	}

###### 混合宏的参数

没有默认值

	@mixin border-radius($radius){
	  -webkit-border-radius: $radius;
	  border-radius: $radius;
	}

	.box {
	  @include border-radius(3px);
	}

	.box {
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	}

带值参数
	
	@mixin border-radius($radius:3px){
	  -webkit-border-radius: $radius;
	  border-radius: $radius;
	}

	.btn {
	  @include border-radius;
	}
	
	.btn {
	  -webkit-border-radius: 3px;
	  border-radius: 3px;
	}

	.box {
	  @include border-radius(50%);
	}

	.box {
	  -webkit-border-radius: 50%;
	  border-radius: 50%;
	}

传多个参数

	@mixin center($width,$height){
	  width: $width;
	  height: $height;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin-top: -($height) / 2;
	  margin-left: -($width) / 2;
	}

	.box-center {
	  @include center(500px,300px);
	}

	.box-center {
	  width: 500px;
	  height: 300px;
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin-top: -150px;
	  margin-left: -250px;
	}


	@mixin box-shadow($shadows...){
	  @if length($shadows) >= 1 {
	    -webkit-box-shadow: $shadows;
	    box-shadow: $shadows;
	  } @else {
	    $shadows: 0 0 2px rgba(#000,.25);
	    -webkit-box-shadow: $shadow;
	    box-shadow: $shadow;
	  }
	}

	box {
	  @include box-shadow(0 0 1px rgba(#000,.5),0 0 2px rgba(#000,.2));
	}


###### 扩展/继承 @extend


	.btn {
		border: 1px solid #ccc;
		padding: 6px 10px;
		font-size: 14px;
	}
	
	.btn-primary {
		background-color: #f36;
		color: #fff;
		@extend .btn;
	}
	
	.btn-second {
		background-color: orange;
		color: #fff;
		@extend .btn;
	}

	.btn, .btn-primary, .btn-second {
	  border: 1px solid #ccc;
	  padding: 6px 10px;
	  font-size: 14px;
	}
	
	.btn-primary {
	  background-color: #f36;
	  color: #fff;
	}
	
	.btn-second {
	  background-color: orange;
	  color: #fff;
	}

###### 占位符 %placeholder 配合继承 @extend

他可以取代以前 CSS 中的基类造成的代码冗余的情形。因为 %placeholder 声明的代码，如果不被 @extend 调用的话，不会产生任何代码。

	%mt5 {
	  margin-top: 5px;
	}
	%pt5{
	  padding-top: 5px;
	}
	
	.btn1 {
		@extend %mt5;
		@extend %pt5;
	}
	
	.block {
		@extend %mt5;
	
		span {
			@extend %pt5;
		}
	}

###### 混合宏 VS 继承 VS 占位符
	
SCSS中混合宏使用 __有变量传参的用混合宏__

	@mixin mt($var){
	  margin-top: $var;  
	}
	
	.block {
	  @include mt(5px);
	
	  span {
	    display:block;
	    @include mt(5px);
	  }
	}
	
	.header {
	  color: orange;
	  @include mt(5px);
	
	  span{
	    display:block;
	    @include mt(5px);
	  }
	}
	
SCSS 继承的运用 __不需要传参数，有一个比较好的基类文件__
	.mt{
	  margin-top: 5px;  
	}
	
	.block {
	  @extend .mt;
	
	  span {
	    display:block;
	    @extend .mt;
	  }
	}
	
	.header {
	  color: orange;
	  @extend .mt;
	
	  span{
	    display:block;
	    @extend .mt;
	  }
	}
	
	//SCSS中占位符的使用
	%mt{
	  margin-top: 5px;  
	}
	
	.block {
	  @extend %mt;
	
	  span {
	    display:block;
	    @extend %mt;
	  }
	}
	
	.header {
	  color: orange;
	  @extend %mt;
	
	  span{
	    display:block;
	    @extend %mt;
	  }
	}

###### 插值#{} __功能强大超乎我想象__

	$properties : (margin, padding);
	@mixin set-value($side, $value) {
	  @each $prop in $properties {
	    #{$prop}-#{$side} : $value;
	  }
	}
	
	.login-box {
	  @include set-value(top, 14px);
	}

	@mixin generate-sizes($class, $small, $medium, $big) {
	    .#{$class}-small {font-size: $small;}
	    .#{$class}-medium {font-size: $medium;}
	    .#{$class}-big {font-size: $big;}
	}
	@include generate-sizes('header-text', 12px, 20px, 40px)


	@include generate-sizes('header-text', 12px, 20px, 40px);
	%update-status {
	    margin-top: 20px;
	    background: #F00;
	}
	
	.selected-status {
	    font-weight: bold;
	}
	
	$flag: 'status';
	.navigation {
	    @extend %update-#{$flag};
	    @extend .selected-#{$flag};
	}


###### 注释

	//sass 注释
	/*css注释*/ 

####运算

###### 加法 减法
	
	不可以不同单位的转换 px+em
	.box {
	  width: 20px + 9in;
	  height: 9in - 20px;
	  margin: 9in * 2;
	  padding: (10in / 2);
	}

	.box {
	  width: 884px;
	  height: 8.79167in;
	  margin: 18in;
	  padding: 5px;
	}

需要注意的是 除法要加（）括号











<br><br><br><br><br><br><br><br><br><br><br><br><br>