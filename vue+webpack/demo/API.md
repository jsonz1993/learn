## 全局配置

__组建内用`this`来指代当前实例__

`Vue.config` 是一个对象，包含 Vue 的全局配置。可以在启动应用之前修改下面属性：

	Vue.config.debug = true
		为所有的警告打印栈追踪。
		把所有的锚节点以注释节点显示在 DOM 中，更易于检查渲染结果的结构。
	Vue.config.delimiters = ['${', '}'] 代替默认的{{}}引擎
	Vue.config.silent = true  取消 Vue.js 所有的日志与警告。
	
## 全局API
#### Vue.extend( options ) 不会用

#### Vue.nextTick dom更新时回调 

	Vue.nextTick(function(){ console.log('dom更新了') })

#### Vue.set(object, key, value) 设置值

* 返回设置的值
* 个方法主要用于解决 不能检测到属性添加的限制。

#### Vue.delete(obj, key) 删除值
* 同上，主要用于解决 不能检测到属性添加的限制。

#### Vue.directive(id, [definition]) 指令
* 参数 :
	* `{String} id`
	* `{Function | Object} [definition]`
* 用法:

		// 注册
		Vue.directive('my-directive',{
			bind : function(){},
			update : function(){},
			unbind : function(){}
		})

		// 注册，传入一个函数
		Vue.directive('my-directive',function(){
			//called as `update`
		})

		// getter，返回已注册的指令
		var myDirective = Vue.directive('my-directive');

#### Vue.elementDirective( id, [definition] ) 
* 相当于 Angular 特性的 `E`
* 
		既不是 <div my-directive></div>
		而是 <my-directive></my-directive>
		感觉没什么必要性.

#### Vue.filter(id, [definition]) 过滤器
* 参数：
	* {String} id
	* {Function | Object}[definition]
* 用法:
	* 注册或获取全局过滤器
	
			//注册
			Vue.filter('my-filter', function(value){
				// 返回处理后的值
			}) 
			
			// 双向过滤器
			Vue.filter('my-filter', {
			  read: function () {},
			  write: function () {}
			})

			// getter，返回已注册的指令
			var myFilter = Vue.filter('my-filter')

#### Vue.component(id, [definition]) 组件
* 参数：
	* {String} id
	* {Function | Object}[definition]
* 用法：

    注册或获取全局组件

		// 注册组件，传入一个扩展的构造器
		Vue.component('my-component', Vue.extend({ /* ... */}))
		
		// 注册组件，传入一个选项对象（自动调用 Vue.extend）
		Vue.component('my-component', { /* ... */ })
		
		// 获取注册的组件（始终返回构造器）
		var MyComponent = Vue.component('my-component')   

#### Vue.transition(id, [hooks]) 过渡

* 参数
	* {String} id
	* {Object} [hooks]
	
			// 注册
			Vue.transition('fade', {
			  enter: function () {},
			  leave: function () {}
			})
			
			// 获取注册的钩子
			var fadeTransition = Vue.transition('fade')

#### Vue.partial( id, [partial] ) 不会用

#### Vue.use() 插件相关

#### Vue.mixin( mixin ) 插件相关

## 选项/数据

#### data
* 类型: `Object | Function`
* 限制： 在组件定义中只能是函数
* 详细：
	* 在实例创建之后，可以用 `vm.$data` 访问原始数据对象。
	* 定义组件时必须是个函数形式
* 实例
		var data = { a: 1 }

		// 直接创建一个实例
		var vm = new Vue({
		  data: data
		})
		vm.a // -> 1
		vm.$data === data // -> true
		
		// 在 Vue.extend() 中必须是函数
		var Component = Vue.extend({
		  data: function () {
		    return { a: 1 }
		  }
		})

#### props
* 类型: `Array | Object`
* 详细
	* 包含一些特性--期望使用的__父组件数据__，可以是数组或对象。
	* 对象用于高级配置，如类型检查，自定义验证，默认值等。
* 示例
		// 简单语法
		Vue.component('props-demo-simple', {
		  props: ['size', 'myMessage']
		})
		
		// 对象语法，指定验证要求
		Vue.component('props-demo-advanced', {
		  props: {
		    // 只检测类型
		    size: Number,
		    // 检测类型 + 其它验证
		    name: {
		      type: String,
		      required: true
		    }
		  }
		})

#### computed
* 类型：`Object`
* 详细：
	* 实例计算属性。getter 和 setter 的 `this` 自动绑定到实例。
* 示例

		var vm = new Vue({
		  data: { a: 1 },
		  computed: {
		    // 仅读取，值只须为函数
		    aDouble: function () {
		      return this.a * 2
		    },
		    // 读取和设置
		    aPlus: {
		      get: function () {
		        return this.a + 1
		      },
		      set: function (v) {
		        this.a = v - 1
		      }
		    }
		  }
		})
		vm.aPlus   // -> 2
		vm.aPlus = 3
		vm.a       // -> 2
		vm.aDouble // -> 4

#### methods
* 类型： `object`
* 示例:

		var vm = new Vue({
		  data: { a: 1 },
		  methods: {
		    plus: function () {
		      this.a++
		    }
		  }
		})
		vm.plus()
		vm.a // 2 

#### watch
* 类型: `Object`
* 详细:
	* 键是观察表达式，值是对应回调
	* 值也可以是方法名，或者是对象，包含选项
	* 在实例化时为每个键调用 $watch() 
* 示例 :

		var vm = new Vue({
		  data: {
		    a: 1
		  },
		  watch: {
		    'a': function (val, oldVal) {
		      console.log('new: %s, old: %s', val, oldVal)
		    },
		    // 方法名
		    'b': 'someMethod',
		    // 深度 watcher
		    'c': {
		      handler: function (val, oldVal) { /* ... */ },
		      deep: true
		    }
		  }
		})
		vm.a = 2 // -> new: 2, old: 1

## 选项/DOM

#### el
* 类型：`String | HTMLElement | Function`
* 实例没有el的话，就在 vm.$mount(el)才会去编译（手动编译）
* 限制:在组件定义中只能是函数。

#### template
* 可以用 `<script type="x-template"></script>`

#### replace
* 只能和template 选项一起用


## 生命周期钩子

#### init
* 类型 `Function`
* 详细
	* 在实例开始初始化时同步调用。数据观测，事件和watcher还未初始化

#### created
* 类型 `Function`
* 详细
	* 在实例创建之后同步调用。实例已经解析完选项了，意味着：数据绑定，计算属性，方法，watcher/事件回调都已经完成。但是还没开始编译DOM,所以`$el`还不存在.

#### beforeCompile
* 类型 `Function`
* 详细 
	* 在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。

#### compiled
* 类型 `Function`
* 详细
	* 在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档。

#### ready
* 类型 `Function`
* 详细
	* 在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。
	* 注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。 

#### attached
* 类型 `Function`
* 详细
	* 在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会 触发这个钩子。

#### detached
* 类型 `Function`
* 详细
	* 在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。

#### beforeDestroy
* 类型 `Function`
* 详细 
	* 在开始销毁实例时调用。此时实例仍然有功能。 

#### destroyed
* 类型 `Function`
* 详细
	* 在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed 钩子在过渡完成之后调用。

## 选项/资源

#### directives 指令
类型： `object`
详细： 一个对象，包含指令。

#### elementDirectives 元素指令 没什么用

#### filters 内置过滤器
* 一个对象 包含过滤器
* 另见
	* [自定义过滤器](http://cn.vuejs.org/guide/custom-filter.html)

#### components 组件
* 类型 `Object`
* 详细：
	* 一个对象包含组件
	* {components1,components2}
	* 或者 {components : c1, component : c2}
* 另见 [组件](http://cn.vuejs.org/guide/components.html)


#### transitions
* 类型 `Object`
* 详细
	* 一个对象，包含过渡
* 另见 [过渡](http://cn.vuejs.org/guide/transitions.html)

#### partials 特殊元素 没怎么用

## 选项/杂项

#### parent 实例的父实例
* 类型： `Vue 实例`
* 详细：
	* 指定实例的父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。
	* 另见[父子组件通信](http://cn.vuejs.org/guide/components.html#父子组件通信)

#### events
* 类型 `Object`
* 详细: 
	* 一个对象，键是监听的事件，值是相应的回调。注意这些事件是 Vue 事件而不是 DOM 事件。值也可以是方法的名字。在实例化的过程中，Vue 实例会调用对象的每个键。
* 示例：
		
		var vm = new Vue({
		  events: {
		    'hook:created': function () {
		      console.log('created!')
		    },
		    greeting: function (msg) {
		      console.log(msg)
		    },
		    // 也可以是方法的名字
		    bye: 'sayGoodbye'
		  },
		  methods: {
		    sayGoodbye: function () {
		      console.log('goodbye!')
		    }
		  }
		}) // -> created!
		vm.$emit('greeting', 'hi!') // -> hi!
		vm.$emit('bye')             // -> goodbye! 

#### mixin 混合
* 类型 `Object`
* 详细 主要为了组件部分复用，优先使用原实例方法选项.
* 示例
		var mixin = {
		  methods: {
		    foo: function () {
		      console.log('foo')
		    },
		    conflicting: function () {
		      console.log('from mixin')
		    }
		  }
		}
		
		var vm = new Vue({
		  mixins: [mixin],
		  methods: {
		    bar: function () {
		      console.log('bar')
		    },
		    conflicting: function () {
		      console.log('from self')
		    }
		  }
		})
		
		vm.foo() // -> "foo"
		vm.bar() // -> "bar"
		vm.conflicting() // -> "from self"

## 实例属性

#### vm.$data
* 类型： `Object`
* 详细:
	* Vue 实例观察的数据对象。可以用一个新的对象替换。实例代理了它的数据对象的属性。 
	* 可以用JSON.stringify(vm.$data)过滤掉不必要的默认数据

#### vm.$el
* 类型 `HTMLElement`
* 只读
* Vue 实例 挂载的元素。

#### vm.$options
* 类型 `Object`
* 只读
* 当前实例的初始化选项
* 在选项中包含自定义属性时有用处：

		new Vue({
		  customOption: 'foo',
		  created: function () {
		    console.log(this.$options.customOption) 
			// -> 'foo'
		  }
		})

#### vm.$parent
* 类型 `Vue实例`
* 只读
* 详细： 父实例，有实例的话。

#### vm.$root
* 类型： `Vue 实例`
* 只读
* 详细： 当前组件树的根Vue实例。

#### vm.$children
* 类型： Array<Vue instance>
* 只读
* 详细
	* 当前实例的直接子组件 数组集合
	

#### vm.$refs
* 类型 `Object`
* 只读
* 详细
	* 一个对象，包含注册有 `v-ref` 的子组件
	* 简单来说就是注册一个标识，方便调用。不用去用vm.$children索引

#### vm.$els
* 类型 `Object`
* 只读
* 详细 一个对象，包含所有 `v-el`的dom元素


## 实例方法/数据

#### vm.$watch 监听
* 参数
	* `{String | Function} expOrFn`
	* `{Function} callback`
	* `{Object} [options]`
		* `{Boolean} deep`
		* `{Boolean} immediate`
* 返回值 : `{Function} unwatch`
* 用法：
	* 观察 Vue 实例的一个表达式或计算函数。回调的参数为新值和旧值。表达式可以是某个键路径或任意合法绑定表达式。		
* 示例

		// 键路径
		vm.$watch('a.b.c', function (newVal, oldVal) {
		  // 做点什么
		})
		
		// 表达式
		vm.$watch('a + b', function (newVal, oldVal) {
		  // 做点什么
		})
		
		// 函数
		vm.$watch(
		  function () {
		    return this.a + this.b
		  },
		  function (newVal, oldVal) {
		    // 做点什么
		  }
		)
		vm.$watch 返回一个取消观察函数，用来停止触发回调：
		var unwatch = vm.$watch('a', cb)
		// 之后取消观察
		unwatch()
* Option: deep

		为了发现对象内部值的变化，可以在选项参数中指定 deep: true
		vm.$watch('someObject', callback, {
		  deep: true
		})
		vm.someObject.nestedValue = 123
		// 触发回调
* Option: immediate
	
		在选项参数中指定 immediate: true 将立即以表达式的当前值触发回调：
		
		vm.$watch('a', callback, {
		  immediate: true
		})
		// 立即以 `a` 的当前值触发回调



#### vm.$set( keypath, value )
* 参数 
	* `{String} keypath`
	* `{*} value`
* 用法 __只用于以下情况__
	*  使用 keypath 动态地设置属性。
	*  设置不存在的属性。
* 示例

		var vm = new Vue({
		  data: {
		    a: {
		      b: 1
		    }
		  }
		})
		
		// keypath 存在
		vm.$set('a.b', 2)
		vm.a.b // -> 2
		
		// keypath 不存在
		vm.$set('c', 3)
		vm.c // ->  

#### vm.$delete( key ) 删除实例属性

*删除 Vue 实例（以及它的 $data）上的顶级属性。强制 digest 循环，不推荐使用。* 不推荐使用

#### vm.$eval( expression )

* 参数 
	* `{String} expression`
* 用法
	* 计算当前实例上的合法的绑定表达式。表达式也可以包含过滤器。
* 示例
	
		/ 假定 vm.msg = 'hello'
		vm.$eval('msg | uppercase') // -> 'HELLO' 

#### vm.$interpolate( templateString ) 计算模版
* 示例
	
	// 假定 vm.msg = 'hello'
	vm.$interpolate('{{msg}} world!') // -> 'hello world!'

#### vm.$log( [keypath] ) 打印 类似console.log
* 打印当前实例的数据
* vm.$log() // 打印整个 ViewModel 的数据
* vm.$log('item') // 打印 vm.item


## 实例属性/事件

#### vm.$on( event, callback )
* 参数
	* `{String} event`
	* `{Function} callback`
* 用法
	* 监听当前实例上的自定义事件。
	* 事件可以由 vm.$emit, vm.$dispatch 或 vm.$broadcast触发。
	* 传入这些方法的附加参数都会传入这个方法的回调。 
* 示例
	
		vm.$on('test', function (msg) {
		  console.log(msg)
		})
		vm.$emit('test', 'hi')
		// -> "hi"

#### vm.$once( event, callback )
* 参数
	* `{String } event`
	* `{Function }callback`
* 用法
	* 监听一个自定义事件，但是只触发一次，在第一次触发之后删除监听器。 

vm.$off( [event, callback] )
* 参数
	* `{String } [event]`
	* `{Function } [callback]`
* 用法
	* 删除事件监听器。
		* 如果没有参数，则删除所有的事件监听器；
		* 如果只提供了事件，则删除这个事件所有的监听器；
		* 如果同时提供了事件与回调，则只删除这个回调。


#### vm.$emit( event, […args] )
* 参数
	* `{String} event`
	* `[..args]`
* 触发当前实例上的事件。附加参数都会传给监听器回调。


#### vm.$dispatch( event, […args] ) 向上冒泡
* 参数：
	* `{String} event`
	* `[...args]`
* 用法
	* 派发事件，首先在实例上触发它，然后沿着父链向上冒泡在触发一个监听器后停止，除非它返回 true。附加参数都会传给监听器回调。
* 示例
	
		// 创建父链
		var parent = new Vue()
		var child1 = new Vue({ parent: parent })
		var child2 = new Vue({ parent: child1 })
		
		parent.$on('test', function () {
		  console.log('parent notified')
		})
		child1.$on('test', function () {
		  console.log('child1 notified')
		})
		child2.$on('test', function () {
		  console.log('child2 notified')
		})
		
		child2.$dispatch('test')
		// -> "child2 notified"
		// -> "child1 notified"
		// 没有通知 parent，因为 child1 的回调没有返回 true  
 

#### vm.$broadcast( event, […args] ) 向下派发
* 用法与vm.$dispatch( event, […args] )一样


## 实例方法/DOM
#### vm.$appendTo


## 指令
* v-text
* v-html
* v-if
* v-show
* v-else
* v-for
* v-on
	* 缩写 @
	* 修饰符
		* .stop - 调用 event.stopPropagation()
		* .prevent - 调用 event.preventDefault()
		* .capture - 添加事件侦听器时使用 capture 模式
		* .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调
		* .{keyCode | keyAlias} - 只在指定按键上触发回调

* v-bind
	* 缩写 :
	* 修饰符
		* .sync - 双向绑定，只能用于 prop 绑定。
		* .once - 单次绑定，只能用于 prop 绑定。
		* .camel - 将绑定的特性名字转回驼峰命名。只能用于普通 HTML 特性的绑定，通常用于绑定用驼峰命名的 SVG 特性，比如 viewBox
* v-model
	* 限制，只能在以下地方使用
		* `input`
		* `select`
		* `textarea`
	* 特性
		* `lazy` 改为change修改
		* `number`保持数字类型
		* `debounce` Ajax等延迟调用
* v-ref 
	* 子组件代替索引
* v-el
	* 为DOM注册索引
* v-pre
	* 跳过不需要编译的dom，如果跳过大量不需要的dom，可以提高编译速度
* v-cloak


## 特殊元素
* component 动态组件载体
* slot 静态html片段
* partial 动态vue编译html片段    

#### 过滤器见 filter.vue

#### 数组扩展方法
* array.$set(index, value)
* array.$remove(index)


<br><br><br><br><br><br><br><br>