define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'models/Components',
    'views/ComponentsView',
    'little'
], function($, _, Backbone, bootstrap, Components, ComponentsView, little)
{


    console.log(little.hello)


    var ApplicationView = Backbone.View.extend({
        initialize : function() { //initialize models, collections and views ...
            this.components = new Components();
            this.componentsView = new ComponentsView({ collection : this.components });
            this.listenTo(this.componentsView, "componentsAreRendered", this.sendMessage)
            this.components.fetch();
        },
        sendMessage : function() {
            $(".this-is-a-message").html("Components are loaded, so, all is OK, have fun!");
            $("h4").first().html("v° 0.0.0");
        }
    });

    return ApplicationView;
});
