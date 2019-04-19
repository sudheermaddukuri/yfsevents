package com.yfs.application.yfseventsserver.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfiguration {

    @Bean
    public ObjectMapper getObjectMapper(){
        return new ObjectMapper();
    }
}
