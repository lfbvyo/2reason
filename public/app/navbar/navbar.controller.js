/**
 * Created by hugo on 07/09/2015.
 */
(
    function () {
        angular.module('app').controller('NavbarController', NavbarController);
        NavbarController.$inject = ['categoryFactory', '$state'];
        function NavbarController(categoryFactory) {
            var vm = this;
            vm.navCollapsed=true;
            vm.categories = [];
            vm.getCategories = getCategories;
            function getCategories() {
                categoryFactory.getCategories().then(
                    function (categories) {
                        vm.categories = categories;
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            }
            vm.test =function(){
                vm.navCollapsed=1;
            }
            vm.getCategories();

        }
    }
)();