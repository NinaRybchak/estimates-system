package bsuir.isit.rybchak.services.impl;

import bsuir.isit.rybchak.dao.RoleDao;
import bsuir.isit.rybchak.models.Role;
import bsuir.isit.rybchak.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by Nina on 01.06.2016.
 */
@Service
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleDao roleDao;

    @Override
    @Transactional
    public List<Role> getAllRoles() {
        return roleDao.getAll();
    }
}
