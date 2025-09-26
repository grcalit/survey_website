package com.backend.Entity;

import jakarta.persistence.*;

@Entity
@Table(name="topic1")
public class Topic1Entity {
    @Id 
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private int questionId;
    private String answer;

    public Topic1Entity() {}

    public Topic1Entity(int questionId, String answer) {
        this.questionId = questionId;
        this.answer = answer;
    }

    public Long getId() {return id;}
    public void setId(Long id) {this.id = id;}

    public int getQuestionId() {return questionId;}
    public void setQuestionId(int questionId) {this.questionId = questionId;}

    public String getAnswer() {return answer;}
    public void setAnswer(String answer) {this.answer = answer;}

}
