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
            'hello': 'hello'
            // Default
            , '*actions': 'defaultAction'
        }
    });

    return MainRouter
});



