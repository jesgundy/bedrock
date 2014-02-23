// Require.js Config
var require = {
  paths: {
    'backbone': 'lib/backbone',
    'd3': 'lib/d3',
    'jquery': 'lib/jquery',
    'underscore': 'lib/underscore',

    'backbone-private': 'lib/private/backbone-private',
    'jquery-private': 'lib/private/jquery-private',
    'underscore-private': 'lib/private/underscore-private'
  },
  map: {
    '*': {
      'backbone': 'backbone-private',
      'jquery': 'jquery-private',
      'underscore': 'underscore-private'
    },

    'backbone-private': { 'backbone': 'backbone' },
    'jquery-private': { 'jquery': 'jquery' },
    'underscore-private': { 'underscore': 'underscore' }
  }
};


// Enable cache-busting:
if ( typeof REQUIRE_NOCACHE != 'undefined' && REQUIRE_NOCACHE ) {
  require.urlArgs = "bust="+(new Date()).getTime();
}
