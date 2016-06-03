<template>
	<div class="hint" :class="{ 'hint-failure' : hint}">
		<!-- {{ hint.info  || 'aa'}} -->
		
	</div>
</template>

<script>
	import {getHint} from '../vuex/getters';

	export default {
		vuex: {
			getters: {
				hint : getHint
			}
		}
	}
</script>

<style lang="less">
	.hint {
		padding: 10px 0;
		text-align: center;
		color: #468847;
		background-color: #dff0d8;
	}

	.hint-failure {
		color: #b94a48;
		background-color: #f2dede;
	}
</style>