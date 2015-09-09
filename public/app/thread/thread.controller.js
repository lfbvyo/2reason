/**
 * Created by hugo on 07/09/2015.
 */
(function(){
    angular.module('app').controller('ThreadController', ThreadController);
    ThreadController.$inject=['threadFactory','commentFactory', '$stateParams','$state'];
    function ThreadController(threadFactory, commentFactory, $stateParams,$state){
        var vm=this;
        vm.thread={};
        function getThread(){
            threadFactory.getThread($stateParams.threadId).then(
                function(response){
                    vm.thread=response;
                },
                function(error){
                    console.log(error);

                }

            );
        }
        getThread();
    }

})();
