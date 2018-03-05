(function(){
    angular.module('app')
    .controller('ListController', function(){
        var vm = this;
        vm.remove = function (item) {
            // console.log(item)
            var itemIndex = vm.toDo.indexOf(item);
            // console.log(itemIndex)
            vm.toDo.splice(itemIndex, 1);
        };
    


    });
    


    
})();