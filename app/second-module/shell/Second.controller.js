(function() {
    'use strict';

    angular.module('app.secondModule')
        .controller('SecondModuleController', SecondModuleController)

    SecondModuleController.$inject = [];
    function SecondModuleController() {
        var vm = this;
    }
}());