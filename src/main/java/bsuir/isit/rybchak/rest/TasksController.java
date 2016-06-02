package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.Task;
import bsuir.isit.rybchak.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Nina on 31.05.2016.
 */
@RestController
public class TasksController {

    @Autowired
    private TaskService taskService;

    @RequestMapping(value = "/addTask", method = RequestMethod.POST)
    private Task createTask(@RequestBody Task task) {
        if(task.getExpert()!=null)
            task.setIs_new(1);
        taskService.createTask(task);
        return task;
    }

    @RequestMapping(value = "/tasks/all", method = RequestMethod.GET)
    private List<Task> getAllTasks(@RequestParam Integer id_job) {
        List<Task> allTasks = taskService.getAllTasks();
        List<Task> jobTasks = new ArrayList<Task>();
        for(Task task : allTasks) {
            if(task.getJob().getId_job() == id_job)
                jobTasks.add(task);
        }
        return jobTasks;
    }

    @RequestMapping(value = "/deleteTask", method = RequestMethod.POST)
    private void deleteTask(@RequestBody Integer id_task) { taskService.deleteTask(id_task);}

    @RequestMapping(value = "/updateTask", method = RequestMethod.POST)
    private Task updateTask(@RequestBody Task task) {
        taskService.updateTask(task);
        return task;
    }
}
