(function(){
    'use strict';

    angular.module('app.secondModule')
        .config(Config)

    Config.$inject = ['ShoppingServiceProvider'];
    function Config(ShoppingServiceProvider){
        ShoppingServiceProvider.config.maxNumberOfItems = 4;
    }
}());