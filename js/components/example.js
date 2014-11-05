// Example
define([
  "backbone",
  "jquery",
  "underscore"
], function( Backbone, $, _ ) {
  "use strict";

  if (typeof Backbone !== undefined) {
    console.log("Backbone v"+ Backbone.VERSION);
  }

  if (typeof $ !== undefined) {
    console.log("jQuery v"+ $.fn.jquery);
  }

  if (typeof _ !== undefined) {
    console.log("Underscore v"+ _.VERSION);
  }

});
