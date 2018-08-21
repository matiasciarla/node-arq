(function(){
	angular
		.module('app')
		.controller('GlobalController', GlobalController);

 	GlobalController.$inject = ['baseService'];

	function GlobalController(baseService) {
		let vm = this;

		vm.init = init;
		

		/******** Funciones Públicas ********/
		function init() {
			
		}

		

		/******** Funciones Privadas ********/

	}
})();
