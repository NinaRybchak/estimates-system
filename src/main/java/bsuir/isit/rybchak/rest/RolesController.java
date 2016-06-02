package bsuir.isit.rybchak.rest;

import bsuir.isit.rybchak.models.Role;
import bsuir.isit.rybchak.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Nina on 01.06.2016.
 */

@RestController
public class RolesController {

    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/roles/all", method = RequestMethod.GET)
    private List<Role> getAllRoles() {
        return roleService.getAllRoles();
    }
}
