## 全局配置

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
* 限制:在组件定义中只能是函数。
* 详细
	*  


<br><br><br><br><br><br><br><br>