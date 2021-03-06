define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){

    var MainRouter = Backbone.Router.extend({
        initialize : function(args){
            this.applicationView = args.applicationView
            if (!this.applicationView) throw 'Requires an applicationView instance'
        },
        routes : {
            // Define some URL routes

            // Default
            '*actions': 'defaultAction'
        }
    });

    return MainRouter
});



