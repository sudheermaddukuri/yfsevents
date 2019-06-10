package com.yfs.application.yfseventsserver.entity;

import java.lang.reflect.Method;

public class GetterSetterPair {

    private Method getter;
    private Method setter;

    public Method getGetter(){
        return getter;
    }

    public Method getSetter(){
        return setter;
    }

    public boolean hasGetterAndSetter(){
        return this.getter != null && this.setter != null;
    }

    public void setGetter(Method getter){
        this.getter = getter;
    }

    public void setSetter(Method setter){
        this.setter = setter;
    }

}
