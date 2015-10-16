angular.module('app', ['tsToast']);

angular.module('app').config(AppConfig);

function AppConfig (tsToastProvider) {
    console.log(tsToastProvider);
    tsToastProvider.configure("main", {
        verticalAlign: "top",
        horizontalAlign: "right"
    });
    tsToastProvider.configure("one", {
        verticalAlign: "top",
        horizontalAlign: "left"
    });
}
AppConfig.$inject = ['tsToastProvider'];


angular.module('app').controller('AppController', AppController);

function AppController ($scope) {
    $scope.onOpenToastClick = function () {
        alert('Try open');
    };
}
AppController.$inject = ['$scope', 'tsToast'];
