package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic1Entity;
import com.backend.Repository.Topic1Repository;
import jakarta.transaction.Transactional;
import java.util.*;

@Service
public class Service1 {
    private final Topic1Repository topic1Repository;
    
    @Autowired
    public Service1(Topic1Repository topic1Repository) {
        this.topic1Repository = topic1Repository;
    }

    @Transactional
    public Topic1Entity addAnswer(int accountId, Topic1Entity topic1Entity) {
        if (topic1Repository.existsByAccountId(accountId)) {
            topic1Repository.deleteByAccountId(accountId);
            topic1Repository.save(topic1Entity);
        }
        topic1Entity.setAccountId(accountId);
        return topic1Repository.save(topic1Entity);
    }

    public Topic1Entity getAnswer(int accountId) {
        if (topic1Repository.existsByAccountId(accountId)) {
            return topic1Repository.getByAccountId(accountId);
        }
        return null;
    }

    public Map<String, String> getAnswerAsJSON(int accountId) {
        if (topic1Repository.existsByAccountId(accountId)) {
            Topic1Entity rec = topic1Repository.getByAccountId(accountId);
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
        if (topic1Repository.existsByAccountId(accountId)) {
            topic1Repository.deleteByAccountId(accountId);
            return accountId;
        }
        return null;
    }

    public Map<String, List<String>> getAllCategoricalAnswers() {
        List<Topic1Entity> all = topic1Repository.findAll();
        Map<String, List<String>> data = new HashMap<>();
        data.put("q3", all.stream().map(Topic1Entity::getQ3).toList());
        data.put("q4", all.stream().map(Topic1Entity::getQ4).toList());
        data.put("q5", all.stream().map(Topic1Entity::getQ5).toList());
        return data;
    }

    public Map<String, List<Integer>> getAllNumericAnswers() {
        List<Topic1Entity> all = topic1Repository.findAll();
        Map<String, List<Integer>> data = new HashMap<>();
        data.put("q1", all.stream().map(Topic1Entity::getQ1).map(Integer::parseInt).toList());
        data.put("q2", all.stream().map(Topic1Entity::getQ2).map(Integer::parseInt).toList());
        return data;
    }
}
