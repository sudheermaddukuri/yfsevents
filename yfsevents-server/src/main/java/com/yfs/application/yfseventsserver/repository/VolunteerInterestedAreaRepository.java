package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.entity.VolunteerInterestedArea;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "volunteerInterestedArea", path = "volunteerInterestedArea")
public interface VolunteerInterestedAreaRepository extends PagingAndSortingRepository<VolunteerInterestedArea, Long> {
}
