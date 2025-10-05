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
    private Service3 service3;
    private Service4 service4;
    private AccountService accountService;


    @Autowired
    public Controller(Service1 service1, Service2 service2, Service3 service3, Service4 service4, AccountService accountService) {
        this.service1 = service1;
        this.service2 = service2;
        this.service3 = service3;
        this.service4 = service4;
        this.accountService = accountService;
    }

    @GetMapping("/topic1/{id}")
    public ResponseEntity<Topic1Entity> getTopic1(@PathVariable int id) {
        Topic1Entity foundTopic = service1.getAnswer(id);
        if (foundTopic == null) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok(foundTopic);
    }

    @PutMapping("/topic1")
    public ResponseEntity<Topic1Entity> editTopic(@RequestBody Topic1Entity topic1) {
        Topic1Entity editedTopic = service1.addAnswer(topic1);
        if (editedTopic == null) {
            return ResponseEntity.status(400).body(topic1);
        }
        return ResponseEntity.ok(editedTopic);
    }

    @DeleteMapping("/topic1/{id}")
    public ResponseEntity<Integer> deleteTopic1(@PathVariable int id) {
        Integer deletedId = service1.deleteAnswer(id);
        if (deletedId == null) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.ok(deletedId);
    }

    @PutMapping("/topic2")
    public ResponseEntity<Topic2Entity> editTopic(@RequestBody Topic2Entity topic2) {
        Topic2Entity editedTopic = service2.addAnswer(topic2);
        if (editedTopic == null) {
            return ResponseEntity.status(400).body(topic2);
        }
        return ResponseEntity.ok(editedTopic);
    }

    @DeleteMapping("/topic2/{id}")
    public ResponseEntity<Integer> deleteTopic2(@PathVariable int id) {
        Integer deletedId = service2.deleteAnswer(id);
        if (deletedId == null) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.ok(deletedId);
    }

    @GetMapping("/topic2/{id}")
    public ResponseEntity<Topic2Entity> getTopic2(@PathVariable int id) {
        Topic2Entity foundTopic = service2.getAnswer(id);
        if (foundTopic == null) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok(foundTopic);
    }

    @GetMapping("/topic3/{id}")
    public ResponseEntity<Topic3Entity> getTopic3(@PathVariable int id) {
        Topic3Entity foundTopic = service3.getAnswer(id);
        if (foundTopic == null) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok(foundTopic);
    }

    @PutMapping("/topic3")
    public ResponseEntity<Topic3Entity> editTopic(@RequestBody Topic3Entity topic3) {
        Topic3Entity editedTopic = service3.addAnswer(topic3);
        if (editedTopic == null) {
            return ResponseEntity.status(400).body(topic3);
        }
        return ResponseEntity.ok(editedTopic);
    }

    @DeleteMapping("/topic3/{id}")
    public ResponseEntity<Integer> deleteTopic3(@PathVariable int id) {
        Integer deletedId = service3.deleteAnswer(id);
        if (deletedId == null) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.ok(deletedId);
    }

    @GetMapping("/topic4/{id}")
    public ResponseEntity<Topic4Entity> getTopic4(@PathVariable int id) {
        Topic4Entity foundTopic = service4.getAnswer(id);
        if (foundTopic == null) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.ok(foundTopic);
    }

    @PutMapping("/topic4")
    public ResponseEntity<Topic4Entity> editTopic(@RequestBody Topic4Entity topic4) {
        Topic4Entity editedTopic = service4.addAnswer(topic4);
        if (editedTopic == null) {
            return ResponseEntity.status(400).body(topic4);
        }
        return ResponseEntity.ok(editedTopic);
    }

    @DeleteMapping("/topic4/{id}")
    public ResponseEntity<Integer> deleteTopic4(@PathVariable int id) {
        Integer deletedId = service4.deleteAnswer(id);
        if (deletedId == null) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.ok(deletedId);
    }

    @PostMapping("/account")
    public ResponseEntity<Account> addAccount(@RequestBody Account account) {
        Account createdAccount = accountService.addAccount(account);
        if (createdAccount == null) {
            return ResponseEntity.status(400).body(account);
        }
        return ResponseEntity.ok(account);
    }

    @GetMapping("/account/{id}")
    public ResponseEntity<Account> getAccount(@PathVariable int id) {
        Account foundAccount = accountService.getAccount(id);
        if (foundAccount == null) {
            return ResponseEntity.status(400).body(foundAccount);
        }
        return ResponseEntity.ok(foundAccount);
    }

    @PatchMapping("/account")
    public ResponseEntity<Account> editAccount(@RequestBody Account account) {
        Account editedAccount = accountService.editAccount(account);
        if (editedAccount == null) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.ok(editedAccount);
    }

    @DeleteMapping("/account/{id}")
    public ResponseEntity<Integer> deleteAccount(@PathVariable int id) {
        Integer deletedId = accountService.deleteAccount(id);
        if (deletedId == null) {
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.ok(deletedId);
    }

}
