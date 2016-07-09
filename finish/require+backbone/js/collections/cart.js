/**
 * Created by Administrator on 2016/7/9.
 */
define(['lib/backbone', 'models/item'], function (Backbone, Item){
    var Cart = Backbone.Collection.extend({
        model: Item,
    });

    return Cart;
});