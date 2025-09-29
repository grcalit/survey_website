package com.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.backend.Entity.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")

public class Controller {


    @Autowired
    public Controller() {}

    @PostMapping("/topic1")
    public String submitTopic1(@RequestBody String ans) { 
        return "From topic 1, I have returned with " + ans;
    }

    @PostMapping("/topic2")
    public String submitTopic2(@RequestBody String ans) { 
        return "From topic 2, I have returned with " + ans;
    }


    
}
