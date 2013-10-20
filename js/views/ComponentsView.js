define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/components.tpl.html'
], function($, _, Backbone, componentsTpl){

    var ComponentsView = Backbone.View.extend({
        el  : $(".component-view"),
        template : _.template(componentsTpl),
        initialize : function () {
            this.listenTo(this.collection, "sync", this.render)
        },
        render : function () {
            var renderedContent = this.template({ components : this.collection.toJSON() });
            this.$el.html(renderedContent);
            this.trigger("componentsAreRendered")
            return this;
        },
        events: {
            'click .close-list': 'close'
        },
        close: function () {
            this.unbind(); // Unbind all local event bindings
            //this.model.unbind("change", this.render, this);
            this.collection.unbind("sync", this.render, this);
            this.remove(); // Remove view from DOM
            delete this.$el;
            delete this.el;
        }
    });

    return ComponentsView;
});