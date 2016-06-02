'use strict';

var serverUrl = "http://localhost:8080";

/* App Module */
var sampleApp = angular.module('sampleApp', ['ngRoute']).run(function ($rootScope) {
        $rootScope.loggedUser = [];
        $rootScope.editableProject = [];
        $rootScope.editableUser = [];
        $rootScope.editableJob = [];
        $rootScope.editableTask = [];
        $rootScope.estimatedJob = [];
        $rootScope.estimatedTask = [];
    }
);

sampleApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/ui/login', {
            templateUrl : '/ui/login.html',
            controller : 'loginController'
        })
        
        .when('/ui/admin', {
            templateUrl : '/ui/admin.html',
            controller : 'adminController'
        })

        .when('/ui/projects', {
            templateUrl : '/ui/projects.html',
            controller : 'projectsController'
        })
        
        .when('/ui/editProject', {
            templateUrl : '/ui/editProject.html',
            controller : 'projectsController'
        })

        .when('/ui/editUser', {
            templateUrl : '/ui/editUser.html',
            controller : 'adminController'
        })

        .when('/ui/editJob', {
            templateUrl : '/ui/editJob.html',
            controller : 'projectsController'
        })

        .when('/ui/editTask', {
            templateUrl : '/ui/editTask.html',
            controller : 'projectsController'
        })

        .when('/ui/pm/experts', {
            templateUrl : '/ui/manager_experts.html',
            controller : 'projectsController'
        })

        .when('/ui/expert/home', {
            templateUrl : '/ui/experts.html',
            controller : 'expertsController'
        })

        .when('/ui/expert/estimateJob', {
            templateUrl : '/ui/estimateJob.html',
            controller : 'estimateJobController'
        })

        .when('/ui/expert/estimateTask', {
            templateUrl : '/ui/estimateTask.html',
            controller : 'estimateTaskController'
        })
        
        .otherwise({
            redirectTo : '/ui/login'
        });
    $locationProvider.html5Mode(true);
}]);