<script>
	export default {
		init : function(){
			console.log('vue init 在实例开始初始化时同步调用。此时数据观测、事件和 watcher 都尚未初始化。');
		},

		created : function(){
			console.log('created 在实例创建之后同步调用。此时实例已经结束解析选项，这意味着已建立：数据绑定，计算属性，方法，watcher/事件回调。但是还没有开始 DOM 编译，$el 还不存在。')
		},

		beforeCompile : function(){
			console.log('beforeCompile 在编译开始前调用。')
		},

		compiled : function(){
			console.log('compiled 在编译结束后调用。此时所有的指令已生效，因而数据的变化将触发 DOM 更新。但是不担保 $el 已插入文档');
		},

		ready : function(){
			console.log('ready 在编译结束和 $el 第一次插入文档之后调用，如在第一次 attached 钩子之后调用。注意必须是由 Vue 插入（如 vm.$appendTo() 等方法或指令更新）才触发 ready 钩子。 ')
		},

		attached : function(){
			console.log('attached 在 vm.$el 插入 DOM 时调用。必须是由指令或实例方法（如 $appendTo()）插入，直接操作 vm.$el 不会触发这个钩子。');
		},

		detached : function(){
			console.log('detached 在 vm.$el 从 DOM 中删除时调用。必须是由指令或实例方法删除，直接操作 vm.$el 不会 触发这个钩子。')
		},

		beforeDestroy : function(){
			console.log('beforeDestroy 在开始销毁实例时调用。此时实例仍然有功能');
		},

		destroyed : function(){
			console.log('destroyed 在实例被销毁之后调用。此时所有的绑定和实例的指令已经解绑，所有的子实例也已经被销毁。如果有离开过渡，destroyed 钩子在过渡完成之后调用。')
		}
	}
</script>

<template>
	<div></div>
</template>

<style>
	
</style>