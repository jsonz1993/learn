require.config({
	paths: {
		'underscore': 'lib/underscore-min',
		'backbone': 'lib/backbone',
		'jquery': 'lib/jquery-1.11.2.min'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require(['backbone'], function(Backbone){

});