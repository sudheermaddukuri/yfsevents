package com.yfs.application.yfseventsserver.entity;

import java.util.Map;
import java.util.Set;
import java.util.function.Supplier;

public class PartnerNgoTest extends PojoTest<PartnerNgo>{

    protected PartnerNgoTest(Map<Class<?>, Supplier<?>> customMappers, Set<String> ignoreFields){
        super(customMappers, ignoreFields);
    }
    public PartnerNgoTest(){
        super(null,null);
    }

    @Override
    protected PartnerNgo getInstance(){
        return new PartnerNgo();
    }
}
