
/* see :
 https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
 http://caniuse.com/mutationobserver

 Mutation Observers Polyfill :
 https://github.com/Polymer/MutationObservers
*/

define(['module'], function (module) {

    MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    var DOMObserver = {
        getObserver : function(target, mutationType, callback) { // target node ie: var target = document.querySelector('h1');
            // configuration of the observer:
            var config = {
                  attributes: true
                , childList: true
                , characterData: true
                , subtree: true
                , attributeOldValue: true
                , characterDataOldValue:true
                , attributeFilter:true
            };

            // create an observer instance
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if(mutation.type==mutationType) {
                        callback(
                              mutation.target.parentElement // affected node
                            , mutation.target               // new content -> new value
                            , mutation.oldValue             // old value
                        );
                    }
                });
            });

            // pass in the target node, as well as the observer options
            observer.observe(document.querySelector(target), config);
            return observer;
        }

    };

    // later, you can stop observing
    //  observer.disconnect();
    return DOMObserver;

});


/* === sample ===

 domobserver.getObserver("h1", "characterData", function(node, new_value, old_value){
 console.log("h1 has change",node, new_value, old_value)
 });

 domobserver.getObserver("h4", "characterData", function(node, new_value, old_value){
 console.log("h4 has change",node, new_value, old_value)
 });
*/








