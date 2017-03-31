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


## 进阶
____

#### 控制命令

###### @debug

可以在命令行打印出日志
@debug "$boolean is #{$boolean}"

###### if

假设要控制一个元素隐藏或显示，我们就可以定义一个混合宏，通过 @if...@else... 来判断传进参数的值来控制 display 的值。如下所示：
	
	@mixin blockOrHidden($boolean:true) {
	  @if $boolean {
	    @debug "$boolean is #{$boolean}";
	    display: block;
	  }
	  @else {
	    @debug "$boolean is #{$boolean}";
	    display: none;
	  }
	}
	
	.block {
	  @include blockOrHidden;
	}
	
	.hidden {
	  @include blockOrHidden(false);
	}

###### @for循环

	@for $i from <start> through <end>
	@for $i from <start> to <end>
	
+ $i 表示变量
+ start 表示起始值
+ end 表示结束值
+ 关键字through 表示包括end这个数
+ 关键字end表示不包括end

		@for $i from 1 through 3 {
		  .item-#{$i} {width: 2em * $i; }
		}
		
		@for $i from 1 to 3 {
		  .item-#{$i} {height: 2em * $i;}
		}

		.item-1 {
		  width: 2em;
		}
		
		.item-2 {
		  width: 4em;
		}
		
		.item-3 {
		  width: 6em;
		}
		
		.item-1 {
		  height: 2em;
		}
		
		.item-2 {
		  height: 4em;
		}
	
		$grid-prefix: span !default;
		$grid-width: 60px !default;
		$grid-gutter: 20px !default;
		%grid {
		    float: left;
		    margin-left: $grid-gutter / 2;
		    margin-right: $grid-gutter / 2;
		}
		
		@for $i from 1 through 2 {
		    .#{$grid-prefix}#{$i} {
		        width: $grid-width * $i + $grid-gutter * ($i - 1);
		        @extend %grid;
		    }
		}

		.span1, .span2 {
		  float: left;
		  margin-left: 10px;
		  margin-right: 10px;
		}
		
		.span1 {
		  width: 60px;
		}
		
		.span2 {
		  width: 140px;
		}


###### @while循环
@while 指令也需要 SassScript 表达式（像其他指令一样），并且会生成不同的样式块，直到表达式值为 false 时停止循环。这个和 @for 指令很相似，只要 @while 后面的条件为 true 就会执行。

	$types: 4;
	$type-width: 20px;
	
	@while $types > 0 {
	    .while-#{$types} {
	        width: $type-width + $types;
	    }
	    $types: $types - 1;
	}

	.while-4 {
	  width: 24px;
	}
	
	.while-3 {
	  width: 23px;
	}
	
	.while-2 {
	  width: 22px;
	}
	
	.while-1 {
	  width: 21px;
	}


###### @each循环

	@each $var in <list>

	$list : adam john wynn mason kuroir;
	
	@mixin author-images {
	  @each $author in $list {
	    .photo-#{$author} {
	      background: url("/images/avatars/#{$author}.png no-repeat")
	    }
	  }
	}
	
	.author-bio {
	  @include author-images;
	}

	.author-bio .photo-adam {
	  background: url("/images/avatars/adam.png no-repeat");
	}
	.author-bio .photo-john {
	  background: url("/images/avatars/john.png no-repeat");
	}
	.author-bio .photo-wynn {
	  background: url("/images/avatars/wynn.png no-repeat");
	}
	.author-bio .photo-mason {
	  background: url("/images/avatars/mason.png no-repeat");
	}
	.author-bio .photo-kuroir {
	  background: url("/images/avatars/kuroir.png no-repeat");
	}


#### 字符串数字函数

###### 字符串函数-unquote()函数 去掉字符串

	.test1 {
	  content: unquote('hello sass!')
	}

	.test1 {
	  content: hello sass!;
	}

###### 字符串函数-quote()函数 加字符串

###### 字符串函数-To-upper-case()、To-lower-case()

	.test2 {
	  text : to-lower-case(AAAa);
	  text : to-upper-case(aA-aa)
	}

#### 数字函数简介

+ pcrcntagc($value) 将一个不带单位的转百分比
+ round($value) 四舍五入
+ ceil($value) 向上取整
+ floor($value) 向下取整
+ abs($value) 返回一个绝对值
+ min($numbers1, $number2) 找出几个数值的最小值
+ max($numbers1, $number2) 找出最大值
+ random() 获取[0,1)随机数

#### 列表函数

+ length($list) 返回一个列表的长度值 

		length(1 2 3) => 3
+ nth($list, $n) 返回一个列表中指定的某个标签值 
		nth(0 1 2,2) => 1
+ join($list1, $list2, [$scparator]) 将两个列链接到一起，变成一个列表
+ append($list1,$val,[$separator])将某个值放在列表最后
+ zip($lists..)将几个列表结合成一个多维列表
+ index($list, $value) 返回一个值在列表中的位置

**...**

剩下函数基本不用跳过

#### @ 语法

######@import 同less 引入文件 

###### @media 同css 媒介查询


<br><br><br><br><br><br><br><br><br><br><br><br><br>