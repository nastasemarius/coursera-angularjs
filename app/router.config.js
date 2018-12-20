(function(){
    'use strict';

    angular.module('app')
        .config(['$stateProvider','$urlRouterProvider',configRoutes]);

    function configRoutes($stateProvider,$urlRouterProvider){
        $stateProvider.state('module-1',{
            url: '/module-1',
            controller: 'FirstModule',
            controllerAs: 'vm',
            templateUrl: 'app/first-module/FirstModule.html'
        });

        $stateProvider.state('module-2',{
            url:'/module-2',
            controller: 'SecondModule',
            controllerAs: 'vm',
            templateUrl: 'app/second-module/SecondModule.html'
        })

        $urlRouterProvider.otherwise('/module-2');
    }
}());