package com.yfs.application.yfseventsserver.entity;

import java.util.Map;
import java.util.Set;
import java.util.function.Supplier;

public class VolunteerPreferredTimeTest extends PojoTest<VolunteerPreferredTime> {

    protected VolunteerPreferredTimeTest(Map<Class<?>, Supplier<?>> customMappers, Set<String> ignoreFields){
        super(customMappers, ignoreFields);
    }
    public VolunteerPreferredTimeTest(){
        super(null,null);
    }

    @Override
    protected VolunteerPreferredTime getInstance(){
        return new VolunteerPreferredTime();
    }
}
