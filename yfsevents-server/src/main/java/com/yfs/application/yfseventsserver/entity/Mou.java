package com.yfs.application.yfseventsserver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Mou {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mou_id_id")
    private  CollegeRegistration collegeRegistration;

    private String mouId;
    private String mouName;
    private String noOfEventsAgreed;
    private String validFrom;
    private String validTo;
    private String comments;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public CollegeRegistration getCollegeRegistration() {
        return collegeRegistration;
    }

    public void setCollegeRegistration(CollegeRegistration collegeRegistration) {
        this.collegeRegistration = collegeRegistration;
    }

    public String getMouId() {
        return mouId;
    }

    public void setMouId(String mouId) {
        this.mouId = mouId;
    }

    public String getMouName() {
        return mouName;
    }

    public void setMouName(String mouName) {
        this.mouName = mouName;
    }

    public String getNoOfEventsAgreed() {
        return noOfEventsAgreed;
    }

    public void setNoOfEventsAgreed(String noOfEventsAgreed) {
        this.noOfEventsAgreed = noOfEventsAgreed;
    }

    public String getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(String validFrom) {
        this.validFrom = validFrom;
    }

    public String getValidTo() {
        return validTo;
    }

    public void setValidTo(String validTo) {
        this.validTo = validTo;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
