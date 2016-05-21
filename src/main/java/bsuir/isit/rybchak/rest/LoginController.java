package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.User;
import bsuir.isit.rybchak.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/checkLogin", method = RequestMethod.POST)
    private User checkLogin(@RequestBody User logUser) {
        return userService.checkLogUser(logUser);
    }

//    @RequestMapping(value = "/login")
//    private List<User> getUserById() {
//
//    }
}
