package bsuir.isit.rybchak.services.impl;

import bsuir.isit.rybchak.dao.UserDao;
import bsuir.isit.rybchak.models.User;
import bsuir.isit.rybchak.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    @Transactional
    public List<User> getAllUsers() {
        return userDao.getAll();
    }
}
