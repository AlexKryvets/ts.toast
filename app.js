angular.module('app', ['tsToast']);

angular.module('app').config(AppConfig);

function AppConfig (tsToastProvider) {
    tsToastProvider.configure("left-top", {
        verticalAlign: "top",
        horizontalAlign: "left"
    }, {
        theme: 'green'
    });
    tsToastProvider.configure("right-top", {
        verticalAlign: "top",
        horizontalAlign: "right"
    }, {
        showCloseButton: false,
        closeOnClick: true
    });
    tsToastProvider.configure("center-bottom", {
        verticalAlign: "bottom",
        horizontalAlign: "center"
    }, {
        theme: 'red'
    });
}
AppConfig.$inject = ['tsToastProvider'];


angular.module('app').controller('AppController', AppController);

function AppController ($scope, tsToast) {
    var ltToast = tsToast("left-top");
    var rbToast = tsToast("right-top");
    var cbToast = tsToast("center-bottom");

    ltToast.addMessage({title: "Hello", text: "oneyuiyuiyuiy"});
    ltToast.addMessage({title: "Hello", text: "asdadasdasdadadadad", theme: ""});
    ltToast.addMessage({title: "Hello", text: "adsadasdddddddddddddddddddddddddada", theme: "red"});

    rbToast.addMessage({title: "Hello", text: "oneyuiyuiyuiy"});
    rbToast.addMessage({title: "Hello", text: "asdadasdasdadadadad", theme: ""});
    rbToast.addMessage({title: "Hello", text: "adsadasdddddddddddddddddddddddddada", theme: "red"});

    cbToast.addMessage({title: "Hello", text: "oneyuiyuiyuiy"});
    cbToast.addMessage({title: "Hello", text: "asdadasdasdadadadad", theme: ""});
    cbToast.addMessage({title: "Hello", text: "adsadasdddddddddddddddddddddddddada", theme: "red"});

    var i = 1;
    $scope.onOpenToastClick = function () {
        ltToast.addMessage({title: "Hello", text: "oneyuiyuiyuiy" + i});
        rbToast.addMessage({title: "Hello", text: "mainyuiyuiyiyui"+ i});
        i++;
    };

    $scope.onRemoveAllClick = function () {
        ltToast.removeAllMessages();
        rbToast.removeAllMessages();
        cbToast.removeAllMessages();
    };
}
AppController.$inject = ['$scope', 'tsToast'];
