var gulp = require('gulp');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

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

gulp.task('scripts', function() {
    return gulp.src('public/app/scripts/**/*.js')
        .pipe(concat('datatables-test.js'))
        .pipe(gulp.dest('public/app/dist/'))
        .pipe(rename('datatables-test.min.js'))
});

gulp.task('default', ['bower', 'vendor', 'scripts']);