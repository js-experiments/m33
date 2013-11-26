define([
    'jquery',
    'underscore',
    'backbone',
		'lazy',
    'text!templates/components.tpl.html'
], function($, _, Backbone, Lazy, componentsTpl){

    var ComponentsView = Lazy.View.extend({
	      properties : {
		      el : ".components-view",
		      template : componentsTpl,
		      alias : "components" // for the template
	      },
        events: {
            'click .close-list': 'close'
        }
    });



    return ComponentsView;
});