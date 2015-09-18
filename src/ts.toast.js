(function (window, angular, undefined) {

    'use strict';

    angular.module('tsToast', []);

    var ToastProvider = function () {
        this.$get = function () {

        };
    };

    ToastProvider.$inject = [];

    angular.module('tsToast').provider('tsToast', ToastProvider);

    var ToastDirective = function ($log) {
        return {
            replace: true,
            restrict: 'E',
            template: '<div class="ts-toast"></div>',
            //'<div class="ng-toast ng-toast--{{hPos}} ng-toast--{{vPos}} {{animation ? \'ng-toast--animate-\' + animation : \'\'}}">' +
            //'<ul class="ng-toast__list">' +
            //'<toast-message ng-repeat="message in messages" ' +
            //'message="message" count="message.count">' +
            //'<span ng-bind-html="message.content"></span>' +
            //'</toast-message>' +
            //'</ul>' +
            //'</div>',
            link: function ($scope) {

            }
        };
    };
    ToastDirective.$inject = ['$log'];

    angular.module('tsToast').directive('tsToast', ToastDirective);

})(window, window.angular);