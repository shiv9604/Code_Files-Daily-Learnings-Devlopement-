const app = angular.module('sampleApp',[]).run(['$rootScope',function($rootScope){
    $rootScope.manager = 'SK';

}]);

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
    $scope.name = 'Shivprasad';
}])

app.controller('child',['$scope','$log','UserFactory',function($scope,$log,UserFactory){
    $scope.salary = 45000;
    $scope.doubleSalary = function() {
        $scope.salary = $scope.salary * 2;
    };
    $scope.getUsers = function () {
      UserFactory.getUsers().then((res) => {
            $log.log("Users => ", res.data);
            $scope.users = res.data;
         }, (err) => {
            console.log("Error Occured while getting users=>", err);
      })
    }
}])

