package bsuir.isit.rybchak.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class BaseDao<T> implements DAO<T> {

    @Autowired
    protected SessionFactory sessionFactory;

    private final Class<T> entityType;

    protected BaseDao(Class<T> entityType) {
        this.entityType = entityType;
    }

    @Override
    public T findById(Integer id) {
        return sessionFactory.getCurrentSession().load(entityType, id);
    }

    @Override
    public List<T> getAll() {
        return sessionFactory.getCurrentSession().createCriteria(entityType).list();
    }

    @Override
    public void save(T entity) {
        sessionFactory.getCurrentSession().save(entity);
    }

    @Override
    public void saveOrUpdate(T entity) {
        sessionFactory.getCurrentSession().saveOrUpdate(entity);
    }

    @Override
    public void delete(Integer id) {
        T reference = sessionFactory.getCurrentSession().get(entityType, id);
        sessionFactory.getCurrentSession().delete(reference);
    }
}
