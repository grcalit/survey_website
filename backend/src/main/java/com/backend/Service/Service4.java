package com.backend.Service;

import java.util.*;
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

    public Map<String, String> getAnswerAsJSON(int accountId) {
        if (topic4Repository.existsByAccountId(accountId)) {
            Topic4Entity rec = topic4Repository.getByAccountId(accountId);
            Map<String, String> answers = new HashMap<>();
            answers.put("q1", rec.getQ1());
            answers.put("q2", rec.getQ2());
            answers.put("q3", rec.getQ3());
            answers.put("q4", rec.getQ4());
            answers.put("q5", rec.getQ5());
            return answers;
        }
        return new HashMap<>();
    }

    @Transactional
    public Integer deleteAnswer(int accountId) {
        if (topic4Repository.existsByAccountId(accountId)) {
            topic4Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }

    public Map<String, List<String>> getAllAnswers() {
        List<Topic4Entity> all = topic4Repository.findAll();
        Map<String, List<String>> data = new HashMap<>();
        data.put("q1", all.stream().map(Topic4Entity::getQ1).toList());
        data.put("q2", all.stream().map(Topic4Entity::getQ2).toList());
        data.put("q3", all.stream().map(Topic4Entity::getQ3).toList());
        data.put("q4", all.stream().map(Topic4Entity::getQ4).toList());
        data.put("q5", all.stream().map(Topic4Entity::getQ5).toList());
        return data;
    }
}
