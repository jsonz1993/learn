<script>
	var list = require('./list.vue');

	module.exports = {
		el : '#example',
		data : {
			msg : 'hello',
			text : ''
		},
		components : {
			list
		},
		methods : {
			t : function() {
				console.log(1);
			},
			a : function(msg) {
				this.text = msg;
			}

		},

		events: {
		    
		}
	}
</script>

<template>
	<input type="text" v-model="text">
	<list :msg="text" @b="a">
		<p slot="A">This is slot A</p>
		<p slot="B">This is slot B</p>
	</list>
</template>