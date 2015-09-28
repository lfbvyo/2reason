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
            vm.loadCategories = function loadCategories() {
                categoryFactory.loadCategories().then(
                    function (categories) {
                        vm.getCategories();
                    },
                    function (error) {
                        console.log(error);
                    }
                );
            };
            vm.getCategories = function getCategories() {
                vm.categories= categoryFactory.getCategories();
            };


            vm.test =function(){
                vm.navCollapsed=1;
            };
            vm.loadCategories();

        }
    }
)();