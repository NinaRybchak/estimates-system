package bsuir.isit.rybchak.models;

import javax.persistence.*;
import java.math.BigDecimal;

/**
 * Created by Nina on 31.05.2016.
 */
@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_job;

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

    @Column()
    private Integer is_new;

    @ManyToOne
    @JoinColumn(name = "id_expert", referencedColumnName = "id_user")
    private User expert;

    @ManyToOne
    @JoinColumn(name = "id_project", referencedColumnName = "id_project")
    private Project project;

    public Integer getId_job() {
        return id_job;
    }

    public void setId_job(Integer id_job) {
        this.id_job = id_job;
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

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Integer getIs_new() {
        return is_new;
    }

    public void setIs_new(Integer is_new) {
        this.is_new = is_new;
    }

    public User getExpert() {
        return expert;
    }

    public void setExpert(User expert) {
        this.expert = expert;
    }
}
