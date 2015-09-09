/**
 * Created by hugo on 07/09/2015.
 */
(function(){
        angular.module('app').factory('threadFactory',threadFactory);
        threadFactory.$inject=['$http','coreUtils'];
        function threadFactory($http, coreUtils){
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
            }
            function getThread(id){
                return $http.jsonp('http://2reason.net/thread/'+id+'/1?callback=JSON_CALLBACK').then(
                    function(response){
                        return response.data;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function createThread(thread){
                return $http.post('http://2reason.net/thread/new/?titulo='+thread.titulo+'&autor=felipevago&contenido='+thread.contenido+'&categoria=55ece993c558c4259bb046e8&callback=JSON_CALLBACK').then(
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
                getThread:getThread,
                createThread:createThread
            };
        }
    }
)();