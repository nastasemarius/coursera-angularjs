(function () {
    'use strict';

    angular.module('app.secondModule')
        .controller('AssignmentController', AssignmentShellController)


    AssignmentShellController.$inject = [];

    function AssignmentShellController() {
        var vm = this;
    }
}())