package com.backend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="Accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String email;
    private String password;

    public Account() {};

    public Account(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public Integer getId() {return id;}
    public void setId(Integer id) {this.id = id;}

    public String getEmail() {return email;}
    public void setEmail(String email) {this.email = email;}

    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}

    

}
