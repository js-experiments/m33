define([
    'backbone',
    'models/Human'
], function(Backbone, Human){

    var Humans = Backbone.Collection.extend({
        model : Human,
        url : "/humans.data.js"
    });

    return Humans

});