package bsuir.isit.rybchak.dao;

import bsuir.isit.rybchak.models.Role;
import org.springframework.stereotype.Repository;

/**
 * Created by Nina on 21.05.2016.
 */
@Repository
public class RoleDao extends BaseDao<Role> {
    public RoleDao() {
        super(Role.class);
    }
}
