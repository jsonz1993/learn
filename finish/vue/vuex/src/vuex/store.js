import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
	count: 0,

	obj: {
		message: '1'
	}
}

const mutations = {
	ADD_COUNT(state, amount) {
		console.log(typeof state.count, typeof amount);

		state.count += amount;

	},

	REDUCE_COUNT(state, amount) {
		state.count -= amount;
	},

	UPDATE_COUNT (state, message) {
	   state.obj.message = parseInt(message);
	}
}

export default new Vuex.Store({
	state,
	mutations
})