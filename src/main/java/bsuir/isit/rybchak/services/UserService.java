package bsuir.isit.rybchak.services;


import bsuir.isit.rybchak.models.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User checkLogUser(User logUser);
}
