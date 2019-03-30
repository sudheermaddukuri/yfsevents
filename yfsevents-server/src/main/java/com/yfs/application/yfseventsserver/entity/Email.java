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
    private Event event;

    public List<String> getToMultiple() {
        return toMultiple;
    }

    public void setToMultiple(List<String> toMultiple) {
        this.toMultiple = toMultiple;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
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
