
// var app = require('./components/app');

import tryJs from './js/try.js';

import app from './components/app.vue';

Vue.config.debug = true;

var appVue = new Vue(app);

appVue.$watch('text',function(newV, oldV){
	console.log(newV, oldV);
})








