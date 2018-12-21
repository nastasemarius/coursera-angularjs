(function () {
    angular.module('app.secondModule')
        .service('ShoppingListCheckOffService', ShoppingListCheckOff)

    function ShoppingListCheckOff() {
        var service = this;

        var wishList = ['Shoes', 'New guitar','Audio interface', 'Effects','New gaming pc','Set of studio monitors'];
        var alreadyBought = [];

        service.getWishList = getWishList;
        service.getAlreadyBought = getAlreadyBought;
        service.buyItem = buyItem;

        function getWishList() {
            return wishList;
        };

        function getAlreadyBought() {
            return alreadyBought;
        };

        function buyItem(index) {
            var boughtItem = wishList.splice(index, 1);
            alreadyBought.push(boughtItem[0]);
            console.log('WISHLIST LENGTH: ', wishList.length)
        }
    }
}());