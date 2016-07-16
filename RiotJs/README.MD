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


# API

## 自定义标签

#### 加载

###### riot.mount(customTagSelector, [opts])

- ustomTagSelector 选择器，从页面上选择元素，将自定义标签加载上去。选中的元素的标签名必须与自定义标签名相同;
- opts 可选。构造自定义标签实例的参数。可以任何数据，从简单的对象到完整的应用API。或者是一个Flux数据仓库。完全取决于你想要如何构造你的客户端应用。

@返回值： 加载成功后的标签实例的数组



###### riot.mount(‘*’, [opts])

Riot使用特殊选择器 “*” 来加载页面上所有自定义标签

@返回值: 加载成功的标签实例的数组

###### riot.mount(selector, tagName, [opts])

- `selector` 选择器，选中页面元素加载目标
- `tagName` 待加载的自定义标签没
- `opts` 可选的标签参数
	
	// 加载自定义标签 "my-tag" 到 div#main ，将 api 作为参数
	var tags = riot.mount('div#main', 'my-tag', api)

@返回值: 加载成功的 标签实例数组


###### riot.mount(domNode, tagName, [opts])

将名为 tagName 的自定义标签加载到指定的 domNode 上，将可选的 opts 作为参数. 示例:

	// 加载 "users" 标签到 #slide 结点，api参数放在opts里
	riot.mount(document.getElementById('slide'), 'users', api)

@返回值: 加载成功的 标签实例 数组

#### 渲染

#### riot.render(tagName, [opts])

只在nodeJs可用
	
	// 将 "my-tag" 渲染成 html
	var mytag = require('my-tag')
	riot.render(mytag, { foo: 'bar' })

@返回值: html


#### 标签实例
- `opts` 参数对象
- `parent` 父标签
- `root` 根DOM结点
- `tags` 嵌套的自定义标签实例. 


		<my-tag>
		  <h3>{ opts.title }</h3>	
		  var title = opts.title
		</my-tag>

也可以

	<my-tag>
	  <h3>{ title }</h3>
	
	  this.title = opts.title
	</my-tag>


#### 更新
###### this.update()

	<my-tag>
	
	  <input name="username" onblur={ validate }>
	  <span class="tooltip" show={ error }>{ error }</span>
	
	  var self = this
	
	  validate() {
	    $.get('/validate/username/' + this.username.value)
	      .fail(function(error_message) {
	        self.error = error_message
	        self.update()
	      })
	  }
	</my-tag>

###### this.update(data)

	self.error = error_message
	self.update()

等同于

	self.update({ error: error_message })



###### riot.update() | #update


更新页面上所有加载的标签实例和它们的表达式。

@返回值: 加载成功的 标签实例 数组.

#### 卸载

###### this.unmount(keepTheParent)

将当前标签实例及其子孙从页面上移除。会触发 “unmount” 事件. 如果希望移除标签但保留最顶级的实例，需要给unmount方法一个 true 参数

从 DOM 中移除标签:

	mytag.unmount()

保留顶级实例，移除所有的子标签:

	mytag.unmount(true)

#### 嵌套标签

用 tags 变量来访问嵌套的标签实例:

	<my-tag>
	
	  <child></child>
	
	  // 访问子标签
	  var child = this.tags.child
	
	</my-tag>



#### 事件

每个标签实例都是一个 `observable` 所以你可以使用 `on` 和 `one` 方法来监听发生在标签实例上的事件. 以下是内置支持的事件:

- “update” – 标签实例被更新之前触发. 使得在UI表达式被更新之前重新计算上下文数据。
- “updated” - 标签实例被更新之后触发. 你可以在这里做一些dom更新的操作。
- “mount” – 在标签被加载到页面上后触发
- “unmount” – 在标签被从页面上移除后触发


		// 当标签实例不再在DOM树中后，释放资源
		this.on('unmount', function() {
		  clearTimeout(timer)
		})

#### 保留字
`opts`, `parent`, `root`, `update` `unmount`, `on`, `off`, `one`, `trigger`

## 编译
	
	riot.compile(function() {
	  var tags = riot.mount('*')
	})

可以省去 riot.compile 直接写:

	var tags = riot.mount('*')

但我们无法确定外部资源何时被加载和编译完成，所以如果有外部脚本，`riot.mount`的返回值可能是空数组。所以只有当所有的脚本定义在当前页面上时才能省略掉 `riot.compile` 。

#### riot.compile(url, callback)

加载指定的 URL 并编译所有的标签，编译完成后调用 callback 。例如:

	riot.compile('my/tags.tag', function() {
	  // 加载的标签定义已经可用
	})

#### riot.compile(tag)

编译并执行指定的 tag. 例如:

	<template id="my_tag">
	  <my-tag>
	    <p>Hello, World!</p>
	  </my-tag>
	</template>
	
	<script>
	riot.compile(my_tag.innerHTML)
	</script>

#### 服务端编译

	var riot = require('riot')
	
	var js = riot.compile(tag)

	compile 函数参数是标签定义字符串，返回 JavaScript 字符串.


## Observable

#### riot.observable(el)

为 el 对象添加 Observer 支持，如果参数为空，则返回一个新创建的observable实例。之后该对象就可以触发和监听事件了。

	function Car() {
	
	  // 使 Car 实例成为 observable
	  riot.observable(this)
	
	  // 监听 'start' 事件
	  this.on('start', function() {
	    // 发动引擎
	  })
	
	}
	
	// 创建一个新的 Car 实例
	var car = new Car()
	
	// 触发 'start' 事件
	car.trigger('start')

@返回值 参数 `el` 或新的 `observable` 实例

#### el.on(events, callback)

监听用空格分隔的 event 列表，每次事件被触发时调用 callback

	// 监听单个事件
	el.on('start', function() {
	
	})
	
	// 监听多个事件，事件类型将作为回调函数的参数传递
	el.on('start stop', function(type) {
	
	  // type 是 'start' 或 'stop'
	
	})
	
	// 监听此 observable 上的所有事件
	el.on('*', function(event, param1, param2) {
	  // event will be the name of any event triggered
	  // do something with the parameters
	})

@返回值 `el`

#### el.one(events, callback)

监听的由空格分隔的 `events` 但只执行 `callback` 最多一次.

	// 即使 'start' 被触发多次，也只执行回调函数一次
	el.one('start', function() {
	
	})

@返回值 `el`

#### el.off(events)

删除参数中指定的以空格分隔的 `events` 的监听器

	el.off('start stop')

@返回值 `el`

#### el.off(events, fn)

从给定的事件列表的监听器中删除指定的那个

	function doIt() {
	  console.log('starting or ending')
	}
	
	el.on('start middle end', doIt)
	
	// 从 start 和 end 事件的监听器中删除指定的那个
	el.off('start end', doIt)

@返回值 `el`

#### el.off(‘*’)

删除所有事件的所有监听器

@返回值 `el`

#### el.trigger(events)

触发事件。执行所有监听由空格分隔的 `events` 的回调函数

	el.trigger('start')
	el.trigger('render update')

@返回值 `el`

#### el.trigger(event, arg1 … argN)


执行所有监听 `event` 的回调函数，可以传递任意数量的附加参数给监听器。

	// 监听 'start' 事件，并期待附加参数
	el.on('start', function(engine_details, is_rainy_day) {
	
	})
	
	// 触发 start 事件，并传递附加参数
	el.trigger('start', { fuel: 89 }, true)

@返回值 `el`