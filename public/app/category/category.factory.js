/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('categoryFactory',categoryFactory);
        categoryFactory.$inject=['$http','coreUtils'];
        function categoryFactory($http, coreUtils){
            var selectedCategoryId='';
            var pageNumber=0;
            var threads=[];
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
            function selectCategory(id){
                if(selectedCategoryId!==id) {
                    selectedCategoryId = id;
                    pageNumber = 0;
                    threads = [];
                    getMoreThreads();
                }
            }
            function getMoreThreads(){
                return $http.jsonp('http://2reason.net/category/'+selectedCategoryId+'/'+pageNumber+'?callback=JSON_CALLBACK').then(
                    function(response){
                        pageNumber++;
                        threads=threads.concat(response.data);
                    },
                    function(error){
                        console.log(error);
                    }
                );
            };
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