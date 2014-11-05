// RequireJS Setup
require.config({
  paths: {
    "backbone": "lib/backbone",
    "jquery": "lib/jquery",
    "underscore": "lib/underscore"
  },
  urlArgs: window.REQUIRE_NOCACHE ? "bust="+(new Date()).getTime() : null
});


// Main application bootstrapper
define(function() {
  var mods = [];

  if (!!document.querySelectorAll('.container').length) {
    mods.push("components/example");
  }

  require(mods);
});
