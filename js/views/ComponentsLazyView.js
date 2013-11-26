define([
    'jquery',
    'underscore',
    'backbone',
		'lazy'
], function($, _, Backbone, Lazy){

    var ComponentsView = Lazy.View.extend({
      properties : {
	      el : ".components-lazy-view",
	      alias : "components" // for the template
      },
	    lazyTemplate : function() {/**
				<h3 style="color:green">M33 Components</h3>

				<ul><% _.each(components, function(component){ %>
					<li style="color:blue">
						<%= component.id %> : <%= component.name %> <%= component.version %>
					</li>
				<%});%></ul>

				<button type="button" class="btn btn-default btn-sm close-list">Close</button>
	    **/},
      events: {
          'click .close-list': 'close'
      }
    });

    return ComponentsView;
});