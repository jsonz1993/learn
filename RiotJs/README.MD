[http://riotjs.com/zh/guide/](http://riotjs.com/zh/guide/) 

## 自定义标签

	<my-tag>
	...
	</my-tag>
	<style></style>
	<script>
		this 指向自定义标签实例
	</script>

	<body>
	
	  <!-- 将自定义标签放在body内部的任何地方 -->
	  <todo></todo>
	
	  <!-- 引入 riot.js -->
	  <script src="riot.min.js"></script>
	
	  <!-- 引入标签定义文件 -->
	  <script src="todo.js" type="riot/tag"></script>
	
	  <!-- 加载标签实例 -->
	  <script>riot.mount('todo')</script>
	
	</body>


#### `mount`

	// mount 页面中所有的自定义标签
	riot.mount('*')
	
	// mount 自定义标签到指定id的html元素
	riot.mount('#my-element')
	
	// mount 自定义标签到选择器选中的html元素
	riot.mount('todo, forum, comments')

###### 访问dom元素

允许通过 `this` 实例直接访问设置了 `name`属性的元素

需要在`update`之后访问

	<example-tag>
	  <p id="findMe">Do I even Exist?</p>
	
	  <script>
	  var test1 = document.getElementById('findMe')
	  console.log('test1', test1)  // Fails
	
	  this.on('update', function(){
	    var test2 = document.getElementById('findMe')
	    console.log('test2', test2) // Succeeds
	  })
	  </script>
	</example-tag>

更好的方法不是每次`update`都去取要的元素，而是 `mount`事件中做这件事
	
	<example-tag>
	  <p id="findMe">Do I even Exist?</p>
	
	  <script>
	  var test1 = document.getElementById('findMe')
	  console.log('test1', test1)  // Fails
	
	  this.on('update', function(){
	    var test2 = document.getElementById('findMe')
	    console.log('test2', test2) // Succeeds, fires on every update
	  })
	
	  this.on('mount', function(){
	    var test3 = document.getElementById('findMe')
	    console.log('test3', test3) // Succeeds, fires once (per mount)
	  })
	  </script>
	</example-tag>


基于上下文查询。可以通过 `this.root`访问根目录

	<example-tag>
	  <p id="findMe">Do I even Exist?</p>
	  <p>Is this real life?</p>
	  <p>Or just fantasy?</p>
	
	  <script>
	  this.on('mount', function(){
	    // Contexted jQuery
	    $('p', this.root)
	
	    // Contexted Query Selector
	    this.root.querySelectorAll('p')
	  })
	  </script>
	</example-tag>

#### 标签选项

`mount`第二个参数用来传递标签选项

	<script>
	riot.mount('todo', { title: 'My TODO app', items: [ ... ] })
	</script>

	<my-tag>
	
	  <!-- 在HTML中访问参数 -->
	  <h3>{ opts.title }</h3>
	
	  // 在 JavaScript 中访问参数
	  var title = opts.title
	
	</my-tag>

## Mixin

可以将公共代码在不同标签之间方便的共享

	var OptsMixin = {
	    init: function() {
	      this.on('updated', function() { console.log('Updated!') })
	    },
	
	    getOpts: function() {
	        return this.opts
	    },
	
	    setOpts: function(opts, update) {
	        this.opts = opts
	
	        if(!update) {
	            this.update()
	        }
	
	        return this
	    }
	}
	
	<my-tag>
	    <h1>{ opts.title }</h1>
	
	    this.mixin(OptsMixin)
	</my-tag>

上例中，我们为所有 `my-tag` 标签实例混入了 `OptsMixin` ，它提供 `getOpts` 和 `setOpts` 方法. init 是个特殊方法，用来在标签载入时对mixin进行初始化。 (`init` 方法不能混入此mixin的标签中访问)
	
	var my_tag_instance = riot.mount('my-tag')[0]
	
	console.log(my_tag_instance.getOpts()) //will log out any opts that the tag has

拓展

	function IdMixin() {
	    this.getId = function() {
	        return this._id
	    }
	}
	
	var id_mixin_instance = new IdMixin()
	
	<my-tag>
	    <h1>{ opts.title }</h1>
	
	    this.mixin(OptsMixin, id_mixin_instance)
	</my-tag>

#### 共享mixin

全局注册mixin

	riot.mixin('mixinName', mixinObject)

用`mixin()` 加上mixin 名字来将mixin混入标签
	
	<my-tag>
	    <h1>{ opts.title }</h1>
	
	    this.mixin('mixinName')
	</my-tag>

#### 生命周期

- 创建标签实例
- 标签定义中的Javascript被执行
- HTML 中的表达式被首次计算并首次触发`update`事件
- 标签被加载到页面上 触发`mount`事件

事件更新
- 事件处理器被调用后自动更新 可以设置`e.preventUpdate = true` 来禁止
- 标签实例 `this.update()`被调用后
- 标签任何一个`parent` 的 `this.update()`被调用时
- 当`riot.update()`被调用时，会更新页面所有的表达式

#### 监听生命周期事件

	<todo>
	
	this.on('before-mount', function() {
	    // 标签被加载之前
	  })
	
	  this.on('mount', function() {
	    // 标签实例被加载到页面上以后
	  })
	
	  this.on('update', function() {
	    // 允许在更新之前重新计算上下文数据
	  })
	
	  this.on('updated', function() {
	      // 标签模板更新后
	    })
	
	  this.on('before-unmount', function() {
	    // 标签实例被删除之前
	  })
	
	  this.on('unmount', function() {
	    // 标签实例被从页面上删除后
	  })
	
	  // 想监听所有事件？
	  this.on('all', function(eventName) {
	    console.info(eventName)
	  })
	
	</todo>

## 表达式

html中

	{ 表达式 }

html属性或文本节点

	<h3 id={表达式}>
		{ 表达式 }
	</h3>

表达式是纯js编译

	{ title || 'Untitled' }
	{ results ? 'ready' : 'loading' }
	{ new Date() }
	{ message.length > 140 && 'Message is too long' }
	{ Math.round(rating) }

如果表达式过于复杂，放在update里面处理

#### 布尔属性

如果布尔属性不为true 不被渲染

#### class简写
	<p class={ foo: true, bar: 0, baz: new Date(), zorro: 'a value' }></p>

#### 花括号转义

	\\{ this is not evaluated \\} 输出为 { this is not evaluated }

#### 自定义括号

	riot.settings.brackets = '${ }'
	riot.settings.brackets = '\{\{ }}'

#### 嵌套标签

> acc.tag
	
	<account>
	  <subscription  plan={ opts.plan } show_details="true" />
	</account>


> subscription.tag

	<subscription>
	  <h3>{ opts.plan.name }</h3>
	
	  // 取得标签选项
	  var plan = opts.plan,
	      show_details = opts.show_details
	
	  // 访问父标签实例
	  var parent = this.parent
	
	</subscription>

#### dom元素与name自动绑定

`name` 与 `id` 会被自动绑定到上下文

	<login>
	  <form id="login" onsubmit={ submit }>
	    <input name="username">
	    <input name="password">
	    <button name="submit">
	  </form>
	
	  // 获取 HTML 元素
	  var form = this.login,
	    username = this.username.value,
	    password = this.password.value,
	    button = this.submit
	
	</login>

当然，这些元素也可以在HTML中引用: <div>{ username.value }</div>

#### 事件处理器
	
	<login>
	  <form onsubmit={ submit }>
	
	  </form>
	
	  // 上面的表单提交时调用此方法
	  submit(e) {
	
	  }
	</login>

也可以动态定义

	<form onsubmit={ condition ? method_a : method_b }>

浏览器处理默认处理

	submit(){ return true}

#### 事件对象

	e.currentTarget 指向事件处理器的所属元素.
	e.target 是发起事件的元素，与 currentTarget 不一定相同.
	e.which 是键盘事件(keypress, keyup, 等…)中的键值 .
	e.item 是循环中的当前元素.

#### 渲染条件
	
	<div if={ is_premium }>
	  <p>This is for premium users only</p>
	</div> 

	show – 当值为真时用 style="display: ''" 显示元素
	hide – 当值为真时用 style="display: none" 隐藏元素
	if – 在 document 中添加 (真值) 或删除 (假值) 元素

__判断用 `==` 而不是 `===`__

#### 循环
`each`

	<todo>
	  <ul>
	    <li each={ items } class={ completed: done }>
	      <input type="checkbox" checked={ done }> { title }
	    </li>
	  </ul>
	
	  this.items = [
	    { title: 'First item', done: true },
	    { title: 'Second item' },
	    { title: 'Third item' }
	  ]
	</todo>

当数组使用 `push()`, `slice()` 或 `splice` 方法进行操作后，新的元素将被自动添加或删除

#### 上下文

	<todo>
	  <div each={ items }>
	    <h3>{ title }</h3>
	    <a onclick={ parent.remove }>Remove</a>
	  </div>
	
	  this.items = [ { title: 'First' }, { title: 'Second' } ]
	
	  remove(event) {
	
	  }
	</todo>

在循环元素中，除了 `each` 属性外，其它都属于_子上下文_, 因此 `title` 可以被直接访问而 `remove` 需要从 `parent`. 中访问，因为`remove`方法并不是循环元素的属性.

#### 循环项的事件处理器

事件处理器中可以通过 `event.item` 来访问单个集合项.

	<todo>
	  <div each={ items }>
	    <h3>{ title }</h3>
	    <a onclick={ parent.remove }>Remove</a>
	  </div>
	
	  this.items = [ { title: 'First' }, { title: 'Second' } ]
	
	  remove(event) {
	
	    // 循环项
	    var item = event.item
	
	    // 在集合中的索引
	    var index = this.items.indexOf(item)
	
	    // 从集合中删除
	    this.items.splice(index, 1)
	  }
	</todo> 

#### 循环自定义标签

	<todo-item each="{ items }" data="{ this }"></todo-item>


当前循环项可以用 this 来引用，你可以用它来将循环项作为一个参数传递给循环标签。

#### 非对象数组

	<my-tag>
	  <p each="{ name, i in arr }">{ i }: { name }</p>
	
	  this.arr = [ true, 110, Math.random(), 'fourth']
	</my-tag>

#### 对象循环

	<my-tag>
	  <p each="{ name, value in obj }">{ name } = { value }</p>
	
	  this.obj = {
	    key1: 'value1',
	    key2: 1110.8900,
	    key3: Math.random()
	  }
	</my-tag>

不太建议使用对象循环，因为在内部实现中，Rio使用 JSON.stringify 来探测对象内容的改变. 整个 对象都会被检查，只要有一处改变，整个循环将会被重新渲染. 会很慢. 普通的数组要快得多，而且只有变化的部分会在页面上体现。

#### 服务端渲染 | #server-side

	var riot = require('riot')
	var timer = require('timer.tag')
	
	var html = riot.render(timer, { start: 42 })
	
	console.log(html) // <timer><p>Seconds Elapsed: 42</p></timer>



## 编译器