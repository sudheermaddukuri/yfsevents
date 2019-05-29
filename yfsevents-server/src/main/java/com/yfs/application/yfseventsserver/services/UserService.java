package com.yfs.application.yfseventsserver.services;


import com.yfs.application.yfseventsserver.entity.User;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.repository.UserRepository;
import com.yfs.application.yfseventsserver.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author kamal berriga
 */
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    VolunteerRepository volunteerRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String userName) {
        return userRepository.findOneByUsername(userName);
    }

    public Boolean doesUserExists(String email) {

        User user = userRepository.findOneByUsername(email);

        if(user != null) {
            return true;
        }

        Volunteer volunteer = volunteerRepository.findOneByEmail(email);

        if(volunteer != null) {
            User newUser = new User();
            newUser.setUsername(email);
            newUser.setRole("ROLE_USER");

            newUser.setFullName(volunteer.getFirstName());

            userRepository.save(newUser);

            return true;

        }

        return false;

    }

    /*public User find(Long id) {
        return userRepository.findById(id);
    }*/
}
