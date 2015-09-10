/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app').controller('CategoryController', CategoryController);
        CategoryController.$inject=['categoryFactory','threadFactory','$stateParams','$state'];
        function CategoryController(categoryFactory, threadFactory, $stateParams,$state){
            var vm=this;
            //variables
            vm.categoryId=$stateParams.categoryId;
            vm.categories=[];
            vm.pageNumber=0;
            vm.newThread={};
            vm.threadForm=false;
            vm.threads=[];
            //functions
            vm.getCategories=getCategories;
            vm.getMoreThreads=getMoreThreads;
            vm.selectThread=selectThread;
            vm.createThread=createThread;
            function getCategories(){
                categoryFactory.getCategories(vm.categoryId).then(
                    function(categories){
                        vm.categories=categories;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function selectThread(id){
                $state.go("^.thread",{'threadId':id});
                //threadFactory.selectThread(id);
            }
            function getMoreThreads(){
                categoryFactory.getMoreThreads(vm.categoryId, vm.pageNumber).then(
                    function(response){
                        vm.pageNumber++;
                        vm.threads=vm.threads.concat(response);
                    },
                    function(){

                    }
                );
            }
            function createThread(){
                threadFactory.createThread(vm.newThread, vm.categoryId).then(
                    function(response){
                        if(response.satus==200) {
                            alert('thread creado correctamente');
                            vm.threadForm = false;
                            vm.threads.push(vm.newThread);
                            vm.newThread = {};
                        }else{
                            alert('error');
                        }
                    }

                );
            }

            vm.getMoreThreads();
            vm.getCategories();
        }
    }
)();