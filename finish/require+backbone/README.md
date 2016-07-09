#### 留个疑惑

	var paths = {
	    'underscore': 'lib/underscore-min',
	    'jquery': 'lib/jquery-1.11.2.min',
	    'backbone': 'lib/backbone'
	};
	
	require.config({
	    paths: paths,
	
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
	
	
	
	var items = [
	    { title: "Macbook Air", price: 799 },
	    { title: "Macbook Pro", price: 999 },
	    { title: "The new iPad", price: 399 },
	    { title: "Magic Mouse", price: 50 },
	    { title: "Cinema Display", price: 799 }
	];
	
	require(
	    ["jquery",
	        "underscore",
	        'lib/backbone',
	        "views/cartCollectionView"
	    ],
	    function($, _, Backbone, CartCollectionView) {
	        $(function() {
	            new CartCollectionView(items);
	        });
	    }
	);

为什么这里 Underscore 可以加载，backbone不能加载