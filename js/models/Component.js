define([
    'backbone'
], function(Backbone){

    var Component = Backbone.Model.extend({
        defaults : {
            name : "this is the component name",
            version : "... and the component version"
        }
    });

    return Component;

});