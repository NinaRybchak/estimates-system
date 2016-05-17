package bsuir.isit.rybchak.config;

import org.hibernate.SessionFactory;
import org.hibernate.jpa.HibernateEntityManagerFactory;
import org.hibernate.jpa.internal.EntityManagerFactoryImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource(value = "${spring.file.properties.maven}")
public class DatabaseConfiguration {

    @Bean
    public SessionFactory sessionFactory(HibernateEntityManagerFactory factory) {
        return factory.getSessionFactory();
    }
}
