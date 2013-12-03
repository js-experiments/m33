define([
    'jquery',
    'underscore',
    'backbone',
		'lazy'
], function($, _, Backbone, Lazy){

    var ComponentFormView = Lazy.View.extend({
      properties : function(){return{
	      el : ".component-form-lazy-view",
	      alias : "component" // for the template
      }},
	    lazyTemplate : function() {/**
		      <div class="form-group">
		        <input type="text" class="form-control component-name" placeholder="<%= component.name %>">
		      </div>
			    <div class="form-group">
			     <input type="text" class="form-control component-version" placeholder="<%= component.version %>">
			    </div>
		      <button class="btn btn-default add-component">Add Component to list</button>
	    **/},
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


