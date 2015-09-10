/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('categoryFactory',categoryFactory);
        categoryFactory.$inject=['$http','coreUtils'];
        function categoryFactory($http, coreUtils){
            function getCategories(){
                var request= coreUtils.generateUrl('categories');
                return $http.jsonp("http://2reason.net/categories/?callback=JSON_CALLBACK").then(
                    function(response){
                        console.log(response);
                        return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function getMoreThreads(id, pageNumber){
                return $http.jsonp('http://2reason.net/category/'+id+'/'+pageNumber+'?callback=JSON_CALLBACK').then(
                    function(response){
                        return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            return {
                getMoreThreads:getMoreThreads,
                getCategories:getCategories
            };
        }
    }
)();