(function(){
    angular
        .module('app')
        .controller ('ListFormController', FormController)


function FormController (DataFactory) {
    var vm = this;
    vm.toDo = DataFactory.getData() || [];
    vm.addToDo = function () {
        if (!vm.newTask) {
            return;
        }
        vm.toDo.push(vm.newTask);
        DataFactory.setData(vm.toDo);
        vm.newTask = '';
    };

   






};














})();