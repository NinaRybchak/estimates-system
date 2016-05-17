package bsuir.isit.rybchak.dao;

import bsuir.isit.rybchak.models.User;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao extends BaseDao<User> {
    public UserDao() {
        super(User.class);
    }
}
