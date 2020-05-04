'use strict';
/**
 * Gulpfile Home
 * @see gulpfile.js/tasks
 *
 * @command npm install
 * @command gulp watch
 *
 * @command gulp all
 * @command gulp styles
 * @command gulp images
 */
const gulp        = require( 'gulp' );
const requireDir  = require( 'require-dir' );
const forwardRef  = require( 'undertaker-forward-reference' );

gulp.registry( forwardRef() );
requireDir( './tasks', { extensions: ['.js'] } );
