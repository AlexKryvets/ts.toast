angular.module('app', ['tsToast']);

var AppController = function ($scope) {
    $scope.onOpenToastClick = function () {
        alert('Try open');
    };
};
AppController.$inject = ['$scope', 'tsToast'];

angular.module('app').controller('AppController', AppController);