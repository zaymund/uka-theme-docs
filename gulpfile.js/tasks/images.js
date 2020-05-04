'use strict';
/**
 * Minify Images (png, jpeg, gif, svg)
 *
 * Compiles:
 *      images/*.(png, jpeg, gif, svg)
 *
 * @command gulp images
 */
const gulp     = require( 'gulp' );
const newer    = require( 'gulp-newer' );
const imagemin = require( 'gulp-imagemin' );
const notify   = require( 'gulp-notify' );
const config   = require( '../config.json' );


/**
 * Minify Images
 */
gulp.task( 'images', () => {
  return gulp
    .src( config.imagesSrc + '/*{.jpg,.gif,.png,.svg}' )
    .pipe( newer( config.imagesDest ) )
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.jpegtran({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 3 }), // 0-7 low-high
        imagemin.svgo({
          plugins: [ { removeViewBox: true }, { cleanupIDs: false } ]
        })
      ])
    )
    .pipe( gulp.dest( config.imagesDest ) )
    .pipe( notify({ message: '\n\n✅  ===> IMAGES — completed!\n', onLast: true }) )
});
