package bsuir.isit.rybchak.models;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Nina on 22.05.2016.
 */

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_project;

    @Column()
    private String name;

    @Column()
    private String description;

    @Column()
    private Integer time_estimated;

    @Column()
    private BigDecimal cost_estimated;

    @Column()
    private Integer time_real;

    @Column()
    private Integer cost_real;

    @ManyToOne
    @JoinColumn(name = "id_manager", referencedColumnName = "id_user")
    private User manager;

    public Integer getId_project() {
        return id_project;
    }

    public void setId_project(Integer id_project) {
        this.id_project = id_project;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getTime_estimated() {
        return time_estimated;
    }

    public void setTime_estimated(Integer time_estimated) {
        this.time_estimated = time_estimated;
    }

    public BigDecimal getCost_estimated() {
        return cost_estimated;
    }

    public void setCost_estimated(BigDecimal cost_estimated) {
        this.cost_estimated = cost_estimated;
    }

    public Integer getTime_real() {
        return time_real;
    }

    public void setTime_real(Integer time_real) {
        this.time_real = time_real;
    }

    public Integer getCost_real() {
        return cost_real;
    }

    public void setCost_real(Integer cost_real) {
        this.cost_real = cost_real;
    }

    public User getManager() {
        return manager;
    }

    public void setManager(User manager) {
        this.manager = manager;
    }
}
