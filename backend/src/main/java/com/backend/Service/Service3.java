package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic3Entity;
import com.backend.Repository.Topic3Repository;
import jakarta.transaction.Transactional;

@Service
public class Service3 {
    private final Topic3Repository topic3Repository;
    
    @Autowired
    public Service3(Topic3Repository topic3Repository) {
        this.topic3Repository = topic3Repository;
    }

    @Transactional
    public Topic3Entity addAnswer(int accountId, Topic3Entity topic3Entity) {
        if (topic3Repository.existsByAccountId(accountId)) {
            topic3Repository.deleteByAccountId(accountId);
            topic3Repository.save(topic3Entity);
        }
        topic3Entity.setAccountId(accountId);
        return topic3Repository.save(topic3Entity);
    }

    public Topic3Entity getAnswer(int accountId) {
        if (topic3Repository.existsByAccountId(accountId)) {
            return topic3Repository.getByAccountId(accountId);
        }
        return null;
    }

    @Transactional
    public Integer deleteAnswer(int accountId) {
        if (topic3Repository.existsByAccountId(accountId)) {
            topic3Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }
}
