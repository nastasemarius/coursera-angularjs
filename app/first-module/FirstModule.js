(function () {
    'use strict';

    angular.module('app')
        .controller('FirstModule', FirstModule);

    FirstModule.$inject = ['$scope'];

    function FirstModule($scope) {
        var vm = this;
        vm.checkFoodAmount = checkFoodAmount;

        activate();

        function activate() {
            $scope.$watch('vm.foodList', watchFoodList);
        }

        function checkFoodAmount() {
            var parsedFoodList = parseFoodList(vm.foodList);
            vm.message = evaluateFoodAmount(parsedFoodList.length);
        }

        function parseFoodList(foodList) {
            if (typeof foodList === 'string') {
                return foodList
                    .split(',')
                    .filter(filterListItems);
            } else return [];

            function filterListItems(listItem) {
                return !!listItem
            }
        }

        function evaluateFoodAmount(amount) {
            if (amount > 0 && amount < 3) {
                return 'Not enough calories. Get some more food!'
            } else if (amount >=3  && amount < 5) {
                return 'You had enough too eat.'
            } else if (amount >= 5) {
                return 'You ate way too much. You are going to get fat!'
            }
        }

        function watchFoodList(newValue) {
            if (!newValue) {
                vm.message = '';
            }
        }
    }
}());