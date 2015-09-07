/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('categoryFactory',categoryFactory);
        categoryFactory.$inject=['$http','coreUtils'];
        function categoryFactory($http, coreUtils){
            function getCategories(){
                var request= coreUtils.generateUrl();

                return $http(request).then(
                    function(response){
                        console.log(response);
                        return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            return {
                getCategories:getCategories
            };
        }
    }
)();