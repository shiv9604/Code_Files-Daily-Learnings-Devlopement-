const app = angular.module('sampleApp', ['ui.router'])
.run(['$rootScope', function ($rootScope) {
    $rootScope.$on("childScopeEventWithEmit", function (e,data) {
        console.log("RootScope Event =>", data.name);
    })
}]);

app.config(['$stateProvider', function ($stateProvider) { 
}])

app.controller('main',["$scope",'$rootScope',function($scope,$rootScope){
}])

