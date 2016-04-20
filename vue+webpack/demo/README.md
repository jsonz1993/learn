http://vuejs.org.cn/guide/components.html#使用-Props-传递数据

http://vuejs.org.cn/api/#el


## 组件

注册

	var A = Vue.extend({
		选项...
		data : function(){} //必须是函数返回 不然就每个该组件都共享数据
	})
	
	// 全局注册组件，tag 为 jsonz-a
	Vue.component('jsonz-a', A)

	// 使用
	<jsonz-a></jsonz-a>


	// 定义
	var MyComponent = Vue.extend({
	  template: '<div>A custom component!</div>'
	})
	
	// 注册
	Vue.component('my-component', MyComponent)
	
	// 创建根实例
	new Vue({
	  el: '#example'
	})

	// 渲染
	<div id="example">
	  <div>A custom component!</div>
	</div>

	
	// 局部注册
	var Child = Vue.extend({ /* ... */ })

	var Parent = Vue.extend({
	  template: '...',
	  components: {
	    // <my-component> 只能用在父组件模板内
	    'my-component': Child
	  }
	})


	Vue.component('child', {
	  // 声明 props
	  props: ['msg'],
	  // prop 可以用在模板内
	  // 可以用 `this.msg` 设置
	  template: '<span>{{ msg }}</span>'
	})


### 数据绑定

	绑定数据 默认单向绑定
	<child :msg="go" text="go" try.sync="双向，会同步到父级" try.once="单次，一次之后就解除"></child>
	data : {
		go : '这是msg'
	}


### props 验证

	Vue.component('example', {
	  props: {
	    // 基础类型检测 （`null` 意思是任何类型都可以）
	    propA: Number,
	    // 多种类型 (1.0.21+)
	    propM: [String, Number],
	    // 必需且是字符串
	    propB: {
	      type: String,
	      required: true
	    },
	    // 数字，有默认值
	    propC: {
	      type: Number,
	      default: 100
	    },
	    // 对象/数组的默认值应当由一个函数返回
	    propD: {
	      type: Object,
	      default: function () {
	        return { msg: 'hello' }
	      }
	    },
	    // 指定这个 prop 为双向绑定
	    // 如果绑定类型不对将抛出一条警告
	    propE: {
	      twoWay: true
	    },
	    // 自定义验证函数
	    propF: {
	      validator: function (value) {
	        return value > 10
	      }
	    },
	    // 转换函数（1.0.12 新增）
	    // 在设置值之前转换值
	    propG: {
	      coerce: function (val) {
	        return val + '' // 将值转换为字符串
	      }
	    },
	    propH: {
	      coerce: function (val) {
	        return JSON.parse(val) // 将 JSON 字符串转换为对象
	      }
	    }
	  }
	})

	type 可以是下面原生构造器：

	String
	Number
	Boolean
	Function
	Object
	Array
	type 也可以是一个自定义构造器，使用 instanceof 检测。

### 父组件通信
	
`this.$parent`访问父组件

`this.$root`访问根实例

`this.$children`访问所有的子组件

尽量用props而不是父链访问，这会增加耦合性

### 自定义事件

每个实例都有一个事件触发器

使用 $on() 监听事件；

使用 $emit() 在它上面触发事件；

使用 $dispatch() 派发事件，事件沿着父链冒泡；

使用 $broadcast() 广播事件，事件向下传导给所有的后代。


	<!-- 子组件模板 -->
	<template id="child-template">
	  <input v-model="msg">
	  <button v-on:click="notify">Dispatch Event</button>
	</template>
	
	<!-- 父组件模板 -->
	<div id="events-example">
	  <p>Messages: {{ messages | json }}</p>
	  <child></child>
	</div>


	// 注册子组件
	// 将当前消息派发出去
	Vue.component('child', {
	  template: '#child-template',
	  data: function () {
	    return { msg: 'hello' }
	  },
	  methods: {
	    notify: function () {
	      if (this.msg.trim()) {
	        this.$dispatch('child-msg', this.msg)
	        this.msg = ''
	      }
	    }
	  }
	})
	
	// 启动父组件
	// 将收到消息时将事件推入一个数组
	var parent = new Vue({
	  el: '#events-example',
	  data: {
	    messages: []
	  },
	  // 在创建实例时 `events` 选项简单地调用 `$on`
	  events: {
	    'child-msg': function (msg) {
	      // 事件回调内的 `this` 自动绑定到注册它的实例上
	      this.messages.push(msg)
	    }
	  }
	})

使用 v-on 绑定自定义事件

	<child v-on:child-msg="handleIt" @child-msg="handleIt"></child>

### 使用 Slot 分发内容
	
	<template>
		<slot name="A"></slot>
		<button> 按钮 </buttom>
		<slot name="B"></slot>
	</template>

	<list>
		<p slot="A">This is slot A</p>
		<p slot="B">This is slot B</p>
	</list>

	编译结果
	<p slot="A">This is slot A</p>
	<button> 按钮 </button>
	<p slot="B">This is slot B</p>

	如果子组件没有 slot，编译后里面的东西会被忽略

### 动态组件

	new Vue({
	  el: 'body',
	  data: {
	    currentView: 'home'
	  },
	  components: {
	    home: { /* ... */ },
	    posts: { /* ... */ },
	    archive: { /* ... */ }
	  }
	})
	<component :is="currentView" keep-alive>
	  <!-- 组件在 vm.currentview 变化时改变 -->
	</component>

	keep-alive 可以使模版保存在内存，不会重复渲染
	
### transition-mode 切换过渡

* in-out：新组件先过渡进入，等它的过渡完成之后当前组件过渡出去。

* out-in：当前组件先过渡出去，等它的过渡完成之后新组件过渡进入。

	
## 自定义过滤器

可以开一个 filter.js 放置公共过滤器

组建内部的过滤器用 filters 包着。

一般过滤器在write时生效
可以用 `read` 和 `write` 分别对应 `model -> view` 和 `view -> model`

如果参数没被引号引起来，则会去该编译作用域找变量

## 内置过滤器

`capitalize ` 'abc' => 'Abc'

`uppercase` 'abc' => 'ABC'

`lowercase` 'ABC' => 'abc'

`currency ` 

	{String} [symbol] - default: '$'
	{{ amount | currency }} 12345 => $12,345.00
	{{ amount | currency '£' }} 12345 => £12,345.00
	
`<input @keyup="onKeyup | debounce 500">`  包装处理器，让它延迟执行 x ms， 默认延迟 300ms。包装后的处理器在调用之后至少将延迟 x ms， 如果在延迟结束前再次调用，延迟时长重置为 x ms。

`limitBy ` 限制数组为开始 N 个元素，N 由第一个参数指定。第二个参数是可选的，指定开始的偏移量。

{Number} limit

{Number} [offset]

详细看 `demo filter.vue`

数组扩展方法 `array.$set(index, value)`    `array.$remove(reference)`





<br><br><br><br><br><br><br><br><br><br>