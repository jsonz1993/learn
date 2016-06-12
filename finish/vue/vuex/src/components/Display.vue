<template>
	<div>
		<h3>Count is {{countValue}} </h3>
		<input :value="message" @input="updateMessage">
	</div>
</template>

<script>
	import {getCount,
			getMessage
			} from '../vuex/getters.js';

	import {updateMessage} from '../vuex/actions.js';
	export default {
		methods: {

		},

		vuex: {
			getters: {
				countValue: getCount,
				message: getMessage
			},
			actions: {
				updateMessage
			}
		}
	}
</script>