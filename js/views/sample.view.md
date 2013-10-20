##Sample View


    define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/your_template_name.tpl.html'
    ], function($, _, Backbone, your_template_nameTpl){

        var MyView = Backbone.View.extend({
            el  : $(".class_name_to_reference_the_template"),
            template : _.template(your_template_nameTpl),
            initialize : function () {
                this.listenTo(this.collection, "sync", this.render)
            },
            render : function () {
                var renderedContent = this.template({ infos : this.collection.toJSON() });
                this.$el.html(renderedContent);
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

        return MyView

    });