
define([
  "backbone",
  "d3",
  "jquery",
  "underscore"
], function( Backbone, d3, $, _ ) {
  "use strict";

  if (typeof Backbone !== undefined) {
    console.log("Backbone v"+ Backbone.VERSION);
  }

  if (typeof d3 !== undefined) {
    console.log("D3 v"+ d3.version);
  }

  if (typeof $ !== undefined) {
    console.log("jQuery v"+ $.fn.jquery);
  }

  if (typeof _ !== undefined) {
    console.log("Underscore v"+ _.VERSION);
  }

});
