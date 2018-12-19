(function () {
    'use strict';

    angular.module('app')
        .controller('FirstModule', FirstModule);

    FirstModule.$inject = [];

    function FirstModule() {
        var vm = this;

        vm.someData = {
            text: 'Some random text in here'
        };
    }
}());