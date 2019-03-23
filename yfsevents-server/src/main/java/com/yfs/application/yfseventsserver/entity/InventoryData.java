package com.yfs.application.yfseventsserver.entity;

import com.yfs.application.yfseventsserver.KeyValuePair;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity
public class InventoryData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String eventCategory;
    private String itemName;
    private String comments;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEventCategory() {
        return eventCategory;
    }

    public void setEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public List<KeyValuePair> getEventCategoryList(){
        return EventCategory.getEnumList();
    }


}
enum EventCategory {
        PARTNER_NGO(1, "Partner Ngo"),
        EDUCATION(2, "Education"),
        ENVIRONMENT(3, "Environment"),
        HEALTH(4, "Health"),
        OTHER(5, "Other");

        private final int key;
        private final String value;

        EventCategory(int key, String value) {
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
            return Stream.of(EventCategory.values()).map(o -> new KeyValuePair(o.getKey(), o.getValue())).collect(Collectors.toList());
        }
}

