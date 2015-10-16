(function (window, angular, undefined) {

    'use strict';

    angular.module('tsToast', []);
    angular.module('tsToast').provider('tsToast', ToastProvider);
    angular.module('tsToast').directive('tsToastList', ToastListDirective);
    angular.module('tsToast').directive('tsToastMessage', ToastMessageDirective);

    function ToastProvider() {
        var messages = [{
            title: 'Success',
            text: 'Connection ok!'
        },
        {
            title: 'Error',
            text: 'Connection failed!'
        }];
        this.$get = function () {
            return {
                messages: messages
            }
        };
    }
    ToastProvider.$inject = [];

    function ToastListDirective($log, tsToast) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/ts.toast.list.html',
            link: function (scope, element, attr) {
                scope.messages = tsToast.messages;
            }
        };
    }
    ToastListDirective.$inject = ['$log', 'tsToast'];



    function ToastMessageDirective($log) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/ts.toast.message.html',
            scope: {
                message: '='
            },
            link: function (scope, element, attr) {

            }
        };
    }
    ToastMessageDirective.$inject = ['$log'];

})(window, window.angular);