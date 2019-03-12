package com.yfs.application.yfseventsserver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
            .anyRequest().authenticated()//all other urls can be access by any authenticated role
            .and().httpBasic() //enable form login instead of basic login
            .and().csrf().ignoringAntMatchers("/**")//don't apply CSRF protection to /h2-console
            .and().headers().frameOptions().sameOrigin();//allow use of frame to same origin urls
    }
}

