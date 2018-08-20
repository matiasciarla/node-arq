(function(){
	angular
		.module('app')
		.controller('GlobalController', GlobalController);

 	GlobalController.$inject = ['baseService', 'collapseFactory', 'modalFactory' , 'hostnameFactory', '$window'];

	function GlobalController(baseService, collapseFactory, modalFactory, hostnameFactory, $window) {
		let vm = this;

		vm.init = init;
		

		/******** Funciones Públicas ********/
		function init() {
			
		}

		

		/******** Funciones Privadas ********/

	}
})();
