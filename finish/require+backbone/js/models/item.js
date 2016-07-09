/**
 * Created by Administrator on 2016/7/9.
 */

define(['lib/backbone'], function(Backbone){
    var Item = Backbone.Model.extend({
        defaults: {
            price: 35,
            photo: './img/1.jpg'
        }
    });

    return Item;
});
