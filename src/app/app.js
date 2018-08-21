(function() {
	angular
		.module('app', [
			'ngRoute',
			'ngSanitize',
			'angular-jwt'
		])
		.factory('authInterceptor', function ($rootScope, $q, $window) {
			return {
				request: function (config) {
					config.headers = config.headers || {};
					config.headers.authorization = $window.localStorage.getItem('token');

					return config;
				},
				responseError: function (rejection) {
					if (rejection.status === 401) {
						// handle the case where the user is not authenticated
					}
					return $q.reject(rejection);
				}
			};
		})
		.config(function ($httpProvider) {
			$httpProvider.interceptors.push('authInterceptor');
		})
		.config(RouteProvider);

	RouteProvider.$inject = ['$routeProvider', '$locationProvider'];

	function RouteProvider($routeProvider, $locationProvider){
		$routeProvider
		.when('/', {
			controller: 'HomeController',
			controllerAs: 'home',
			templateUrl: 'views/home.html'
		});
	}
})();
