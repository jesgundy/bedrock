define([
  'backbone',
  'd3'
], function( Backbone, bacon ) {

  var Component = Backbone.View.extend({
    initialize: function() {
      console.log('Require & Backbone are working.');
    }
  });

  new Component();

  return Component;

});