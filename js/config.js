// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Require.js Config
var require = {
  paths: {
    'jquery-cdn': [
      '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
      'lib/jquery'
    ],
    'underscore': 'lib/underscore',
    'backbone': 'lib/backbone',
    'd3': 'lib/d3'
  },
  shim: {
    'jquery-cdn' : {
      init: function() {
        return $.noConflict(true);
      }
    }
  },
  map: {
    '*': {
      'jquery': 'jquery-cdn'
    }
  }
};

// Enable cache-busting:
if ( typeof REQUIRE_NOCACHE != 'undefined' && REQUIRE_NOCACHE ) {
  require.urlArgs = "bust="+(new Date()).getTime();
}
