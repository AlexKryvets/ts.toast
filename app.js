angular.module('app', ['tsToast']);

angular.module('app').config(AppConfig);

function AppConfig (tsToastProvider) {
    console.log(tsToastProvider);
}
AppConfig.$inject = ['tsToastProvider'];


angular.module('app').controller('AppController', AppController);

function AppController ($scope) {
    $scope.onOpenToastClick = function () {
        alert('Try open');
    };
}
AppController.$inject = ['$scope', 'tsToast'];
