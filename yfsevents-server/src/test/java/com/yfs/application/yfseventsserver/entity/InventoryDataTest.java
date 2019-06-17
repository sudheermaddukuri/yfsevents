package com.yfs.application.yfseventsserver.entity;



import java.util.Map;
import java.util.Set;
import java.util.function.Supplier;

public class InventoryDataTest extends PojoTest<InventoryData> {

    protected InventoryDataTest(Map<Class<?>, Supplier<?>> customMappers, Set<String> ignoreFields){
        super(customMappers, ignoreFields);
    }
    public InventoryDataTest(){
        super(null,null);
    }

    @Override
    protected InventoryData getInstance(){
        return new InventoryData();
    }
}
