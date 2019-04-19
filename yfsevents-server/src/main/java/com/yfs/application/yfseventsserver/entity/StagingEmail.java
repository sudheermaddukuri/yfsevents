package com.yfs.application.yfseventsserver.entity;

import com.yfs.application.yfseventsserver.model.EmailStatus;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "STAGING_EMAIL")
public class StagingEmail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "id_event")
    private long eventId;

    @Column(name = "tx_payload")
    @Lob
    private String payload;

    @Column(name = "tx_status")
    @Enumerated(EnumType.STRING)
    private EmailStatus status;

    @Column(name = "nm_retry_count")
    private int retryCount;

    @Column(name = "dt_created")
    private Date createdDate;

    @Column(name = "dt_updated")
    private Date updatedDate;

    @Column(name = "id_created_by")
    private String createdBy;

    @Column(name = "id_updated_by")
    private String updatedBy;

    private String reason;

    public StagingEmail() {
    }

    public StagingEmail(long eventId, String payload, EmailStatus status, int retryCount, Date createdDate, Date updatedDate, String createdBy, String updatedBy) {
        this.eventId = eventId;
        this.payload = payload;
        this.status = status;
        this.retryCount = retryCount;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.createdBy = createdBy;
        this.updatedBy = updatedBy;
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

    public String getPayload() {
        return payload;
    }

    public void setPayload(String payload) {
        this.payload = payload;
    }

    public EmailStatus getStatus() {
        return status;
    }

    public void setStatus(EmailStatus status) {
        this.status = status;
    }

    public int getRetryCount() {
        return retryCount;
    }

    public void setRetryCount(int retryCount) {
        this.retryCount = retryCount;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(Date updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
