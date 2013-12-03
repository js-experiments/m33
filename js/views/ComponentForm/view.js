define([
    'jquery',
    'underscore',
    'backbone',
		'lazy',
	  'text!./tpl.html'
], function($, _, Backbone, Lazy, componentFormTpl){

    var ComponentFormView = Lazy.View.extend({
      properties : function(){return{
	      el : ".component-form-view",
	      alias : "component", // for the template,
	      template : componentFormTpl
      }},
      events : {
				'click .add-component': 'add',
	      'change input': 'change'
      },
	    add : function() {
		    this.model.set({name:this.getValue(".component-name"), version:this.getValue(".component-version")});
		    this.attributes.collection.add(this.model.clone());
		    this.model.set({name:"name", version:"version"});
		    this.render()
	    },
	    change : function() {}
    });

    return ComponentFormView;
});


