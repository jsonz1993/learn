<script>
	var test = require('./test.vue');
	module.exports = {
		el : '#example',
		data : {
			t : 'test1'
		},
		components : {
			test
		}
	}
</script>

<template>
	<b>{{t}}</b>
	<test></test>
</template>