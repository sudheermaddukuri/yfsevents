//package com.yfs.application.yfseventsserver;
//
//import com.yfs.application.yfseventsserver.services.AppUserDetailsService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Configurable;
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//@Configurable
//@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
//
//    @Autowired
//    AppUserDetailsService appUserDetailsService;
//
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }
//
//    // This method is for overriding the default AuthenticationManagerBuilder.
//    // We can specify how the user details are kept in the application. It may
//    // be in a database, LDAP or in memory.
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(appUserDetailsService).passwordEncoder(passwordEncoder());
//    }
//
//
//    @Override
//    public void configure(WebSecurity webSecurity) {
//        webSecurity.ignoring().antMatchers("/h2-console/**");
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http.cors().and()
//            // starts authorizing configurations
//            .authorizeRequests()
//            // ignoring the guest's urls "
//            .antMatchers("/user/register", "/user/login", "/logout", "/h2-console/**").permitAll()
//            // authenticate all remaining URLS
//            .anyRequest().fullyAuthenticated().and()
//            /* "/logout" will log the user out by invalidating the HTTP Session,
//             * cleaning up any {link rememberMe()} authentication that was configured, */
//            .logout()
//            .permitAll()
//            .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "POST"))
//            .and()
//            // enabling the basic authentication
//            .httpBasic().and()
//            // configuring the session on the server
//            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).and()
//            // disabling the CSRF - Cross Site Request Forgery
//            .csrf().disable();
//
//
//        /*http.authorizeRequests()
//            .anyRequest().authenticated()//all other urls can be access by any authenticated role
//            .and().httpBasic() //enable form login instead of basic login
//            .and().csrf().ignoringAntMatchers("/**")//don't apply CSRF protection to /h2-console
//            .and().headers().frameOptions().sameOrigin();//allow use of frame to same origin urls*/
//    }
//}
//
//
