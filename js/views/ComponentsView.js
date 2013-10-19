define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/components.tpl.html'
], function($, _, Backbone, componentsTpl){

    var ComponentsView = Backbone.View.extend({
        el  : $(".component-view"),
        initialize : function () {
            this.template = _.template(componentsTpl);
            this.listenTo(this.collection, "sync", this.render)
        },
        render : function () {
            var renderedContent = this.template({ components : this.collection.toJSON() });
            this.$el.html(renderedContent);
            this.trigger("componentsAreRendered")
            return this;
        }
    });

    return ComponentsView;
});