(function(){

    angular
        .module('app')
        .factory('baseService', baseService);

    baseService.$inject = ['ajaxService'];

    function baseService(ajaxService){
        let host = 'http://' + location.host;
        let user = {};

        let data = {
            
        };

        return data;

        /******** Publics Functions ********/

        

        /******** Privates Functions ********/
        

    }
})();
