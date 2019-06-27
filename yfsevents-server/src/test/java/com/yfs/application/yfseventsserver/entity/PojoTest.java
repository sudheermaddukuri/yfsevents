//package com.yfs.application.yfseventsserver.entity;
//
//import com.google.common.collect.ImmutableMap;
//
//import com.google.common.collect.ImmutableMap.Builder;
//import org.junit.Test;
//
//
//import java.lang.reflect.Field;
//import java.lang.reflect.InvocationTargetException;
//import java.lang.reflect.Method;
//import java.math.BigDecimal;
//import java.util.*;
//import java.util.Map.Entry;
//import java.util.function.Supplier;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertSame;
//
//public abstract class PojoTest<T> {
//
//    private static final ImmutableMap<Class<?> ,Supplier<?>> DEFAULT_MAPPERS;
//
//    static{
//        final Builder<Class<?>,Supplier <?>> mapperBuilder = ImmutableMap.builder();
//        mapperBuilder.put(int.class ,() -> 0);
//        mapperBuilder.put(double.class , () -> 0.0d);
//        mapperBuilder.put(float.class ,() -> 0.0f);
//        mapperBuilder.put(long.class , () -> 0L);
//        mapperBuilder.put(boolean.class ,() -> true);
//        mapperBuilder.put(short.class , () -> (short) 0);
//        mapperBuilder.put(byte.class ,() -> (byte) 0);
//        mapperBuilder.put(char.class , () -> (char) 0);
//
//        mapperBuilder.put(Integer.class ,() -> (0));
//        mapperBuilder.put(Double.class , () -> (0.0));
//        mapperBuilder.put(Float.class ,() -> (0.0f));
//        mapperBuilder.put(Long.class , () -> 0L);
//        mapperBuilder.put(Boolean.class ,() -> Boolean.TRUE);
//        mapperBuilder.put(Short.class , () -> ((short)0));
//        mapperBuilder.put(Byte.class ,() -> ((byte)0));
//        mapperBuilder.put(Character.class , () -> ((char)0));
//
//        mapperBuilder.put(BigDecimal.class ,() -> BigDecimal.ONE);
//        mapperBuilder.put(Date.class , Date::new);
//
//        mapperBuilder.put(Set.class , Collections::emptySet);
//        mapperBuilder.put(SortedSet.class , Collections::emptySortedSet);
//        mapperBuilder.put(List.class , Collections::emptyList);
//        mapperBuilder.put(Map.class , Collections::emptyMap);
//        mapperBuilder.put(SortedMap.class , Collections::emptySortedMap);
//
//        DEFAULT_MAPPERS = mapperBuilder.build();
//
//    }
//
//    private final Set<String> ignoredGetFields;
//
//    private final ImmutableMap<Class<?> , Supplier<?>> mappers;
//
//    protected PojoTest(Map<Class<?>, Supplier<?>> customMappers , Set<String> ignoreFields){
//        this.ignoredGetFields = new HashSet<>();
//        if(ignoreFields != null){
//            this.ignoredGetFields.addAll(ignoreFields);
//        }
//        this.ignoredGetFields.add("getClass");
//
//        if(customMappers == null){
//            this.mappers = DEFAULT_MAPPERS;
//        }else{
//            final Builder<Class<?>, Supplier<?>> builder = ImmutableMap.builder();
//            builder.putAll(customMappers);
//            builder.putAll(DEFAULT_MAPPERS);
//            this.mappers = builder.build();
//        }
//    }
//
//    protected abstract T getInstance();
//
//    @Test
//    public void toStringTest(){
//        final T instance = getInstance();
//        instance.toString();
//    }
//
//
//    @Test
//    public void testGettersAndSetters() throws Exception{
//        final SortedMap<String, GetterSetterPair> getterSetterMapping = new TreeMap<>();
//        final T instance = getInstance();
//        for(final Method method : instance.getClass().getMethods()){
//            final String methodName = method.getName();
//
//            if(this.ignoredGetFields.contains(methodName)){
//                continue;
//            }
//            String objectName;
//            if(methodName.startsWith("get") && method.getParameters().length == 0){
//                objectName = methodName.substring("get".length());
//
//                GetterSetterPair getterSetterPair = getterSetterMapping.computeIfAbsent(objectName,
//                    k -> new GetterSetterPair());
//                getterSetterPair.setGetter(method);
//
//            }else if(methodName.startsWith("set") && method.getParameters().length ==1){
//                objectName = methodName.substring("set".length());
//                GetterSetterPair getterSetterPair = getterSetterMapping.computeIfAbsent(objectName,
//                    k ->new GetterSetterPair());
//                getterSetterPair.setSetter(method);
//;
//            }else if(methodName.startsWith("is") && method.getParameters().length == 0){
//                objectName = methodName.substring("is".length());
//                GetterSetterPair getterSetterPair = getterSetterMapping.computeIfAbsent(objectName,
//                    k -> new GetterSetterPair());
//                getterSetterPair.setGetter(method);
//            }
//        }
//
//        for(final Entry<String ,GetterSetterPair> entry : getterSetterMapping.entrySet()){
//            final GetterSetterPair pair = entry.getValue();
//
//            final String objectName = entry.getKey();
//            final String fieldName = objectName.substring(0,1).toLowerCase() + objectName.substring(1);
//
//            if(pair.hasGetterAndSetter()){
//                final Class<?> parameterType = pair.getSetter().getParameterTypes() [0];
//                final Object newObject = createObject(fieldName , parameterType);
//                pair.getSetter().invoke(instance,newObject);
//                callGetter(fieldName,pair.getGetter(),instance,newObject);
//            }else if (pair.getGetter()!=null){
//                final Object newObject = createObject(fieldName , pair.getGetter().getReturnType());
//                final Field field = instance.getClass().getDeclaredField(fieldName);
//                field.setAccessible(true);
//                field.set(instance,newObject);
//
//                callGetter(fieldName,pair.getGetter(),instance,newObject);
//            }
//
//
//
//        }
//    }
//
//    private void callGetter(String fieldName , Method getter, T instance,Object expected) throws InvocationTargetException, IllegalAccessException {
//        final Object getResult = getter.invoke(instance);
//
//        if(getter.getReturnType().isPrimitive()){
//            assertEquals(fieldName + " is different", expected, getResult);
//        }
//        else{
//            assertSame(fieldName + " is different", expected, getResult);
//        }
//    }
//
//    private Object createObject(String fieldName, Class<?> clazz){
//        final Supplier<?> supplier = this.mappers.get(clazz);
//        if(supplier!=null){
//            return supplier.get();
//        }
//        if(clazz.isEnum()){
//            return clazz.getEnumConstants() [0];
//        }
//
//        try{
//            return clazz.newInstance();
//        } catch (IllegalAccessException | InstantiationException e) {
//            throw new RuntimeException("Unable to create objects for field '" + fieldName + "'.", e);
//        }
//    }
//
//}
