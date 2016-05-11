<script>
	export default {
		props : ['msg'],
		data : function(){
			return {
				a : 209
			}
		},
		methods : {
			getName : function(){
				this.$get('msg.name')
				// vm 实例获取表达式的值 vm.$get(obj.name);
			},
			setName : function(){
				// 多数情况直接vm.obj.name = 'zhang'
				// 不存在的值或者用keypath才用vm.$set('obj.name')来设置
			}
		}
	};

</script>

<template>
	<p>{{a}}</p>
	<input type="text" v-model="a">
	<br>
	<input type="text" v-model="obj.name">
	<button @click="getName">获取</button>

</template>

<style>
	
</style>