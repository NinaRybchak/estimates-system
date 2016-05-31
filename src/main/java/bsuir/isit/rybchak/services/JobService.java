package bsuir.isit.rybchak.services;

import bsuir.isit.rybchak.models.Job;

import java.util.List;

/**
 * Created by Nina on 31.05.2016.
 */
public interface JobService {

    List<Job> getAllJobs();

    void createJob(Job job);

    void deleteJob(Integer id_job);

    void updateJob(Job job);
}
