//package com.yfs.application.yfseventsserver.controller;
//
//import com.yfs.application.yfseventsserver.entity.User;
//import com.yfs.application.yfseventsserver.services.UserService;
//import com.yfs.application.yfseventsserver.util.CustomErrorType;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import javax.servlet.http.HttpServletRequest;
//import java.security.Principal;
//import java.util.Base64;
//
//@RestController
//@CrossOrigin
//@RequestMapping("user")
//public class UserController {
//
//
//    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
//
//
//    @Autowired
//    private UserService userService;
//
//    @RequestMapping("/login")
//    public boolean login(@RequestBody User user) {
//        return user.getUsername().equals("user") && user.getPassword().equals("password");
//    }
//
//    @RequestMapping("/user")
//    public Principal user(HttpServletRequest request) {
//        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
//        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
//    }
//
//    @CrossOrigin
//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public ResponseEntity<?> createUser(@RequestBody User newUser) {
//        if (userService.find(newUser.getUsername()) != null) {
//            logger.error("username Already exist " + newUser.getUsername());
//            return new ResponseEntity(
//                new CustomErrorType("user with username " + newUser.getUsername() + "already exist "),
//                HttpStatus.CONFLICT);
//        }
//        newUser.setRole("USER");
//
//        return new ResponseEntity<User>(userService.save(newUser), HttpStatus.CREATED);
//    }
//}
//
