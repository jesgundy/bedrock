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

    codekit: {
      templates: {
        files: [{
          expand: true,
          cwd: 'content/',
          src: ['*.kit'],
          flatten: true,
          dest: '',
          ext: '.html',
        }]
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
      kit: {
        files: ['content/**/*.{kit,html}'],
        tasks: ['codekit'],
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass'],
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
    grunt.log.writeln( highlight('sass: ')+ 'Compiles sass styles into CSS');
    grunt.log.writeln( highlight('codekit: ')+ 'Compiles kit files into HTML');
    grunt.log.writeln( highlight('watch: ')+ 'Watches style/content & compiles when changed');
    grunt.log.writeln( highlight('jshint: ')+ 'Runs JSHint on all component/ js files');
    grunt.log.writeln( highlight('imagemin: ')+ 'Crushes all jpgs, pngs and gifs in the img/ folder');

    // space
    grunt.log.write('\n');
  });



};