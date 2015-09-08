/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app').controller('NavbarController', NavbarController);
        NavbarController.$inject=['categoryFactory'];
        function NavbarController(categoryFactory){
            var vm=this;
            vm.categories=[];
            vm.getCategories=getCategories;
            vm.selectCategory=selectCategory;

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
            function selectCategory(id){
                categoryFactory.selectCategory(id);
            }


            vm.getCategories();
        }
    }
)();