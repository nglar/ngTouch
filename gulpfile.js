var 	gulp = require('gulp'),
	// Server = require('karma').Server,
	karma = require('gulp-karma'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename');



gulp.task('build', function(done) {
	return gulp.src('ngTouch.js')
		.pipe(uglify())
		.pipe(rename('ngTouch.min.js'))
		.pipe(gulp.dest('build'));
});

/**
 * Run test once and exit
 */
// gulp.task('test', function (done) {
//   new Server({
//     configFile: __dirname + '/karma.conf.js',
//     singleRun: true
//   }, done).start();
// });


gulp.task('test', function () {
	return gulp.src('./foobar')
		.pipe(karma({
			configFile: 'karma.conf.js',
			action : 'run'
		}))
		.on('error', function (err) {
			console.log(err);
			this.emit('end');
		});
});