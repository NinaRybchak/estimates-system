package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.Project;
import bsuir.isit.rybchak.models.User;
import bsuir.isit.rybchak.services.ProjectService;
import bsuir.isit.rybchak.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProjectsController {

    @Autowired
    private ProjectService projectService;

    @RequestMapping(value = "/addProject", method = RequestMethod.POST)
    private Project createProject(@RequestBody Project project) {
        projectService.createProject(project);
        return project;
    }

    @RequestMapping(value = "/projects/all", method = RequestMethod.GET)
    private List<Project> getAllProjects(@RequestParam Integer id_manager) {
        List<Project> allProjects = projectService.getAllProjects();
        List<Project> managerProjects = new ArrayList<Project>();
        for(Project project : allProjects) {
            if(project.getManager().getId_user() == id_manager)
                managerProjects.add(project);
        }
        return managerProjects;
    }

    @RequestMapping(value = "/deleteProject", method = RequestMethod.POST)
    private void deleteProject(@RequestBody Integer id_project) { projectService.deleteProject(id_project);}

    @RequestMapping(value = "/updateProject", method = RequestMethod.POST)
    private Project updateProject(@RequestBody Project project) {
        projectService.updateProject(project);
        return project;
    }
}
