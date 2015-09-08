/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('categoryFactory',categoryFactory);
        categoryFactory.$inject=['$http','coreUtils'];
        function categoryFactory($http, coreUtils){
            var selectedCategoryId='';
            var threads=[];
            function getCategories(){
                var request= coreUtils.generateUrl('categories');

                return $http(request).then(
                    function(response){
                        console.log(response);
                        return [{"_id":"55ece976c558c4259bb046e6","nombre":"Política","subcategorias":[{"id":1,"nombre":"Corrupción"},{"id":2,"nombre":"Diputados"}]},{"_id":"55ece988c558c4259bb046e7","nombre":"Religión"},{"_id":"55ece993c558c4259bb046e8","nombre":"Amigos"}];
                        //return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function selectCategory(id){
                selectedCategoryId=id;
            }
            function getMoreThreads(page){
                var request= coreUtils.generateUrl('category/id:'+selectedCategoryId+'/'+page);
                //var request= coreUtils.generateUrl('category',params);
                return $http(request).then(
                    function(response){
                        threads.push(response);
                        console.log(response);
                        //return response.data;
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
                getCategories:getCategories,
                selectCategory:selectCategory,
                getThreads:getThreads
            };
        }
    }
)();