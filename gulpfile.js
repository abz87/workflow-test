var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var sass = require ('gulp-sass');
var jshint = require ('gulp-jshint');

gulp.task('sass', function() {
	gulp.src ('src/sass/style.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('dist/resource/css'))
		.pipe(browserSync.stream())
		.pipe(cleanCSS());
});

gulp.task('js', function() {
	gulp.src ('src/javascript/app.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'))
		.pipe(gulp.dest('dist/resource/javascript'))
		.pipe(browserSync.stream());
});

gulp.task('serve', function () {
	browserSync.init({
		server: "./"
	});
});

gulp.task('default', ['serve','sass'], function () {
	gulp.watch('src/sass/*.scss', ['sass']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve','js'], function () {
	gulp.watch('src/javascript/*.jss', ['js']);
	gulp.watch('./*.html').on('change', browserSync.reload);
});