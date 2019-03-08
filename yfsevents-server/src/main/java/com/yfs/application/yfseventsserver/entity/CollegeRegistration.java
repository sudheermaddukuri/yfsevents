package com.yfs.application.yfseventsserver.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class CollegeRegistration {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String registrationId;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String pincode;


    @OneToMany(mappedBy = "collegeRegistration",cascade = CascadeType.ALL)
    private List<Mou> mouDetails;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegistrationId() {
        return registrationId;
    }

    public void setRegistrationId(String registrationId) {
        this.registrationId = registrationId;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getAddressLine2() {
        return addressLine2;
    }

    public void setAddressLine2(String addressLine2) {
        this.addressLine2 = addressLine2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getPincode() {
        return pincode;
    }

    public void setPincode(String pincode) {
        this.pincode = pincode;
    }

    public List<Mou> getMouDetails() {
        return mouDetails;
    }

    public void setMouDetails(List<Mou> mouDetails) {
        this.mouDetails = mouDetails;
    }
}
