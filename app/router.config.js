(function () {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider.state('first', {
            url: '/first',
            controller: 'FirstModule',
            controllerAs: 'vm',
            templateUrl: 'app/first-module/FirstModule.html'
        });

        $stateProvider.state('second', {
            url: '/second',
            controller: 'SecondModuleController',
            controllerAs: 'vm',
            abstract: true,
            templateUrl: 'app/second-module/shell/Second.html'
        })

        $stateProvider.state('second.inheritance', {
            url: '/inheritance',
            views: {
                secondModuleTabs: {
                    controller: 'InheritanceShellController',
                    controllerAs: 'vm',
                    templateUrl: 'app/second-module/inheritance/inheritance.html'
                }
            }
        })
        $stateProvider.state('second.assignment', {
            url: '/assignment',
            views: {
                secondModuleTabs: {
                    controller: 'AssignmentController',
                    controllerAs: 'vm',
                    templateUrl: 'app/second-module/assignment/Assignment.html'
                }
            }
        })

        $stateProvider.state('second.shopping',{
            url:'/shopping',
            views: {
                secondModuleTabs:{
                    controller: 'ShoppingListShell',
                    controllerAs: 'vm',
                    templateUrl: 'app/second-module/shopping/ShoppingList.html'
                }
            }
        });

        $urlRouterProvider.otherwise('/second/assignment');
    }
}());