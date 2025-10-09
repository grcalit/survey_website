package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic3Entity;
import com.backend.Repository.Topic3Repository;
import jakarta.transaction.Transactional;
import java.util.*;

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

    public Map<String, String> getAnswerAsJSON(int accountId) {
        if (topic3Repository.existsByAccountId(accountId)) {
            Topic3Entity rec = topic3Repository.getByAccountId(accountId);
            Map<String, String> answers = new HashMap<>();
            answers.put("q1", rec.getQ1());
            answers.put("q2", rec.getQ2());
            answers.put("q3", rec.getQ3());
            answers.put("q4", rec.getQ4());
            answers.put("q5", rec.getQ5());
            answers.put("q6", rec.getQ6());
            return answers;
        }
        return new HashMap<>();
    }

    @Transactional
    public Integer deleteAnswer(int accountId) {
        if (topic3Repository.existsByAccountId(accountId)) {
            topic3Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }

    public Map<String, List<String>> getAllAnswers() {
        List<Topic3Entity> all = topic3Repository.findAll();
        Map<String, List<String>> data = new HashMap<>();
        data.put("q1", all.stream().map(Topic3Entity::getQ1).toList());
        data.put("q2", all.stream().map(Topic3Entity::getQ2).toList());
        data.put("q3", all.stream().map(Topic3Entity::getQ3).toList());
        data.put("q4", all.stream().map(Topic3Entity::getQ4).toList());
        data.put("q5", all.stream().map(Topic3Entity::getQ5).toList());
        data.put("q6", all.stream().map(Topic3Entity::getQ6).toList());
        return data;
    }
}
