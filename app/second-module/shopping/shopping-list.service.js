(function(){
    angular.module('app.secondModule')
        .factory('ShoppingListFactory', ShoppingListFactory)
        .provider('ShoppingService',ShoppingListProvider)

    function ShoppingListFactory() {
        //Returns a singleton just like .service does    return new ShoppingListService();
        var factory = function (maxNumberOfItems) {
            return new ShoppingListService(maxNumberOfItems)
        }
        return factory;
    }

    function ShoppingListProvider() {
        var provider = this;
        //Default provider config
        provider.config = {
            maxNumberOfItems: 10
        };
        provider.$get = function(){
            return new ShoppingListService(provider.config.maxNumberOfItems);
        };
    }

    function ShoppingListService(maxNumberOfItems) {
        var service = this;
        var items = [];
        var rules = {
            maxNumberOfItems: maxNumberOfItems
        }
        service.addItem = function (item) {
            if(!maxNumberOfItems || maxNumberOfItems > items.length){
                items.push(item);
            } else {
                throw new Error('Maximum number of items exceeded');
            }

        }
        service.removeItem = function (index) {
            items.splice(index);
        }
        service.getItems = function () {
            return items;
        }
        service.getRules = function (){
            return rules;
        }
    }
})();