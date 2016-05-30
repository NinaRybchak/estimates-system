package bsuir.isit.rybchak.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Nina on 25.05.2016.
 */
@Controller
public class MainController {

    @RequestMapping("/")
    public void handle(HttpServletRequest req, HttpServletResponse resp) {
        try {
            resp.sendRedirect("/ui/index.html");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
