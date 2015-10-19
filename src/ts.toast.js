(function (window, angular, undefined) {

    'use strict';

    angular.module('tsToast', []);
    angular.module('tsToast').provider('tsToast', ToastProvider);
    angular.module('tsToast').directive('tsToastList', ToastListDirective);
    angular.module('tsToast').directive('tsToastMessage', ToastMessageDirective);

    var TOAST_CONTAINER_CONFIGURATION = {
        //animation: false,
        //compileContent: false,
        //combineDuplications: false,
        verticalAlign: "top",
        horizontalAlign: "right",
        maxNumber: 0
    };

    var TOAST_MESSAGE_CONFIGURATION = {
        theme: '',
        closeOnTimeout: true,
        closeTimeout: 4000,
        showCloseButton: true,
        closeOnClick: false
    };

    /**
     * ToastContainer
     * @param name
     * @param configuration
     * @constructor
     */
    function ToastContainer(name, configuration, messageConfiguration) {
        angular.extend(this, TOAST_CONTAINER_CONFIGURATION, configuration);
        this.name = name;
        this.messageConfiguration = angular.extend({}, TOAST_MESSAGE_CONFIGURATION, messageConfiguration);
        this.messageList = [];
    }

    ToastContainer.prototype.addMessage = function (message) {
        var message = new ToastMessage(message, this.messageConfiguration);
        if (this.verticalAlign == 'top') {
            this.messageList.push(message);
        } else if (this.verticalAlign == 'bottom') {
            this.messageList.unshift(message);
        }
    };
    ToastContainer.prototype.removeMessage = function (message) {
        for (var i = this.messageList.length - 1; i >= 0; i--) {
            if (this.messageList[i] === message) {
                this.messageList.splice(i, 1);
                return;
            }
        }
    };
    ToastContainer.prototype.removeAllMessages = function () {
        while (this.messageList.length > 0) {
            if (this.verticalAlign == 'top') {
                this.messageList.pop();
            } else if (this.verticalAlign == 'bottom') {
                this.messageList.shift();
            }
        }
    };

    /**
     * ToastMessage
     * @param message
     * @param configuration
     * @constructor
     */
    function ToastMessage(message, configuration) {
        this.showCloseButton = configuration.showCloseButton;
        this.closeOnClick = configuration.closeOnClick;
        angular.extend(this, configuration, message);
    }

    function ToastProvider() {
        var toastContainerList = {};

        this.configure = function (name, configuration, messageConfiguration) {
            if (toastContainerList[name] !== undefined) {
                throw new Error("Toast container \"" + name + "\" has been configured");
            }
            toastContainerList[name] = new ToastContainer(name, configuration, messageConfiguration);
        };

        this.$get = function () {
            return function (name) {
                if (toastContainerList[name]) {
                    return toastContainerList[name];
                } else {
                    throw new Error("Toast container \"" + name + "\" must be configured");
                }
            };
        };
    }

    ToastProvider.$inject = [];

    function ToastListDirective($log, tsToast) {
        return {
            replace: true,
            restrict: 'E',
            templateUrl: 'src/ts.toast.list.html',
            scope: {},
            link: function (scope, element, attr) {
                var toastContainer = tsToast(attr.name);
                scope.toast = toastContainer;
                scope.$on("ts:toast:closeMessage", function (event, message) {
                    toastContainer.removeMessage(message)
                });
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
                scope.close = function () {
                    scope.$emit("ts:toast:closeMessage", scope.message);
                };
            }
        };
    }

    ToastMessageDirective.$inject = ['$log'];

})(window, window.angular);