var gulp = require('gulp');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var browserify = require('browserify');

gulp.task('jsx', function() {
   return browserify(
       {
           entries: './main.jsx'
       }
   )
       .transform("babelify", {presets: ["es2015", "react"]})
       .bundle()
       .pipe(source('main.js'))
       .pipe(gulp.dest('./'));
});