package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.Entity.Topic2Entity;
import java.util.List;

@Repository
public interface Topic2Repository extends JpaRepository<Topic2Entity, Long> {
    boolean existsByAccountId(int id);
    void deleteByAccountId(int id);
    Topic2Entity getByAccountId(int id);
    List<Topic2Entity> findAll();
}