package com.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.backend.Entity.Topic1Entity;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class Controller {


    @Autowired
    public Controller() {}

    @PostMapping("/topic1")
    public String submitTopic1(@RequestBody Topic1Entity topic1Entity) { 
        return "I have returned with " + topic1Entity.toString();
    }


    
}
