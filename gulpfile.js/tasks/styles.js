'use strict';
/**
 * Theme Styles
 *
 * Compiles:
 *      css/style.css
 *
 * @command gulp styles
 */
const gulp         = require( 'gulp' );
const sass         = require( 'gulp-sass' );
const browserSync  = require( 'browser-sync' );
const autoprefixer = require( 'gulp-autoprefixer' );
const lineec       = require( 'gulp-line-ending-corrector' );
const plumber      = require( 'gulp-plumber' );
const beep         = require( 'beepbeep' );
const notify       = require( 'gulp-notify' );
const config       = require( '../config.json' );

const autoprefixers = [
  'last 2 version',
  '> 1%',
  'ie >= 11',
  'last 1 Android versions',
  'last 1 ChromeAndroid versions',
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
  'last 2 iOS versions',
  'last 2 Edge versions',
  'last 2 Opera versions'
];


/**
 * Custom Error Handler.
 *
 * @param Mixed err
 */
const errorHandler = r => {
	notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
	beep();
};


/**
 * Create style.css
 */
gulp.task( 'styles', () => {
  return gulp
  .src( config.stylesSrc + '/*.scss', { allowEmpty: true } )
  .pipe( plumber( errorHandler ) )
  .pipe(
    sass({
      errLogToConsole: true,
			outputStyle: 'expanded',
			precision: 5
    })
  )
  .on( 'error', sass.logError )
  .pipe( autoprefixer( autoprefixers ) )
  .pipe( lineec() )
  .pipe( gulp.dest( config.stylesDest ) )
  .pipe( browserSync.stream() )
});
