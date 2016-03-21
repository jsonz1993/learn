[REACT](http://www.imooc.com/video/10427)

#一个还没开始就夭折的学习点。
听群里的人说react用的人没有vue那么多，而且基本上都是想用react来做app 才会去看的。vue的话可以配合其他的框架，用起来很灵活。
转战vue.js

### 知识基础

1. JS CSS 基础
2. SASS Compass 
3. Yeoman Grunt Webpack
4. CommonJs Node
5. Git Github

## React-JSX-Style
[体验语法](https://jsfiddle.net/reactjs/69z2wepo/)

JSX --> JS JavaScript、X XML

类似的有CoffeeScript,TypeScript


	<div id="container">
	
	    <!-- This element's contents will be replaced with your component. -->
	
	</div>
 
	var Hello = React.createClass({
			render : function() {
	    		return <div class="alert-text"> Hello {this.props.title} {this.props.name}</div>
	    }
	});
	
	React.render(<Hello name="World" title="Mr" />,
	document.getElementById('container'));

###style

* __class__在js里是关键字，所以上面的 class=alert-text 会无效

这时候要用 _className_

* 也可以用行内样式，有两种方法。一种直接写，另一种用变量

	var Hello = Reactl.createClass({
		var styleObj = { color : 'red' };
		render : function(){
			return <div style = {styleObj / { color : " red "}}
		}
	})

* document.getElementById('container').style.paddingLeft = '100px'

#看到 [react 3.1](http://www.imooc.com/video/9820)