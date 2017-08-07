'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var minifyCss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
var imagemin = require('gulp-imagemin');

var critical = require('critical');

var sequence = require('gulp-sequence');

gulp.task(
  'sass',
  function () {
    return gulp.src('./assets/sass/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./assets/css'));
  }
);

gulp.task(
    'minify-css',
    function () {
      gulp.src('./assets/css/*.css').pipe(minifyCss()).pipe(gulp.dest('dist/css'));
    }
);

gulp.task(
  'minify-js',
  function () {
    gulp.src('./assets/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
  }
);

gulp.task(
  'minify-img',
  function () {
    gulp.src('./assets/images/**/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
  }
);

gulp.task(
  'copy-svg',
  function() {
    gulp.src('./assets/svg/**/*').pipe(gulp.dest('dist/svg'))
  }
);

gulp.task(
  'critical',
  function() {
    critical.generate({
      inline: true,
      base: './',
      src: 'index-original.html',
      dest: 'index.html'
    });
  }
);

gulp.task(
  'default',
  function (cb) {
    sequence('sass', 'minify-css', 'minify-js', 'minify-img', 'copy-svg', 'critical', cb)
  }
);
