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

    private String mouID;
    private String mouStatus;
    private String mouName;
    private String noOfEvents;
    private String fromDate;
    private String toDate;
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

    public String getMouID() {
        return mouID;
    }

    public void setMouID(String mouID) {
        this.mouID = mouID;
    }

    public String getMouStatus() {
        return mouStatus;
    }

    public void setMouStatus(String mouStatus) {
        this.mouStatus = mouStatus;
    }

    public String getMouName() {
        return mouName;
    }

    public void setMouName(String mouName) {
        this.mouName = mouName;
    }

    public String getNoOfEvents() {
        return noOfEvents;
    }

    public void setNoOfEvents(String noOfEvents) {
        this.noOfEvents = noOfEvents;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }
}
