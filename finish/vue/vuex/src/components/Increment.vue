<template>
	<div>
		<button @click="increment">Increment + {{message}}</button>
		<button @click="reduce">reduce - {{message}}</button>
	</div>
</template>

<script>
	import {
		incrementCounter,
		reduceCounter
	} from '../vuex/actions.js';

	import {
		getMessage
	} from '../vuex/getters.js';

	export default {
		vuex: {
			actions: {
				increment: incrementCounter,
				reduce: reduceCounter
			},

			getters: {
				message: getMessage
			}
		}
	}
</script>


</script>