package com.yfs.application.yfseventsserver.entity;

import java.util.Map;
import java.util.Set;
import java.util.function.Supplier;

public class AuthorizedPersonTest extends PojoTest<AuthorizedPerson>{
    protected AuthorizedPersonTest(Map<Class<?>, Supplier<?>> customMappers, Set<String> ignoreFields){
        super(customMappers, ignoreFields);
    }
    public AuthorizedPersonTest(){
        super(null,null);
    }

    @Override
    protected AuthorizedPerson getInstance(){
        return new AuthorizedPerson();
    }
}
