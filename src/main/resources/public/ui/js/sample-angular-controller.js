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