<script>
	var list = require('./list.vue');

	module.exports = {
		el : '#demo',
		data : {
			name : '张欣欣'
		},
		components : {
			list
		}
	}
</script>

<template>
	<p>
		{{name}}
		<list></list>
	</p>
</template>