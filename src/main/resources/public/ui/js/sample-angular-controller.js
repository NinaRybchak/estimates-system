'use strict';

sampleApp.controller('projectsController', function ($scope, $rootScope, $http, $location, $route) {
    $scope.projects = [];
    $scope.jobs = [];
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
        $http.post(serverUrl + "/addProject", project).success(function (response) {
            $('#squarespaceModal').modal('hide');
            $scope.projects.push(response);
            console.log('Project added successfully');
        })
            .error(function (error) {
                console.log('Error on adding project');
            });
    };
    this.getProjects = function () {
        $http.get(serverUrl + '/projects/all',
            {params : {id_manager : $rootScope.loggedUser.id_user}}).then(function (response) {
                $scope.projects = response.data;
                console.log('success on get projects');
            },
            function () {
                console.log('error on get projects');
            });
    };
    angular.element(document).ready(this.getProjects());
    this.deleteProject = function (project) {
        if(confirm("Вы уверены, что хотите удалить проект?")) {
            $http.post(serverUrl + "/deleteProject", project.id_project).success(function () {
                $route.reload();
                console.log('success on delete projects');
            })
                .error(function (error) {
                    console.log('error on delete projects');
                });
        }
    };
    this.openProjectForEdit = function(project) {
        $rootScope.editableProject = project;
        $location.path('/ui/editProject');
    };
});

sampleApp.controller('editProjectController', function ($scope, $rootScope, $http, $location, $route) {
    this.updateProject = function (pName, pDesc, pTimeEst, pCostEst, pCostReal, pTimeReal) {
        var project = {
            "id_project" : $rootScope.editableProject.id_project,
            "name" : pName,
            "description" : pDesc,
            "time_estimated" : pTimeEst,
            "cost_estimated" : pCostEst,
            "time_real" : pTimeReal,
            "cost_real" : pCostReal,
            "manager" : $rootScope.editableProject.manager
        }
        $http.post(serverUrl + "/updateProject", project).success(function (response) {
            $rootScope.editableProject = response;
            alert("Изменения сохранены успешно!");
            console.log('Project updated successfully');
        })
            .error(function (error) {
                console.log('Error on updating project');
            });
    };
    this.addJob = function (jName, jDesc, jTimeEst, jCostEst, jCostReal, jTimeReal, jExpert) {
        var job = {
            "id_job" : "null",
            "name" : jName,
            "description" : jDesc,
            "time_estimated" : jTimeEst,
            "cost_estimated" : jCostEst,
            "time_real" : jTimeReal,
            "cost_real" : jCostReal,
            "project" : $rootScope.editableProject,
            "id_expert" : jExpert,
            "is_new" : 0
        }
        $http.post(serverUrl + "/addJob", job).success(function (response) {
            $('#squarespaceModal').modal('hide');
            $scope.jobs.push(response);
            console.log('Job added successfully');
        })
            .error(function (error) {
                console.log('Error on adding job');
            });
    };
    this.getJobs = function () {
        $http.get(serverUrl + '/jobs/all',
            {params : {id_project : $rootScope.editableProject.id_project}}).then(function (response) {
                $scope.jobs = response.data;
                console.log('success on get jobs');
            },
            function () {
                console.log('error on get jobs');
            });
    };
    angular.element(document).ready(this.getJobs());
    this.deleteJob = function (job) {
        if(confirm("Вы уверены, что хотите удалить работу?")) {
            $http.post(serverUrl + "/deleteJob", job.id_job).success(function () {
                $route.reload();
                console.log('success on delete job');
            })
                .error(function (error) {
                    console.log('error on delete job');
                });
        }
    };
    this.openJobForEdit = function(job) {
        $rootScope.editableJob = job;
        $location.path('/ui/editJob');
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
                if(data.role.id_role == 1)
                    $location.path('/ui/projects');
                if(data.role.id_role == 2)
                    $location.path('/ui/expert/home');
                if(data.role.id_role == 3)
                    $location.path('/ui/admin');
                console.log('Login successful');
            }
        })
            .error(function (error) {
                $location.path('/ui/login');
                console.log('Error on Login');
            });
    };
    this.logOut = function () {
        $rootScope.loggedUser = [];
        $location.path('/ui/login');
    };
});

sampleApp.controller('adminController', function ($scope, $rootScope, $http, $location, $route) {
    $scope.users = [];
    $scope.roles = [];
    this.getUsers = function () {
        $http.get(serverUrl + '/users/all').then(function (response) {
                $scope.users = response.data;
                console.log('success on get users');
            },
            function () {
                console.log('error on get users');
            });
    };
    this.getRoles = function () {
        $http.get(serverUrl + '/roles/all').then(function (response) {
                $scope.roles = response.data;
                console.log('success on get roles');
            },
            function () {
                console.log('error on get roles');
            });
    };
    this.addUser = function (fName, lName, pos, login, password, role) {
        var jsonRole = JSON.parse(role);
        var user = {
            "id_user" : "null",
            "first_name" : fName,
            "surname" : lName,
            "position" : pos,
            "login" : login,
            "password" : password,
            "role" : jsonRole
        }
        $http.post(serverUrl + "/addUser", user).success(function (response) {
            $('#squarespaceModal').modal('hide');
            $scope.users.push(response);
            $rootScope.editableUser = [];
            console.log('User added successfully');
        })
            .error(function (error) {
                console.log('Error on adding user');
            });
    };
    this.openUserForEdit = function (user) {
        $rootScope.editableUser = user;
        $location.path('/ui/editUser');
    };
    this.deleteUser = function (user) {
        if(confirm("Вы уверены, что хотите удалить пользователя?")) {
            $http.post(serverUrl + "/deleteUser", user.id_user).success(function () {
                $route.reload();
                console.log('success on delete user');
            })
                .error(function (error) {
                    console.log('error on delete user');
                });
        }
    };
    angular.element(document).ready(this.getUsers());
});

sampleApp.controller('editUserController', function ($scope, $rootScope, $http, $location, $route) {
    $scope.roles = [];
    this.updateUser = function (fName, lName, pos, login, password, role) {
        var jsonRole = JSON.parse(role);
        var user = {
            "id_user" : $rootScope.editableUser.id_user,
            "first_name" : fName,
            "surname" : lName,
            "position" : pos,
            "login" : login,
            "password" : password,
            "role" : jsonRole
        }
        $http.post(serverUrl + "/updateUser", user).success(function (response) {
            $rootScope.editableUser = [];
            alert("Изменения сохранены успешно!");
            $location.path('/ui/admin');
            console.log('Project updated successfully');
        })
            .error(function (error) {
                console.log('Error on updating project');
            });
    };
    this.getRoles = function () {
        $http.get(serverUrl + '/roles/all').then(function (response) {
                $scope.roles = response.data;
                console.log('success on get roles');
            },
            function () {
                console.log('error on get roles');
            });
    };
    angular.element(document).ready(this.getRoles());
});
