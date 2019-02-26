package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.entity.VolunteerPreferredTime;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "volunteerPreferredTime", path = "volunteerPreferredTime")
public interface VolunteerPreferredTimeRepository extends PagingAndSortingRepository<VolunteerPreferredTime, Long> {
}
