requirejs.config({
    baseUrl : "js/",
    paths   : {
        "jquery"        : "vendors/jquery.min",
        "underscore"    : "vendors/underscore-min", /*This is amd version of underscore */
        "backbone"      : "vendors/backbone-min",   /*This is amd version of backbone   */
        "text"          : "vendors/text",
        "bootstrap"     : "../bootstrap3/js/bootstrap.min",
        "domobserver"   : "org.k33g/dom.observer"
    }
});

require(['application'], function (application) {
    application.initialize();
});