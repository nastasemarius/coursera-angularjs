(function () {
    'use strict';

    angular.module('app.secondModule')
        .controller('ToBuyController', ToBuyController)

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var vm = this;

        vm.wishList = ShoppingListCheckOffService.getWishList();
        vm.buyItem = buyItem;

        function buyItem(index){
            ShoppingListCheckOffService.buyItem(index);
        }
    }
}());