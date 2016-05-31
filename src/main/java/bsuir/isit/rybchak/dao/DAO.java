package bsuir.isit.rybchak.dao;

import java.util.List;

public interface DAO<T> {

    /**
     * Finds entity in database by its ID
     * @return entity if found and null otherwise
     */
    T findById(Integer id);

    /**
     * Loads all entities from database
     * @return list of loaded items
     */
    List<T> getAll();

    /**
     * Saves item in database
     * @param entity the item to be saved
     */
    void save(T entity);

    /**
     * Saves item in database
     * @param entity the item to be saved
     */
    void saveOrUpdate(T entity);

    /**
     * Removes item from database by its ID
     */
    void delete(Integer id);
}
