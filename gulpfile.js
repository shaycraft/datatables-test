var gulp = require('gulp');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');

gulp.task('bower', function() {
	return gulp.src('bower_components/**/*.min.js')
		.pipe(flatten())
		.pipe(gulp.dest('public/app/assets/js/vendor/'));
});

//Add bower dependencies in here.  Order matters.
gulp.task('vendor', function() {
    gulp.src([
            'public/app/assets/js/vendor/angular.min.js',
            'public/app/assets/js/vendor/jquery.min.js',
            'public/app/assets/js/vendor/jquery.dataTables.min.js',
            'public/app/assets/js/vendor/sizzle.min.js'
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('public/app/dist/'));
});

gulp.task('default', ['bower', 'vendor']);