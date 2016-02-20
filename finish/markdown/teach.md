* [概述]()
	* [兼容 HTML](#html)
	* [特殊字段自动转换](#autoescape)
* [区块元素](#block)
	* [段落和换行](#p)
	* [标题](#title) 
	* [区块引用](#blockquote)
	* [列表](#list)
	* [代码块](#code)
	* [分割线](#hr)
	* [区段元素](#span)
		* [链接](#a)
		* [强调](#em)
		* [代码](#cod)
		* [图片](#img)
* [其他](#other)
	* [自动链接](#auto)  
	* [反斜杠](#backslash)





<h3 id="html">兼容 HTML</h3>
要写一些HTML区块元素————比如`<div>`、`<table>`、`<pre>`、`<p>`等标签，必须在前后加上空行与其他内容区隔开，还要求他们的开始标签和结尾标签不能用制表符或空格号来缩进。

例子如下，在Markdown 文件里加上一段HTML表格

	这是一个普通段落
	<table>
		<tr>
			<td>Foo</td>
		</tr>
	<table>
	这是另一个普通段落
Markdown语法在HTML区段标签是有效的 如 `span`等

<h3 id="autoescape">特殊字符自动转换</h3>
Markdown会自动转换

如 「AT&T」你需要打「`AT&amp;T`」;
 

如 4 < 5 Markdown 会自动转为 `AT&amp;T`

***

<h2 id="block">区域元素</h2>

<h3 id="p">段落和换行</h3>
  
一个 Markdown 段落是由一个或多个连续的文本行组成，它的前后要有一个以上的空行（空行的定义是显示上看起来像是空的，便会被视为空行。比方说，若某一行只包含空格和制表符，则该行也会被视为空行）。普通段落不该用空格或制表符来缩进。 支持用`<br>`换行


<h3 id="title">标题</h3>
Markdown支持两种标题的语法，类 _Setext_ 和类 _atx_ 形式

类 Setext 形式是用底线的形式，利用 `=` （最高阶标题） 和 `-`(第二阶标题）,liru

	this is an H1
	=============

	This is an H2
	-------------

类 Atx 形式则是在行首插入 1 到 6个`#`，对应到标题1 到6阶，例如：

	# 这是 H1
	## 这是H2
	###### 这是H6

你可以选择性地闭合类 atx形式的标题，这纯粹只是美观用。


<h3 id="blockquote">区块引用</h3> blockquote

Markdown 标记区域引用是使用类似 email 中用 `>` 的应用方式。
	
	>this is a blockquopte with two paragraphs.
	>consectetuer adipiscing elit.
	>um enim wisi
	>
	> Donec sit amet nisl. Aliquam semper ipsum sit amet velit.


Markdown 也允许你偷懒只在整个断咯的第一行最前面加上`>` :

	> This is a blockquopte with two paragraphs
	consectetuer adipiscing elit.

区块引用可以嵌套使用，只需要根据层次加上不同数量的 `>`

	> this is the first level of quoting.
	> 
	> > this is nesed blockquote.
	> 
	> Back to the first level. 

区块引用可以使用其他的Markdown语法，包括标题、列表、代码块等

	> ## 这是一个标题。
	> 
	> 1.   这是第一行列表项。
	> 2.   这是第二行列表项。
	> 
	> 给出一些例子代码：
	> 	
	>     return shell_exec("echo $input | $markdown_script");


<h3 id="list">列表</h3>
Markdown 支持有序列表和无序列表。

无序列表使用星号、加号或是减号作为列表标记：

		* Red
		* Green	
		* Blue
* Red
* Green
* Blue

等于

	+ Red
	- Red
	1.Red

<h3 id="code">代码区块</h3>

	这是一个普通段落：
		这是一个代码区块。

Markdown 会转换成：

	<p>这是一个普通段落：</p>

    <pre><code>这是一个代码区块。
    </code></pre>

<h3 id="hr">分割线</h3>

以下都可以创建分割线

	* * *
	***
	****
	---
	_____________


<h3 id="span">区段元素</h3>

<h2 id="a">链接</h2>
Markdown 支持两种形式的链接语法： *行内式*和*参考式*不管哪一种都是用[方括号]来标记的

This is [an example](http://example.com/"title") inline link.

[this link](http://example.net/)has no title attribute.

会产生

    <p>This is <a href="http://example.com/" title="Title">
    an example</a> inline link.</p>

    <p><a href="http://example.net/">This link</a> has no
    title attribute.</p>


*隐式链接标记功能*让你可以省略指定链接标记，这种情况下，链接标记会视为等同链接文字，要用隐式链接标记只要在链接文字后面加上一个空的方括号，如果你要让"Google"链接到 google.com。你可以简化成

	[google][]

然后定义链接内容：

	[google]: http://google.com

[baidu][]

[baidu]: http://www.baidu.com

参考链接范例
I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

<h3 id="em">强调</h3>

Markdown 使用星号(`*`) 和底线(`_`)作为标记强调字词的符号，被*和_包围的字会被用`em`标签包围,用两个`*` 或 `_`包围的话，则会被转成`<storng>`.


<h3 id="code">代码</h3>
用``来开始和结束，如

	`return true`;

<h3 id="img">图片</h3>

Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： _行内式_和_参考式_。

行内式的图片语法：

![Alt text](/path/to/img.jpg)

	![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")

	![Alt text](/path/to/img.jpg "Optional title")

详细叙述：

* 一个惊叹号 `!`
* 接着一个方括号，里面放上图片的代替文字
* 接着一个普通括号，里面放上图片的网址，最后还可以用引用号包住并加上 选择性的 'title'文字


参考式的图片语法则长得像这样：

	![Alt text][id]
`id` 是图片参考的名称，图片参考的定义方式则和连接参考一样：


[id]: url/to/image "Optional title attribute"

到目前为止Markdown还无法给图片指定宽高 

------

<h2 id="other">其他</h2>

<h3 id="auto">自动链接</h3>

	<http://example.com/>

	Markdown 会转为：

	<a href="http://example.com/">http://example.com/</a>

<h3 id="backslash"> 反斜杠</h2>

Markdown 可以利用反斜杠来插入一些在语法中有其他意义的符号，例如：如果你想要用星号加在文字的方式来做出强调结果（但不用`<em>`标签），你可以在星号前面加上反斜杠

\* litral asterisks\*
	
	\* litral asterisks\*	


<br><br><br>

---

<h2>感谢</h2>

[Markdown教程](http://www.appinn.com/markdown/#autoescape "Markdown教程")



<br><br>


