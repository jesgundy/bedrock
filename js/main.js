/*global define, require*/// JSHint global vars

// RequireJS Setup
require.config({
  paths: {
    "backbone": "lib/backbone",
    "d3": "lib/d3",
    "jquery": "lib/jquery",
    "underscore": "lib/underscore"
  },
  urlArgs: window.REQUIRE_NOCACHE ? "bust="+(new Date()).getTime() : null
});


// Vanilla JS tests for detecting HTML elements
define("detection", function() {
  /*jshint -W030 */
  if (!document.querySelectorAll) {
    var d=document, s=d.createStyleSheet();
    d.querySelectorAll = function(r, c, i, j, a) {
      a=d.all, c=[], r = r.replace(/\[for\b/gi, "[htmlFor").split(",");
      for (i=r.length; i--;) {
        s.addRule(r[i], "k:v");
        for (j=a.length; j--;) {
          a[j].currentStyle.k && c.push(a[j]);
        }
        s.removeRule(0);
      }
      return c;
    };
  }
  return {
    // "has()" api: tests for basic CSS selector queries.
    find: function( selector ) {
      return document.querySelectorAll(selector);
    },
    has: function( selector ) {
      return this.find(selector).length > 0;
    }
  };
});


// Main application bootstrapper
define(["detection"], function( detection ) {
  var mods = [];

  // Example detection
  if ( detection.has(".container") ) {
    mods.push("components/example");
  }

  require(mods);
});
