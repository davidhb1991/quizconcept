'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', defaultTask);
gulp.task('sass', compileSass);
gulp.task('sass:watch', watchSass);
gulp.task('outputMinified', outputMinified);

function defaultTask(done) {
    // place code for the default task here
    watchSass();
    done();
}

function compileSass() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
}

function watchSass() {
    gulp.watch('./sass/**/*.scss', ['sass'])
}

function outputMinified() {
    return "code for minification should go here";
}