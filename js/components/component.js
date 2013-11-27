define([
  'backbone'
], function( Backbone ) {

  var Component = Backbone.View.extend({
    initialize: function() {
      console.log('Require & Backbone are working.');
    }
  });

  new Component();

  return Component;

});