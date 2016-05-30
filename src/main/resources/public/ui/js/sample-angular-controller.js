'use strict';

sampleApp.controller('projectsController', function ($scope, $rootScope, $http, $location, $route) {
    $scope.projects = [];
    this.logOut = function () {
        $rootScope.loggedUser = [];
        $location.path('/ui/login');
    };
    this.addProject = function (projName, projDesc, projTimeEst, projCostEst, projCostReal, projTimeReal) {
        var project = {
            "id_project" : "null",
            "name" : projName,
            "description" : projDesc,
            "time_estimated" : projTimeEst,
            "cost_estimated" : projCostEst,
            "time_real" : projTimeReal,
            "cost_real" : projCostReal,
            "manager" : $rootScope.loggedUser
        }
        $http.post(serverUrl + "/addProject", project).success(function () {
            $('#squarespaceModal').modal('hide');
            console.log('Project added successfully');
        })
            .error(function (error) {
                console.log('Error on adding project');
            });
    };
    this.getProjects = function () {
        $http.get(serverUrl + '/projects/all').then(function (response) {
                $scope.projects = response.data;
                console.log('success on get projects');
            },
            function () {
                console.log('error on get projects');
            });
    };
    angular.element(document).ready(this.getProjects());
    angular.element(document).ready($('#projectDel').confirmModal());
    this.deleteProject = function (project) {
        $('#projectDel').confirmModal();
        $http.post(serverUrl + "/deleteProject",project.id_project).success(function () {
            $route.reload();
            console.log('success on delete projects');
        })
            .error(function (error) {
                console.log('error on delete projects');
            });
    };
});

sampleApp.controller('loginController', function ($scope, $rootScope, $http, $location) {
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
                $location.path('/ui/projects');
                console.log('Login successful');
            }
        })
            .error(function (error) {
                $location.path('/ui/login');
                console.log('Error on Login');
            });
    };
});