package com.backend.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.Entity.Topic2Entity;
import com.backend.Repository.Topic2Repository;

@Service
public class Service2 {
    private final Topic2Repository topic2Repository;
    
    @Autowired
    public Service2(Topic2Repository topic2Repository) {
        this.topic2Repository = topic2Repository;
    }

    public Topic2Entity addAnswer(Topic2Entity topic2Entity) {
        return topic2Repository.save(topic2Entity);
    }
}
