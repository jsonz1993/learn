/**
 * Created by Administrator on 2016/7/9.
 */
define(
    ['backbone',
     'views/ItemCollectionView',
     'collections/cart'
    ], function (Backbone, ItemCollectionView, Cart){

        return Backbone.View.extend({
            el: 'body',
            events: {
                'submit #add': 'addItem',
                'submit #filter': 'filterItems',
                'click #clear-filter': 'clearFilter'
            },

            initialize: function (items){
                var cartCollection = new Cart(items);
                this.itemView = new ItemCollectionView(cartCollection);
            },

            addItem: function (e){
                e.preventDefault();
                this.itemView.addItem();
            },

            filterItems: function(e) {
                e.preventDefault();
                this.itemView.filterByPrice();
            },
            clearFilter: function (e){
                e.preventDefault();
                this.itemView.clearFilter();
            }
        });
});