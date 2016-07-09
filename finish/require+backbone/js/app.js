/**
 * Created by Administrator on 2016/7/9.
 */

var paths = {

};

require.config({
    baseUrl: '/require+backbone/js',
    paths: {
        'underscore': 'lib/underscore-min',
        'jquery': 'lib/jquery-1.11.2.min',
        'backbone': 'lib/backbone'
    },
    urlArgs: "bust=" +  (new Date()).getTime()
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
        'backbone',
        "views/cartCollectionView"
    ],
    function($, _, Backbone, CartCollectionView) {
        $(function() {
            new CartCollectionView(items);
        });
    }
);