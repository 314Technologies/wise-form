"use strict";

var gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor,
    coffee = require('gulp-coffee'),
    coffeelint = require('gulp-coffeelint'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

gulp.task('compile-coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('fail'))
    .pipe(coffee())
    .pipe(concat('wise-form.js'))
    .pipe(gulp.dest('./'));
  gulp.src('./spec/*.coffee')
    .pipe(coffeelint())
    .pipe(coffeelint.reporter('fail'))
    .pipe(coffee())
    .pipe(concat('spec.js'))
    .pipe(gulp.dest('./spec/'));
});

gulp.task('run-spec', function () {
  gulp.start('compile-coffee');
  gulp.src('./spec/spec.js')
    .pipe(protractor({
            configFile: "./spec/protractor.conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:8000']
        }));
});

gulp.task('watch', function() {
  watch({glob: ['./src/*.coffee', './spec/*.coffee']}, function (files) {
    gulp.start('run-spec');
  });
});

gulp.task('default', function() {
  // place code for your default task here
});