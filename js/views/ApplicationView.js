define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
    'models/Humans',
    'views/HumansView'
], function($, _, Backbone, bootstrap, Humans, HumansView)
{

    var ApplicationView = Backbone.View.extend({
        initialize : function() { //initialize models, collections and views ...

            this.humans = new Humans();
            this.humansView = new HumansView({ collection : this.humans });
            this.listenTo(this.humansView, "humansAreRendered", this.sendMessage)
            this.humans.fetch();

        },
        sendMessage : function() {
            $(".this-is-a-message").html("Humans are loaded, so, all is OK, have fun!");
        }
    });

    return ApplicationView;
});

