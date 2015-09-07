/**
 * Created by hugo on 07/09/2015.
 */
(function(){
    angular.module('app').controller('ThreadController', ThreadController);
    ThreadController.$inject=[];
    function ThreadController(){
        console.log('ThreadController');
        var vm=this;
        vm.hola='hola mundo';

    }


})();
