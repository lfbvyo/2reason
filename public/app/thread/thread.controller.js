/**
 * Created by hugo on 07/09/2015.
 */
(function(){
    angular.module('app').controller('ThreadController', ThreadController);
    ThreadController.$inject=['threadFactory','commentFactory', '$stateParams','$state'];
    function ThreadController(threadFactory, commentFactory, $stateParams,$state){
        var vm=this;
        vm.threadId=$stateParams.threadId;
        vm.thread={};
        vm.newComment={};
        vm.createComment=createComment;
        function getThread(){
            threadFactory.getThread(vm.threadId).then(
                function(response){
                    vm.thread=response;
                },
                function(error){
                    console.log(error);

                }

            );
        }
        function createComment(){
            threadFactory.createComment(vm.newComment, vm.threadId).then(
                function(response){
                    if(response.status==200){
                        alert('comentario creado correctamente');
                        vm.thread.comentarios.push(vm.newComment);
                        vm.commentForm=false;
                        vm.newComment={};
                    }else{
                        alert('error');
                    }

                }
            );
        }
        getThread();
    }

})();
