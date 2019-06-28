package com.yfs.application.yfseventsserver.services;


import com.yfs.application.yfseventsserver.controller.EmailController;
import com.yfs.application.yfseventsserver.entity.User;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.repository.UserRepository;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * @author kamal berriga
 */
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    VolunteerRepository volunteerRepository;

    @Autowired
    EmailController emailController;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String userName) {
        return userRepository.findOneByUsername(userName);
    }

    public Map preResetPassword(String email) {


        Map output = new HashMap();

        output.put("mailsent", false);

        boolean userExists = false;

        User user = userRepository.findOneByUsername(email);

        if(user != null) {
            userExists =  true;
        }

        if(!userExists) {

            List<Volunteer> volunteers = volunteerRepository.findByEmail(email);

            if(volunteers != null || !volunteers.isEmpty()) {
                Volunteer  volunteer = volunteers.get(0);
                user = new User();
                user.setUsername(email);
                user.setRole("ROLE_USER");

                user.setFullName(volunteer.getFirstName());
                userExists =  true;


            }

        }

        if(userExists) {

            user.setResetToken(UUID.randomUUID().toString());
            user = userRepository.save(user);


            output.put("mailsent", emailController.sendMailController(user.getUsername(),"", "", "Youth For Seva password reset token",
                "Token to reset password : " + user.getResetToken() ));


        }

        output.put("userExists", userExists);

        return output;

    }

    public Map resetPassword(User resetUser) {


        Map output = new HashMap();

        output.put("reset", false);


        User user = userRepository.findOneByUsernameAndResetToken(resetUser.getUsername(), resetUser.getResetToken());

        if(user != null) {
            output.put("reset", true);
            user.setPassword("{noop}" + resetUser.getPassword());
            userRepository.save(user);
        }


        return output;

    }

    /*public User find(Long id) {
        return userRepository.findById(id);
    }*/
}
