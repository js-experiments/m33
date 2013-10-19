define([
    'backbone'
], function(Backbone){

    var Component = Backbone.Model.extend({
        defaults : {
            name : "???",
            version : "???"
        }
    });

    return Component;

});