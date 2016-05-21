'use strict';

sampleApp.controller('sampleUsersController', function ($scope, $http) {
    $scope.users = [];
    this.loadUsers = function () {
        $http.get(serverUrl + '/users/all').then(function(response) {
                $scope.users = response.data;
                console.log('success on get users');
            },
            function() {
                console.log('error on get users');
            });
    };
});

sampleApp.controller('loginController', function ($scope, $rootScope, $http) {
    this.performLogin = function (login, password) {
        var data = {
            "id_user" : "null",
            "id_role" : "null",
            "first_name" : "null",
            "surname" : "null",
            "position" : "null",
            "login" : login,
            "password" : password
        }
        $http.post(serverUrl + '/checkLogin', data).success(function(data) {
            if(!(data == [])) {
                $rootScope.loggedUser = data;
                console.log('Login successful');
            }
        })
            .error(function (error) {
                console.log('Error on Login');
            });
    };
});