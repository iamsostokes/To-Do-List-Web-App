(function(){
    angular
        .module('app')
        .controller ('FormController', FormController)


function FormController () {
    var vm = this;
    vm.toDo =[];
    vm.addToDo = function () {
        if (!vm.newTask) {
            return;
        }
        vm.toDo.push(vm.newTask);
        vm.newTask = '';
    };

    vm.remove = function (item) {
        // console.log(item)
        var itemIndex = vm.toDo.indexOf(item);
        // console.log(itemIndex)
        vm.toDo.splice(itemIndex, 1);
    };






};














})();