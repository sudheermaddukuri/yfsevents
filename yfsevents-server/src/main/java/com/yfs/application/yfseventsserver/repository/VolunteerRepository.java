package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "volunteer", path = "volunteer")
public interface VolunteerRepository extends PagingAndSortingRepository<Volunteer, Long> {

    @Query("SELECT v.email FROM Volunteer v where v.email = :email")
    List<Object> findVolunteerWithEmail(@Param("email") String email);
}
