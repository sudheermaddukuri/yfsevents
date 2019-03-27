package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.entity.VolunteerInterestedArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "volunteerInterestedArea", path = "volunteerInterestedArea")
public interface VolunteerInterestedAreaRepository extends JpaRepository<VolunteerInterestedArea, Long> {
    @Modifying
    @Query("delete from VolunteerInterestedArea a where a.id = ?1")
    void delete(Long id);
}
