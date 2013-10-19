##Sample View


    define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/your_template_name.tpl.html'
    ], function($, _, Backbone, your_template_nameTpl){

        var MyView = Backbone.View.extend({
            el  : $(".class_name_to_reference_the_template"),
            initialize : function () {
                this.template = _.template(your_template_nameTpl);
                this.listenTo(this.collection, "sync", this.render)
            },
            render : function () {
                var renderedContent = this.template({ infos : this.collection.toJSON() });
                this.$el.html(renderedContent);
            }
        });

        return MyView

    });