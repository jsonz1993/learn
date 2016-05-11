<script>
	var mixin = {
		data : function(){
			return {
				name : 'mixin'
			}
		},
		methods : {
			foo : function(){
				console.log('foo');
			}
		}
	}
	export default {
		mixins : [mixin]
	}
</script>

<template>
	<hr><hr><hr>
	<h1>{{name}}</h1>
	<hr><hr><hr>
</template>

<style>
	
</style>