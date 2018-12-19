(function(){
    'use strict';

    angular.module('app')
        .controller('SecondModule',SecondModule)

    SecondModule.$inject = [];

    function SecondModule(){
        var vm = this;
    }
}())