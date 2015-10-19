angular.module('app', ['tsToast']);

angular.module('app').config(AppConfig);

function AppConfig (tsToastProvider) {
    tsToastProvider.configure("main", {
        verticalAlign: "bottom",
        horizontalAlign: "center"
    }, {
        theme: 'green'
    });
    tsToastProvider.configure("one", {
        verticalAlign: "top",
        horizontalAlign: "left"
    }, {
        showCloseButton: false,
        closeOnClick: true
    });
}
AppConfig.$inject = ['tsToastProvider'];


angular.module('app').controller('AppController', AppController);

function AppController ($scope, tsToast) {
    var oneToast = tsToast("one");
    var mainToast = tsToast("main");
    var i = 1;
    $scope.onOpenToastClick = function () {
        oneToast.addMessage({title: "Hello", text: "oneyuiyuiyuiy" + i});
        mainToast.addMessage({title: "Hello", text: "mainyuiyuiyiyui"+ i});
        i++;
    };

    $scope.onRemoveAllClick = function () {
        oneToast.removeAllMessages();
        mainToast.removeAllMessages();
    };
}
AppController.$inject = ['$scope', 'tsToast'];
