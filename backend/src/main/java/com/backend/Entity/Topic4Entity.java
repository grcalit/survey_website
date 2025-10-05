package com.backend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="topic4")
public class Topic4Entity {
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private int accountId;

    @Column(nullable = false)
    private String q1;

    @Column(nullable = false)
    private String q2;

    @Column(nullable = false)
    private String q3;

    public Topic4Entity() {}

    public Topic4Entity(int accountId, String q1, String q2, String q3) {
        this.accountId = accountId;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
    }

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public int getAccountId() {return accountId;}
    public void setAccountId(int accountId) {this.accountId = accountId;}

    public String getQ1() {return q1;}
    public void setQ1(String q1) {this.q1 = q1;}

    public String getQ2() {return q2;}
    public void setQ2(String q2) {this.q2 = q2;}

    public String getQ3() {return q3;}
    public void setQ3(String q3) {this.q3 = q3;}

}
