'use strict';

var browserify = require('browserify');
var watchify = require('watchify');
var tsify = require('tsify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var jasmine = require('gulp-jasmine');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

/**
* Run jasmine tests
*/
gulp.task('test', function() {
 return gulp.src('test/*.spec.js')
  .pipe(jasmine());
});

gulp.task('browserSync', function() {
 browserSync({
   server: {
     baseDir: './',
     index: 'index.html'
   },
   open: true,
   files: ['dist/bundle.js']
 });
});

/**
 * Transpile TypeScript and bundle
 */
gulp.task('bundle-ts', function() {

  var bundler = browserify();

  bundler = watchify(bundler);

  bundler.on('update', function() {
    rebundle();
  });

  bundler.add([
    './src/main.ts'
  ])
  .plugin('tsify');

  rebundle();

  function rebundle() {
    return bundler.bundle()
      .pipe(source('./dist/bundle.js'))
      .pipe(buffer())
      .pipe(gulp.dest('.'));
  }

});

gulp.task('default', function() {
  gulp.start(['bundle-ts', 'browserSync']);
});
