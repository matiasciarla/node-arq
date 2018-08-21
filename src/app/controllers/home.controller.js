(function(){

	angular
		.module('app')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['baseService', '$routeParams', '$window', 'jwtHelper'];

	function HomeController(baseService, $routeParams, $window, jwtHelper){
		const vm = this;

		
	}
})();
