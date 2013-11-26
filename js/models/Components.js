define([
    'backbone',
    'models/Component'
], function(Backbone, Component){

    var Components = Backbone.Collection.extend({
        model : Component,
        url : "data/components.data.js"
    });

    return Components
});