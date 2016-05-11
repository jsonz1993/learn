// style
import base from './style/base.less';

// js
import defaultRem from './js/defaultRem.js';

//vue
import index from './components/index.vue';
import list from './components/add.vue';
import show from './components/show.vue';

Vue.use(VueAsyncData);
Vue.config.debug = true;
Vue.config.devtools = true;

var Index = Vue.extend(index),
	List = Vue.extend(list),
	Show = Vue.extend(show),
	App = Vue.extend({}),
	router = new VueRouter();
	router.map({
		'/' : {
			component : Index
		},
		'/list' : {
			component : List
		},
		'/show' : {
			component : Show
		}
	});

	router.start(App, '#app');

