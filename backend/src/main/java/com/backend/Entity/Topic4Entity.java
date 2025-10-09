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

    @Column(nullable = false)
    private String q4;

    @Column(nullable = false)
    private String q5;

    public Topic4Entity() {}

    public Topic4Entity(int accountId, String q1, String q2, String q3, String q4, String q5) {
        this.accountId = accountId;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
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

    public String getQ4() {return q4;}
    public void setQ4(String q4) {this.q4 = q4;}

    public String getQ5() {return q5;}
    public void setQ5(String q5) {this.q5 = q5;}

}
