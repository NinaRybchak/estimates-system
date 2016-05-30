package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.Project;
import bsuir.isit.rybchak.models.User;
import bsuir.isit.rybchak.services.ProjectService;
import bsuir.isit.rybchak.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectsController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/addProject", method = RequestMethod.POST)
    private void createProject(@RequestBody Project project) {
        projectService.createProject(project);
    }

    @RequestMapping(value = "/projects/all")
    private List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @RequestMapping(value = "/deleteProject", method = RequestMethod.POST)
    private void deleteProject(@RequestBody Integer id_project) { projectService.deleteProject(id_project);}
}
