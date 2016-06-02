package bsuir.isit.rybchak.services;


import bsuir.isit.rybchak.models.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User checkLogUser(User logUser);

    void deleteUser(Integer id_user);

    void updateUser(User user);

    void createUser(User user);
}
