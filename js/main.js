requirejs.config({
  baseUrl : "js/",
  paths   : {
    "domReady"      : "vendors/domReady",
    "jquery"        : "vendors/jquery.min",
    "underscore"    : "vendors/underscore-min", /*This is amd version of underscore */
    "backbone"      : "vendors/backbone-min",   /*This is amd version of backbone   */
    "text"          : "vendors/text",
    "bootstrap"     : "../bootstrap3/js/bootstrap.min",
	  "showdown"      : "vendors/showdown",
	  "highlight"     : "vendors/highlight.min",
    "little"        : "vendors/org.k33g/my.little.module",
    "lazy"          : "vendors/org.k33g/lazy"
  },
	shim: {
		"bootstrap": {
			deps: ["jquery"]
		},
		"showdown": {
			"exports": "Showdown"   //attaches "Showdown" to the window object
		},
		"highlight":{
			"exports": "hljs"       //attaches "hljs" to the window object
		}
	}
});

require([
	'domReady',
	'application/Application',
	'backbone'
], function (domReady, Application, Backbone) {

	domReady(function () {
		//This function is called once the DOM is ready.
		//It will be safe to query the DOM and manipulate
		//DOM nodes in this function.
		$('body').css('visibility', 'visible');
		window.App = new Application();
		Backbone.history.start();
	});

});