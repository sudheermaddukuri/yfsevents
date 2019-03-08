package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.CollegeRegistration;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "collegeregistration",path = "collegeregistration")
public interface CollegeRegistrationRepository extends PagingAndSortingRepository<CollegeRegistration,Long> {

}
