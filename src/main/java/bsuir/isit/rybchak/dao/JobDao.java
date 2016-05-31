package bsuir.isit.rybchak.dao;

import bsuir.isit.rybchak.models.Job;
import org.springframework.stereotype.Repository;

/**
 * Created by Nina on 31.05.2016.
 */
@Repository
public class JobDao extends BaseDao<Job> {
    public JobDao() {
        super(Job.class);
    }
}
