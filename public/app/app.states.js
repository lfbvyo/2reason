/**
 * Created by hugo on 07/09/2015.
 */
(function() {
        angular.module('app').config(threadStates, 'threadStates');
        threadStates.$inject = ['$stateProvider', '$urlRouterProvider'];
        function threadStates($stateProvider, $urlRouterProvider) {

            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/categories");
            //
        }
    }
)();