package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic1Entity;
import com.backend.Repository.Topic1Repository;

@Service
public class Service1 {
    private final Topic1Repository topic1Repository;
    
    @Autowired
    public Service1(Topic1Repository topic1Repository) {
        this.topic1Repository = topic1Repository;
    }

    public Topic1Entity addAnswer(Topic1Entity topic1Entity) {
        return topic1Repository.save(topic1Entity);
    }

    
}
