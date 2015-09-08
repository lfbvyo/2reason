/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app.core').factory('coreUtils',coreUtils);
        coreUtils.$inject=[];
        function coreUtils(){
            function generateUrl(url,params){
                params=params||'';
                return {
                    url: 'http://2reason.net/'+url,
                    params:params
                };
            }
            return{
                generateUrl:generateUrl
            };

        }

    }

)();

