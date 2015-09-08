/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app.core').factory('coreUtils',coreUtils);
        coreUtils.$inject=[];
        function coreUtils(){
            function generateUrl(url,params){
                return {
                    url: '/'+url,
                    method: "GET"
                };
            }
            return{
                generateUrl:generateUrl
            };

        }

    }

)();

