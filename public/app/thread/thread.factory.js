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
                var autor =thread.autor||'Anonimo';
                return $http.post('http://2reason.net/thread/new/?titulo='+thread.titulo+'&autor='+autor+'&contenido='+thread.contenido+'&categoria='+categoryId+'&callback=JSON_CALLBACK').then(
                    function(response){
                        return response;
                    },
                    function(error){
                        console.log(error);
                    }
                );
            }
            function createComment(comment, threadId){
                var autor =comment.autor||'Anonimo';
                return $http.post('http://2reason.net/coment/new/'+threadId+'?titulo='+comment.titulo+'&autor='+autor+'&contenido='+comment.contenido+'&callback=JSON_CALLBACK').then(
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