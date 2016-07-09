/**
 * Created by Administrator on 2016/7/9.
 */
define(['backbone'], function(Backbone) {
    var ItemView = Backbone.View.extend({
        tagName: 'div',
        className: 'item-wrap',
        template: _.template($('#itemTemplate').html()),

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return ItemView;
});