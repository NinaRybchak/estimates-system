package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.Job;
import bsuir.isit.rybchak.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Nina on 31.05.2016.
 */
@RestController
public class JobsController {

    @Autowired
    private JobService jobService;

    @RequestMapping(value = "/addJob", method = RequestMethod.POST)
    private Job createProject(@RequestBody Job job) {
        if(job.getExpert()!=null)
            job.setIs_new(1);
        jobService.createJob(job);
        return job;
    }

    @RequestMapping(value = "/jobs/all", method = RequestMethod.GET)
    private List<Job> getAllJobs(@RequestParam Integer id_project) {
        List<Job> allJobs = jobService.getAllJobs();
        List<Job> projectJobs = new ArrayList<Job>();
        for(Job job : allJobs) {
            if(job.getProject().getId_project() == id_project)
                projectJobs.add(job);
        }
        return projectJobs;
    }

    @RequestMapping(value = "/deleteJob", method = RequestMethod.POST)
    private void deleteProject(@RequestBody Integer id_job) { jobService.deleteJob(id_job);}

    @RequestMapping(value = "/updateJob", method = RequestMethod.POST)
    private Job updateJob(@RequestBody Job job) {
        jobService.updateJob(job);
        return job;
    }

    @RequestMapping(value = "/jobs/experts", method = RequestMethod.GET)
    private List<Job> getExpertJobs(@RequestParam Integer id_expert) {
        List<Job> allJobs = jobService.getAllJobs();
        List<Job> expertJobs = new ArrayList<Job>();
        for(Job job : allJobs) {
            if((job.getExpert()!= null) && (job.getExpert().getId_user() == id_expert))
                expertJobs.add(job);
        }
        return expertJobs;
    }
}
