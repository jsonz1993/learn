<script>
	Vue.directive('my-directive',{
		bind : function(){
			console.log('bind');
		},
		update : function(newValue, oldValue){
			if (oldValue && oldValue.length > 5) console.log(newValue,oldValue);
		},
		unbind : function(){
			console.log('unbind');
		}
	})

	module.exports = {
		data : function(){
			return {
				text : 'text',
				a : true
			}
		},
		methods : {
			t : function(){
				if (this.text === 'delete') {
					this.a = false;
				}
			}
		}
	}
</script>

<template>
	<b>111</b>
	<input type="text" v-model="text" v-my-directive="text" @keyup="t" v-if="a">
</template>