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

    @Transactional
    public User checkLogUser(User logUser) {
        List<User> allUsers = userDao.getAll();
        for(User user : allUsers) {
            if(user.getLogin().equals(logUser.getLogin()) && user.getPassword().equals(logUser.getPassword()))
                return user;
        }
        return null;
    }

    @Override
    @Transactional
    public void deleteUser(Integer id_user) {
        userDao.delete(id_user);
    }

    @Override
    @Transactional
    public void updateUser(User user) {
        userDao.saveOrUpdate(user);
    }

    @Override
    @Transactional
    public void createUser(User user) {
        userDao.save(user);
    }
}
