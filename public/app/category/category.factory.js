/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('categoryFactory',categoryFactory);
        categoryFactory.$inject=['$http','coreUtils','$filter'];
        function categoryFactory($http, coreUtils, $filter){
            var categories=[];
            function loadCategories(){
                var request= coreUtils.generateUrl('categories');
                return $http.jsonp("http://2reason.net/categories/?callback=JSON_CALLBACK").then(
                    function(response){
                        console.log(response);
                        categories=response.data;
                        //return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function getCategories(){
                return categories;
            }
            function getCategory(id){
                return $filter('filter')(categories, {_id : id})[0];
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
                loadCategories:loadCategories,
                getMoreThreads:getMoreThreads,
                getCategories:getCategories,
                getCategory:getCategory
            };
        }
    }
)();