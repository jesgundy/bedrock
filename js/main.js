// RequireJS Setup
require.config({
  paths: {
    "backbone": "lib/backbone",
    "jquery": "lib/jquery",
    "underscore": "lib/underscore"
  },
  urlArgs: window.REQUIRE_NOCACHE ? "bust="+(new Date()).getTime() : null
});



// Bootstrapper
define(function() {
  var modules = [];

  // Push modules
  if (!!document.querySelectorAll('.container').length) {
    modules.push("modules/module");
  }

  // Require modules
  require(modules);
});
