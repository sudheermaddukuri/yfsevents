package com.yfs.application.yfseventsserver.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class PartnerNgo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String Name;
    private String description;
    private String branch;
    private String registrationNumber;
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String pincode;

    @Override
    public String toString() {
        return "PartnerNgo{" +
            "id=" + id +
            ", Name='" + Name + '\'' +
            ", description='" + description + '\'' +
            ", branch='" + branch + '\'' +
            ", registrationNumber='" + registrationNumber + '\'' +
            ", addressLine1='" + addressLine1 + '\'' +
            ", addressLine2='" + addressLine2 + '\'' +
            ", city='" + city + '\'' +
            ", state='" + state + '\'' +
            ", pincode='" + pincode + '\'' +
            ", authorizedPerson=" + authorizedPerson +
            '}';
    }

    @OneToMany(mappedBy = "partnerNgo", cascade = CascadeType.ALL)
    private List<AuthorizedPerson> authorizedPerson;

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
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

    public List<AuthorizedPerson> getAuthorizedPerson() {
        return authorizedPerson;
    }

    public void setAuthorizedPerson(List<AuthorizedPerson> authorizedPerson) {
        this.authorizedPerson = authorizedPerson;
    }
}
