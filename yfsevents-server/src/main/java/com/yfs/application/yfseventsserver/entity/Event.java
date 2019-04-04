package com.yfs.application.yfseventsserver.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String eventName;
    private String eventAction;

    public Date getEventfromTime() {
        return eventfromTime;
    }

    public void setEventfromTime(Date eventfromTime) {
        this.eventfromTime = eventfromTime;
    }

    private Date eventfromTime;

    public Date getEventtoTime() {
        return eventtoTime;
    }

    public void setEventtoTime(Date eventtoTime) {
        this.eventtoTime = eventtoTime;
    }

    private Date eventtoTime;
    private String ngoName;
    private String eventCategory;
    private String recurringEvent;
    private String volunteers;

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    private String college;

    public String getComments() {
        return Comments;
    }

    public void setComments(String comments) {
        Comments = comments;
    }

    private String Comments;

    public List<Date> getEventDuration() {
        return eventDuration;
    }

    public void setEventDuration(List<Date> eventDuration) {
        this.eventDuration = eventDuration;
    }

    @ElementCollection
    private List<Date> eventDuration;



    @ElementCollection
    private List<String> eventItems;

    public List<String> getEventItems() {
        return eventItems;
    }

    public void setEventItems(List<String> eventItems) {
        this.eventItems = eventItems;
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }


    public String getEventAction() {
        return eventAction;
    }

    public void setEventAction(String eventAction) {
        this.eventAction = eventAction;
    }





    public String getNgoName() {
        return ngoName;
    }

    public void setNgoName(String ngoName) {
        this.ngoName = ngoName;
    }

    public String getEventCategory() {
        return eventCategory;
    }

    public void setEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
    }

    public String getRecurringEvent() {
        return recurringEvent;
    }

    public void setRecurringEvent(String recurringEvent) {
        this.recurringEvent = recurringEvent;
    }

    public String getVolunteers() {
        return volunteers;
    }

    public void setVolunteers(String volunteers) {
        this.volunteers = volunteers;
    }
}
