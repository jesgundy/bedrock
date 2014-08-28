module.exports = function(grunt) {



  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      uses_defaults: ['js/components/**/*.js', 'js/components/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        },
      },
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          src: ['scss/*.scss'],
          dest: 'css',
          ext: '.css',
          expand: true,
          flatten: true,
        }]
      }
    }

  }); // end config



  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');



  // Default grunt task
  grunt.registerTask('default', 'Log grunt options to screen.', function(){
    // intro
    grunt.log.writeln('\n');
    grunt.log.writeln('BEDROCK: GRUNT TASKS');
    grunt.log.writeln('--------------------------');

    // List out all of the options to run (automate this later?)\
    grunt.log.writeln('*jshint:* Runs JSHint on all component/ js files.');

    // space
    grunt.log.write('\n');
  });



  // JS
  // grunt.registerTask('jshint', ['jshint']);



  // Scss
  // grunt.registerTask('sass', ['sass']);


};