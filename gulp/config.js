var src = "src";
var srv = "dist";

module.exports = {
	clean: {
		name: 'clean',
		src: [
			srv
		]
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
	}
};