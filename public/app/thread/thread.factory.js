/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('threadFactory',threadFactory);
        threadFactory.$inject=['$http','coreUtils'];
        function threadFactory($http, coreUtils){
            var selectedThreadId='';
            var pageNumber=0;
            var threads=[];
            function selectThread(id){
                if(selectedThreadId!==id) {
                    selectedThreadId = id;
                    threads = [];
                    getMoreThreads();
                }
            }
            function getThreads(){
                return threads;
            }
            return {
                getMoreThreads:getMoreThreads,
                getCategories:getCategories,
                selectCategory:selectCategory,
                getThreads:getThreads
            };
        }
    }
)();