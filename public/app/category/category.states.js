/**
 * Created by hugo on 07/09/2015.
 */
(function() {
        angular.module('app').config(threadStates, 'threadStates');
        threadStates.$inject = ['$stateProvider', '$urlRouterProvider'];
        function threadStates($stateProvider, $urlRouterProvider) {

            // Now set up the states
            $stateProvider
            .state('app.category',{
                url: "/category/:categoryId",
                templateUrl: "app/category/category.html",
                controller: 'CategoryController',
                controllerAs: 'categoryController'

            });
        }
    }
)();