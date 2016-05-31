package bsuir.isit.rybchak.services.impl;

import bsuir.isit.rybchak.dao.ProjectDao;
import bsuir.isit.rybchak.models.Project;
import bsuir.isit.rybchak.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Nina on 22.05.2016.
 */

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDao projectDao;

    @Override
    @Transactional
    public List<Project> getAllProjects() {
        return projectDao.getAll();
    }

    @Override
    @Transactional
    public void createProject(Project project) {
        projectDao.save(project);
    }

    @Override
    @Transactional
    public void deleteProject(Integer id_project) { projectDao.delete(id_project);}

    @Transactional
    public void updateProject(Project project) {
        projectDao.saveOrUpdate(project);
    }
}
