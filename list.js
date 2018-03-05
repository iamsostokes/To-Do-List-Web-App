(function(){
    angular.module('app')
        .component('list', {
            controller: 'ListController',
            templateUrl: 'List/list.html',
            bindings: {
                toDo: '<',
                search: '<'
            }

        });
})();