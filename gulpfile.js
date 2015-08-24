// Plugins
var gulp = require('gulp'); // https://github.com/gulpjs/gulp/blob/master/docs/API.md
var sass = require('gulp-sass'); // https://github.com/dlmanning/gulp-sass
var sourcemaps = require('gulp-sourcemaps'); // https://github.com/floridoo/gulp-sourcemaps



// Sass
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe( sourcemaps.init() )
    .pipe( sass({errLogToConsole: true}) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest('css') );
});



// Watch Sass
gulp.task('watch', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});



// List Commands
gulp.task('default', function() {

  // Heading
  console.log('\n');
  console.log('GULP TASKS');
  console.log('----------');

  // List
  console.log('watch: watch for changes to sass');
  console.log('sass: generate stylesheets');

  // Space
  console.log('\n');
});
