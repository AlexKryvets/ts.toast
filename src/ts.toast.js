(function (window, angular, undefined) {

    'use strict';

    angular.module('tsToast', []);
    angular.module('tsToast').provider('tsToast', ToastProvider);
    angular.module('tsToast').directive('tsToastList', ToastListDirective);
    angular.module('tsToast').directive('tsToastMessage', ToastMessageDirective);

    function ToastProvider() {
        var messageList =  [
            {
                title: 'Success',
                text: 'Connection ok!'
            },
            {
                title: 'Error',
                text: 'Connection failed!'
            }
        ];
        var toastList = {
        };

        this.configure = function (name, configuration) {
            if (toastList[name] !== undefined) {
                throw new Error("Toast container \"" + name + "\" has been configured");
            }
            toastList[name] = {configuration: configuration};
            //Todo: mock
            toastList[name].messageList = messageList;
        };

        this.$get = function () {
            return {
                getToast: function (name) {
                    if (toastList[name]) {
                        return toastList[name];
                    } else {
                        throw new Error("Toast container \"" + name + "\" must be configured");
                    }
                }
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
                scope.toast = tsToast.getToast(attr.name);
                console.log( scope.toast)
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