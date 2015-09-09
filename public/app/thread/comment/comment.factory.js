/**
 * Created by hugo on 08/09/2015.
 */
(function(){
        angular.module('app').factory('commentFactory',commentFactory);
        commentFactory.$inject=['$http','coreUtils'];
        function commentFactory($http, coreUtils){
            var comments=[];
            function getComments(id){
                return $http.jsonp('http://2reason.net/thread/'+id+'/?callback=JSON_CALLBACK').then(
                    function(response){
                        return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            return {
                getComments:getComments
            };
        }
    }
)();