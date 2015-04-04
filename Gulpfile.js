'use strict';

var browserify = require('browserify');
var watchify = require('watchify');
var tsc = require('gulp-typescript');
var tsify = require('tsify');
var gulp = require('gulp');
var clean = require('gulp-clean');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var jasmine = require('gulp-jasmine');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync');
var Q = require('q');
var es = require('event-stream');
var reload = browserSync.reload;

/**
 * Local config for ease of use
 */
var config = {
  ts: [
    'src/components/main.ts',
    'src/components/hn.ts'
  ],
  js: []
}

/**
 * Run and watch bundle in browser
 */
gulp.task('browserSync', function() {
 browserSync({
   server: {
     baseDir: './',
     index: 'index.html',
     middleware: function (req, res, next) {
       res.setHeader('Access-Control-Allow-Origin', '*');
       next();
     }
   },
   open: true,
   files: ['dist/bundle.js', 'app.css']
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
    './src/app.ts'
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

/**
* Run jasmine tests
*/
gulp.task('jasmine', ['compile-ts'], function() {
  console.log('starting jasmine')
 return gulp.src('test/*.spec.js')
  .pipe(jasmine());
});

/**
 * Inline ts transpilation
 * for unit tests
 */
gulp.task('compile-ts', function(cb) {

  var tasks = []

  for(var i = 0; i < config.ts.length; i++) {

    tasks.push((function() {
      var deferred = Q.defer();

      var tsResult = gulp.src(config.ts[i])
      .pipe(tsc({
        target: 'ES5',
        module: 'commonjs'
      }))

      var index = config.ts[i].lastIndexOf('/');
      var path = './' + config.ts[i].substring(0, index+1)
      var fileName = config.ts[i].substring(index+1, config.ts[i].length)

      config.js.push(path);

      tsResult.js
        .pipe(gulp.dest(path))
        .on('end', function() {
          deferred.resolve();
        })
        return deferred.promise;
      })());
  }

  Q.all(tasks).then(function() {
    cb();
  })

});

/**
 * Cleanup js files
 */
gulp.task('clean', function() {
  for(var i = 0; i < config.js.length; i++) {
    gulp.src(config.js[i], {read: false})
      .pipe(clean());
  }
});

/**
 * The main gulp tasks
 */

gulp.task('test', ['compile-ts', 'jasmine']);

gulp.task('default', function() {
  gulp.start(['bundle-ts', 'browserSync']);
});
