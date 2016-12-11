var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
	gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./style/'));
});

gulp.task('default', ['watch']);
