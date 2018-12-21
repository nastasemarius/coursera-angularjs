(function() {
    'use strict';

    angular.module('app.secondModule')
        .controller('InheritanceShellController',InheritanceShell)
        .controller('ParentController', ParentController)
        .controller('ChildController', ChildController)

    InheritanceShell.$inject = [];
    function InheritanceShell(){
        var vm = this;
    }

    ParentController.$inject = [];
    function ParentController() {
        var vm = this;
        vm.value = 1;
        vm.changeValue = function () {
            vm.value = 5;
        }
    }

    ChildController.$inject = ['$scope']
    function ChildController($scope) {
        var vm = this;
        vm.check = function (parent) {
            console.log('FIRST: $scope.$parent.parent === parent?', $scope.$parent.parent === parent);
            $scope.$parent.parent.value = 69;
            console.log('SECOND: $scope.$parent.parent.value = ', $scope.$parent.parent.value, parent.value);
            parent.value = 155;
            console.log('THIRD: $scope.$parent.parent.value = ', $scope.$parent.parent.value, parent.value);
        }
    }
})();