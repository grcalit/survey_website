package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.Entity.Topic4Entity;


public interface Topic4Repository extends JpaRepository<Topic4Entity, Long> {
    boolean existsByAccountId(int id);
    void deleteByAccountId(int id);
    Topic4Entity getByAccountId(int id);
}
