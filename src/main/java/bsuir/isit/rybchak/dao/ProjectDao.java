package bsuir.isit.rybchak.dao;

import bsuir.isit.rybchak.models.Project;
import org.springframework.stereotype.Repository;

/**
 * Created by Nina on 22.05.2016.
 */
@Repository
public class ProjectDao extends BaseDao<Project> {
    public ProjectDao() {
        super(Project.class);
    }
}
