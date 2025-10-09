package com.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.backend.Entity.Topic1Entity;
import java.util.List;

@Repository
public interface Topic1Repository extends JpaRepository<Topic1Entity, Long> {
    boolean existsByAccountId(int id);
    void deleteByAccountId(int id);
    Topic1Entity getByAccountId(int id);
    List<Topic1Entity> findAll();
}
