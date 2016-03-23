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



























