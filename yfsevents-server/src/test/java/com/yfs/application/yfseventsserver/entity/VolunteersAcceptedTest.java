package com.yfs.application.yfseventsserver.entity;

import java.util.Map;
import java.util.Set;
import java.util.function.Supplier;

public class VolunteersAcceptedTest extends PojoTest<VolunteersAccepted> {

    protected VolunteersAcceptedTest(Map<Class<?>, Supplier<?>> customMappers, Set<String> ignoreFields){
        super(customMappers, ignoreFields);
    }
    public VolunteersAcceptedTest(){
        super(null,null);
    }

    @Override
    protected VolunteersAccepted getInstance(){
        return new VolunteersAccepted();
    }
}
