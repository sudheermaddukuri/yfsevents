package com.yfs.application.yfseventsserver.entity;

import java.util.List;

public class BulkVolunteer {

    Volunteer volunteer;
    List<String> errors;

    public Volunteer getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(Volunteer volunteer) {
        this.volunteer = volunteer;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}
