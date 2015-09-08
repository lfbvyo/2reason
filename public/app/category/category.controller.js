/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app').controller('CategoryController', CategoryController);
        CategoryController.$inject=['categoryFactory'];
        function CategoryController(categoryFactory){
            var vm=this;
            vm.categories=[];
            vm.pageNumber=0;
            vm.getCategories=getCategories;
            vm.getThreads=getThreads;
            vm.threads=[];
            function getCategories(){
                categoryFactory.getCategories().then(
                    function(categories){
                        vm.categories=categories;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function getThreads(){
                categoryFactory.getThreads().then(
                    function(threads){
                        vm.threads.push(threads);
                        return vm.threads;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }


            vm.getCategories();
        }
    }
)();