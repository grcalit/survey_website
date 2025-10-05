package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.Entity.Topic3Entity;

public interface Topic3Repository extends JpaRepository<Topic3Entity, Long> {
    boolean existsByAccountId(int id);
    void deleteByAccountId(int id);
    Topic3Entity getByAccountId(int id);
}
