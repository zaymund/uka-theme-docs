'use strict';
/**
 * Default Task Commands
 *
 * @command gulp all
 * @command gulp watch
 */
const gulp        = require( 'gulp' );
const browserSync = require( 'browser-sync' );
const config      = require( '../config.json' );

const browsersync = done => {
	browserSync.init({
		server: { baseDir: config.baseDir + '/' },
		open: false,
    notify: false,
		injectChanges: true,
		online: true,
		watchEvents: [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ]
	});
	done();
};

const browserReload = done => {
	browserSync.reload();
	done();
};


/**
 * Run All Builder Tasks
 */
gulp.task( 'all', gulp.series( 'styles', 'images' ) );


/**
 * Watch For File Changes & Run Tasks
 */
gulp.task( 'watch', gulp.series( 'styles', 'images', browsersync, () => {
	gulp.watch( [config.stylesSrc + '/*.scss', config.stylesSrc + '/**/*.scss'], gulp.series( 'styles' ) )
  gulp.watch( config.imagesSrc + '/*{.jpg,.gif,.png,.svg}', gulp.series( 'images' ) )
	gulp.watch( config.baseDir + '/*.html', gulp.series( browserReload ) )
}));
