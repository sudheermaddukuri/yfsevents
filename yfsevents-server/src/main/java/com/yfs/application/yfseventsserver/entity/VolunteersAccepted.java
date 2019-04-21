package com.yfs.application.yfseventsserver.entity;


import javax.persistence.*;

@Entity
public class VolunteersAccepted {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long eventId;
    private String mailId;
    private boolean accepted;

    @Enumerated(EnumType.STRING)
    private EmailNotificationStatus status;

    public static enum EmailNotificationStatus{
        NOT_SENT,
        SENT,
        FAILED
    }

    public VolunteersAccepted() {
    }

    public VolunteersAccepted(long eventId, String mailId, boolean accepted, EmailNotificationStatus status) {
        this.eventId = eventId;
        this.mailId = mailId;
        this.accepted = accepted;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getEventId() {
        return eventId;
    }

    public void setEventId(long eventId) {
        this.eventId = eventId;
    }

    public String getMailId() {
        return mailId;
    }

    public void setMailId(String mailId) {
        this.mailId = mailId;
    }

    public boolean isAccepted() {
        return accepted;
    }

    public void setAccepted(boolean accepted) {
        this.accepted = accepted;
    }

    public EmailNotificationStatus getStatus() {
        return status;
    }

    public void setStatus(EmailNotificationStatus status) {
        this.status = status;
    }
}
