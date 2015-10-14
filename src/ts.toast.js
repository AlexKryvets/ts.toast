(function (window, angular, undefined) {

    'use strict';

    angular.module('tsToast', []);

    var ToastProvider = function () {
        var messages = [{title: 'Success', text: 'Connection ok!'}, {title: 'Error', text: 'Connection failed!'}];
        this.$get = function () {
            return {
                messages: messages
            }
        };
    };

    ToastProvider.$inject = [];

    angular.module('tsToast').provider('tsToast', ToastProvider);

    var ToastListDirective = function ($log, tsToast) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/ts.toast.list.html',
            link: function ($scope) {
                $scope.messages = tsToast.messages;
            }
        };
    };
    ToastListDirective.$inject = ['$log', 'tsToast'];

    angular.module('tsToast').directive('tsToastList', ToastListDirective);

    var ToastMessageDirective = function ($log) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/ts.toast.message.html',
            scope: {
                message: '='
            },
            link: function ($scope) {

            }
        };
    };
    ToastMessageDirective.$inject = ['$log'];

    angular.module('tsToast').directive('tsToastMessage', ToastMessageDirective);

})(window, window.angular);