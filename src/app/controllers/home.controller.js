(function(){

	angular
		.module('app')
		.controller('HomeController', HomeController);

	HomeController.$inject = ['baseService', '$routeParams', '$window', 'jwtHelper'];

	function HomeController(baseService, $routeParams, $window, jwtHelper){
		const vm = this;

		if($routeParams.token !== undefined){

			let token = $routeParams.token;
			let tokenPayload = jwtHelper.decodeToken(token);
			vm.user = {firstName: tokenPayload.firstName, lastName: tokenPayload.lastName};

			$window.localStorage.setItem('token' , token);

			/** Public Variables **/
			vm.submition = "";
			vm.response = "";
			vm.location = "";
			/** Public Functions **/
			vm.init = init;
			vm.edit = edit;
			vm.save = save;

			vm.temp = {};

			function init(){

			}

			function edit(){
				angular.element(document).find('input').prop('disabled', false);
				// TODO: bloquear la edicion de la celda en modificación, en el resto de los clientes.
			}

			function save(){
				let msg = angular.element(document).find('input').val();
				socket.emit('message', {
					message: msg
				});
			}
		} else {
			baseService.login((data) =>{
				window.location.replace(data);
			} , (error) => {
				alert(error);
			})
		}
	}
})();
