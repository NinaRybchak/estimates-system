'use strict';

var serverUrl = "http://localhost:8080";

/* App Module */
var sampleApp = angular.module('sampleApp', ['ngRoute']).run(function ($rootScope) {
        $rootScope.loggedUser = [];
        $rootScope.editableProject = [];
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
        
        .otherwise({
            redirectTo : '/ui/login'
        });
    $locationProvider.html5Mode(true);
}]);