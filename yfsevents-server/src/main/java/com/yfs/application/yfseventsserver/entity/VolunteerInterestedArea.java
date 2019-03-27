package com.yfs.application.yfseventsserver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class VolunteerInterestedArea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String interestedArea;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "volunteer_id")
    private Volunteer volunteer;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getInterestedArea() {
        return interestedArea;
    }

    public void setInterestedArea(String interestedArea) {
        this.interestedArea = interestedArea;
    }

    public Volunteer getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }
}
