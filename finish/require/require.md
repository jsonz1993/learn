## require

[http://www.ruanyifeng.com/blog/2012/11/require_js.html](http://www.ruanyifeng.com/blog/2012/11/require_js.html)

#### 模块加载

假定主模块依赖jquery、underscore和backbone这三个模块，main.js就可以这样写

	require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
	　　　　// some code here
	});

#### 配置

	<script src="require.js" data-main="js/main">

	require.config({
	    baseUrl: 'js',
	    path: {
	        'a': ['b.js', 'c.js']
	    },
	    shim: {
	        "underscore": {
	            exports: "_";
	        },
	        "jquery.form": {
	            deps: ["jquery"]
	        },
	        'backbone': {
	            deps: ['underscore', 'jquery'],
	            exports: 'Backbone'
	        }
	    }
	})