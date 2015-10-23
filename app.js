angular.module('app', ['tsToast', 'ngAnimate']);

angular.module('app').config(AppConfig);

function AppConfig (tsToastProvider) {
    tsToastProvider.configure("left-top", {
        animation: "slide",
        verticalAlign: "top",
        horizontalAlign: "left"
    }, {
        theme: 'green',
        icon: 'glyphicon glyphicon-ok-sign'
    });
    tsToastProvider.configure("right-top", {
        animation: "slide",
        verticalAlign: "bottom",
        horizontalAlign: "right",
        messageLimit: false
    }, {
        showCloseButton: false,
        closeOnClick: true,
        closeOnTimeout: false,
        icon: 'glyphicon glyphicon-info-sign'
    });
    tsToastProvider.configure("center-bottom", {
        animation: "fade",
        verticalAlign: "bottom",
        horizontalAlign: "center",
        messageLimit: 1
    }, {
        theme: 'red',
        icon: 'glyphicon glyphicon-exclamation-sign'
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

    rbToast.addMessage({text: "oneyuiyuiyuiy"});
    rbToast.addMessage({title: "Hello", text: "asdadasdasdadadadad", theme: ""});
    rbToast.addMessage({title: "Hello", text: "adsadasdddddddddddddddddddddddddada", theme: "red"});

    cbToast.addMessage({});
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
