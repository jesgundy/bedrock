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
    },

    watch: {
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
      },
      kit: {
        files: ['content/**/*.{kit,html}', 'index.kit'],
        tasks: ['codekit'],
      },
    },

    imagemin: {
      img: {
        options: {
          optimizationLevel: 3,
        },
        files: [{
          src: ['img/**/*.{png,jpg,gif}'],
          expand: true,
        }]
      },
    },

    codekit: {
      index: {
        files: {
          'index.html' : 'index.kit',
        }
      },
    },

  }); // end config



  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-codekit');



  // Default grunt task
  grunt.registerTask('default', 'Log grunt options to screen.', function(){

    function highlight(text) {
      return '\033[0;36m'+ text +'\033[0m';
    }

    // intro
    grunt.log.writeln('\n');
    grunt.log.writeln('BEDROCK: GRUNT TASKS');
    grunt.log.writeln('--------------------');

    // List out all of the options to run (automate this later?)\
    grunt.log.writeln( highlight('sass:')+ ' Compiles all styles in the scss/ folder');
    grunt.log.writeln( highlight('codekit:')+ ' Compiles index.kit file into index.html');
    grunt.log.writeln( highlight('watch:')+ ' Watches for changes in scss/ and content/ folders');
    grunt.log.writeln( highlight('jshint:')+ ' Runs JSHint on all component/ js files');
    grunt.log.writeln( highlight('imagemin:')+ ' Crushes all jpgs, pngs and gifs in the img/ folder');

    // space
    grunt.log.write('\n');
  });



  // JS
  // grunt.registerTask('jshint', ['jshint']);



  // Scss
  // grunt.registerTask('sass', ['sass']);


};