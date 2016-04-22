<script>
	var test = require('./test.vue');
	var _try = require('./js/try.js');

	var profile = new _try.Profile({
		data : {
			firstName : '张',
			lastName : '耿欣'
		}
	})
	profile.$mount('#mount-point');

	module.exports = {
		data : '#example'
	}
</script>

<template>
	<div id="mount-point">dd</div>
</template>