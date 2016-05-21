'use strict';

var serverUrl = "http://localhost:8080";

/* App Module */
var sampleApp = angular.module('sampleApp', []).run(function ($rootScope) {
        $rootScope.loggedUser = [];
    }
);