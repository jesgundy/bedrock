define([
  'backbone',
  'd3'
], function( Backbone, d3 ) {

  var Component = Backbone.View.extend({
    initialize: function() {
      console.log('Require & Backbone are working.');
    }
  });

  new Component();

  return Component;

});
