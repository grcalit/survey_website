package com.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.Entity.*;
import com.backend.Service.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class Controller {
    private Service1 service1;
    private Service2 service2;


    @Autowired
    public Controller(Service1 service1, Service2 service2) {
        this.service1 = service1;
        this.service2 = service2;
    }

    @PostMapping("/topic1")
    public ResponseEntity<Topic1Entity> submitTopic1(@RequestBody Topic1Entity topic1) { 
        Topic1Entity createdTopic = service1.addAnswer(topic1);
        return ResponseEntity.ok(createdTopic);
    }

    @PostMapping("/topic2")
    public ResponseEntity<Topic2Entity> submitTopic2(@RequestBody Topic2Entity topic2) { 
        Topic2Entity createdTopic = service2.addAnswer(topic2);
        return ResponseEntity.ok(createdTopic);
    }
}
