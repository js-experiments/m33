define([
    'jquery',
    'underscore',
    'backbone',
    'bootstrap',
		'models/Component',
    'models/Components',
    'views/ComponentsView',
		'views/ComponentsLazyView',
		'views/ComponentFormView',
		'views/ComponentFormLazyView',
    'little',
		'highlight', // ==> globals
		'showdown' // ==> globals
], function(
		$, _, Backbone
	, bootstrap
	, Component, Components
	, ComponentsView, ComponentsLazyView, ComponentFormView, ComponentFormLazyView
	, little)
{

    console.log(little.hello)

    var Application = Backbone.Router.extend({ // application is a router

	    routes : {
		    "help": "help",    // #help
		    ""          : "home",
		    //"toons/:id" : "select", // #toons/1
		    //"page_:id" : "select", // #page_001 #page_002 etc ...
		    '*actions': 'defaultAction'
	    },

      initialize : function() { //initialize models, collections and views ...
        this.components = new Components();

        this.componentsView = new ComponentsView({ collection : this.components });
        this.componentsLazyView = new ComponentsLazyView({ collection : this.components });

        this.componentFormView = new ComponentFormView({ model : new Component(), attributes : {collection : this.components } });
        this.componentFormLazyView = new ComponentFormLazyView({ model : new Component(), attributes : {collection : this.components } });

        this.listenTo(this.componentsView, "rendered", this.sendMessage)
        //this.listenTo(this.componentsLazyView, "rendered", this.sendMessage)

        this.components.fetch();

        this.componentFormView.render();
        this.componentFormLazyView.render();

        /*this.router.on('route:defaultAction', function (actions) {
	        console.log("hello", actions)
        });
        */


	      var mdContent = $.get("data/001.md").done(function(content){

		      var converter = new Showdown.converter();

		      $("edito").html(converter.makeHtml(content));
		      $('pre code').each(function(i, e) {hljs.highlightBlock(e)});

	      });

      },
	    home : function(){
		    console.log("=== home ===");
	    },
      help : function(){
	      console.log("=== HELP ===");
      },
	    defaultAction: function(action) {
		    console.log("hello==>", action)
	    },
      sendMessage : function() {
          $(".this-is-a-message").html("Components are loaded, so, all is OK, have fun!");
          $("h4").first().html("v° 0.0.0");
      }
    });

    return Application;
});
