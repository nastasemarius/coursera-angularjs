(function () {
    'use strict';

    angular.module('app.secondModule')
        .controller('AlreadyBoughtController', AlreadyBoughtController)

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var vm = this;

        vm.alreadyBought = ShoppingListCheckOffService.getAlreadyBought();
    }

}());