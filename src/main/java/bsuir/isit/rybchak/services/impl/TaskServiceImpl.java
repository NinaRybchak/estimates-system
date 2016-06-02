package bsuir.isit.rybchak.services.impl;

import bsuir.isit.rybchak.dao.JobDao;
import bsuir.isit.rybchak.dao.TaskDao;
import bsuir.isit.rybchak.models.Job;
import bsuir.isit.rybchak.models.Task;
import bsuir.isit.rybchak.services.JobService;
import bsuir.isit.rybchak.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Nina on 22.05.2016.
 */

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskDao taskDao;

    @Override
    @Transactional
    public List<Task> getAllTasks() {
        return taskDao.getAll();
    }

    @Override
    @Transactional
    public void createTask(Task task) {
        taskDao.save(task);
    }

    @Override
    @Transactional
    public void deleteTask(Integer id_task) { taskDao.delete(id_task);}

    @Transactional
    public void updateTask(Task task) {
        taskDao.saveOrUpdate(task);
    }
}
