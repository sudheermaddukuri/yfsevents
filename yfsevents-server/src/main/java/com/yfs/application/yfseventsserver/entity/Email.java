package com.yfs.application.yfseventsserver.entity;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class Email
{
    private String to;
    private List<String> toMultiple;
    private String subject;
    private String text;
    private String bcc;
    private String cc;
    private Long eventId;

    public Email() {
    }

    public Email(String to, List<String> toMultiple, String subject, String text, String bcc, String cc, Long eventId) {
        this.to = to;
        this.toMultiple = toMultiple;
        this.subject = subject;
        this.text = text;
        this.bcc = bcc;
        this.cc = cc;
        this.eventId = eventId;
    }

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public List<String> getToMultiple() {
        return toMultiple;
    }

    public void setToMultiple(List<String> toMultiple) {
        this.toMultiple = toMultiple;
    }


    public String getBcc() {
        return bcc;
    }

    public void setBcc(String bcc) {
        this.bcc = bcc;
    }

    public String getCc() {
        return cc;
    }

    public void setCc(String cc) {
        this.cc = cc;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}
