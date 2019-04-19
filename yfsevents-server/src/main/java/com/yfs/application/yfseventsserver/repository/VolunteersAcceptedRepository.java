package com.yfs.application.yfseventsserver.repository;

import com.yfs.application.yfseventsserver.entity.InventoryData;
import com.yfs.application.yfseventsserver.entity.VolunteersAccepted;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import javax.transaction.Transactional;
import java.util.List;


@RepositoryRestResource(collectionResourceRel = "volunteersAccepted", path = "volunteersAccepted")
public interface VolunteersAcceptedRepository extends JpaRepository<VolunteersAccepted,Long> {

//    @Query("SELECT Count(*) FROM VolunteersAccepted i where i.eventId = :eventId AND i.accepted=false")
//    int getAccepteVolunteersCoount(@Param("eventId") Long eventId);

    @Query("SELECT Count(*) FROM VolunteersAccepted i where i.mailId= :emailId AND i.eventId= :eventId")
    int checkEmailIdEventId(@Param("emailId") String emailId , @Param("eventId") Long eventId);

    @Transactional
    @Modifying
    @Query("Update VolunteersAccepted i SET i.accepted=true where i.mailId= :emailId AND i.eventId=:eventId")
    void updateAccepted(@Param("emailId") String emailId , @Param("eventId") Long eventId);

    @Query("SELECT Count(*) FROM VolunteersAccepted i where  i.eventId=:eventId AND i.accepted=true")
    Long getCountOfAccepteVolunteers(@Param("eventId") Long eventId);


    @Query("SELECT i.mailId FROM VolunteersAccepted i where  i.eventId=:eventId AND i.accepted=true")
    List<String> getEmailsOfAcceptedVolunteers(@Param("eventId") Long eventId);

    @Query("SELECT Count(*) FROM VolunteersAccepted i where  i.eventId=:eventId AND i.accepted=false")
    Long getCountOfNotAccepteVolunteers(@Param("eventId") Long eventId);


    @Query("SELECT i.mailId FROM VolunteersAccepted i where  i.eventId=:eventId AND i.accepted=false")
    List<String> getEmailsOfNotAcceptedVolunteers(@Param("eventId") Long eventId);

    @Query("SELECT Count(*) FROM VolunteersAccepted i where  i.eventId=:eventId ")
    Long getCountOfVolunteers(@Param("eventId") Long eventId);


    @Query("SELECT i.mailId FROM VolunteersAccepted i where  i.eventId=:eventId ")
    List<String> getEmailsOfVolunteers(@Param("eventId") Long eventId);

    @Query(value = "Select * from VOLUNTEERS_ACCEPTED where STATUS='NOT_SENT'", nativeQuery = true)
    List<VolunteersAccepted> getAllByEmailNotSent();


}
