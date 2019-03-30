package com.yfs.application.yfseventsserver.entity;

import com.yfs.application.yfseventsserver.KeyValuePair;
import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
public class Volunteer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String firstName;
    private String lastName;
    private String phonePrefix;
    private String phoneNumber;
    private String alternatePhonePrefix;
    private String alternatePhoneNumber;
    private String email;
    private String alternateEmail;
    private String locality;
    private String city;
    private String state;
    private String pincode;

    @OneToMany(mappedBy = "volunteer", cascade = CascadeType.ALL)
    private List<VolunteerPreferredTime> preferredTimes;

    @OneToMany(mappedBy = "volunteer", cascade = CascadeType.ALL)
    private List<VolunteerInterestedArea> interestedAreas;

    public Long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhonePrefix() {
        return phonePrefix;
    }

    public void setPhonePrefix(String phonePrefix) {
        this.phonePrefix = phonePrefix;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAlternatePhonePrefix() {
        return alternatePhonePrefix;
    }

    public void setAlternatePhonePrefix(String alternatePhonePrefix) {
        this.alternatePhonePrefix = alternatePhonePrefix;
    }

    public String getAlternatePhoneNumber() {
        return alternatePhoneNumber;
    }

    public void setAlternatePhoneNumber(String alternatePhoneNumber) {
        this.alternatePhoneNumber = alternatePhoneNumber;
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

    public String getLocality() {
        return locality;
    }

    public void setLocality(String locality) {
        this.locality = locality;
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

    public List<VolunteerPreferredTime> getPreferredTimes() {
        return preferredTimes;
    }

    public void setPreferredTimes(List<VolunteerPreferredTime> preferredTimes) {
        this.preferredTimes = preferredTimes;
    }

    public List<VolunteerInterestedArea> getInterestedAreas() {
        return interestedAreas;
    }

    public void setInterstedAreas(List<VolunteerInterestedArea> interestedAreas) {
        this.interestedAreas = interestedAreas;
    }
    public List<KeyValuePair> getInterestedAreasCategoryList(){
        return InterestedAreasCategory.getEnumList();
    }

}
enum InterestedAreasCategory {

    EDUCATION(1, "Education"),
    ENVIRONMENT(2, "Environment"),
    HEALTH(3, "Health");


    private final int key;
    private final String value;

   InterestedAreasCategory(int key, String value) {
        this.key = key;
        this.value = value;
    }

    private String getValue() {
        return this.value;
    }

    private int getKey() {
        return this.key;
    }

    public static List<KeyValuePair> getEnumList() {
        return Stream.of(InterestedAreasCategory.values()).map(o -> new KeyValuePair(o.getKey(), o.getValue())).collect(Collectors.toList());
    }

}

