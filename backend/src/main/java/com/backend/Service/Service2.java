package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic2Entity;
import com.backend.Repository.Topic2Repository;
import jakarta.transaction.Transactional;
import java.util.*;

@Service
public class Service2 {
    private final Topic2Repository topic2Repository;
    
    @Autowired
    public Service2(Topic2Repository topic2Repository) {
        this.topic2Repository = topic2Repository;
    }

    @Transactional
    public Topic2Entity addAnswer(int accountId, Topic2Entity topic2Entity) {
        if (topic2Repository.existsByAccountId(accountId)) {
            topic2Repository.deleteByAccountId(accountId);
            topic2Repository.save(topic2Entity);
        }
        topic2Entity.setAccountId(accountId);
        return topic2Repository.save(topic2Entity);
    }

    public Topic2Entity getAnswer(int accountId) {
        if (topic2Repository.existsByAccountId(accountId)) {
            return topic2Repository.getByAccountId(accountId);
        }
        return null;
    }

    public Map<String, String> getAnswerAsJSON(int accountId) {
        if (topic2Repository.existsByAccountId(accountId)) {
            Topic2Entity rec = topic2Repository.getByAccountId(accountId);
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
        if (topic2Repository.existsByAccountId(accountId)) {
            topic2Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }

    public Map<String, List<String>> getAllAnswers() {
        List<Topic2Entity> all = topic2Repository.findAll();
        Map<String, List<String>> data = new HashMap<>();
        data.put("q1", all.stream().map(Topic2Entity::getQ1).toList());
        data.put("q2", all.stream().map(Topic2Entity::getQ2).toList());
        data.put("q3", all.stream().map(Topic2Entity::getQ3).toList());
        data.put("q4", all.stream().map(Topic2Entity::getQ4).toList());
        data.put("q5", all.stream().map(Topic2Entity::getQ5).toList());
        data.put("q6", all.stream().map(Topic2Entity::getQ6).toList());
        return data;
    }
}
