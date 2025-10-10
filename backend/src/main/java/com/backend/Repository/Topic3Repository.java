package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.Entity.Topic3Entity;
import java.util.List;

@Repository
public interface Topic3Repository extends JpaRepository<Topic3Entity, Long> {
    boolean existsByAccountId(int id);
    void deleteByAccountId(int id);
    Topic3Entity getByAccountId(int id);
    List<Topic3Entity> findAll();
}
