package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.User;
import bsuir.isit.rybchak.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Nina on 01.06.2016.
 */

@RestController
public class UsersController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/users/all", method = RequestMethod.GET)
    private List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
    private void deleteUser(@RequestBody Integer id_user) { userService.deleteUser(id_user);}

    @RequestMapping(value = "/updateUser", method = RequestMethod.POST)
    private User updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return user;
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    private User createUser(@RequestBody User user) {
        userService.createUser(user);
        return user;
    }

    @RequestMapping(value = "/experts/all", method = RequestMethod.GET)
    private List<User> getAllExperts() {
        List<User> allUsers = userService.getAllUsers();
        List<User> experts = new ArrayList<User>();
        for(User user : allUsers) {
            if((user.getRole()!=null) && (user.getRole().getId_role() == 2))
                experts.add(user);
        }
        return experts;
    }
}
