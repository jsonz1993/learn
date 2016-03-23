[vue官网](http://cn.vuejs.org/)

[扣大vue](https://github.com/cody1991/learn/tree/gh-pages/learning/vuejs-learn)

# 开启vue.js之旅

### vue demo 参照教程[官网demo](http://cn.vuejs.org/guide/index.html)

* [Hello_vue](http://cn.vuejs.org/guide/index.html)
* [实例](http://cn.vuejs.org/guide/instance.html)
* [数据绑定语法](http://cn.vuejs.org/guide/syntax.html)
* [计算属性](http://cn.vuejs.org/guide/computed.html)
	* computed 一个计算属性的getter
* [Class 与 Style 绑定](http://cn.vuejs.org/guide/class-and-style.html)
* [条件渲染](http://cn.vuejs.org/guide/conditional.html)
	* 要绑定在元素上才可以生效。
* [列表渲染](http://cn.vuejs.org/guide/list.html)  
	* 封装了观察数组变异方法
	
			push()
			pop()
			shift()
			unshift()
			splice()
			sort()
			reverse() 
	* 数组用以上方法改变，视图都能得到更新
	* 最low的做法是用一个数组去替换另一个数组，vue实现了启发算法，所以效率也不低
	* track-by 与 track-by $index __跳过__
	
			1.直接用索引设置元素，如 vm.items[0] = {} 
			2.修改数据的长度，如 vm.items.length = 0 检测不到数组变化
			解决方法
			1. 用 $set() 解决。 vm.items.$set(0, {});
			2. vm.item = [];
	* 对象循环可以用 v-for="value in object" ($key,$index)
* [方法与事件处理器](http://cn.vuejs.org/guide/events.html)
	* 内联传参数 @click="fn('hi', $event)
	* __事件修饰符__  
		* @click.stop="doThis"
		* @submit.prevent.stop="doThis"
		* @submit.prevent  只有修饰符没有事件
		* @click.self="doThat" 只有触发本身（非子元素）才调用
		* @keyup.enter='submit' 按enter时触发submit事件，也可以传key code修饰符,也可以传单字母键别名如`keyup.a=".."`
		
				enter
				tab
				delete
				esc
				space
				up
				down
				left
				right

* [表单控件绑定](http://cn.vuejs.org/guide/forms.html)
	* `lazy` 特性 同步等触发事件改为 change 而不是 input
	* `number` 输入值默认保存为number类型（非过滤）
	* `debounce` 延迟同步。（如ajax请求），但是不会延迟 input 事件
* [过渡](http://cn.vuejs.org/guide/transitions.html)
	* 过渡要加transition 特性，一般和v-if v-show v-for 一起使用
	* JS钩子不大会用
	* `过渡的类名`
			.fade-transition 始终保留在元素上。
			
			.fade-enter 定义进入过渡的开始状态。只应用一帧然后立即删除。
			
			.fade-leave 定义离开过渡的结束状态。在离开过渡开始时生效，在它结束后删除。
			
			如果 transition 特性没有值，类名默认是 .v-transition, .v-enter 和 .v-leave。 
	* 过渡类名
	
				<div v-show="ok" class="animated" transition="bounce">Watch me bounce</div>

				Vue.transition('bounce', {
			        enterClass: 'bounceInLeft',
			        leaveClass: 'bounceOutRight'
			    })
	* 过渡流程详解
		* 如果 show 变为 false，Vue.js 将：
			* 1.调用 beforeLeave 钩子；
			* 2.添加 v-leave 类名到元素上以触发过渡；
			* 3.调用 leave 钩子；
			* 4.等待过渡结束（监听 transitionend 事件）；
			* 5.从 DOM 中删除元素并删除 v-leave 类名；
			* 6.调用 afterLeave 钩子。
		* 如果 show 变为 true，Vue.js 将：
			* 1.调用 beforeEnter 钩子；
			* 2.添加 v-enter 类名到元素上；
			* 3.把它插入 DOM；
			* 4.调用 enter 钩子；
			* 5.强制一次 CSS 布局，让 v-enter 确实生效。然后删除 v-enter 类名，以触发过渡，回到元素的原始状态；
			* 6.等待过渡结束；
			* 7.调用 afterEnter 钩子。   
 


























