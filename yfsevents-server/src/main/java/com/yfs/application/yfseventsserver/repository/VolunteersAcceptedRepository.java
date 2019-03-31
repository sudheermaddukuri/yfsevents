package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.InventoryData;
import com.yfs.application.yfseventsserver.entity.VolunteersAccepted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "volunteersAccepted", path = "volunteersAccepted")
public interface VolunteersAcceptedRepository extends JpaRepository<VolunteersAccepted,Long> {

//    @Query("SELECT Count(*) FROM VolunteersAccepted i where i.eventId = :eventId AND i.accepted=false")
//    int getAccepteVolunteersCoount(@Param("eventId") Long eventId);
}
