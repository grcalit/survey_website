package com.backend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="Accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String email;
    private String password;

    public Account(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Long getId() {return this.id;}
    public void setId(Long id) {this.id = id;}

    public String getEmail() {return this.email;}
    public void setEmail(String email) {this.email = email;}

    public String getPassword() {return this.password;}
    public void setPassword(String password) {this.password = password;}

    

}
