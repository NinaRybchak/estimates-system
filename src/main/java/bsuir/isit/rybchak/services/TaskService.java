package bsuir.isit.rybchak.services;

import bsuir.isit.rybchak.models.Task;

import java.util.List;

/**
 * Created by Nina on 31.05.2016.
 */
public interface TaskService {

    List<Task> getAllTasks();

    void createTask(Task task);

    void deleteTask(Integer id_task);

    void updateTask(Task task);
}
