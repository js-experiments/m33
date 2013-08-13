define([
    'jquery',
    'underscore',
    'backbone',
    'routers/Router',
    'views/ApplicationView'
], function ($, _, Backbone, Router, ApplicationView) {

    return {
        initialize: function () {

            var router = new Router({
                applicationView : new ApplicationView()
            });

            router.on('route:defaultAction', function (actions) {
                // We have no matching route, lets refresh something ...
                this.applicationView.render();
            });

            Backbone.history.start();
        }
    };
});



