var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('cleancss', function() {
  return gulp.src('src/main/webapp/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});


var uglify = require('gulp-uglify');  
var concat = require('gulp-concat');  
var stripDebug = require('gulp-strip-debug');  
var size = require('gulp-size');

gulp.task('scripts', function() {  
    gulp.src('src/main/webapp/js/**/*.js')
        .pipe(stripDebug())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(size())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('default', [ 'cleancss', 'scripts' ],function(){
	console.log('finito');
});