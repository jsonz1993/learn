<script>
	export default  {

		props : {
			'msg' : ['String','Object'],
			'try' : 'String'
		},

		data : function(){
			return {
				name : '2222'
			}
		},

		methods : {
			inputing : function(e){
				if (e.keyCode === 13 && this.msg.length) {
					this.$parent.t();
					this.$dispatch('b', this.msg)
				}
			}
		}

	}
</script>

<template>
	<slot name="B"></slot>
	<div>A custom component! {{name}} , {{ msg }}</div>
	<input type="text" v-model="msg" @keyup="inputing" >
	<slot name="A"></slot>
	<b>{{try}}</b>
</template>