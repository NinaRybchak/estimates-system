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
    $scope.experts = [];
    this.getExperts = function () {
        $http.get(serverUrl + '/experts/all').then(function (response) {
                $scope.experts = response.data;
                console.log('success on get experts');
            },
            function () {
                console.log('error on get experts');
            });
    };
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
        var jsonExpert = JSON.parse(jExpert);
        var job = {
            "id_job" : "null",
            "name" : jName,
            "description" : jDesc,
            "time_estimated" : jTimeEst,
            "cost_estimated" : jCostEst,
            "time_real" : jTimeReal,
            "cost_real" : jCostReal,
            "project" : $rootScope.editableProject,
            "expert" : jsonExpert,
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
    angular.element(document).ready(this.getJobs(), this.getExperts());
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

sampleApp.controller('editJobController', function ($scope, $rootScope, $http, $location, $route) {
    $scope.tasks = [];
    $scope.experts = [];
    this.getExperts = function () {
        $http.get(serverUrl + '/experts/all').then(function (response) {
                $scope.experts = response.data;
                console.log('success on get experts');
            },
            function () {
                console.log('error on get experts');
            });
    };
    this.updateJob = function (jName,jDesc,jTimeEst,jCostEst,jTimeReal,jCostReal, jExpert) {
        var jsonExpert = JSON.parse(jExpert);
        var job = {
            "id_job" : $rootScope.editableJob.id_job,
            "name" : jName,
            "description" : jDesc,
            "time_estimated" : jTimeEst,
            "cost_estimated" : jCostEst,
            "time_real" : jTimeReal,
            "cost_real" : jCostReal,
            "project" : $rootScope.editableJob.project,
            "expert" : jsonExpert,
            "is_new" : 0
        }
        $http.post(serverUrl + "/updateJob", job).success(function (response) {
            $rootScope.editableJob = response;
            alert("Изменения сохранены успешно!");
            console.log('Job updated successfully');
        })
            .error(function (error) {
                console.log('Error on updating job');
            });
    };
    this.addTask = function (tName, tDesc, tTimeEst, tCostEst, tCostReal, tTimeReal, tExpert) {
        var jsonExpert;
        if(tExpert != null)
            jsonExpert = JSON.parse(tExpert);
        else
            jsonExpert = null;
        var task = {
            "id_task" : "null",
            "name" : tName,
            "description" : tDesc,
            "time_estimated" : tTimeEst,
            "cost_estimated" : tCostEst,
            "time_real" : tTimeReal,
            "cost_real" : tCostReal,
            "job" : $rootScope.editableJob,
            "expert" : jsonExpert,
            "is_new" : 0
        }
        $http.post(serverUrl + "/addTask", task).success(function (response) {
            $('#squarespaceModal').modal('hide');
            $scope.tasks.push(response);
            console.log('Task added successfully');
        })
            .error(function (error) {
                console.log('Error on adding task');
            });
    };
    this.getTasks = function () {
        $http.get(serverUrl + '/tasks/all',
            {params : {id_job : $rootScope.editableJob.id_job}}).then(function (response) {
                $scope.tasks = response.data;
                console.log('success on get tasks');
            },
            function () {
                console.log('error on get tasks');
            });
    };
    angular.element(document).ready(this.getTasks(), this.getExperts());
    this.deleteTask = function (task) {
        if(confirm("Вы уверены, что хотите удалить задачу?")) {
            $http.post(serverUrl + "/deleteTask", task.id_task).success(function () {
                $route.reload();
                console.log('success on delete task');
            })
                .error(function (error) {
                    console.log('error on delete task');
                });
        }
    };
    this.openTaskForEdit = function(task) {
        $rootScope.editableTask = task;
        $location.path('/ui/editTask');
    };
});

sampleApp.controller('editTaskController', function ($scope, $rootScope, $http, $location, $route) {
    $scope.experts = [];
    this.getExperts = function () {
        $http.get(serverUrl + '/experts/all').then(function (response) {
                $scope.experts = response.data;
                console.log('success on get experts');
            },
            function () {
                console.log('error on get experts');
            });
    };
    this.updateTask = function (tName,tDesc,tTimeEst,tCostEst,tTimeReal,tCostReal,tEdExpert) {
        var jsonExpert = JSON.parse(tEdExpert);
        var task = {
            "id_task" : $rootScope.editableTask.id_task,
            "name" : tName,
            "description" : tDesc,
            "time_estimated" : tTimeEst,
            "cost_estimated" : tCostEst,
            "time_real" : tTimeReal,
            "cost_real" : tCostReal,
            "job" : $rootScope.editableTask.job,
            "expert" : jsonExpert,
            "is_new" : 0
        }
        $http.post(serverUrl + "/updateTask", task).success(function (response) {
            $rootScope.editableTask = response;
            alert("Изменения сохранены успешно!");
            $rootScope.editableTask = [];
            $location.path('/ui/editJob');
            console.log('Task updated successfully');
        })
            .error(function (error) {
                console.log('Error on updating task');
            });
    };
    angular.element(document).ready(this.getExperts())
});