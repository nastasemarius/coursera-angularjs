(function(){
    angular.module('app.secondModule')
        .controller('ShoppingListShell',ShoppingListShell)
        .controller('ShoppingList1', ShoppingList1)
        .controller('ShoppingList2', ShoppingList2)
        .controller('ShoppingList3', ShoppingList3)

    ShoppingListShell.$inject = [];
    function ShoppingListShell(){
        var vm = this;
    }

    ShoppingList1.$inject = ['ShoppingListFactory'];

    function ShoppingList1(ShoppingListFactory) {
        var vm = this;

        vm.newItem = {
            name: '',
            quantity: ''
        };
        var service = ShoppingListFactory(3);
        vm.items = service.getItems();
        vm.rules = service.getRules();
        vm.removeListItem = function (index) {
            service.removeItem(index);
        };
        vm.addNewItem = function (item) {
            try{
                service.addItem(item);

            } catch(err){
                vm.error = err.message;
            };

            vm.newItem = {
                name: '',
                quantity: ''
            };
        }
    }

    ShoppingList2.$inject = ['ShoppingListFactory'];

    function ShoppingList2(ShoppingListFactory) {
        var vm = this;

        vm.newItem = {
            name: '',
            quantity: ''
        };
        var service = ShoppingListFactory();
        vm.items = service.getItems();
        vm.rules = service.getRules();
        vm.removeListItem = function (index) {
            service.removeItem(index);
        }
        vm.addNewItem = function (item) {
            try{
                service.addItem(item);
                vm.newItem = {
                    name: '',
                    quantity: ''
                };
            } catch(err){
                vm.error = err.message;
            }

        }

    }

    function ShoppingList3(ShoppingService) {
        var vm = this;

        vm.newItem = {
            name: '',
            quantity: ''
        };
        vm.rules = ShoppingService.getRules();
        vm.items = ShoppingService.getItems();
        vm.removeListItem = function (index) {
            ShoppingService.removeItem(index);
        };
        vm.addNewItem = function (item) {
            try{
                ShoppingService.addItem(item);
                vm.newItem = {
                    name: '',
                    quantity: ''
                };
            } catch(err){
                vm.error = err.message;
            }

        }

    }


})();