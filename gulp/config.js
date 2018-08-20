var src = "src";
var srv = "dist";

module.exports = {
	clean: {
		name: 'clean',
		src: [
			srv
		]
	},
	sass: {
		name: 'sass',
		src: [
			src + '/assets/css/main.scss'
		],
		outputName: 'main.css',
		dest: srv + '/public/assets/stylesheets'
	},
	pipi: {
		src: [
			'bower_components/devextreme/css/dx.common.css',
			'bower_components/devextreme/css/dx.light.css'
		]
	},
	fonts: {
		name: 'move-fonts',
		src:[
			src + '/assets/fonts/**/*',
			'bower_components/font-awesome/fonts/**/*',
			'bower_components/bootstrap-sass/assets/fonts/**/*',
			'bower_components/roboto-fontface/fonts/**/*'
		],
		dest: srv + '/public/fonts'
	},
	fontawesome: {
		name: 'fontsawesome',
		src:[
			'bower_components/font-awesome/fonts/**/*',
		],
		dest: srv + '/public/assets/fonts/font-awesome'
	},
	assets: {
		name: 'move-assets',
		src: [
			src + '/assets/**/*',
			'!' + src + '/assets/{css,css/**}',
			'!' + src + '/assets/{fonts,fonts/**}',
			'!' + src + '/assets/{javascript,javascript/**}',
			'!' + src + '/assets/{js,js/**}'
		],
		dest: srv + '/public/assets'
	},
	accessassets: {
		name: "NON",
		src: [
			src + '/robots.txt',
			src + '/.htaccess'
		],
		dest: srv + '/public'
	},
	vendors: {
		name: 'vendors-js',
		src: [
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/angular/angular.min.js',
			'bower_components/angular-route/angular-route.min.js',
			'bower_components/angular-sanitize/angular-sanitize.min.js',
			'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
			'bower_components/cldrjs/dist/cldr.js',
			'bower_components/cldrjs/dist/cldr/event.js',
			'bower_components/cldrjs/dist/cldr/supplemental.js',
			'bower_components/globalize/dist/globalize.js',
			'bower_components/globalize/dist/globalize/message.js',
			'bower_components/globalize/dist/globalize/number.js',
			'bower_components/globalize/dist/globalize/currency.js',
			'bower_components/globalize/dist/globalize/date.js',
			'bower_components/jszip/dist/jszip.js',
			'bower_components/devextreme/js/dx.all.js',
			'bower_components/material-design-lite/material.min.js',
			'bower_components/socket.io-client/dist/socket.io.js',
			'bower_components/file-saver/FileSaver.min.js',
			'bower_components/alasql/dist/alasql.min.js',
			'bower_components/js-xlsx/dist/xlsx.core.min.js',
			'bower_components/angular-jwt/dist/angular-jwt.min.js',
			'node_modules/requirejs/require.js'
		],
		outputName: 'vendors.min.js',
		dest: srv + '/public/assets/javascripts'
	},
	appjs: {
		name: 'app-js',
		src: [
			src + '/app/**/*.js'
		],
		outputName: 'app.min.js',
		dest: srv + '/public/assets/javascripts'
	},
	nodejs: {
		name: 'node-js',
		src: [
			'tmp/server/**/*.js',
			'!tmp/server/server.js'
		],
		outputName: '',
		dest: srv + 'tmp/server'
	},
	server: {
		name: 'server',
		src: [
			'tmp/server/server.js'
		],
		dest: srv
	},
	inject:  {
		name: 'inject',
		target: src + '/index.html',
		src: [
			srv + '/public/assets/stylesheets/main.css',
			srv + '/public/assets/stylesheets/dx.common.css',
			srv + '/public/assets/stylesheets/dx.light.css',
			srv + '/public/assets/javascripts/vendors.min.js',
			srv + '/public/assets/javascripts/app.min.js'
		],
		read: {read: false},
		dest: srv + '/public'
	},
	html: {
		name: 'minify-html',
		src: [
			src + '/**/*.html'
		],
		dest: srv + '/public'
	}
};