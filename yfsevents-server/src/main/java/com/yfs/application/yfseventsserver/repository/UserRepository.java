package com.yfs.application.yfseventsserver.repository;


import com.yfs.application.yfseventsserver.entity.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * @author kamal berriga
 */
/* this the user  Repository interface  */
@RepositoryRestResource(collectionResourceRel = "user", path = "user")
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

    public User findOneByUsername(String username);
}
