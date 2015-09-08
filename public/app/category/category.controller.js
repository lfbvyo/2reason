/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app').controller('CategoryController', CategoryController);
        CategoryController.$inject=['categoryFactory','threadFactory'];
        function CategoryController(categoryFactory, threadFactory){
            var vm=this;
            vm.categories=[];
            vm.pageNumber=0;
            vm.getCategories=getCategories;
            vm.getThreads=getThreads;
            vm.getMoreThreads=getMoreThreads;
            vm.selectThread=selectThread;
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
                return categoryFactory.getThreads();
            }
            function selectThread(id){
                threadFactory.selectThread(id);
            }
            function getMoreThreads(){
                categoryFactory.getMoreThreads();
            }


            vm.getCategories();
        }
    }
)();