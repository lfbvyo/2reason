/**
 * Created by hugo on 08/09/2015.
 */
(function(){
        angular.module('app').factory('commentFactory',commentFactory);
        threadFactory.$inject=['$http','coreUtils'];
        function threadFactory($http, coreUtils){
            var comments=[];
            function getComments(){
                return comments;
            }
            return {
                getComments:getComments
            };
        }
    }
)();