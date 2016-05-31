package bsuir.isit.rybchak.services.impl;

import bsuir.isit.rybchak.dao.JobDao;
import bsuir.isit.rybchak.models.Job;
import bsuir.isit.rybchak.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Nina on 22.05.2016.
 */

@Service
public class JobServiceImpl implements JobService {

    @Autowired
    private JobDao jobDao;

    @Override
    @Transactional
    public List<Job> getAllJobs() {
        return jobDao.getAll();
    }

    @Override
    @Transactional
    public void createJob(Job job) {
        jobDao.save(job);
    }

    @Override
    @Transactional
    public void deleteJob(Integer id_job) { jobDao.delete(id_job);}

    @Transactional
    public void updateJob(Job job) {
        jobDao.saveOrUpdate(job);
    }
}
