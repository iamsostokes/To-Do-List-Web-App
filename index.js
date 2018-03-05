(function(){
    angular.module('app', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                template: '<welcome></welcome>'
            })
            .when('/app', {
                template: '<list-form></list-form>'
            })
            
            

            
    })
})();