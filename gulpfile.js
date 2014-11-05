// Plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var webserver = require('gulp-webserver');


// JSHint - https://github.com/spenceralger/gulp-jshint) & (https://github.com/sindresorhus/jshint-stylish
gulp.task('jshint', function() {
  return gulp.src('js/components/**/*.js')
  .pipe( jshint() )
  .pipe( jshint.reporter(stylish) );
});


// Sass - https://github.com/dlmanning/gulp-sass
gulp.task('sass', function() {
  return gulp.src('css/*.scss')
  .pipe( sass() )
  .on('error', function(err) {
    console.log( err.message );
  })
  .pipe( gulp.dest('css/') );
});


// Webserver - https://github.com/schickling/gulp-webserver
gulp.task('webserver', function() {
  gulp.src('.').pipe(webserver({
    host: '0.0.0.0',
    port: '8080',
    livereload: true,
    directoryListing: false,
    open: false
  }));
});


// Tasks - https://github.com/gulpjs/gulp/blob/master/docs/API.md
gulp.task('dev', ['sass', 'watch', 'webserver']);
gulp.task('watch', function() {
  gulp.watch(['css/**/*.scss'], ['sass']);
});


// List Commands
gulp.task('default', function() {
  // Highlight Function
  function highlight(text) { return '\033[0;36m'+ text +'\033[0m'; }

  // Heading
  console.log('\n');
  console.log('GULP TASKS');
  console.log('----------');

  // List
  console.log( highlight('dev ')+ '[sass, watch, webserver]');
  console.log( highlight('watch ')+ '[sass]');
  console.log( highlight('sass') );
  console.log( highlight('jshint') );
  console.log( highlight('webserver') );

  // Space
  console.log('\n');
});
