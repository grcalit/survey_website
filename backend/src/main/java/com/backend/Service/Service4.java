package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic4Entity;
import com.backend.Repository.Topic4Repository;
import jakarta.transaction.Transactional;

@Service
public class Service4 {
    private final Topic4Repository topic4Repository;
    
    @Autowired
    public Service4(Topic4Repository topic4Repository) {
        this.topic4Repository = topic4Repository;
    }

    @Transactional
    public Topic4Entity addAnswer(int accountId, Topic4Entity topic4Entity) {
        if (topic4Repository.existsByAccountId(accountId)) {
            topic4Repository.deleteByAccountId(accountId);
            topic4Repository.save(topic4Entity);
        }
        topic4Entity.setAccountId(accountId);
        return topic4Repository.save(topic4Entity);
    }

    public Topic4Entity getAnswer(int accountId) {
        if (topic4Repository.existsByAccountId(accountId)) {
            return topic4Repository.getByAccountId(accountId);
        }
        return null;
    }

    @Transactional
    public Integer deleteAnswer(int accountId) {
        if (topic4Repository.existsByAccountId(accountId)) {
            topic4Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }
}
