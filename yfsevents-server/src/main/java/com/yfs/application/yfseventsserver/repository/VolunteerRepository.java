package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.Volunteer;
import com.yfs.application.yfseventsserver.entity.VolunteersAccepted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "volunteer", path = "volunteer")
public interface VolunteerRepository extends JpaRepository<Volunteer,Long> {

    @Query(value = "SELECT * FROM Volunteer i where  i.email in :emails", nativeQuery = true)
    List<Volunteer> getVolunteersPerEmailIds(@Param("emails") List<String> emails);
}
