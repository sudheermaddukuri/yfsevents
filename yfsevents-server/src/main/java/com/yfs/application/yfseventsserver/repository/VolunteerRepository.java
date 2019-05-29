package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.User;
import com.yfs.application.yfseventsserver.entity.Volunteer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "volunteer", path = "volunteer")
public interface VolunteerRepository extends PagingAndSortingRepository<Volunteer, Long> {

    Volunteer findOneByEmail(String email);
}
