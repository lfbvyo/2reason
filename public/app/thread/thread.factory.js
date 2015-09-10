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
            function createThread(thread, categoryId){
                return $http.post('http://2reason.net/thread/new/?titulo='+thread.titulo+'&autor='+thread.autor+'&contenido='+thread.contenido+'&categoria='+categoryId+'&callback=JSON_CALLBACK').then(
                    function(response){
                        return response;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function createComment(comment, threadId){
                return $http.post('http://2reason.net/coment/new/'+threadId+'?titulo='+comment.titulo+'&autor='+comment.autor+'&contenido='+comment.contenido+'&callback=JSON_CALLBACK').then(
                    function(response){
                        return response;
                    },
                    function(error){
                        return error;
                    }
                );
            }
            return {
                getMoreThreads:getMoreThreads,
                getThread:getThread,
                createThread:createThread,
                createComment:createComment
            };
        }
    }
)();