package com.yfs.application.yfseventsserver.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class AuthorizedPerson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_ngo_id")
    private PartnerNgo partnerNgo;

    private String name;
    private String contact1;
    private String contact2;
    private String email1;
    private String email2;

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

    public String getContact1() {
        return contact1;
    }

    public void setContact1(String contact1) {
        this.contact1 = contact1;
    }

    public String getContact2() {
        return contact2;
    }

    public void setContact2(String contact2) {
        this.contact2 = contact2;
    }

    public String getEmail1() {
        return email1;
    }

    public void setEmail1(String email1) {
        this.email1 = email1;
    }

    public String getEmail2() {
        return email2;
    }

    public void setEmail2(String email2) {
        this.email2 = email2;
    }
}
