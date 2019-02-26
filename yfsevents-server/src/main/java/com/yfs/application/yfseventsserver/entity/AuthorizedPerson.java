package com.yfs.application.yfseventsserver.entity;

import javax.persistence.*;
import java.awt.datatransfer.FlavorEvent;

@Entity
public class AuthorizedPerson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "partner_ngo_id")
    private PartnerNgo partnerNgo;

    private String name;
    private String contactDetails;
    private String alternateContactDetails;
    private String email;
    private String alternateEmail;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public PartnerNgo getPartnerNgo() {
        return partnerNgo;
    }

    public void setPartnerNgo(PartnerNgo partnerNgo) {
        this.partnerNgo = partnerNgo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContactDetails() {
        return contactDetails;
    }

    public void setContactDetails(String contactDetails) {
        this.contactDetails = contactDetails;
    }

    public String getAlternateContactDetails() {
        return alternateContactDetails;
    }

    public void setAlternateContactDetails(String alternateContactDetails) {
        this.alternateContactDetails = alternateContactDetails;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAlternateEmail() {
        return alternateEmail;
    }

    public void setAlternateEmail(String alternateEmail) {
        this.alternateEmail = alternateEmail;
    }
}
