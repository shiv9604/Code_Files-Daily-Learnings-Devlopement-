const app = angular.module('sampleApp',['ui.router']).run(['$rootScope',function($rootScope){
    $rootScope.manager = 'SK';

    $rootScope.on('$routeChangeStart', function (e,curr,prev) {
        console.log("Event :", e);
        console.log("Current :", curr);
        console.log("Event :", prev);
    })

     $rootScope.on('$locationChangeStart', function (e,currUrl,prevUrl) {
        console.log("Event :", e);
        console.log("Current :", currUrl);
        console.log("Event :", prevUrl);
    })

}]);

app.config(['$stateProvider', function ($stateProvider) { 
    $stateProvider
    .state('first', {
        url : '/first',
        template : '<h1>Welcome to the application 1</h1>'  
    })
    .state('second', {
        url : '/second',
        template : '<h1>Welcome to the application 2</h1>'  
    })
    .state('default', {
        url : '/second',
        template : '<h1>Default route</h1>'  
    })
    .state('root', {
        url : '/*path',
        template : '<h1>Wildcard route</h1>'  
    })
}])

app.service('UserFactory', ['$http','$log',function ($http,$log) {
    $log.log("UserFactory Initialization...");
    const service = {};
    // return service;
    this.getUsers = function () {
            return $http({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET'
            })
    }
}])

app.controller('main',["$scope",function($scope){
    $scope.name = 'Main Scope';
}])

app.controller('child', ['$rootScope', '$scope', '$log', '$parse', '$interpolate', 'UserFactory', function ($rootScope, $scope, $log, $parse, $interpolate, UserFactory) {
    $scope.employee1 = {
        salary: 45000,
        name : 'First Employee'
    }
    $scope.salary = 45000;
    $scope.name = 'Child Scope';

    $scope.alertEmp = function (name,salary) {
        // alert(`Hi ${name}, Your salary is ${salary}`);
        alert(`Hi ${$scope.name}, Your salary is ${$scope.salary}`);
    }
}])


app.directive('childComponent', function () {
    return {
        templateUrl: 'child.html',
        transclude: true,
        scope: {
        },
        controller: function ($scope, $element, $attrs, $transclude) {
            $scope.employee2 = {
                salary: 55000,
                name : 'Second Employee'
            }
            $transclude(function (transEl,transScope) {
                $element.find('#transRender').append(transEl);
            })
        }
    }
})
