var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var sass = require ('gulp-sass');

gulp.task('sass', function() {
	gulp.src ('src/sass/style.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('dist/resource/css'))
		.pipe(browserSync.stream())
		.pipe(cleanCSS());
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
