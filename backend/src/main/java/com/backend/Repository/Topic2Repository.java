package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.Entity.Topic2Entity;


public interface Topic2Repository extends JpaRepository<Topic2Entity, Long> {
    boolean existsByAccountId(int id);
    void deleteByAccountId(int id);
    Topic2Entity getByAccountId(int id);
}