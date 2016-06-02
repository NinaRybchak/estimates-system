package bsuir.isit.rybchak.dao;

import bsuir.isit.rybchak.models.Task;
import org.springframework.stereotype.Repository;

/**
 * Created by Nina on 31.05.2016.
 */
@Repository
public class TaskDao extends BaseDao<Task> {
    public TaskDao() {
        super(Task.class);
    }
}
