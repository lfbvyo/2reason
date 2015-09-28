/**
 * Created by hugo on 07/09/2015.
 */
(
        function () {
            angular.module('app').controller('CategoryController', CategoryController);
            CategoryController.$inject = ['categoryFactory', 'threadFactory', '$stateParams', '$state'];
            function CategoryController(categoryFactory, threadFactory, $stateParams, $state) {
                var vm = this;
                //variables
                vm.category={};
                vm.categoryId = $stateParams.categoryId;
                vm.categories = [];
                vm.pageNumber = 0;
                vm.newThread = {};
                vm.threadForm = false;
                vm.threads = [];
                //functions
                vm.getMoreThreads = getMoreThreads;
                vm.selectThread = selectThread;
                vm.createThread = createThread;
                vm.getCategory=getCategory;
                function selectThread(id) {
                    $state.go("^.thread", {'threadId': id});
                    //threadFactory.selectThread(id);
                }
                function getMoreThreads() {
                    categoryFactory.getMoreThreads(vm.categoryId, vm.pageNumber).then(
                            function (response) {
                                vm.pageNumber++;
                                vm.threads = vm.threads.concat(response);
                            },
                            function () {

                            }
                    );
                }
                function createThread() {
                    threadFactory.createThread(vm.newThread, vm.categoryId).then(
                            function (response) {
                                if (response.satus == 200) {
                                    alert('thread creado correctamente');
                                    vm.threadForm = false;
                                    vm.threads.push(vm.newThread);
                                    vm.newThread = {};
                                } else {
                                    alert('error');
                                }
                            }

                    );
                }
                function getCategory(){
                    vm.category= categoryFactory.getCategory(vm.categoryId);
                    if(vm.category){
                        return vm.category.nombre;
                    }else{
                        return false;
                    }
                }
                vm.open = function (size) {
                    var modalInstance = vm.open({
                        animation: vm.animationsEnabled,
                        templateUrl: 'myModalContent.html',
                        controller: 'ModalInstanceCtrl',
                        size: size,
                        resolve: {
                            items: function () {
                                return vm.items;
                            }
                        }
                    });
                    modalInstance.result.then(function (selectedItem) {
                        $scope.selected = selectedItem;
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                };

                vm.toggleAnimation = function () {
                    vm.animationsEnabled = !vm.animationsEnabled;
                };
                vm.getMoreThreads();
                vm.getCategory();
            }
        }
)();