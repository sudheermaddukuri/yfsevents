package com.yfs.application.yfseventsserver.services;


import com.yfs.application.yfseventsserver.entity.User;
import com.yfs.application.yfseventsserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author kamal berriga
 */
@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String userName) {
        return userRepository.findOneByUsername(userName);
    }

    /*public User find(Long id) {
        return userRepository.findById(id);
    }*/
}
