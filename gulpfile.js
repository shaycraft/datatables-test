var gulp = require('gulp');
var flatten = require('gulp-flatten');

gulp.task('bower', function() {
	return gulp.src('bower_components/**/*.min.js')
		.pipe(flatten())
		.pipe(gulp.dest('public/app/assets/js/vendor/'));
});

gulp.task('default', ['bower']);