/**
 * Created by hugo on 07/09/2015.
 */
(function() {
    angular.module('app').config(threadStates, 'threadStates');
     threadStates.$inject = ['$stateProvider', '$urlRouterProvider'];
     function threadStates($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/threads");
        //
        // Now set up the states
        $stateProvider
            .state('thread', {
                url: "/threads",
                templateUrl: "app/thread/thread.html",
                controller: 'ThreadController',
                controllerAs: 'threadController'
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "partials/state1.list.html",
                controller: function ($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "partials/state2.list.html",
                controller: function ($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            });
        }
    }
)();

