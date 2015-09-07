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
            vm.getCategories=getCategories;
            console.log('CategoryController');

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


            vm.getCategories();
        }
    }
)();