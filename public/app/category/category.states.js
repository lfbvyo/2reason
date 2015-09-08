/**
 * Created by hugo on 07/09/2015.
 */
(function() {
        angular.module('app').config(threadStates, 'threadStates');
        threadStates.$inject = ['$stateProvider', '$urlRouterProvider'];
        function threadStates($stateProvider, $urlRouterProvider) {

            // Now set up the states
            $stateProvider
                .state('category',{
                    url: "/categories",
                    views:{
                        'categories':{
                            templateUrl: "app/navbar/navbar.html",
                            controller: 'NavbarController',
                            controllerAs: 'navbarController'
                        },
                        'category':{
                            templateUrl: "app/category/category.html",
                            controller: 'CategoryController',
                            controllerAs: 'categoryController'
                        }
                    }
                }
            );
        }
    }
)();