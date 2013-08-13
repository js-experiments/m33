define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/humans.tpl.html'
], function($, _, Backbone, humansTpl){

    var HumansView = Backbone.View.extend({
        el  : $(".human-view"),
        initialize : function () {
            this.template = _.template(humansTpl);
            this.listenTo(this.collection, "sync", this.render)
        },
        render : function () {
            var renderedContent = this.template({ humans : this.collection.toJSON() });
            this.$el.html(renderedContent);
            this.trigger("humansAreRendered")
            return this;
        }
    });

    return HumansView;
});



