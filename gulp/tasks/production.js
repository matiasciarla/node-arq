'use strict';

var gulp = require('gulp'),
	clean = require('gulp-clean'),
	sourcemaps = require('gulp-sourcemaps'),
	runSequence = require('run-sequence'),
	plumber = require("gulp-plumber"),
	babel = require('gulp-babel'),
	nodemon = require('gulp-nodemon'),
	ts = require('gulp-typescript');


var config = require('../config');
const tsProject = ts.createProject('tsconfig.json');


/*
 **	Elimina 'dist/'
 */
gulp.task( config.clean.name, function () {
	return gulp.src( config.clean.src, {read: false})
		.pipe( plumber() )
		.pipe(clean());
});

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
  .pipe(tsProject());
  return tsResult.js.pipe(gulp.dest('dist'));
});

/*
 **	Mueve server.js.
 */
gulp.task( config.server.name, function(){

	return gulp.src( config.server.src )
		.pipe( plumber() )
		.pipe( sourcemaps.init())
		.pipe( babel() )
		.pipe( sourcemaps.write("."))
		.pipe( gulp.dest( config.server.dest ));

});

/*
 **	Mueve y concatena archivos de node en server.
 */
gulp.task( config.nodejs.name, [config.server.name], function(){

	return gulp.src( config.nodejs.src )
		.pipe( plumber() )
		.pipe( sourcemaps.init())
		.pipe( babel() )
		.pipe( sourcemaps.write("."))
		.pipe( gulp.dest( config.nodejs.dest ));

});

/*
 **	Nodemon
 */
gulp.task('start', [config.nodejs.name], function(){
	var stream = nodemon({
		exec: 'node --inspect',
		script: 'dist/server.js',
		ext: 'js',
		env: {
			'USER_SQL': '<%USER_SQL%>',
			'PASSWORD_SQL': '<%PASSWORD_SQL%>',
			'HOST_SQL': '<%HOST_SQL%>',
			'PORT_SQL': '<%PORT_SQL%>',
			'NAME_SQL': '<%NAME_SQL%>',
			'HOST_MONGO':'<%HOST_MONGO%>',
			'NAME_MONGO':'<%NAME_MONGO%>',
			'NODE_ENV': 'development'
		}
	});

	stream.on('crash', function(){
		console.error('Application has crashed!\n');
		stream.emit('restart', 10);  // restart the server in 10 seconds
	})
});

gulp.task('startTest', [config.nodejs.name], function(){
	var stream = nodemon({
		exec: 'node --inspect',
		script: 'dist/server.js',
		ext: 'js',
		env: {
			'NODE_ENV': 'TEST',
			'user': '',
			'password': '',
			'host': '',
			'port': '3306'
		}
	});

	stream.on('crash', function(){
		console.error('Application has crashed!\n');
		stream.emit('restart', 10);  // restart the server in 10 seconds
	})
});

gulp.task('startHomo', [config.nodejs.name], function(){
	var stream = nodemon({
		exec: 'node --inspect',
		script: 'dist/server.js',
		ext: 'js',
		env: {
			'NODE_ENV': 'PREPROD',
			'user': '',
			'password': '',
			'host': '',
			'port': '3306'
		}
	});

	stream.on('crash', function(){
		console.error('Application has crashed!\n');
		stream.emit('restart', 10);  // restart the server in 10 seconds
	})
});

gulp.task('startProd', [config.nodejs.name], function(){
	var stream = nodemon({
		exec: 'node',
		script: 'dist/server.js',
		ext: 'js',
		env: {
			'NODE_ENV': 'PROD',
			'user': '',
			'password': '',
			'host': '',
			'port': '3306'
		}
	});

	stream.on('crash', function(){
		console.error('Application has crashed!\n');
		stream.emit('restart', 10);  // restart the server in 10 seconds
	})
});

gulp.task('tst', function(callback){
	runSequence(config.clean.name, ['scripts'], 'startTest', callback);
});

gulp.task('homo', function(callback){
	runSequence(config.clean.name, ['scripts'], 'startHomo', callback);
});

gulp.task('default', function(callback){
	runSequence(config.clean.name, ['scripts'], 'start', 'watch', callback);
});

gulp.task('prod', function(callback){
	runSequence(config.clean.name, ['scripts'], callback);
});