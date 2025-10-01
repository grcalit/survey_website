package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic1Entity;
import com.backend.Repository.Topic1Repository;

import jakarta.transaction.Transactional;

@Service
public class Service1 {
    private final Topic1Repository topic1Repository;
    
    @Autowired
    public Service1(Topic1Repository topic1Repository) {
        this.topic1Repository = topic1Repository;
    }

    public Topic1Entity addAnswer(Topic1Entity topic1Entity) {
        int accountId = topic1Entity.getAccountId();
        if (topic1Repository.existsByAccountId(accountId)) {
            topic1Repository.deleteByAccountId(accountId);
            topic1Repository.save(topic1Entity);
        }
        return topic1Repository.save(topic1Entity);
    }

    public Topic1Entity getAnswer(int accountId) {
        if (topic1Repository.existsByAccountId(accountId)) {
            return topic1Repository.getByAccountId(accountId);
        }
        return null;
    }

    @Transactional
    public Integer deleteAnswer(int accountId) {
        if (topic1Repository.existsByAccountId(accountId)) {
            topic1Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }
}
