/**
 * Created by hugo on 07/09/2015.
 */
(
    function(){
        angular.module('app.core').directive(coreUtils,'coreUtils');
        coreUtils.$inject=[];
        function coreUtils(){
            function generateUrl(params){
                return $http({
                    url: user.details_path,
                    method: "GET",
                    params: {user_id: user.id}
                });
            }
        }

    }

)();