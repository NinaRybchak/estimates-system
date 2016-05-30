package bsuir.isit.rybchak.services;

import bsuir.isit.rybchak.models.Project;

import java.util.List;

/**
 * Created by Nina on 22.05.2016.
 */
public interface ProjectService {

    List<Project> getAllProjects();

    void createProject(Project project);

    void deleteProject(Integer id_project);
}
