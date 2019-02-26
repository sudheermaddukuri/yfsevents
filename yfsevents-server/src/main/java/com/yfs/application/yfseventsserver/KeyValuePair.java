package com.yfs.application.yfseventsserver;
public class KeyValuePair {
    private final Integer key;
    private final String value;

    public Integer getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }

    public KeyValuePair(Integer key, String value)
    {
        this.key=key;
        this.value=value;
    }

    @Override
    public String toString(){
        return "KeyValuePair [key=" + key + ", value=" + value +"]";
    }

}

