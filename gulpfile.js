'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', defaultTask);
gulp.task('compileSass', compileSass);
gulp.task('watchSass', watchSass);
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
    gulp.watch('./sass/**/*.scss', ['compileSass'])
}

function outputMinifed() {

}